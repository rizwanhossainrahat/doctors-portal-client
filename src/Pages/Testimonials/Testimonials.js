import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import img1 from '../../images/people-1.png';
import img2 from '../../images/people-2.png';
import img3 from '../../images/people-3.png';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Skeleton from '@mui/material/Skeleton';
import Testimonial from './Testimonial/Testimonial';

const peoples=[
    {
        name:'Winson Harry',
        description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolor, expedita tenetur officiis iste ipsa! Vitae maiores a eveniet laudantium culpa reiciendis dolor ad fuga veniam, consectetur blanditiis perspiciatis eos?',
        city:'california',
        img:img1
    },
    {
        name:'Robert Carlos',
        description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolor, expedita tenetur officiis iste ipsa! Vitae maiores a eveniet laudantium culpa reiciendis dolor ad fuga veniam, consectetur blanditiis perspiciatis eos?',
        city:'Los Angeles',
        img:img2
    },
    {
        name:'Jackson',
        description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolor, expedita tenetur officiis iste ipsa! Vitae maiores a eveniet laudantium culpa reiciendis dolor ad fuga veniam, consectetur blanditiis perspiciatis eos?',
        city:'Newyork city',
        img:img3
    }
]

const Testimonials = () => {
    
    return (
        <Container sx={{my:5}}>
            <Typography varient="h5" style={{textAlign:"left",fontWeight:600}} sx={{color:'info.main'}}>
            Testimonials
            </Typography>
            <Typography varient="h1" style={{textAlign:"left",fontWeight:600,fontSize:30}} >
            What's our patients 
            </Typography>
            <Typography varient="h1" style={{textAlign:"left",fontWeight:600,fontSize:30}} >
           Say
            </Typography>
            
                <Grid   container spacing={{xs: 2}} columns={{ xs: 12, sm: 8, md: 4 }}
                
                >
                    {
                        peoples.map(people=><Testimonial people={people}></Testimonial>)
                    }
                
                </Grid>
                
        </Container>
    );
};

export default Testimonials;