import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute";
import LoginContainer from "./containers/authentification/LoginContainer";
import Home from "./components/home/Home";

const App = () => {
	return (
		<Router>
			<Switch>
                <Route exact path="/"  render={() => (
                    <Redirect to="/login" />
                )}/>
                <Route exact path="/login" component={LoginContainer} />

				<PrivateRoute exact path="/home" component={<Home />} />
			</Switch>
		</Router>
	);
};

export default App;
