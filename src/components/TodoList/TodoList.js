import { useTodos } from './../../hooks/useTodos';
import TodoItem from './../TodoItem/TodoItem';
import TodoForm from './../TodoForm/TodoForm';

function TodoList() {
  const [Todos, setTodos] = useTodos();
  const handleRemove = (e, index) => {
    Todos.splice(index, 1);
    setTodos([...Todos]);
  };

  const handleInsert = (task) => {
    setTodos([...Todos, task]);
  };
  const handleUpdate = (task, index) => {
    Todos[index] = task;
    setTodos([...Todos]);
  };

  const list = Todos.map((task, i) => (
    <TodoItem task={task} remove={(e) => handleRemove(e, i)} update={(t) => handleUpdate(t, i)} key={task.id} />
  ));

  return (
    <div>
      <TodoForm insertTask={handleInsert} />
      {list}
    </div>
  );
}

export default TodoList;
