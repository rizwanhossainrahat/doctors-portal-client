import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({children,...rest}) => {
    const {user,admin,isLoading}=useAuth()
    const location=useLocation()
    if(isLoading){ return <CircularProgress />}
    return (
        <div>
             {
               
               user.email && admin?
                children:
                <Navigate  {...rest} to='/' state={{ from: location }}    ></Navigate>
            }
        </div>
    );
};

export default AdminRoute;