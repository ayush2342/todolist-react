import React from 'react';
import bin from './bin.png';

function TodoItem({ task, handleToggleTask, handleDeleteTask }) {
  return (
    <li>
      <input
        type="checkbox"
        id={task.id}
        checked={task.completed}
        onChange={() => handleToggleTask(task.id)}
        className="custom-checkbox"
      />
      <label htmlFor={task.id}>{task.title}</label>
      <img
        src={bin}
        alt="Delete"
        className="delete"
        onClick={() => handleDeleteTask(task.id)}
      />
    </li>
  );
}

export default TodoItem;
