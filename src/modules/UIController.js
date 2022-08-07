const UIController = (() => {
  const projectDisplay = document.querySelector('#projects');
  const todoDisplay = document.querySelector('#todos');

  const renderProject = (project, projectsNum) => {
    if (projectsNum < 2) projectDisplay.textContent = '';
    let li = document.createElement('li');
    li.textContent = project.title;
    li.setAttribute('data-id', project.id);

    projectDisplay.append(li);
  };

  const renderProjectList = (projects) => {
    if (!projects.length) {
      projectDisplay.textContent = 'No projects yet.';
      document.querySelector('#todos').textContent = 'No todos set.';
      return;
    }

    projects.forEach((project) => renderProject(project));
  };

  const renderTodos = (todos) => {
    if(!todos.length){
      todoDisplay.textContent = 'This project doesn\'t have any todos';
      return;
    }
    todoDisplay.innerHTML = '';
    todos.forEach((todo) => {
      todoDisplay.innerHTML += `<div class="todo" data-id="${todo.id}">
        <p class="title">${todo.title}</p>
        <p class="dueDate">Due: ${todo.dueDate}</p>
        <button class="delete">X</button>
        <button class="check">&check;</button>
        </div>`;
    });
  };

  return {
    renderProject,
    renderProjectList,
    renderTodos,
  };
})();

export default UIController;
