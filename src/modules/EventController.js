import UIController from './UIController';
import Storage from './Storage';

const EventController = (() => {
  const addLinkEvent = (project) => {
    document.querySelector(`[data-id="${project.id}"]`).onclick = function () {
      document.querySelectorAll('#projects li').forEach(li => li.classList.remove('active'));

      this.classList.add('active');
      Storage.setCurrentProject(project.id);

      document.querySelector(
        '#projectTitle'
      ).textContent = `> ${this.textContent}`;

      UIController.renderTodos(Storage.getProject()?.getTodos() ?? []);
      Storage.getProject()?.getTodos().forEach(todo => addTodoEvent(todo));
      document.querySelector('#addTodo').style.display = 'block';
    };
  };

  const addTodoEvent = (todo) =>{
    const todoElement = document.querySelector(`[data-id="${todo.id}"]`);

    // todoElement.onclick = function(){

    // }

    todoElement.children[2].onclick = () =>{
      let parentId = todo.parentProject;
      UIController.removeTodo(todo.id);
      Storage.removeTodo(todo.id, parentId);
    }

    todoElement.children[3].onclick = () =>{
      todo.changeStatus();
      Storage.getProject(todo.parentProject).getTodos().filter(t => t.id === todo.id)[0].status = todo.getStatus();
      todoElement.classList.toggle('checked');
      Storage.saveProjects();
    }
  }

  return { addLinkEvent, addTodoEvent };
})();

export default EventController;
