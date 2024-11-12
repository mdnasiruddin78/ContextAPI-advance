import React, { useContext } from 'react';
import { AuthContext } from '../Providers/Authproviders';
import { Navigate } from 'react-router-dom';


const Privateroutes = ({children}) => {

    const {user, loding} = useContext(AuthContext)

    if(loding){
        return <span className="loading loading-dots loading-lg"></span>
    }

    if(user){
        return children
    }

    return (
        <Navigate to="/login"></Navigate>
    );
};

export default Privateroutes;