import { v4 as uuidv4 } from 'uuid';

const createTodo = (title, dueDate, notes) => {
  const done = false;
  const id = uuidv4();

  const changeDone = () => {
    done = !done;
  };

  return { title, dueDate, notes, changeDone };
};

export default createTodo;
