import { useState } from 'react';

import Button from './../Button/Button';
import TodoForm from './../TodoForm/TodoForm';

function TodoItem({ task, remove, update }) {
  const [editMode, seteditMode] = useState(false);

  const { id, title } = task;

  const onRemove = (e) => {
    remove(task);
  };

  const onUpdate = (e) => {
    update(e);
    seteditMode(false);
  };

  const openEdit = () => {
    seteditMode(true);
  };

  if (editMode) {
    return <TodoForm updateTask={onUpdate} task={task} />;
  } else {
    return (
      <div>
        {id}-{title}
        <Button handleClick={openEdit}>edit</Button>
        <Button handleClick={onRemove}>delete</Button>
      </div>
    );
  }
}

export default TodoItem;
