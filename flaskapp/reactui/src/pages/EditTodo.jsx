import { Button, Grid, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../env";

import { useHistory } from 'react-router';

const EditTodo = () => {
  const [title, setTitle] = useState("");
  const [todo, settodo] = useState(null)

  const { todotitle, todoid } = useParams();
  const history = useHistory()


  useEffect(() => {
    fetch(`${BASE_URL}/api/posts/${todoid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-tokens": localStorage.getItem("token"),
      },
    })
      .then(response =>response.json())
      .then(data => {
        console.log('====================================');
        console.log("data------->",data.post);
        settodo(data.post);
        setTitle(data.post.title);
        console.log('====================================');
      })
  }, []);


  const editTodo = () => {
    if (title.length > 0) {
      fetch(`${BASE_URL}/api/posts/${todoid}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-tokens": localStorage.getItem("token"),
        },
        body: JSON.stringify({
          title: title
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          history.push("/");
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please fill in all the fields");
    }
  };
  return (
<Grid
  container
  direction="row"
  justifyContent="space-around"
  alignItems="center"
>
      <TextField
        fullWidth
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
  
        <Button
        color="primary"
        variant="contained"
        onClick={editTodo}
        >Update Todo</Button>

    </Grid>
  );
};

export default EditTodo;
