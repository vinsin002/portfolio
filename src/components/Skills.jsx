import { useEffect } from 'react'
import './Skills.css'

const SKILL_CATEGORIES = [
  { category: 'Languages', skills: ['Python', 'SQL', 'JavaScript'] },
  { category: 'Math & Statistics', skills: ['Statistics', 'Probability', 'Linear Algebra', 'Hypothesis Testing'] },
  { category: 'ML & Data', skills: ['ML Algorithms', 'Scikit-learn', 'Pandas', 'NumPy'] },
  { category: 'BI & Analytics', skills: ['Power BI', 'A/B Testing', 'Data Visualization', 'Predictive Modeling'] },
  { category: 'Tools & Frontend', skills: ['Jupyter', 'React'] },
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
      <div className="skills-by-category">
        {SKILL_CATEGORIES.map(({ category, skills }) => (
          <div key={category} className="skill-category">
            <h3 className="skill-category-title">{category}</h3>
            <div className="skills-grid">
              {skills.map((name) => (
                <div key={name} className="skill-badge">
                  <span className="skill-name">{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
