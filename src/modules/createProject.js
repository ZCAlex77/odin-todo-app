const createProject = (title) => {
  const todos = [];

  const addTodo = (todo) => todos.push(todo);

  const removeTodo = (id) => {
    todos = todos.filter((todo) => todo.id !== id);
  };

  const getTodos = () => todos;

  return {title, addTodo, removeTodo, getTodos};
};

export default createProject;
