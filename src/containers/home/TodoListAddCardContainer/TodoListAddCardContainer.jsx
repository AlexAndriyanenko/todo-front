import React from 'react';
import { useDispatch } from 'react-redux';
import TodoListAddCard from '../../../components/home/TodoListAddCard/TodoListAddCard';

// actions
import { createTodoListActionCreator } from '../../../redux/actions/todos';


const TodoListAddCardContainer = () => {
  const [addingTodoList, setAdding] = React.useState(false);
  const [name, setName] = React.useState('');
  const dispatch = useDispatch();

  const toggleAdding = () => {
    setAdding(!addingTodoList);
  };

  const handleAddTodoListCancel = () => {
    setName('');
    toggleAdding();
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createTodoListActionCreator(name));

    setName('');
    toggleAdding();
  };

  return (
    <TodoListAddCard
      addingTodoList={addingTodoList}
      toggleAdding={toggleAdding}
      name={name}
      onNameChange={handleNameChange}
      onAddTodoListCancel={handleAddTodoListCancel}
      onSubmit={handleSubmit}
    />
  );
};

export default TodoListAddCardContainer;
