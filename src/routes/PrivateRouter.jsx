import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    // console.log(location)
    if(loading){
        return <p>Loading...</p>
    }

    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to='/login' replace></Navigate>;
};

export default PrivateRouter;