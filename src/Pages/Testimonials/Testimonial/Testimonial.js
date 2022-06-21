import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Skeleton from '@mui/material/Skeleton';
import { Grid, Typography } from '@mui/material';

const Testimonial = (props) => {
    const { loading = false } = props;
    const {name,description,city,img}=props.people
    return (
        <div>
            <Grid  item xs={6} md={6} >
            <Card sx={{ maxWidth: 345, m: 2 }}>
                <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        ) : (
          <Typography variant="body2" color="text.secondary" component="p">
            
             {description}
            
          </Typography>
        )}
      </CardContent>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton animation="wave" variant="circular" width={40} height={40} />
          ) : (
            <Avatar
              alt="Ted talk"
              src={img}
            />
          )
        }
        action={
          loading ? null : (
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={
          loading ? (
            <Skeleton
            textAlign='left'
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
             
            />
          ) : (
            `${name}`
          )
        }
       
        subheader={
            loading ? (
              <Skeleton animation="wave" height={10} width="40%" />
            ) : (
              `${city}`
            )
          }

      />
      

      
    </Card>
    </Grid>
        </div>
    );
};

export default Testimonial;