import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../env";
import AddPost from "./AddPost";
import SinglePost from "./SinglePost";

const Home = () => {
  const [todos, setTodos] = useState();
  const [reload, setReload] = useState();
  const reload_b = (r) => {
    setReload(r);
  };
  useEffect(() => {
    const getTodos = () => {
      fetch(`${BASE_URL}/api/posts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-access-tokens": localStorage.getItem("token"),
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.posts);
          setTodos(data.posts);
        })
        .catch((err) => console.log(err));
    };
    getTodos();
  }, [reload]);
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="stretch"
      spacing={3}
    >
      <Grid container item>
        <AddPost func={reload_b} />
      </Grid>
      <Grid container item>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="stretch"
          spacing={1}
        >
          {todos?.map((todo, i) => (
            <Grid key={i} item>
            <SinglePost refunc={reload_b} id={i+1} key={i} todo={todo} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
