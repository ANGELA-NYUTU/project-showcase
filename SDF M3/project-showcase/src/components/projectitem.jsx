function projectitem({ project, onDelete }) {
  return (
    <div className="project-item">
      {/* EVENT: delete button */}
      <button onClick={() => onDelete(project.id)}>X</button>

      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default projectitem;