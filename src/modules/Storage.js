import createProject from './createProject';
import createTodo from './createTodo';

const Storage = (() => {
  const saveProjects = () => {
    localStorage.setItem(
      'projects',
      JSON.stringify(
        projects.map((project) => {
          return {
            id: project.id,
            title: project.title,
            todos: project.todos,
          };
        })
      )
    );
  };
  const getSavedProjects = () =>
    JSON.parse(localStorage.getItem('projects')) ?? [];

  let projects = [];
  let currentProject = '';

  const setup = (() => {
    projects = getSavedProjects().map((project) =>
      createProject(
        project.id,
        project.title,
        project.todos.map((todo) => createTodo(todo))
      )
    );
  })();

  const getCurrentProject = () => currentProject;
  const setCurrentProject = (project) => (currentProject = project);
  const getProject = (projectId = getCurrentProject()) =>
    projects.filter((project) => project.id === projectId)[0];
  const addProject = (newProject) => {
    projects.push(
      createProject(newProject.id, newProject.title, newProject.todos)
    );
    saveProjects();
  };
  const getProjects = () => projects;

  const addTodo = (newTodo) => {
    getProject().todos.push(createTodo(newTodo));
    saveProjects();
  };
  const removeTodo = (deletedTodo) => {
    let project = getProject(deletedTodo.parent);
    project.todos = project.todos.filter((todo) => todo.id !== deletedTodo.id);
  };
  const getAllTodos = () => {
    let allTodos = [];
    projects.forEach((project) => {
      allTodos = allTodos.concat([...project.todos]);
    });
    return allTodos;
  };

  return {
    getCurrentProject,
    saveProjects,
    getProjects,
    addProject,
    addTodo,
    removeTodo,
    getAllTodos,
    getProject,
    setCurrentProject,
  };
})();

export default Storage;
