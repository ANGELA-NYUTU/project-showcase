import projectitem from "./projectitem";

function projectlist({ projects, onDelete }) {
  return (
    <div className="card">
      {projects.map((project) => (
        <projectitem
          key={project.id} // REQUIRED in lists
          project={project}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default projectlist;