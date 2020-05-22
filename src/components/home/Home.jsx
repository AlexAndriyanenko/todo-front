import React from 'react';
import NavContainer from "../../containers/home/NavContainer/NavContainer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	container: {
		width: '100%',
		height: '100%',
	},
}));


const Home = () => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<NavContainer />
		</div>
	)
};

export default Home;
