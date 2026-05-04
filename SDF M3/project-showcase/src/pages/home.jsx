import projectform from "../components/projectform";
import searchbar from "../components/searchbar";
import projectlist from "../components/projectlist";

function home({ projects, onAddProject, onDelete, search, setSearch }) {
  return (
    <div className="container">
      <h1>Personal Project Showcase App</h1>

      {/* COMPONENT: form */}
      <projectform onAddProject={onAddProject} />

      {/* COMPONENT: search */}
      <searchbar search={search} setSearch={setSearch} />

      {/* COMPONENT: list */}
      <projectlist projects={projects} onDelete={onDelete} />
    </div>
  );
}

export default home;