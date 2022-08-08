import UIController from './UIController';
import Storage from './Storage';

const EventController = (() => {
  document.querySelector('#allTodos').onclick = function () {
    const todos = Storage.getAllTodos();
    UIController.onProjectClick('allTodos', '', todos);
    todos.forEach((todo) => addTodoEvent(todo));
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
    // todoElement.onclick = function(){

    // }

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
