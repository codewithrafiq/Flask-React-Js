import React, { useState } from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import { BASE_URL } from "../env";

const Register = () => {
    const [username, setUsername] = useState("")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")
    const [email, setEmail] = useState("")
    const register_button = () => {
        console.log(username, password1, password2, email)
        fetch(`${BASE_URL}/api/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password1,
                email: email
            })
        }).then(res=>res.json())      
        .then(res => {
            console.log(res)
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
      <h1>Register Page</h1>
      <TextField
        label="Username"
        placeholder="Username"
        type="text"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Email"
        placeholder="Email"
        type="email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        label="Password"
        placeholder="Password"
        type="password"
        variant="outlined"
        value={password1}
        onChange={(e) => setPassword1(e.target.value)}
      />
      <TextField
        label="Confirm Password"
        placeholder="Confirm Password"
        type="password"
        variant="outlined"
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
      />
      <Button onClick={register_button} variant="contained" color="primary">
        Register
      </Button>
    </Grid>
  );
};

export default Register;
