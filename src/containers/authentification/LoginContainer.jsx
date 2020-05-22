import React from 'react';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Login from '../../components/authentification/Login';
import { checkAuthenticated } from '../../utils/checkIAuthenticated';

// actions
import { changeLoginActionCreator, submitLoginActionCreator } from '../../redux/actions/auth';

// eslint-disable-next-line react/prop-types
const LoginContainer = ({ history }) => {
  const dispatch = useDispatch();
  const login = useSelector(({ authReducer }) => authReducer.login);
  const isAuthenticated = checkAuthenticated();

  const changeLogin = (e) => {
    dispatch(changeLoginActionCreator(e.target.value));
  };

  const submitLogin = () => {
    dispatch(submitLoginActionCreator());

    if (login === 'main') {
      localStorage.setItem('user', login);
      history.push('/home');
    }
  };

  return (
    <>
      {isAuthenticated
        ? <Redirect to="/home" />
        : (
          <Login
            onSubmit={submitLogin}
            login={login}
            onLoginChange={changeLogin}
          />
        )}
    </>
  );
};

export default withRouter(LoginContainer);
