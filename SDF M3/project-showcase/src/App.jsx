import { useState } from "react";
import Home from "./pages/home";

function App() {
  // STATE: stores all projects
  const [projects, setProjects] = useState([]);

  // STATE: stores search input
  const [search, setSearch] = useState("");

  // EVENT: add new project
  function handleAddProject(project) {
    const newProject = {
      ...project,
      id: Date.now(), // unique id
    };
    setProjects([...projects, newProject]);
  }

  // EVENT: delete project
  function handleDelete(id) {
    setProjects(projects.filter((p) => p.id !== id));
  }

  // FILTER: search functionality
  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Home
      projects={filteredProjects} // PROPS: data passed down
      onAddProject={handleAddProject} // PROPS: function passed down
      onDelete={handleDelete}
      search={search}
      setSearch={setSearch}
    />
  );
}

export default App;