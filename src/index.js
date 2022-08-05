import './styles/main.scss';
import createProject from './modules/createProject';
import createTodo from './modules/createTodo';
import UIController from './modules/UIController';
import Storage from './modules/storage';

const app = (() => {
  const projectForm = document.querySelector('#newProject'),
    todoForm = document.querySelector('#newTodo');
  let projects = [];
  let currentProject = '';

  const addLinkEvent = (selector) => {
    document.querySelector(selector).onclick = function () {
      document
        .querySelectorAll('#projects > li')
        .forEach((item) => item.classList.remove('active'));

      this.classList.add('active');
      currentProject = this.textContent;

      document.querySelector(
        '#projectTitle'
      ).textContent = `> ${this.textContent}`;

      document.querySelector('#addTodo').style.display = 'block';

      UIController.renderTodos(getCurrentProject().todos);
    };
  };

  const saveProjects = () => {
    Storage.saveProjects(
      projects.map((project) => {
        return {
          id: project.id,
          title: project.title,
          todos: project.todos,
        };
      })
    );
  };

  const getProjects = () => projects;

  const addProject = (project) => {
    projects.push(project);
    UIController.renderProject(project, projects.length);
    saveProjects();
    addLinkEvent(`[data-id="${project.id}"]`);
  };

  const addTodo = (todo) => {
    getCurrentProject().addTodo(todo);
    UIController.renderTodos(getCurrentProject().todos);
    saveProjects();
  };

  const getCurrentProject = () =>
    projects.filter((project) => project.title === currentProject)[0];

  const setup = () => {
    let allTodos = [];
    Storage.getProjects().forEach((project) => {
      addProject(createProject(project.title, project.todos));
      allTodos = allTodos.concat([...project.todos]);
    });
    UIController.renderTodos(allTodos);
  };

  return { getProjects, addProject, addTodo, projectForm, todoForm, setup };
})();

app.setup();

app.projectForm.onsubmit = function (ev) {
  ev.preventDefault();
  const newProject = createProject(this.title.value);
  if (
    !app.getProjects().filter((project) => project.title === newProject.title)
      .length
  ) {
    app.addProject(newProject);
    this.reset();
  } else {
    this.title.setCustomValidity(
      "There can't be 2 projects with the same name."
    );
  }
};

app.todoForm.onsubmit = function (ev) {
  ev.preventDefault();
  const newTodo = createTodo(
    this.title.value,
    this.dueDate.value,
    this.notes.value
  );
  app.addTodo(newTodo);
  this.reset();
  this.style.display = 'none';
};

document.querySelector('#addTodo').onclick = () => {
  app.todoForm.style.display =
    app.todoForm.style.display === 'flex' ? 'none' : 'flex';
};
