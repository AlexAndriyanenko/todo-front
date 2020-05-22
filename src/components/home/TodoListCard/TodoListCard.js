import React from 'react';
import Card from '@material-ui/core/Card';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '200px',
        minHeight: '250px',
        margin: '0 15px',
        cursor: 'pointer',
    }
}));

const TodoListCard = ({ name }) => {
    const classes = useStyles();

    return (
        <Card className={classes.container}>
            <div> { name } </div>
        </Card>
    );
};

export default TodoListCard;
