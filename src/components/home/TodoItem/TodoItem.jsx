import React from 'react';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CancelBtn from '../../styled/CancelBtn';

const useStyles = makeStyles(() => ({
  container: {
    padding: '0 15px',
  },
}));

const DeleteBtn = withStyles(() => ({
  root: {
    minWidth: '21px',
    maxWidth: '21px',
    minHeight: '21px',
    maxHeight: '21px',
    '& svg': {
      fontSize: '12px',
    },
  },
}))(CancelBtn);

// eslint-disable-next-line react/prop-types
const TodoItem = ({ content, isChecked, toggleChecked, onTodoItemDelete, }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.container} container direction="row" justify="space-between" alignItems="center">
      <div>
        {content}
      </div>

      <div>
        <Checkbox
          checked={isChecked}
          onChange={toggleChecked}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <DeleteBtn onClick={onTodoItemDelete} />
      </div>
    </Grid>
  );
};

export default TodoItem;
