import { useState } from "react";

function projectform({ onAddProject }) {
  // STATE: form inputs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // EVENT: form submit
  function handleSubmit(e) {
    e.preventDefault();

    onAddProject({ title, description });

    setTitle("");
    setDescription("");
  }

  return (
    <div className="card">
      <h2>Add Project</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)} // EVENT
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)} // EVENT
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default projectform;