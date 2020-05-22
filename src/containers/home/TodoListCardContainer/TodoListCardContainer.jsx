import React from 'react';
import TodoListCard from '../../../components/home/TodoListCard/TodoListCard';

// eslint-disable-next-line react/prop-types
const TodoListCardContainer = ({ name }) => (
  <TodoListCard
    name={name}
  />
);

export default TodoListCardContainer;
