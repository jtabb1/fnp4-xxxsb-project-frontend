import { useEffect, useState } from "react";
import { useParams } from "react-router";
import NewSignup from "./NewSignup";

function Camper() {
  const [{ data: camper, error, status }, setCamper] = useState({
    data: null,
    error: null,
    status: "pending",
  });
  const { id } = useParams();

  useEffect(() => {
    fetch(`/employees/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((camper) =>
          setCamper({ data: camper, error: null, status: "resolved" })
        );
      } else {
        r.json().then((err) =>
          setCamper({ data: null, error: err.error, status: "rejected" })
        );
      }
    });
  }, [id]);

  function handleAddActivity(newActivity) {
    setCamper({
      error,
      status,
      data: {
        ...camper,
        tasks: [...camper.tasks, newActivity],
      },
    });
  }

  if (status === "pending") return <h2>Loading...</h2>;
  if (status === "rejected") return <h2>Error: {error}</h2>;

  return (
    <div>
      <h2>{camper.name}'s Activities</h2>
      {/* <p>
        {camper}
      </p> */}
      <ul>
        {camper.tasks.map((activity) => (
          <li key={activity.id}>
            {activity.name} | Task Number: {activity.public_id}
          </li>
        ))}
      </ul>
      <hr />
      <NewSignup onAddActivity={handleAddActivity} camperId={camper.id} />
    </div>
  );
}

export default Camper;
