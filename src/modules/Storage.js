const Storage = (() => {
  const saveProjects = (projects) => {
    localStorage.setItem('projects', JSON.stringify(projects));
  };
  const getProjects = () => JSON.parse(localStorage.getItem('projects')) ?? [];

  return { saveProjects, getProjects };
})();

export default Storage;
