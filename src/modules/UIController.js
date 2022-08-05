const UIController = (function () {
  const projects = [];
  const projectDisplay = document.querySelector('#projects');
  const todoDisplay = document.querySelector('#todos');
  let currentProject = '';

  const addProject = (project) => {
    projects.push(project);
    renderProject(project);
  };

  const addTodo = (todo) => {
    getCurrentProject().addTodo(todo);
    renderTodos();
  };

  const getProjects = () => projects;
  const getCurrentProject = () =>
    projects.filter((project) => project.title === currentProject)[0];

  const renderProject = (project) => {
    if (projects.length < 2) projectDisplay.textContent = '';

    let li = document.createElement('li');
    li.textContent = project.title;
    li.onclick = function () {
      document
        .querySelectorAll('#projects > li')
        .forEach((item) => item.classList.remove('active'));
      this.classList.add('active');
      currentProject = li.textContent;

      document.querySelector(
        '#projectTitle'
      ).textContent = `> ${li.textContent}`;

      document.querySelector('#addTodo').style.display = 'block';

      renderTodos();
    };

    projectDisplay.append(li);
  };

  const renderProjectList = () => {
    if (!projects.length) {
      projectDisplay.textContent = 'No projects yet.';
      document.querySelector('#todos').textContent = 'No todos set.';
      return;
    }

    projects.forEach((project) => renderProject(project));
  };

  const renderTodos = () => {
    todoDisplay.innerHTML = '';
    const project = getCurrentProject();

    project.getTodos().forEach((todo) => {
      todoDisplay.innerHTML += `<div class="todo">
        <p class="title">${todo.title}</p>
        <p class="dueDate">Due: ${todo.dueDate}</p>
        <button class="delete">X</button>
        <button class="check">&check;</button>
        </div>`;
    });
  };

  return {
    currentProject,
    getProjects,
    addProject,
    addTodo,
    renderProjectList,
    renderTodos,
  };
})();

export default UIController;
