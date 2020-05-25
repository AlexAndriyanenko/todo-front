import {
    CREATE_TODO_LIST,
    CHANGE_TODO_LIST_NAME,
    DELETE_TODO_LIST,
    CREATE_TODO,
    CHANGE_TODO,
    TOGGLE_TODO,
    DELETE_TODO,
} from "../actions/todos";
import {generateId} from "../../utils/generateId";

const initialState = {
    todoLists: [],
};

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TODO_LIST:
            return {
                ...state,
                todoLists: [
                    ...state.todoLists,
                    {
                        id: generateId(),
                        name: action.name,
                        todos: [],
                    }
                ],
            };
        case CHANGE_TODO_LIST_NAME:
            return {
                ...state,
                todoLists: state.todoLists.map((todoList) => {
                    if (todoList.id === action.id) {
                        return {
                            ...todoList,
                            name: action.name,
                        }
                    }

                    return todoList;
                }),
            };
        case DELETE_TODO_LIST:
            return {
                ...state,
                todoLists: state.todoLists.filter((todoList) => todoList.id !== action.id),
            };
        case CREATE_TODO:
            return {
                ...state,
                todoLists: state.todoLists.map((todoList) => {
                    if (todoList.id === action.todoListId) {
                        return {
                            ...todoList,
                            todos: [
                                ...todoList.todos,
                                {
                                    id: generateId(),
                                    content: action.content,
                                    isChecked: false,
                                }
                            ]
                        }
                    }

                    return todoList;
                }),
            };
        case CHANGE_TODO:
            return {
                ...state,
                todoLists: state.todoLists.map((todoList) => {
                    if (todoList.id === action.todoListId) {
                        return {
                            ...todoList,
                            todos: todoList.todos.map((todo) => {
                                if (todo.id === action.todoId) {
                                    return {
                                        ...todo,
                                        content: action.content,
                                    };
                                }

                                return todo;
                            }),
                        }
                    }

                    return todoList;
                })
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todoLists: state.todoLists.map((todoList) => {
                    if (todoList.id === action.todoListId) {
                        return {
                            ...todoList,
                            todos: todoList.todos.map((todo) => {
                                if (todo.id === action.todoId) {
                                    return {
                                        ...todo,
                                        isChecked: !todo.isChecked,
                                    };
                                }

                                return todo;
                            }),
                        }
                    }

                    return todoList;
                })
            };
        case DELETE_TODO:
            return {
                ...state,
                todoLists: state.todoLists.map((todoList) => {
                    if (todoList.id === action.todoListId) {
                        return {
                            ...todoList,
                            todos: todoList.todos.filter((todo) => todo.id !== action.todoId)
                        }
                    }

                    return todoList;
                })
            };
        default:
            return state;
    }
};
