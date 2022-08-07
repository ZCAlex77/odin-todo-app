const Storage = (() => {
  const saveProjects = () => {
    localStorage.setItem('projects', JSON.stringify(projects));
  };
  const getSavedProjects = () => JSON.parse(localStorage.getItem('projects')) ?? [];

  let projects = getSavedProjects();
  let currentProject = '';

  const setCurrentProject = (project) => currentProject = project;
  const getProject = (projectId = currentProject) => projects.filter(project => project.id === projectId)[0];

  const addProject = (newProject) => {
    projects.push(newProject);
    saveProjects();
  }
  const getProjects = () => projects;

  const addTodo = (newTodo) =>{
    getProject().todos.push(newTodo);
    saveProjects();
  }
  const removeTodo = (deletedTodo) =>{
    let project = getProject(deletedTodo.parent);
    project.todos = project.todos.filter(todo => todo.id !== deletedTodo.id);
  }
  const getAllTodos = () => {
    let allTodos = [];
    projects.forEach((project) => {
      allTodos = allTodos.concat([...project.todos]);
    });

    return allTodos;
  }

  return { getProjects, addProject, addTodo, removeTodo, getAllTodos, getProject, setCurrentProject };
})();

export default Storage;
