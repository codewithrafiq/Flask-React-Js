import React, { useState } from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import { BASE_URL } from "../env";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login_button = () => {
    console.log(email, password);
    fetch(`${BASE_URL}/api/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            password: password,
            email: email
        })
    }).then(res=>res.json())      
    .then(res => {
        console.log(res)
        localStorage.setItem("token", res.token)
        window.location.href = "/"
     
    })
    .catch(err => {
        console.log(err)
    }
    )
  }

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <h1>Login Page</h1>
      <TextField
        onChange={(e) => setEmail(e.target.value)}
        label="Email"
        placeholder="Username"
        type="email"
        variant="outlined"
      />
      <TextField
        onChange={(e) => setPassword(e.target.value)}
        label="Password"
        placeholder="Password"
        type="password"
        variant="outlined"
      />
      <Button onClick={login_button} variant="contained" color="primary">
        Login
      </Button>
    </Grid>
  );
};

export default Login;
