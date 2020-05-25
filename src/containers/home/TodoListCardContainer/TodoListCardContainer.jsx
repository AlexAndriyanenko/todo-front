import React from 'react';
import { useDispatch } from 'react-redux';
import TodoListCard from '../../../components/home/TodoListCard/TodoListCard';
import { changeTodoListNameActionCreator, createTodoActionCreator } from '../../../redux/actions/todos';

// eslint-disable-next-line react/prop-types
const TodoListCardContainer = ({ id, name, todos }) => {
  const [isEditing, setEditing] = React.useState(false);
  const [addingTodo, setAdding] = React.useState(false);
  const [todoItemContent, setTodoItemContent] = React.useState('');
  const dispatch = useDispatch();

  const toggleEditing = () => {
    setEditing(!isEditing);
  };

  const toggleAdding = () => {
    setAdding(!addingTodo);
  };

  const handleTodoItemContentChange = (e) => {
    setTodoItemContent(e.target.value);
  };

  const handleAddTodoItemCancel = () => {
    setTodoItemContent('');
    toggleAdding();
  };

  const handleNameChange = (e) => {
    dispatch(changeTodoListNameActionCreator(id, e.target.value));
  };

  const handleNameKeyDown = (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      toggleEditing();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createTodoActionCreator(id, todoItemContent));
    setTodoItemContent('');
    toggleAdding();
  };

  return (
    <TodoListCard
      id={id}
      onSubmit={handleSubmit}
      todos={todos}
      name={name}
      onNameChange={handleNameChange}
      isEditing={isEditing}
      toggleEditing={toggleEditing}
      onNameKeyDown={handleNameKeyDown}
      addingTodo={addingTodo}
      toggleAdding={toggleAdding}
      todoItemContent={todoItemContent}
      onTodoItemContentChange={handleTodoItemContentChange}
      onAddTodoItemCancel={handleAddTodoItemCancel}
    />
  );
};

export default TodoListCardContainer;
