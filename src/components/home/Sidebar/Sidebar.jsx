import React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {makeStyles} from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	container: {
		height: '100%',
		maxWidth: '420px',
		borderRight: '1px solid black',
	},
	list: {
		backgroundColor: theme.palette.background.paper,
	},
	listItem: {
		backgroundColor: theme.palette.background.paper,
	}
}));

const Sidebar = () => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<List className={classes.list} component="nav">
				Hello world
			</List>
		</div>
	)
};

export default Sidebar;
