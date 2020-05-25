import React from 'react';
import { useSelector } from 'react-redux';
import Home from '../../components/home/Home';

const HomeContainer = () => {
  const todoLists = useSelector(({ todosReducer }) => todosReducer.todoLists);

  return (
    <Home todoLists={todoLists} />
  );
};

export default HomeContainer;
