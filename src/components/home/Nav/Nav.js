import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import { deepPurple } from '@material-ui/core/colors';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    container: {
        padding: '10px 15px',
    },
    avatar: {
      backgroundColor: deepPurple,
    },
}));


const Nav = ({ login }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.container}>
            <Grid container xs={12} direction="row" justify="center" alignItems="center">
                <div>
                    <Avatar className={classes.avatar}> {login[0].toUpperCase()} </Avatar>
                </div>
            </Grid>
        </Paper>
    );
};

export default Nav;
