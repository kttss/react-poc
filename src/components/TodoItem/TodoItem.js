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
      <div className="d-flex justify-content-between">
        <div>
          <b>{id}</b> - {title}
        </div>
        <div>
          <Button type="outline-primary mx-2" handleClick={openEdit} className="mr-2">
            Edit
          </Button>
          <Button type="outline-danger" handleClick={onRemove}>
            Delete
          </Button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
