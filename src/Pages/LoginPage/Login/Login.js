import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import login from "../../../images/login.png"
import {NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData,setLoginData]=useState({})
    const{user,loginUser,isLoading,authError,signInWithGoogle}=useAuth()

    const location=useLocation()
    const navigate=useNavigate()

    const handleOnchange=e=>{
            const field=e. target.name;
            const value=e.target.value;
            const newData={...loginData}
            newData[field]=value
            console.log(newData)
            setLoginData(newData);
    }
    const handleLoginForm=e=>{
      loginUser(loginData.email,loginData.password,location,navigate)

        e.preventDefault()
    }

    const handleGooglesignin=()=>{
        signInWithGoogle(location,navigate);
    }

    return (
        <Container>
            <Grid container spacing={2}>
            <Grid sx={{mt:8}} item xs={12} md={6}>
            <Typography variant="body1" gutterBottom>
                Login
      </Typography>
      <form onSubmit={handleLoginForm}>
      <TextField
      sx={{width:"75%",m:1}}
       id="standard-basic" 
       label="Your email" 
       name="email"
       onBlur={handleOnchange}
       variant="standard" />

<TextField
sx={{width:"75%",m:1}}
       id="standard-basic" 
       label="Password" 
       type="password"
       name="password"
       onBlur={handleOnchange}
       variant="standard" />
      
       <Button sx={{width:"75%",m:1}} type="submit" varient="contained">Login</Button>
       <NavLink style={{textDecoration:'none'}} to="/register">
        <Button varient="Text">
            New User?Plaese Register
        </Button>
       </NavLink>
      </form>
      <p>-----------------------------</p>
      <Button onClick={handleGooglesignin} varient="contained">
            Sign in using Google
        </Button>
      {isLoading && <CircularProgress />}
{user?.email && <Alert severity="success">User create  successfully!</Alert>}
{authError && <Alert severity="error">{authError}</Alert>}
</Grid>
<Grid item xs={12} md={6}>
    <img style={{width:'100%'}} src={login} alt="" />
</Grid>
            </Grid>
            
        </Container>
    );
};

export default Login;