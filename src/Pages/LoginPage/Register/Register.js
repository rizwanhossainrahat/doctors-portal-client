import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import login from "../../../images/login.png"
import {NavLink,useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Register = () => {
    const [loginData,setLoginData]=useState({})
        const navigate=useNavigate()
    const {user,registerUser,isLoading,authError}=useAuth()
        console.log(user)

    const handleOnBlur=e=>{
            const field=e. target.name;
            const value=e.target.value;
            const newData={...loginData}
            newData[field]=value
            console.log(newData)
            setLoginData(newData);
    }

    const handleLoginForm=e=>{
       if(loginData.password !== loginData.password2){
        alert('password did not match')
        return 
       } 
       registerUser(loginData.email,loginData.password,loginData.name,navigate)
   
        e.preventDefault()
    }
    return (
        <Container>
            <Grid container spacing={2}>
            <Grid sx={{mt:8}} item xs={12} md={6}>
            <Typography variant="body1" gutterBottom>
                Register
      </Typography>

     { !isLoading && <form onSubmit={handleLoginForm}>
      <TextField
      sx={{width:"75%",m:1}}
       id="standard-basic" 
       label="Your Name" 
       name="name"
       onBlur={handleOnBlur}
       variant="standard" />
      <TextField
      sx={{width:"75%",m:1}}
       id="standard-basic" 
       label="Your email" 
       type="email"
       name="email"
       onBlur={handleOnBlur}
       variant="standard" />

<TextField
sx={{width:"75%",m:1}}
       id="standard-basic" 
       label="Password" 
       type="password"
       name="password"
       onBlur={handleOnBlur}
       variant="standard" />

<TextField
sx={{width:"75%",m:1}}
       id="standard-basic" 
       label="Re-Type password" 
       type="password"
       name="password2"
       onBlur={handleOnBlur}
       variant="standard" />
      
       <Button  sx={{width:"75%",m:1}} type="submit" varient="contained">Register</Button>
       <NavLink style={{textDecoration:'none'}} to="/login">
        <Button varient="Text">
            Already Register?Plaese Login
        </Button>
       </NavLink>
      </form>}
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

export default Register;