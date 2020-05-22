export const CREATE_TODO_LIST = 'CREATE_TODO_LIST';
export const CHANGE_TODO_LIST_NAME = 'CHANGE_TODO_LIST_NAME';
export const DELETE_TODO_LIST = 'DELETE_TODO_LIST';
export const CREATE_TODO = 'CREATE_TODO';
export const CHANGE_TODO = 'CHANGE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const createTodoListActionCreator = (name) => ({
  type: CREATE_TODO_LIST,
  name,
});

export const changeTodoListNameActionCreator = (id, name) => ({
  type: CHANGE_TODO_LIST_NAME,
  id,
  name,
});

export const deleteTodoListActionCreator = (id) => ({
  type: DELETE_TODO_LIST,
  id,
});

export const createTodoActionCreator = (todoListId, content) => ({
  type: CREATE_TODO,
  todoListId,
  content,
});

export const changeTodoActionCreator = (todoListId, todoId, content) => ({
  type: CHANGE_TODO,
  todoListId,
  todoId,
  content,
});

export const toggleTodoActionCreator = (todoListId, todoId) => ({
  type: TOGGLE_TODO,
  todoListId,
  todoId,
});

export const deleteTodoActionCreator = (todoListId, todoId) => ({
  type: DELETE_TODO,
  todoListId,
  todoId,
});
