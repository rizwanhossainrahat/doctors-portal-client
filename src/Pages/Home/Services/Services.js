import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Service from '../Service/Service';
import flouride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'

const services=[
    {
        name:'Fluoride Treatment',
        description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolor, expedita tenetur officiis iste ipsa! Vitae maiores a eveniet laudantium culpa reiciendis dolor ad fuga veniam, consectetur blanditiis perspiciatis eos?',
        img:flouride
    },
    {
        name:'Cavity Falling',
        description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolor, expedita tenetur officiis iste ipsa! Vitae maiores a eveniet laudantium culpa reiciendis dolor ad fuga veniam, consectetur blanditiis perspiciatis eos?',
        img:cavity
    },
    {
        name:'Teeth Whitening',
        description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolor, expedita tenetur officiis iste ipsa! Vitae maiores a eveniet laudantium culpa reiciendis dolor ad fuga veniam, consectetur blanditiis perspiciatis eos?',
        img:whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
       <Container>
       <Typography sx={{fontWeight: 500,color:'#42a5f5',m:2}} variant="h6" component="div">
                        OUR SERVICES
                    </Typography>
       <Typography sx={{fontWeight: 600 ,m:5}} variant="h4" component="div">
                        SERVICES WE PROVIDE
                    </Typography>
                    
       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
              services.map(service=><Service
              key={service.name}
              service={service}
              ></Service>)
          }
        </Grid>
       
       </Container>
      </Box>
    );
};

export default Services;