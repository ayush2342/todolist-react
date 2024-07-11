import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, handleToggleTask, handleDeleteTask }) {
  return (
    <ul id="list">
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          handleToggleTask={handleToggleTask}
          handleDeleteTask={handleDeleteTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;
