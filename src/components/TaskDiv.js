import React, { useState } from "react"; 
import '../styles/TrainingContainer.css'

export default function TaskDiv({ task, onDeleteTask, onUpdateTask }) {
  const [newTask, setNewTask] = useState({ ...task });
  const [editMode, setEditMode] = useState(false);

  function handleChange(e) {
    const updatedValue = { ...newTask };
    updatedValue[e.target.name] = e.target.value;
    setNewTask({ ...updatedValue });
  }

  function toggleEdit() {
    setEditMode(!editMode);
  }

  function handleUpdate(e) {
    e.preventDefault();
    onUpdateTask(newTask);
    setEditMode(false);
  }

  return(
    <div className="col category-card">
      <p>{task.name}</p>

      {editMode && (
        <div>
          <button onClick={() => onDeleteTask(task.id)}>Delete Task</button>

          <form onSubmit={handleUpdate}>
            <input 
              name="name" 
              value={newTask.name} 
              onChange={handleChange} 
            />
            <button type="submit">Update Task</button>
          </form>
        </div>
      )}
      <button onClick={toggleEdit}>Edit</button>
    </div>
  );
}
