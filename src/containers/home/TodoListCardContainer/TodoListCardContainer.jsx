import React from 'react';
import { useDispatch } from 'react-redux';
import TodoListCard from '../../../components/home/TodoListCard/TodoListCard';
import { changeTodoListNameActionCreator } from '../../../redux/actions/todos';

// eslint-disable-next-line react/prop-types
const TodoListCardContainer = ({ id, name }) => {
  const [isEditing, setEditing] = React.useState(false);
  const [addingTodo, setAdding] = React.useState(false);
  const dispatch = useDispatch();

  const toggleEditing = () => {
    setEditing(!isEditing);
  };

  const toggleAdding = () => {
    setAdding(!addingTodo);
  };

  const handleNameChange = (e) => {
    dispatch(changeTodoListNameActionCreator(id, e.target.value));
  };

  const handleNameKeyDown = (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      toggleEditing();
    }
  };

  return (
    <TodoListCard
      name={name}
      onNameChange={handleNameChange}
      isEditing={isEditing}
      toggleEditing={toggleEditing}
      onNameKeyDown={handleNameKeyDown}
      addingTodo={addingTodo}
      toggleAdding={toggleAdding}
    />
  );
};

export default TodoListCardContainer;
