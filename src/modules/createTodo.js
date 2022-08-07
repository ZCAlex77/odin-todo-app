const createTodo = ({ id, title, dueDate, notes, parentProject, status }) => {
  const changeStatus = () => {
    status = !status;
  };

  const getStatus = () => status;

  return {
    id,
    title,
    dueDate,
    notes,
    parentProject,
    changeStatus,
    getStatus,
    status,
  };
};

export default createTodo;
