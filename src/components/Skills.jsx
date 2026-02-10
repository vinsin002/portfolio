import { useEffect } from 'react'
import './Skills.css'

const SKILLS = [
  { name: 'Python', category: 'Language' },
  { name: 'SQL', category: 'Database' },
  { name: 'Pandas', category: 'Data' },
  { name: 'NumPy', category: 'Data' },
  { name: 'Scikit-learn', category: 'ML' },
  { name: 'Jupyter', category: 'Tools' },
  { name: 'Data Visualization', category: 'Analytics' },
  { name: 'Predictive Modeling', category: 'ML' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'React', category: 'Frontend' },
]

function Skills({ onViewChange }) {
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('skills')
      if (section) {
        const rect = section.getBoundingClientRect()
        if (rect.top < 300 && rect.bottom > 200) onViewChange('skills')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [onViewChange])

  return (
    <section id="skills">
      <h2 className="section-title">Skills & <span>Tools</span></h2>
      <div className="skills-grid">
        {SKILLS.map((skill) => (
          <div key={skill.name} className="skill-badge">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-category">{skill.category}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
