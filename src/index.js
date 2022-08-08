import './styles/main.scss';
import UIController from './modules/UIController';
import EventController from './modules/EventController';
import Storage from './modules/Storage';

const app = (() => {
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
