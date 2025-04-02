// TaskForm.js
import React, { useState } from 'react';

function TaskForm({ addTask, taskToEdit, updateTask }) {
  const [taskName, setTaskName] = useState(taskToEdit ? taskToEdit.name : '');
  const [taskDescription, setTaskDescription] = useState(taskToEdit ? taskToEdit.description : '');
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!taskName || !taskDescription) {
      alert('Please fill out both fields');
      return;
    }

    const task = { name: taskName, description: taskDescription, completed: false };
    
    if (taskToEdit) {
      updateTask(taskToEdit.id, task);
    } else {
      addTask(task);
    }

    setTaskName('');
    setTaskDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <textarea
        placeholder="Task Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      ></textarea>
      <button type="submit">{taskToEdit ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
}

export default TaskForm;

