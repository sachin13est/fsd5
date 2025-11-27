import React, { useState, useEffect } from "react";

const styles = {
  container: {
    maxWidth: 600,
    margin: "24px auto",
    fontFamily: "sans-serif",
    padding: "16px",
    background: "#f9fafb",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  title: {
    marginTop: 0,
    marginBottom: "16px",
    color: "#1f2937",
  },
  inputContainer: {
    display: "flex",
    gap: 8,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    padding: "10px 12px",
    fontSize: 14,
    border: "1px solid #d1d5db",
    borderRadius: "4px",
    outline: "none",
  },
  inputFocus: {
    borderColor: "#3b82f6",
  },
  button: {
    padding: "10px 16px",
    fontSize: 14,
    background: "#3b82f6",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: 500,
  },
  buttonHover: {
    background: "#2563eb",
  },
  taskList: {
    listStyle: "none",
    paddingLeft: 0,
    margin: 0,
  },
  taskItem: {
    display: "flex",
    gap: 8,
    alignItems: "center",
    padding: "10px",
    marginBottom: 6,
    background: "white",
    borderRadius: "4px",
    border: "1px solid #e5e7eb",
  },
  taskItemCompleted: {
    opacity: 0.6,
  },
  checkbox: {
    width: 18,
    height: 18,
    cursor: "pointer",
  },
  taskText: {
    flex: 1,
  },
  taskTextCompleted: {
    textDecoration: "line-through",
    color: "#9ca3af",
  },
  removeButton: {
    fontSize: 12,
    padding: "6px 10px",
    background: "#ef4444",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  removeButtonHover: {
    background: "#dc2626",
  },
  emptyState: {
    color: "#9ca3af",
    textAlign: "center",
    padding: "24px",
    background: "white",
    borderRadius: "4px",
  },
  taskCount: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 12,
  },
};

export default function InputToDo() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem("todoTasks");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todoTasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTaskHandler = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setTasks((prev) => [...prev, { id: Date.now(), text: trimmed, completed: false }]);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTaskHandler();
  };

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const totalCount = tasks.length;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>✓ To-Do List</h1>

      <div style={styles.inputContainer}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a new task..."
          style={styles.input}
          aria-label="New task input"
        />
        <button
          onClick={addTaskHandler}
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.background = styles.buttonHover.background)}
          onMouseLeave={(e) => (e.target.style.background = styles.button.background)}
          aria-label="Add task button"
        >
          Add
        </button>
      </div>

      {tasks.length === 0 ? (
        <div style={styles.emptyState}>
          <p>No tasks yet. Add one to get started!</p>
        </div>
      ) : (
        <>
          <ul style={styles.taskList}>
            {tasks.map((task) => (
              <li
                key={task.id}
                style={{
                  ...styles.taskItem,
                  ...(task.completed && styles.taskItemCompleted),
                }}
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  style={styles.checkbox}
                  aria-label={`Mark "${task.text}" as ${task.completed ? "incomplete" : "complete"}`}
                />
                <span
                  style={{
                    ...styles.taskText,
                    ...(task.completed && styles.taskTextCompleted),
                  }}
                >
                  {task.text}
                </span>
                <button
                  onClick={() => removeTask(task.id)}
                  style={styles.removeButton}
                  onMouseEnter={(e) => (e.target.style.background = styles.removeButtonHover.background)}
                  onMouseLeave={(e) => (e.target.style.background = styles.removeButton.background)}
                  aria-label={`Delete "${task.text}"`}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <div style={styles.taskCount}>
            {completedCount} of {totalCount} tasks completed
          </div>
        </>
      )}
    </div>
  );
}