import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React, { useState } from 'react'
import InputToDo from './InputToDo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// App.jsx

export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    const trimmed = text.trim()
    if (!trimmed) return
    setTodos((prev) => [{ id: Date.now(), text: trimmed, done: false }, ...prev])
  }

  const toggleDone = (id) =>
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))

  const removeTodo = (id) => setTodos((prev) => prev.filter((t) => t.id !== id))

  return (
    <div className="app">
      <h1>Todo</h1>
      <InputToDo onAdd={addTodo} />
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.done ? 'done' : ''}>
            <label>
              <input type="checkbox" checked={todo.done} onChange={() => toggleDone(todo.id)} />
              <span>{todo.text}</span>
            </label>
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}