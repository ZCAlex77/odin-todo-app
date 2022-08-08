const createProject = (id, title, todos) => {
  const addTodo = (newTodo) => {
    todos.push(newTodo);
  };
  const getTodos = () => todos;
  const removeTodo = (id) => {
    todos = todos.filter((todo) => todo.id !== id);
  };

  return { id, title, getTodos, addTodo, removeTodo };
};

export default createProject;
