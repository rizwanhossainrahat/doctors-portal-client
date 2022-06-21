import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Container >
            <Grid container spacing={2}  sx={{
                 
                 display:'flex',
                 justifyContent:'flex-start',
                 textAlign:'left',
                 alignItems:'left',
                 mt:"6px",
                 mx:8
                 }}>
            <Grid style={{marginTop:'35px'}}> 
                 
                 <Typography varient="body2" style={{textAlign:'left',fontSize:16,fontWeight: 500,margin:'10px'}} color='text.secondary' >
                Emergency Dental Care
            </Typography>
                 
          
            <Typography varient="body2" style={{textAlign:'left',fontSize:16,fontWeight: 500,margin:'10px'}} color='text.secondary' >
                Check up 
            </Typography>
            <Typography varient="body2" style={{textAlign:'left',fontSize:16,fontWeight: 500,margin:'10px'}} color='text.secondary' >
               Treatment of personal diseases
            </Typography>
            <Typography varient="body2" style={{textAlign:'left',fontSize:16,fontWeight: 500,margin:'10px'}} color='text.secondary' >
                Tooth Extraction
            </Typography>
            <Typography varient="body2" style={{textAlign:'left',fontSize:16,fontWeight: 500,margin:'10px'}} color='text.secondary' >
                Check up
            </Typography>
            </Grid>
            <Grid>
            <Typography varient="body2" style={{textAlign:'left',fontSize:16,fontWeight: 500,margin:'10px'}} color='info.main' >
              services
            </Typography>
            <Typography varient="body2" style={{textAlign:'left',fontSize:16,fontWeight: 500,margin:'10px'}} color='text.secondary' >
                Teeth Repair
            </Typography>
            <Typography varient="body2" style={{textAlign:'left',fontSize:16,fontWeight: 500,margin:'10px'}} color='text.secondary' >
                Tooth Extraction
            </Typography>
            <Typography varient="body2" style={{textAlign:'left',fontSize:16,fontWeight: 500,margin:'10px'}} color='text.secondary' >
                Check up
            </Typography>
            </Grid>
            <Grid>
            <Typography varient="body2" style={{textAlign:'left',fontSize:16,fontWeight: 500,margin:'10px'}} color='info.main' >
              Oral Health
            </Typography>
            <Typography varient="body2" style={{textAlign:'left',fontSize:16,fontWeight: 500,margin:'10px'}} color='text.secondary' >
                Teeth Repair
            </Typography>
            <Typography varient="body2" style={{textAlign:'left',fontSize:16,fontWeight: 500,margin:'10px'}} color='text.secondary' >
                Tooth Extraction
            </Typography>
            <Typography varient="body2" style={{textAlign:'left',fontSize:16,fontWeight: 500,margin:'10px'}} color='text.secondary' >
                Check up
            </Typography>
            <Typography varient="body2" style={{textAlign:'left',fontSize:16,fontWeight: 500,margin:'10px'}} color='text.secondary' >
                Check up
            </Typography>
            <Typography varient="body2" style={{textAlign:'left',fontSize:16,fontWeight: 500,margin:'10px'}} color='text.secondary' >
                Check up
            </Typography>
            </Grid>
            <Grid>
                 <Typography varient="body2" style={{textAlign:'left',fontSize:16,fontWeight: 500,margin:'10px'}} color='info.main' >
             Our Address
            </Typography>
            <Typography varient="body2" style={{textAlign:'left',fontSize:16,fontWeight: 500,margin:'10px'}} color='text.secondary' >
              Dhaka Luxmibazar-kotowali-1100
            </Typography>
            <Typography varient="body2" style={{textAlign:'left',fontSize:16,fontWeight: 500,margin:'10px'}} color='text.secondary' >
             Call Now-01861738648
            </Typography>
            <Typography varient="body2" style={{textAlign:'left',fontSize:16,fontWeight: 500,margin:'10px'}} color='text.secondary' >
            Email:rizwanhossainrahat400@gmail.com
            </Typography>
            
                 </Grid>
            </Grid>
        </Container>
    );
};

export default Footer;