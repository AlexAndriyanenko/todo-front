import React from 'react';
import Home from '../../components/home/Home';
import { useSelector } from 'react-redux';

const HomeContainer = () => {
    const todoLists = useSelector(({ todosReducer }) => todosReducer.todoLists);

    return (
        <Home todoLists={todoLists} />
    )
};

export default HomeContainer;
