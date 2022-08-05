import { v4 as uuidv4 } from 'uuid';

const createProject = (title, todos = []) => {
  const id = uuidv4();

  const addTodo = (todo) => todos.push(todo);
  const removeTodo = (id) => {
    todos = todos.filter((todo) => todo.id !== id);
  };

  return { id, title, todos, addTodo, removeTodo };
};

export default createProject;
