import React from 'react';
import { withStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(() => ({
  icon: {
    fontSize: '22px',
    color: '#fff',
  },
}));

const StyledBtn = withStyles(() => ({
  root: {
    minWidth: '36px',
    maxWidth: '36px',
    minHeight: '36px',
    maxHeight: '36px',
    textAlign: 'center',
    backgroundColor: deepOrange[500],
    color: '#fff',
    '&:hover': {
      backgroundColor: deepOrange[600],
    },
  },
}))(Button);

const CancelBtn = (props) => {
  const classes = useStyles();

  return (
    <StyledBtn {...props}>
      <CloseIcon className={classes.icon} />
    </StyledBtn>
  );
};

export default CancelBtn;
