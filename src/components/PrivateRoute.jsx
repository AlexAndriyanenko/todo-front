import React from 'react';
import {Redirect, Route} from 'react-router';
import Home from "./home/Home";

const PrivateRoute = ({component, ...rest}) => {
    const isAuthenticated = localStorage.getItem('user') === 'main';

    return (
        <Route {...rest} render={() => (
            <>
                {isAuthenticated ? (
                    <Home/>
                ) : (
                    <Redirect to="/login"/>
                )}
            </>
        )}/>
    )
};

export default PrivateRoute;
