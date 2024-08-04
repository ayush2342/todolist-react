# Todo List App

This is a Todo List application built with React.

## Features

- Fetch and display todo items from an API.
- Add a new todo item.
- Mark a todo item as completed or not completed.
- Delete a todo item.


## How to Start the Project

1. Clone the repository.
  https://github.com/ayush2342/todolist-react.git

2. Navigate to the project directory.
  cd todolist-app
3. Install the dependencies.
  npm install
4. Start the development server.
  npm start

# API Details
The application interacts with the following API: JSONPlaceholder Todos API.

Fetch Todos: GET request to /todos
Add Todo: POST request to /todos
Update Todo: PUT request to /todos/{id}
Delete Todo: DELETE request to /todos/{id}

# Components
App.js
The main component that manages the state and renders the application.

AddTodo.js
Component for adding a new todo item.

TodoList.js
Component that renders the list of todo items.

TodoItem.js
Component that represents a single todo item.

API Utility
api-todoApi.js
Utility functions for interacting with the API.

fetchTodos: Fetches the list of todos.
addTodo: Adds a new todo.
updateTodo: Updates the completion status of a todo.
deleteTodo: Deletes a todo.
CSS Styles
The application uses a custom CSS file (App.css) for styling.

# Image Assets
bin.png: Delete icon used in the application. It is placed in the src/components folder.

# Video Demonstration
Please refer to the video demonstration for a walkthrough of the application features and code explanation. The video is available at: https://www.youtube.com/watch?v=gZ7kLgBJGyw

# Hosting
The application is hosted at https://ayush2342.github.io/todolist-react