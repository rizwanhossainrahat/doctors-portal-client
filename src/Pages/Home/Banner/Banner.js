import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Link } from 'react-router-dom';

const Banner = () => {

    const bannerBg={
        background:`url(${bg})`
       
    }

    const verticalCenter={
        display:'flex',
        height:400,
        alignItems:'center'
    }

    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} style={{...verticalCenter,textAlign:'left'}}>
       <Box>
       <Typography  variant="h3" >
            Your New smile <br />
            Start here
       </Typography>
        <Typography  variant="h6" sx={{my:3, fontSize:14,fontWeight:350,color:'gray'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, iste minus nesciunt nisi repellat explicabo neque fugiat nostrum consequuntur culpa.
       </Typography>
     <Link style={{textDecoration:'none'}} to='/appointment'> <Button style={{backgroundColor:'#5CE7ED'}} variant="contained">Get Apointment</Button></Link>
       </Box>
      
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{width:'350px'}} src={chair} alt="" />
        </Grid>
        
      </Grid>
    </Container>
    );
};

export default Banner;