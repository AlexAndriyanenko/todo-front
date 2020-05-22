import React from 'react';
import NavContainer from "../../containers/home/NavContainer/NavContainer";
import Grid from '@material-ui/core/Grid';
import TodoListAddCardContainer from "../../containers/home/TodoListAddCardContainer/TodoListAddCardContainer";

import { makeStyles } from "@material-ui/core/styles";
import TodoListCardContainer from "../../containers/home/TodoListCardContainer/TodoListCardContainer";

const useStyles = makeStyles(() => ({
	container: {
		width: '100%',
		height: '100%',
	},
    content: {
	    padding: '20px 15px',
    }
}));


const Home = ({ todoLists }) => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<NavContainer />
			<Grid className={classes.content} container direction="row" alignItems="center">
                {todoLists.map((todo) => <TodoListCardContainer key={todo.id} {...todo} />)}

                <TodoListAddCardContainer />
            </Grid>
		</div>
	)
};

export default Home;
