import './ProjectCard.css'

function ProjectCard({ project, url }) {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
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
      <span className="project-link">
        View on GitHub →
      </span>
    </a>
  )
}

export default ProjectCard
