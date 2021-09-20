import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { BASE_URL } from "../constraints/index.js";
// import Ee from "./Employee.js";

import '../styles/TrainingContainer.css'

export default function TrainingContainer() {
  const [trainings, setTrainings] = useState([]);

  // READ

  useEffect(() => {
    fetch(`/trainings`)
      .then((res) => res.json())
      .then(setTrainings)
  }, []);
  
  return (
      <div>
        <h2 className="home-page-header">Training List</h2>
        <ul>
          {trainings.map((training) => (
            <li key={training.id}>
              <span>
                {training.task_id}, {training.employee_id}
              </span> 
            </li>
          ))}
        </ul>
      </div>
  );
}
