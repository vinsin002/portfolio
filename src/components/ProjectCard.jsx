import './ProjectCard.css'

function ProjectCard({ project, githubUrl }) {
  const cardContent = (
    <>
      <div className="project-header">
        <h3>{project.title}</h3>
        <span className="project-date">{project.date}</span>
      </div>
      <p className="project-desc">{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <div className="project-links">
        {project.dashboard ? (
          <>
            <a href={project.dashboard} target="_blank" rel="noopener noreferrer" className="project-link project-link-primary" onClick={(e) => e.stopPropagation()}>
              View Dashboard →
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-link" onClick={(e) => e.stopPropagation()}>
              View on GitHub
            </a>
          </>
        ) : (
          <span className="project-link">View on GitHub →</span>
        )}
      </div>
    </>
  )

  if (project.dashboard) {
    return <div className="project-card">{cardContent}</div>
  }
  return (
    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-card project-card-link">
      {cardContent}
    </a>
  )
}

export default ProjectCard
