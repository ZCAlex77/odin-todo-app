import './styles/main.scss';
import createProject from './modules/createProject';
import UIController from './modules/UIController';

const app = () => {
  UIController.renderProjectList();
};

app();

document.querySelector('#newProject').onsubmit = function (ev) {
  ev.preventDefault();
  const newProject = createProject(this.title.value);
  UIController.addProject(newProject);
  this.reset();
};
