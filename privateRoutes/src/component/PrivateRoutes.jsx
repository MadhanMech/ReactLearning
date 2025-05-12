import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectUser } from '../redux/userSlice';

const PrivateRoutes = () => {
    const user = useSelector(selectUser);

    if(!user){
        return <Navigate to="/"/>
    }
  return <Outlet/>
}

export default PrivateRoutes
