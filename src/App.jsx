import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { createHashHistory  } from 'history';
import PrivateRoute from "./components/PrivateRoute";
import LoginContainer from "./containers/authentification/LoginContainer";
import HomeContainer from "./containers/home/HomeContainer";

const App = () => {
    const history = createHashHistory ({
        basename: process.env.PUBLIC_URL,
    });

	return (
		<Router history={history}>
			<Switch>
                <Route exact path="/"  render={() => (
                    <Redirect to="/login" />
                )}/>
                <Route exact path="/login" component={LoginContainer} />

				<PrivateRoute exact path="/home" component={<HomeContainer />} />
			</Switch>
		</Router>
	);
};

export default App;
