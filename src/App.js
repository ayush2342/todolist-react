import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchTodos, addTodo, updateTodo, deleteTodo } from './api/todoApi'
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const getTodos = async () => {
      const todos = await fetchTodos();
      setTasks(todos);
    };
    getTodos();
  }, []);

  const handleAddTask = async () => {
    if (newTask.trim() === '') {
      alert('Task text cannot be empty');
      return;
    }

    const newTaskItem = await addTodo(newTask);
    setTasks([...tasks, newTaskItem]);
    setNewTask('');
  };

  const handleToggleTask = async (taskId) => {
    const task = tasks.find((task) => task.id === taskId);
    const updatedTask = await updateTodo(taskId, !task.completed);
    setTasks(
      tasks.map((t) =>
        t.id === taskId ? { ...t, completed: updatedTask.completed } : t
      )
    );
  };

  const handleDeleteTask = async (taskId) => {
    await deleteTodo(taskId);
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div id="container">
      <h1>Todo List App</h1>
      <AddTodo
        newTask={newTask}
        setNewTask={setNewTask}
        handleAddTask={handleAddTask}
      />
      <span id="total-tasks">Total tasks: <span id="tasks-counter">{tasks.length}</span></span>
      <TodoList
        tasks={tasks}
        handleToggleTask={handleToggleTask}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
