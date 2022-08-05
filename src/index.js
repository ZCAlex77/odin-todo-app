import './styles/main.scss';
import createProject from './modules/createProject';
import createTodo from './modules/createTodo';
import UIController from './modules/UIController';

const app = (function () {
  const projectForm = document.querySelector('#newProject'),
    todoForm = document.querySelector('#newTodo');

  const setup = () => {
    UIController.renderProjectList();
  };

  return { projectForm, todoForm, setup };
})();

app.setup();

app.projectForm.onsubmit = function (ev) {
  ev.preventDefault();
  const newProject = createProject(this.title.value);
  UIController.addProject(newProject);
  this.reset();
};

app.todoForm.onsubmit = function (ev) {
  ev.preventDefault();
  const newTodo = createTodo(
    this.title.value,
    this.dueDate.value,
    this.notes.value
  );
  UIController.addTodo(newTodo);
  this.reset();
  this.style.display = 'none';
};

document.querySelector('#addTodo').onclick = () => {
  app.todoForm.style.display =
    app.todoForm.style.display === 'none' ? 'flex' : 'none';
};
