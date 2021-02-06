import React, { useState } from 'react';

import Button from './../Button/Button';

function TodoForm(props) {
  const [errors, seterrors] = useState([]);
  const input = React.createRef();
  const { task } = props;

  const handleClick = () => {
    const { value } = input.current;
    console.log(input.current);
    if (value) {
      if (task) {
        task.title = value;
        props.updateTask(task);
        input.current.value = '';
      } else {
        const task = {
          id: Math.floor(Math.random() * 100),
          title: value,
          completed: false
        };
        props.insertTask(task);
      }
      input.current.value = '';
      seterrors([]);
    } else {
      seterrors(['this input is required']);
    }
  };

  return (
    <div>
      <input type="text" ref={input} />
      <Button handleClick={handleClick}>{task ? 'edit' : 'add'}</Button>
      {errors.map((error) => (
        <div>{error}</div>
      ))}
    </div>
  );
}

export default TodoForm;
