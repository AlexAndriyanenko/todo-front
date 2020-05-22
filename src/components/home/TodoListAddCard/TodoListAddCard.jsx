import React from 'react';
import Card from '@material-ui/core/Card';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import Modal from '@material-ui/core/Modal';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '200px',
    minHeight: '250px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#e0e0e0',
      transition: 'all 0.3s',
    },
  },
  icon: {
    fontSize: '60px',
  },
}));

// eslint-disable-next-line react/prop-types
const TodoListAddCard = ({ onClick }) => {
  const classes = useStyles();

  return (
    <Card className={classes.container} onClick={onClick}>
      <AddOutlinedIcon className={classes.icon} />
    </Card>
  );
};

export default TodoListAddCard;
