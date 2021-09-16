import { Button, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { BASE_URL } from "../env";

const AddPost = ({func}) => {
  const [title, setTitle] = useState("");

  const postButton = () => {
    if (title.length > 0) {
      fetch(`${BASE_URL}/api/posts`, {
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
          setTitle("");
          func(data);
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
        label="Title"
        placeholder="Title"
        fullWidth
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    
      
      <Button onClick={postButton} variant="contained" color="primary">
        Add Todo
      </Button>
    
    </Grid>
  );
};

export default AddPost;
