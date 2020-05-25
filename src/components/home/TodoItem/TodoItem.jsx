import React from 'react';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    padding: '0 15px',
  },
}));

// eslint-disable-next-line react/prop-types
const TodoItem = ({ content, isChecked, toggleChecked }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.container} container direction="row" justify="space-between" alignItems="center">
      <div>
        {content}
      </div>

      <Checkbox
        checked={isChecked}
        onChange={toggleChecked}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    </Grid>
  );
};

export default TodoItem;
