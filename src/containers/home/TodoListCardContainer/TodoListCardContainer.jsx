import React from 'react';
import TodoListCard from "../../../components/home/TodoListCard/TodoListCard";

const TodoListCardContainer = ({name}) => {
    return (
        <TodoListCard
            name={name}
        />
    )
};

export default TodoListCardContainer;
