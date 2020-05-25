import React from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import CloseIcon from '@material-ui/icons/Close';
import {lightGreen, deepOrange} from "@material-ui/core/colors";

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
  icon: {
    fontSize: '16px',
    color: '#000',
  },
  addTodoForm: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    margin: '10px 15px',
  },
  buttons: {
    marginTop: '15px',
  },
}));

const SubmitBtn = withStyles(() => ({
  root: {
    minWidth: '80px',
    maxWidth: '80px',
    textAlign: 'center',
    backgroundColor: lightGreen[500],
    color: '#fff',
    '&:hover': {
      backgroundColor: lightGreen[700],
      color: '#fff',
    },
  },
}))(Button);

const CancelBtn = withStyles(() => ({
  root: {
    minWidth: '30px',
    maxWIdth: '30px',
    textAlign: 'center',
    backgroundColor: deepOrange[500],
    color: '#fff',
    '&:hover': {
      backgroundColor: deepOrange[600],
    },
  },
}))(Button);

// eslint-disable-next-line react/prop-types,max-len
const TodoListCard = ({name, onNameChange, isEditing, toggleEditing, onNameKeyDown, todos, addingTodo, toggleAdding, todoContent, onTodoContentChange}) => {
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


      {addingTodo ? (
        <div className={classes.addTodoForm}>
          <TextField
            varitant="outlined"
            value={todoContent}
            onChange={onTodoContentChange}
            autoFocus
          />

          <div className={classes.buttons}>
            <SubmitBtn> Submit </SubmitBtn>
            <CancelBtn className={classes.cancelBtn}>
              {' '}
              <CloseIcon />
              {' '}
            </CancelBtn>
          </div>
        </div>
      ) : (
        <Button className={classes.addBtn} variant="outlined" color="default" onClick={toggleAdding}>
          <AddOutlinedIcon className={classes.icon}/>

          Add todo item
        </Button>
      )}
    </Card>
  );
};

export default TodoListCard;
