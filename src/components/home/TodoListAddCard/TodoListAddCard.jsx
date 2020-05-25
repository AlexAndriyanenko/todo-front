import React from 'react';
import Card from '@material-ui/core/Card';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField/TextField';
import Button from '@material-ui/core/Button';
import CancelBtn from '../../styled/CancelBtn';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '300px',
    cursor: 'pointer',
  },
  form: {
    margin: '10px 15px',
  },
  btn: {
    width: '100%',
  },
  icon: {
    fontSize: '40px',
    cursor: 'pointer',
  },
  buttons: {
    marginTop: '15px',
  },
  submitBtn: {
    marginRight: '10px',
  },
}));

// eslint-disable-next-line react/prop-types,max-len
const TodoListAddCard = ({
  addingTodoList, toggleAdding, onSubmit, name, onNameChange, onAddTodoListCancel,
}) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.container}>

        {addingTodoList ? (
          <form className={classes.form} onSubmit={onSubmit}>
            <Grid container direction="column" justify="center" alignItems="center">
              <TextField
                label="To Do List Name"
                value={name}
                onChange={onNameChange}
                autoFocus
              />

              <Grid className={classes.buttons} container direction="row" justify="flex-start" alignItems="center">
                <Button
                  className={classes.submitBtn}
                  type="submit"
                  variant="outlined"
                  color="primary"
                >
                  {' '}
                  Submit
                </Button>
                <CancelBtn onClick={onAddTodoListCancel} />
              </Grid>
            </Grid>
          </form>
        ) : (
          <Button className={classes.btn} onClick={toggleAdding}>
            <AddOutlinedIcon className={classes.icon} />
          </Button>
        )}
      </Card>
    </>
  );
};

export default TodoListAddCard;
