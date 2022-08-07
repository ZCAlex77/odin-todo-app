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
      document.querySelector('#addTodo').style.display = 'block';
    };
  };

  // const addTodoEvent = (todoId) =>{
  //   const todoElement = document.querySelector(`[data-id="${todoId}"]`);

  //   // todoElement.onclick = function(){

  //   // }

  //   todoElement.children[3].onclick = () =>{
  //     const title = todoElement.children[0];
  //     title.style.textDecoration = 'line-through';
  //   }

  //   todoElement.children[2].onclick = () =>{
  //     projects.filter(project => project.title === )
  //   }
  // }

  return { addLinkEvent };
})();

export default EventController;
