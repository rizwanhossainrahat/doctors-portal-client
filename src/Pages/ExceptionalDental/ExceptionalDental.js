import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import treatment from '../../images/treatment.png'

const ExceptionalDental = () => {
    return (
       <Container>
        <Grid container spacing={2}  sx={{
                 
                display:'flex',
                justifyContent:'flex-start',
                textAlign:'left',
                alignItems:'left',
                mt:"6px",
                
                }}>
                <Grid  item xs={12} md={6} >
                        <img style={{width:'90%'}} src={treatment} alt="" />
                </Grid>
                <Grid  item xs={12} md={6} sx={{
                    width:'50%'
                }}>
                   <Typography varient="h3" style={{fontSize:"70px",fontWeight: 400,color:'black'}}>
                            Exceptional Dental 
                           Care,On your trems
                        </Typography>
                        <Typography varient="body2" style={{fontSize:16,fontWeight: 500}} color='text.secondary'>
                        We are a dental practice devoted to restoring and enhancing the natural beauty of your smile using conservative, state-of-the-art procedures that will result in beautiful, long lasting smiles! We provide comprehensive treatment planning and use restorative and cosmetic dentistry to achieve your optimal dental health. You can visit us at our dental office near your location, or call us at 504 229-7990 for an appointment! Our team will be happy to answer any questions you might have.
                      
                        </Typography>
                        <Button variant="contained" sx={{my:5, }} >Learn More</Button>
                </Grid>
                
            </Grid>
            </Container>
    );
};

export default ExceptionalDental;