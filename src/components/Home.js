import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import NewCamper from "./NewCamper";

function Home() {
  const [campers, setCampers] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("/tasks")
      .then((r) => r.json())
      .then(setActivities);
  }, []);

  useEffect(() => {
    fetch("/employees")
      .then((r) => r.json())
      .then(setCampers);
  }, []);

  function handleAddCamper(newCamper) {
    setCampers((campers) => [...campers, newCamper]);
  }

  function handleDeleteActivity(id) {
    fetch(`/tasks/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setActivities((activities) =>
          activities.filter((activity) => activity.id !== id)
        );
      }
    });
  }

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <span>
              {activity.name} | Task Number: {activity.public_id} &nbsp;
            </span>
            <button onClick={() => handleDeleteActivity(activity.id)}>
              Can't delete because it's history (can only correct record).
            </button>
          </li>
        ))}
      </ul>
      <hr />
      <h2>Employees</h2>
      <ul>
        {campers.map((camper) => (
          <li key={camper.id}>
            <span>
              {camper.name}, Employee Number: {camper.public_id} &nbsp;
            </span>
            <Link to={`/employees/${camper.id}`}>View What They Are Trained On</Link>
          </li>
        ))}
      </ul>
      <hr />
      {/* <NewCamper onAddCamper={handleAddCamper} /> */}
    </div>
  );
}

export default Home;
