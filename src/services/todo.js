import { TODOS } from './../data/todo';
import { useTodos } from '../hooks/useTodos';

export function getTodos() {
  return new Promise((resolve) => {
    resolve(TODOS);
  });
}

export function InsertTask(task) {
  const [Todos, setTodos] = useTodos();
  setTodos([...Todos, task]);
}
