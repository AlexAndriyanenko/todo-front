import React from 'react';
import { useDispatch } from 'react-redux';
import TodoItem from '../../../components/home/TodoItem/TodoItem';
import { toggleTodoActionCreator, deleteTodoActionCreator } from '../../../redux/actions/todos';

// eslint-disable-next-line react/prop-types
const TodoItemContainer = ({
  todoListId, id, content, isChecked,
}) => {
  const dispatch = useDispatch();

  const toggleChecked = () => {
    dispatch(toggleTodoActionCreator(todoListId, id));
  };

  const handleTodoItemDelete = () => {
    dispatch(deleteTodoActionCreator(todoListId, id));
  };

  return (
    <TodoItem
      content={content}
      isChecked={isChecked}
      toggleChecked={toggleChecked}
      onTodoItemDelete={handleTodoItemDelete}
    />
  );
};

export default TodoItemContainer;
