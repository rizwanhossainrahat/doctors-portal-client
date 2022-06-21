import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ApointmentBanner = () => {

    const apointmentbg={
        background:`url(${bg})`,
        backgroundColor:'rgba(45,58,74,0.9)',
        backgroundBlendMode:'darken,luminosity',
        marginTop:150
    }

    return (
        <Box style={apointmentbg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img 
            style={{width:400,marginTop:'-110px'}}
            src={doctor} alt="" />
          </Grid>
          <Grid item xs={12} md={6} sx={{
              display:'flex',
              justifyContent:'flex-start',
              textAlign:'left',
              alignItems:'center'
              }}>
         <Box>
         <Typography  variant="h6" sx={{mb:5}} style={{color:'#5CE7ED'}}>
                       Apointment
                    </Typography>
          <Typography  variant="h4" style={{color:'white'}}>
                       Make an  Apointment today
                    </Typography>
          <Typography  variant="h6" sx={{my:5}} style={{color:'white',fontSize:14,fontWeight:300}}>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quaerat in ipsum exercitationem autem officia veniam beatae ratione, voluptatem nesciunt?
                    </Typography>
                    <Button  style={{backgroundColor:'#5CE7ED'}} variant="contained">Learn more</Button>
         </Box>
          </Grid>
        </Grid>
      </Box>
    );
};

export default ApointmentBanner;