import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';


const bookings=[
    {
    id: 1,
    name:'Teeth Orthodonic',
    time:'8.00 AM - 9.00 AM',
    space: 10,
  },
  {
    id: 2,
    name:'Cosmetic Dentisty',
    time:'9.00 AM - 10.00 AM',
    space: 8,
  },
  {
  id: 3,
  name:'Teeth Cleaning',
  time:'10.00 AM - 11.00 AM',
  space: 5,
},
{
    id: 4,
    name:'Cavity Protection',
    time:'11.00 AM - 12.00 AM',
    space: 7,
  },
  {
    id: 5,
    name:'Prediatric Dental',
    time:'6.00 PM - 7.00 PM',
    space: 10,
  },
 
  {
    id: 6,
    name:'Oral Surgery',
    time:'7.00 PM - 8.00 PM',
    space: 10,
  },
]
const AvailableAppointments = ({ date }) => {
const [bookingSuccess,setBookingSuccess]=useState(false)

return (
        <Container>
            <Typography variant='h4' sx={{color:'info.main',my:3}}>
                Available Appointments on {date.toDateString()}
                </Typography>
                {bookingSuccess && <Alert severity="success">Appointment Booked  successfully!</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking=><Booking
                    date={date}
                    key={booking.key}
                    booking={booking}
                    setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;