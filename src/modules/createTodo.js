import { v4 as uuidv4 } from 'uuid';

const createTodo = (title, dueDate, notes, parentProject) => {
  const done = false;
  const id = uuidv4();

  const changeDone = () => {
    done = !done;
  };

  return { id, title, dueDate, notes, parentProject, changeDone };
};

export default createTodo;
