import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    minWidth: '300px',
    minHeight: '150px',
    padding: '15px 10px',
  },
  button: {
    maxWidth: '70px',
    marginTop: '20px',
  },
}));

const TodoListAddModal = ({
  // eslint-disable-next-line react/prop-types
  isOpened, onClose, onSubmit, name, onNameChange,
}) => {
  const classes = useStyles();

  return (
    <Modal className={classes.modal} open={isOpened} onClose={onClose}>
      <Paper className={classes.paper}>
        <form onSubmit={onSubmit}>
          <Grid container direction="column" justify="center" alignItems="center">
            <TextField
              variant="outlined"
              label="To Do List Name"
              value={name}
              onChange={onNameChange}
            />

            <Button
              className={classes.button}
              type="submit"
              variant="outlined"
              color="primary"
            >
              {' '}
              Submit
            </Button>
          </Grid>
        </form>
      </Paper>
    </Modal>
  );
};

export default TodoListAddModal;
