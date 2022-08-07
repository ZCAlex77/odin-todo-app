import './styles/main.scss';
import createProject from './modules/createProject';
import createTodo from './modules/createTodo';
import UIController from './modules/UIController';
import EventController from './modules/EventController';
import Storage from './modules/Storage';

const app = (() => {
  const projectForm = document.querySelector('#newProject'),
    todoForm = document.querySelector('#newTodo'),
    addTodoBtn = document.querySelector('#addTodo');

  projectForm.onsubmit = function (ev) {
    ev.preventDefault();
    const newProject = createProject(this.title.value);
    if (
      !Storage.getProjects().filter(
        (project) => project.title === newProject.title
      ).length
    ) {
      addProject(newProject);
      this.reset();
    } else {
      this.title.setCustomValidity(
        "There can't be 2 projects with the same name."
      );
    }
  };

  todoForm.onsubmit = function (ev) {
    ev.preventDefault();
    const newTodo = createTodo(
      this.title.value,
      this.dueDate.value,
      this.notes.value,
      Storage.getProject().id
    );
    addTodo(newTodo);
    this.reset();
    this.style.display = 'none';
  };

  addTodoBtn.onclick = () => {
    todoForm.style.display =
      todoForm.style.display === 'flex' ? 'none' : 'flex';
  };

  const addProject = (newProject) => {
    Storage.addProject(newProject);
    UIController.renderProject(newProject, Storage.getProjects().length);
    EventController.addLinkEvent(newProject);
  };

  const addTodo = (newTodo) => {
    Storage.addTodo(newTodo);
    UIController.renderTodos(Storage.getProject().todos);
    //EventController.addTodoEvent(todo.id);
  };

  const setup = (() => {
    UIController.renderProjectList(Storage.getProjects());
    UIController.renderTodos(Storage.getAllTodos());
    Storage.getProjects().forEach((project) =>
      EventController.addLinkEvent(project)
    );
    // Storage.getAllTodos().forEach((todo) =>
    //   EventController.addTodoEvent(todo.id)
    // );
  })();
})();
