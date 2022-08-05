const UIController = (function () {
  const projects = [];
  const projectDisplay = document.querySelector('#projects');

  const addProject = (project) => {
    projects.push(project);
    renderProject(project);
  };

  const getProjects = () => projects;

  const renderProject = (project) => {
    if (projects.length < 2) projectDisplay.textContent = '';

    let li = document.createElement('li');
    li.textContent = project.title;
    li.onclick = function () {
      document
        .querySelectorAll('#projects > li')
        .forEach((item) => item.classList.remove('active'));
      this.classList.add('active');

      document.querySelector(
        '#projectTitle'
      ).textContent = `> ${li.textContent}`;
    };

    projectDisplay.append(li);
  };

  const renderProjectList = () => {
    if (!projects.length) {
      projectDisplay.textContent = 'No projects yet.';
      return;
    }
    projects.forEach((project) => renderProject(project));
  };

  return { getProjects, addProject, renderProjectList };
})();

export default UIController;
