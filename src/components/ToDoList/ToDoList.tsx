import React, { useState, useEffect } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[] | null>(null); // Start with null to prevent SSR mismatch
  const [task, setTask] = useState("");

  // Load todos from localStorage once the component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTodos = localStorage.getItem("todos");
      setTodos(savedTodos ? JSON.parse(savedTodos) : []);
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== "undefined" && todos !== null) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = () => {
    if (task.trim() === "") return;

    const newTodo = { id: Date.now(), text: task, completed: false };
    setTodos((prevTodos) => (prevTodos ? [...prevTodos, newTodo] : [newTodo]));
    setTask(""); // Clear input after adding
  };

  const toggleComplete = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos
        ? prevTodos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        : []
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos ? prevTodos.filter((todo) => todo.id !== id) : []
    );
  };

  // Prevent hydration issues by returning "Loading..." until todos are loaded
  if (todos === null) {
    return <p className="text-center text-gray-500">Loading tasks...</p>;
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        To-Do List
      </h2>

      {/* Input Field */}
      <div className="flex gap-2">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="flex-1 px-3 py-2 border dark:bg-gray-700 dark:text-white rounded-lg focus:ring focus:ring-blue-300 focus:outline-none transition"
          placeholder="Add a new task..."
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      {/* Tasks List */}
      <ul className="mt-4 space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-2 border rounded-lg dark:border-gray-600"
          >
            <span
              className={`flex-1 cursor-pointer ${
                todo.completed
                  ? "line-through text-gray-500"
                  : "text-gray-900 dark:text-gray-100"
              }`}
              onClick={() => toggleComplete(todo.id)}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="px-3 py-1 text-red-500 hover:text-red-700"
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
