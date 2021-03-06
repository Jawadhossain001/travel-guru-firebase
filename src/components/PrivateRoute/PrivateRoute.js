import React, { useContext } from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({children, ...rest}) => {
    const [showArea,setShowArea,loggedIn,setLoggedIn] = useContext( UserContext )
    const location = useLocation()
    return (
        <Route
        {...rest}
        render={
            ()=> loggedIn ? (children)
            : (
            <Redirect
                to={{
                pathname: "/auth",
                state: { from: location }
                }}
            />
            )
            
        }

        />
    );
};


export default PrivateRoute;