const createProject = (id, title, todos) => {
  const addTodo = (newTodo) => {
    todos.push(newTodo);
  };
  const removeTodo = (id) => {
    todos = todos.filter((todo) => todo.id !== id);
  };

  return { id, title, todos, addTodo, removeTodo };
};

export default createProject;
