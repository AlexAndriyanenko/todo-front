import React from 'react';
import Login from "../../components/authentification/Login";
import {withRouter} from "react-router";
import {Redirect} from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import {checkAuthenticated} from "../../utils/checkIAuthenticated";

// actions
import {changeLoginActionCreator, submitLoginActionCreator} from "../../redux/actions/auth";

const LoginContainer = ({history}) => {
    const dispatch = useDispatch();
    const login = useSelector(({authReducer}) => authReducer.login);
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
            {isAuthenticated ?
                <Redirect to="/home"/>
                : (
                    <Login
                        history={history}
                        onSubmit={submitLogin}
                        login={login}
                        onLoginChange={changeLogin}
                    />
                )
            }
        </>
    )
};

export default withRouter(LoginContainer);
