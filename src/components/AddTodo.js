import React from 'react';

function AddTodo({ newTask, setNewTask, handleAddTask }) {
  return (
    <input
      placeholder="Add a task"
      className="add-task"
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
    />
  );
}

export default AddTodo;
