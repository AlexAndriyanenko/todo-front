import React from 'react';
import TodoListAddCard from "../../../components/home/TodoListAddCard/TodoListAddCard";
import TodoListAddModal from "../../../components/home/TodoListAddModal/TodoListAddModal";
import {useDispatch} from "react-redux";

// actions
import {createTodoListActionCreator} from "../../../redux/actions/todos";


const TodoListAddCardContainer = () => {
    const [opened, setOpened] = React.useState(false);
    const [name, setName] = React.useState('');
    const dispatch = useDispatch();

    const handleCardClick = () => {
        setOpened(true);
    };

    const handleModalClose = () => {
        setOpened(false);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createTodoListActionCreator(name));

        setName('');
        setOpened(false);
    };

    return (
        <>
            <TodoListAddCard onClick={handleCardClick}/>

            <TodoListAddModal
                isOpened={opened}
                onClose={handleModalClose}
                todoListName={name}
                onNameChange={handleNameChange}
                onSubmit={handleSubmit}
            />
        </>
    );
};

export default TodoListAddCardContainer;
