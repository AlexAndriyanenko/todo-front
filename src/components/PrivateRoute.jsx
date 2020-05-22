import React from 'react';
import { Redirect, Route } from 'react-router';
import HomeContainer from '../containers/home/HomeContainer';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ rest }) => {
  const isAuthenticated = localStorage.getItem('user') === 'main';

  return (
    <Route
      {...rest}
      render={() => (
        <>
          {isAuthenticated ? (
            <HomeContainer />
          ) : (
            <Redirect to="/login" />
          )}
        </>
      )}
    />
  );
};

export default PrivateRoute;
