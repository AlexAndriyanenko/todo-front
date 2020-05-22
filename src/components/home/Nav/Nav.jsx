import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

import { deepPurple } from '@material-ui/core/colors';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    padding: '10px 15px',
  },
  avatar: {
    backgroundColor: deepPurple,
  },
}));


// eslint-disable-next-line react/prop-types
const Nav = ({ login }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <Grid container direction="row" justify="center" alignItems="center">
        <div>
          <Avatar className={classes.avatar}>
            {' '}
            {login[0].toUpperCase()}
            {' '}
          </Avatar>
        </div>
      </Grid>
    </Paper>
  );
};

export default Nav;
