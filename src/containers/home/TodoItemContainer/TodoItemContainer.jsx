import React from 'react';
import { useDispatch } from 'react-redux';
import TodoItem from '../../../components/home/TodoItem/TodoItem';
import { toggleTodoActionCreator } from '../../../redux/actions/todos';

// eslint-disable-next-line react/prop-types
const TodoItemContainer = ({
  todoListId, id, content, isChecked,
}) => {
  const dispatch = useDispatch();

  const toggleChecked = () => {
    dispatch(toggleTodoActionCreator(todoListId, id));
  };

  return (
    <TodoItem
      content={content}
      isChecked={isChecked}
      toggleChecked={toggleChecked}
    />
  );
};

export default TodoItemContainer;
