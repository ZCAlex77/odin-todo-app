const UIController = (() => {
  const projectDisplay = document.querySelector('#projects');
  const todoDisplay = document.querySelector('#todos');
  const addTodoBtn = document.querySelector('#addTodo');

  const displayProjectTitle = (title) => {
    document.querySelector('#projectTitle').textContent = title
      ? `> ${title}`
      : '';
  };

  const highlightElement = (projectId) => {
    document
      .querySelectorAll('.active')
      .forEach((element) => element.classList.toggle('active'));
    document.querySelector(`[data-id="${projectId}"]`).classList.add('active');
  };

  const renderProject = (project, projectsNum) => {
    if (projectsNum < 2) projectDisplay.textContent = '';
    let li = document.createElement('li');
    li.setAttribute('data-id', project.id);
    li.innerHTML = `
      <span>${project.title}</span>
      <button>X</button>
    `;
    projectDisplay.append(li);
  };

  const removeProject = (projectId) => {
    document.querySelector(`[data-id="${projectId}"]`).remove();
  };

  const renderProjectList = (projects) => {
    if (!projects.length) {
      projectDisplay.textContent = 'No projects yet.';
      return;
    }

    projects.forEach((project) => renderProject(project));
  };

  const renderTodos = (todos) => {
    if (!todos.length) {
      todoDisplay.textContent = "This project doesn't have any todos";
      return;
    }
    todoDisplay.innerHTML = '';
    todos.forEach((todo) => {
      todoDisplay.innerHTML += `<div class="todo${
        todo.getStatus() ? ' checked' : ''
      }" data-id="${todo.id}">
        <p class="notes">${
          todo.notes.length ? todo.notes : 'The are no notes for this todo.'
        }</p>
        <div class="todo-header">
          <p class="title">${todo.title}</p>
          <p class="dueDate">Due: ${todo.dueDate}</p>
          <button class="delete">X</button>
          <button class="check">&check;</button>
          <button class="extend">&#x226B;</button>
        </div>
        </div>`;
    });
  };

  const removeTodo = (id) => {
    document.querySelector(`[data-id="${id}"]`).remove();
    if (!todoDisplay.textContent)
      todoDisplay.textContent = "This project doesn't have any todos";
  };

  const onTodoExtend = (todoId) => {
    let lastExtended = document.querySelector('.extended');
    lastExtended?.classList.toggle('extended');
    if (lastExtended?.getAttribute('data-id') !== todoId)
      document
        .querySelector(`[data-id="${todoId}"]`)
        .classList.toggle('extended');
  };

  const onProjectClick = (projectId, projectTitle, todos) => {
    displayProjectTitle(projectTitle);
    highlightElement(projectId);
    renderTodos(todos);
    if (projectTitle) addTodoBtn.style.display = 'block';
    else addTodoBtn.style.display = 'none';
    document.querySelector('#newTodo').style.display = 'none';
  };

  return {
    onProjectClick,
    onTodoExtend,
    renderProject,
    removeProject,
    renderProjectList,
    renderTodos,
    removeTodo,
  };
})();

export default UIController;
