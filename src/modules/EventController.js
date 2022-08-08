import { v4 as uuidv4 } from 'uuid';
import UIController from './UIController';
import Storage from './Storage';

const EventController = (() => {
  const projectForm = document.querySelector('#newProject'),
    todoForm = document.querySelector('#newTodo'),
    addTodoBtn = document.querySelector('#addTodo'),
    allTodosBtn = document.querySelector('#allTodos');

  projectForm.onsubmit = function (ev) {
    ev.preventDefault();
    const newProject = { id: uuidv4(), title: this.title.value, todos: [] };
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

    if (todoForm.style.display === 'flex') todoForm.title.focus();
  };

  allTodosBtn.onclick = function () {
    const todos = Storage.getAllTodos();
    UIController.onProjectClick('allTodos', '', todos);
    todos.forEach((todo) => addTodoEvent(todo));
  };

  const addProject = (newProject) => {
    Storage.addProject(newProject);
    UIController.renderProject(newProject, Storage.getProjects().length);
    addLinkEvent(newProject);
  };

  const addTodo = (newTodo) => {
    Storage.getProjects((project) => project);
    Storage.addTodo(newTodo);
    UIController.renderTodos(Storage.getProject().getTodos());
    Storage.getProject()
      .getTodos()
      .forEach((todo) => addTodoEvent(todo));
  };

  const addLinkEvent = (project) => {
    document.querySelector(`[data-id="${project.id}"]`).onclick = function () {
      const todos = Storage.getProject(project.id)?.getTodos() ?? [];
      UIController.onProjectClick(project.id, project.title, todos);
      Storage.setCurrentProject(project.id);
      todos.forEach((todo) => addTodoEvent(todo));
    };
  };

  const addTodoEvent = (todo) => {
    const todoElement = document.querySelector(`[data-id="${todo.id}"]`)
      .children[1];

    todoElement.children[2].onclick = () => {
      let parentId = todo.parentProject;
      UIController.removeTodo(todo.id);
      Storage.removeTodo(todo.id, parentId);
    };

    todoElement.children[3].onclick = () => {
      todo.changeStatus();
      Storage.getProject(todo.parentProject)
        .getTodos()
        .filter((t) => t.id === todo.id)[0].status = todo.getStatus();
      todoElement.parentElement.classList.toggle('checked');
      Storage.saveProjects();
    };

    todoElement.children[4].onclick = () => {
      UIController.onTodoExtend(todo.id);
    };
  };

  return { addLinkEvent, addTodoEvent };
})();

export default EventController;
