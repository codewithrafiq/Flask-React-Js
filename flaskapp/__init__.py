from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_migrate import Migrate


#    <script src="{{ url_for('static', filename='js/main.d092ffb3.chunk.js') }}"></script>
app = Flask(__name__,
            static_url_path='/reactui/build/static',
            static_folder='reactui/build/static',
            template_folder='reactui/build')
app.config['DEBUG'] = True
app.config['SECRET_KEY'] = 'ae003940a6cc4bc29b75d6224049790a'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
CORS(app)
migrate = Migrate(app, db)


from flaskapp import routes