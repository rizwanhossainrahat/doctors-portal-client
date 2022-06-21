import { Grid } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Calender from '../../../../../Home/Home/Shared/Calender/Calender';
import Appointments from '../../Appointments/Appointments';

const DashboardHome = () => {
    const [date,setDate]=React.useState(new Date())
    return (
        <div>
             <Grid container spacing={2}>
  <Grid item xs={8} sm={5}>
    <Calender
    date={date}
    setDate={setDate}
    ></Calender>
  </Grid>
  <Grid item xs={4} sm={7}>
   <Appointments date={date}></Appointments>
  </Grid>
  
</Grid>
       <Outlet/>
        </div>
    );
};

export default DashboardHome;