import { Box, Button, Typography } from '@mui/material';
import { padding } from '@mui/system';
import React from 'react';
import bg from '../../images/bg.png';
import TextField from '@mui/material/TextField';


const handleContactSubmit=e=>{
        alert('contact form submmited')


    e.preventDefault()
}

const Contact = () => {

    const contactBg={
        background:`url(${bg})`,
        backgroundColor:'rgba(45,58,74,0.9)',
        backgroundBlendMode:'darken,luminosity',
        
    }

    return (
        <Box style={contactBg} sx={{py:8,my:5}}>
            <Typography varient='h2' style={{fontWeight:600,fontSize:16 }} sx={{color:'info.main'}}>
                Contact Us
            </Typography>
            <Typography varient='h1' style={{fontWeight:500,fontSize:28 }} sx={{color:'white'}}>
                Always connected with us
            </Typography>
               

                <form onSubmit={handleContactSubmit}>
                    <input type="email" name="" id="" placeholder='Enter your email' style={{paddingTop:15,paddingBottom:15,paddingRight:'30%', margin:'10px 0px 10px 0px'}}/>
                    <br />
                    <input type="text" name="" id="" placeholder='Subject' style={{paddingTop:15,paddingBottom:15,paddingRight:'30%', margin:'10px 0px 10px 0px'}}/>
                    <br />
                    <input type="text" name="" id=""  placeholder='Your message' style={{paddingTop:25,paddingBottom:25,paddingRight:'30%', margin:'10px 0px 10px 0px'}}/>
                    <br />
                  
                   <Button type='submit' variant="contained">Submit</Button>
                </form>

        </Box>
    );
};

export default Contact;