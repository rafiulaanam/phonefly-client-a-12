import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Components/Spinner/Spinner';
import { AuthContext } from '../Context/AuthProvider';
import useBuyer from '../Hooks/useBuyer';


const BuyerRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const[isBuyer] = useBuyer(user?.email)
    const location = useLocation()

if(loading){
    return <Spinner></Spinner>
}

    if(user && isBuyer){
        return children;
    }
    else{
        <Navigate to='/login' state={{from:location}} replace></Navigate> ;
    }
};

export default BuyerRoute;