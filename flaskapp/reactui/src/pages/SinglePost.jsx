import { Box, Button, Card, CardContent, IconButton, Typography } from '@material-ui/core'
import React from 'react'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { BASE_URL } from '../env';
import { useHistory } from 'react-router';


const SinglePost = ({refunc,todo,id}) => {
    const history = useHistory()
    const delateTodo = (todoid) => {
        fetch(`${BASE_URL}/api/posts/` + todoid, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "x-access-tokens": localStorage.getItem("token"),
            }
        })
            .then(data => {
                console.log('====================================');
                console.log("data----->",data);
                console.log('====================================');
                if (data.status === 200) {
                    refunc(data);
                }
            }).catch(error => {
                console.log('====================================');
                console.log("error=======>",error);
                console.log('====================================');
            })
    }
    const updateTodo = (title,id) => {
        history.push(`/todo-${title}-${id}`);
      };
    return (
        <Card>
            <CardContent>
                <Box style={{ display:"flex",flexDirection:"row",justifyContent:"space-between" }}>
                <Box>
                <Typography variant="h5"> 
                <b>{id}  </b>
                {
                    todo.component ? (
                        <del>{todo.title}</del>
                    )
                    : (
                        todo.title
                    )
                }</Typography>
                <Typography variant="body2" component="p"><b>Added=</b>{todo.date_posted} {todo.date_updated?<><b>Updated=</b>{todo.date_updated}</>:""}</Typography>
                </Box>
                <Box>
                    <IconButton onClick={e=>updateTodo(todo.title,todo.id)} color="primary"><EditIcon /></IconButton>
                    <IconButton onClick={(e)=>delateTodo(todo.id)} color="secondary"><DeleteIcon /></IconButton>
                </Box>
                </Box>
            </CardContent>
        </Card>
    )
}

export default SinglePost
