import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../constraints/index.js";
// import Ee from "./Employee.js";
import EmployeeHire from "./EmployeeHire";
import '../styles/EmployeeContainer.css'

export default function EmployeeContainer() {
  const [employees, setEmployees] = useState([]);

  // READ

  useEffect(() => {
    fetch(BASE_URL + "employees")
      .then((res) => res.json())
      .then(setEmployees)
      .then(console.log);
      // .then((json) => setEmployees(json));
  }, []);
  
  return (
      <div>
          <h2 className="home-page-header">Employee List</h2>
          <ul>
            {employees.map((employee) => (
              <li key={employee.id}>
                <span>
                  {employee.name},   {employee.public_id}
                </span>
                <Link to={`/employees/${employee.id}`}>Details</Link>
              </li>
            ))}
        </ul>
      </div>
  );
}
