import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { BASE_URL } from "../constraints/index.js";
// import Ee from "./Employee.js";

import TaskCreate from "./TaskCreate";

import '../styles/TaskContainer.css'

export default function TaskContainer() {
  const [tasks, setTasks] = useState([]);

  // READ

  useEffect(() => {
    fetch(`/tasks`)
      .then((res) => res.json())
      .then(setTasks)
      .then(console.log);
      // .then((json) => setEmployees(json));
  }, []);
  
  function onCreateTask(newETask) {
    setTasks((tasks) => [...tasks, newETask])
  }

  return (
      <div>
        <h2 className="home-page-header">Task List</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <span>
                {task.name},   {task.public_id}
              </span>
              {/* <Link to={`/tasks/${task.id}`}>Details</Link> */}
            </li>
          ))}
        </ul>
        <TaskCreate onCreateTask={onCreateTask} />
      </div>
  );
}
