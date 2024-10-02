import React, { useState } from "react";

function WorkoutForm() {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  const handelSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      console.log("workout is added", json);
    }
  };

  return (
    <div className="create">
      <h3>Add a New Workout</h3>
      <form onSubmit={handelSubmit}>
        <label>Excersize Title:</label>
        <input
          type="text"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label>Load (in kg):</label>
        <input
          type="number"
          required
          onChange={(e) => setLoad(e.target.value)}
          value={load}
        />

        <label>Number of Reps:</label>
        <input
          type="number"
          required
          onChange={(e) => setReps(e.target.value)}
          value={reps}
        />
        <button>Add Workout</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}

export default WorkoutForm;
