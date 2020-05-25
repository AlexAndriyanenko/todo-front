import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import CancelBtn from '../../styled/CancelBtn';
import TodoItemContainer from '../../../containers/home/TodoItemContainer/TodoItemContainer';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '300px',
    margin: '0 15px',
  },
  cardTitle: {
    width: '100%',
    padding: '10px 0',
    backgroundColor: '#e0e0e0',
    borderBottom: '1px solid gray',
    fontSize: '20px',
    lineHeight: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    cursor: 'pointer',
  },
  addBtn: {
    width: '100%',
    fontSize: '18px',
    textTransform: 'capitalize',
  },
  addTodoForm: {
    margin: '10px 15px',
  },
  buttons: {
    marginTop: '15px',
  },
  submitBtn: {
    marginRight: '10px',
  },
}));

const TodoListCard = ({
  id,
  onSubmit,
  name,
  onNameChange,
  isEditing,
  toggleEditing,
  onNameKeyDown,
  todos,
  addingTodo,
  toggleAdding,
  todoItemContent,
  onTodoItemContentChange,
  onAddTodoItemCancel,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.container}>
      {isEditing ? (
        <TextField
          value={name}
          onChange={onNameChange}
          onBlur={toggleEditing}
          onKeyDown={onNameKeyDown}
          autoFocus
        />
      ) : (
        <div className={classes.cardTitle} onClick={toggleEditing}>
          {' '}
          {name}
          {' '}
        </div>
      )}

      {todos.map((todo) => <TodoItemContainer key={todo.id} todoListId={id} {...todo} />)}

      {addingTodo ? (
        <form className={classes.addTodoForm} onSubmit={onSubmit}>
          <Grid container direction="column" justify="center" alignItems="center">
            <TextField
              label="To Do Item Content"
              varitant="outlined"
              value={todoItemContent}
              onChange={onTodoItemContentChange}
              autoFocus
            />

            <Grid className={classes.buttons} container direction="row" justify="flex-start">
              <Button
                className={classes.submitBtn}
                type="submit"
                variant="outlined"
                color="primary"
              >
                Submit
              </Button>
              <CancelBtn onClick={onAddTodoItemCancel} />
            </Grid>
          </Grid>
        </form>
      ) : (
        <Button className={classes.addBtn} variant="outlined" color="default" onClick={toggleAdding}>
          <AddOutlinedIcon className={classes.icon} />

          Add todo item
        </Button>
      )}
    </Card>
  );
};

export default TodoListCard;
