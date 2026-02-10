import './ProjectCard.css'

const DashboardIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="9" rx="1"/>
    <rect x="14" y="3" width="7" height="5" rx="1"/>
    <rect x="14" y="12" width="7" height="9" rx="1"/>
    <rect x="3" y="16" width="7" height="5" rx="1"/>
  </svg>
)

function ProjectCard({ project, githubUrl }) {
  const cardContent = (
    <>
      <div className="project-header">
        <h3>{project.title}</h3>
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
            <a href={project.dashboard} target="_blank" rel="noopener noreferrer" className="dashboard-btn" onClick={(e) => e.stopPropagation()}>
              <span className="dashboard-btn-icon"><DashboardIcon /></span>
              <span className="dashboard-btn-text">View Power BI Dashboard</span>
              <span className="dashboard-btn-arrow">→</span>
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
