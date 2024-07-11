const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.slice(0, 10); 
};

export const addTodo = async (title) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify({
      title,
      completed: false,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json();
  return data;
};

export const updateTodo = async (id, completed) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ completed }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json();
  return data;
};

export const deleteTodo = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return id;
};
