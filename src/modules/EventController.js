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

      UIController.renderTodos(Storage.getProject()?.todos ?? []);
      Storage.getProject()?.todos.forEach(todo => addTodoEvent(todo));
      document.querySelector('#addTodo').style.display = 'block';
    };
  };

  const addTodoEvent = (todo) =>{
    const todoElement = document.querySelector(`[data-id="${todo.id}"]`);

    // todoElement.onclick = function(){

    // }

    todoElement.children[3].onclick = () =>{
      todo.changeStatus();
      Storage.getProject(todo.parentProject).todos.filter(t => t.id === todo.id)[0].status = todo.getStatus();
      todoElement.classList.toggle('checked');
      Storage.saveProjects();
    }

    todoElement.children[2].onclick = () =>{

    }
  }

  return { addLinkEvent, addTodoEvent };
})();

export default EventController;
