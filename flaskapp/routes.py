from werkzeug.security import generate_password_hash, check_password_hash
from flask import render_template, request, jsonify, make_response
from flaskapp.models import User, Todo
from flaskapp import app, db
from functools import wraps
import datetime
import uuid
import jwt


def token_required(f):
    @wraps(f)
    def decorator(*args, **kwargs):
        token = None
        if 'x-access-tokens' in request.headers:
            token = request.headers['x-access-tokens']
        if not token:
            return jsonify({'message': 'a valid token is missing'})
        try:
            data = jwt.decode(
                token, app.config['SECRET_KEY'], algorithms=["HS256"])
            current_user = User.query.filter_by(
                public_id=data['public_id']).first()
        except:
            return jsonify({'message': 'token is invalid'})
        return f(current_user, *args, **kwargs)
    return decorator


@app.route('/<path>')
@app.route('/')
def home(path=None):
    return render_template('index.html')


@app.route("/api/register", methods=["POST"])
def signup_user():
    data = request.get_json()
    try:
        hashed_password = generate_password_hash(
            data['password'], method='sha256')
        new_user = User(public_id=str(uuid.uuid4(
        )), email=data['email'], password=hashed_password)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message': 'user created successfully'})
    except Exception as e:
        return jsonify({'message': str(e)})


@app.route("/api/account", methods=["GET"])
@token_required
def account(current_user, *args, **kwargs):
    print("current_user-------->", current_user)
    return jsonify({'message': f"Welcome {current_user.username}"})


@app.route('/api/login', methods=['POST'])
def login_user():
    auth = request.get_json()
    print("auth", auth)
    if not auth or not auth['email'] or not auth['password']:
        return make_response('could not verify', 401, {'Authentication': 'login required"'})
    user = User.query.filter_by(email=auth['email']).first()
    if not user:
        return make_response('could not verify', 401, {'Authentication': 'login required"'})
    if check_password_hash(user.password, auth['password']):
        token = jwt.encode({'public_id': user.public_id, 'exp': datetime.datetime.utcnow(
        ) + datetime.timedelta(minutes=4500)}, app.config['SECRET_KEY'], "HS256")
        return jsonify({'token': token})
    return make_response('could not verify',  401, {'Authentication': '"login required"'})


@app.route('/api/posts', methods=['GET', 'POST'])
@token_required
def get_all_posts(current_user, *args, **kwargs):
    if request.method == 'GET':
        todos = Todo.query.filter_by(user_id=current_user.id).all()[::-1]
       
        output = []
        for todo in todos:
            todo_data = {}
            todo_data['id'] = todo.id
            todo_data['title'] = todo.title
            todo_data['date_posted'] = todo.date_posted
            todo_data['date_updated'] = todo.date_updated
            todo_data['complited'] = todo.complited
            user = User.query.filter_by(id=todo.user_id).first()
            todo_data['user'] = {
                "email": user.email,
                "id": user.id
            }
            output.append(todo_data)
        return jsonify({'posts': output})
    elif request.method == 'POST':
        try:
            data = request.get_json()
            new_todo = Todo(
                title=data['title'], user_id=current_user.id)
            db.session.add(new_todo)
            db.session.commit()
            return jsonify({'message': 'post created successfully'})
        except Exception as e:
            return jsonify({'message': str(e)})


@app.route('/api/posts/<int:post_id>', methods=['GET', "POST", "DELETE"])
@token_required
def get_one_post(current_user, post_id, *args, **kwargs):
    if request.method == 'GET':
        post = Todo.query.filter_by(
            user_id=current_user.id, id=post_id).first()
        if not post:
            return jsonify({'message': 'no post found'})
        post_data = {}
        post_data['id'] = post.id
        post_data['title'] = post.title
        post_data['user_id'] = post.user_id
        return jsonify({'post': post_data})
    elif request.method == "POST":
        try:
            data = request.get_json()
            post = Todo.query.filter_by(
                user_id=current_user.id, id=post_id).first()
            post.title = data['title']
            post.date_updated = datetime.datetime.utcnow()
            db.session.commit()
            return jsonify({'message': 'post updated successfully'})
        except Exception as e:
            return jsonify({'message': str(e)})
    elif request.method == "DELETE":
        try:
            post = Todo.query.filter_by(
                user_id=current_user.id, id=post_id).first()
            db.session.delete(post)
            db.session.commit()
            return make_response('post deleted successfully', 200)
        except Exception as e:
            return jsonify({'message': str(e)})
