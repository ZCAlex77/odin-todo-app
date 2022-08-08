import './styles/main.scss';
import { v4 as uuidv4 } from 'uuid';
import UIController from './modules/UIController';
import EventController from './modules/EventController';
import Storage from './modules/Storage';

const app = (() => {
  const projectForm = document.querySelector('#newProject'),
    todoForm = document.querySelector('#newTodo'),
    addTodoBtn = document.querySelector('#addTodo');

  projectForm.onsubmit = function (ev) {
    ev.preventDefault();
    const newProject = {id: uuidv4(), title: this.title.value, todos: []};
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
    const newTodo = {
      id: uuidv4(),
      title: this.title.value,
      dueDate: this.dueDate.value,
      notes: this.notes.value,
      parentProject: Storage.getCurrentProject(),
      status: false,
    };
    addTodo(newTodo);
    this.reset();
    this.style.display = 'none';
  };

  addTodoBtn.onclick = () => {
    todoForm.style.display =
      todoForm.style.display === 'flex' ? 'none' : 'flex';

    if(todoForm.style.display === 'flex') todoForm.title.focus();
  };

  const addProject = (newProject) => {
    Storage.addProject(newProject);
    UIController.renderProject(newProject, Storage.getProjects().length);
    EventController.addLinkEvent(newProject);
  };

  const addTodo = (newTodo) => {
    Storage.getProjects((project) => project);
    Storage.addTodo(newTodo);
    UIController.renderTodos(Storage.getProject().getTodos());
    EventController.addTodoEvent(newTodo);
  };

  const setup = (() => {
    const allTodos = Storage.getAllTodos();
    UIController.renderProjectList(Storage.getProjects());
    UIController.renderTodos(allTodos);
    Storage.getProjects().forEach((project) =>
      EventController.addLinkEvent(project)
    );
    allTodos.forEach((todo) => EventController.addTodoEvent(todo));
  })();
})();
