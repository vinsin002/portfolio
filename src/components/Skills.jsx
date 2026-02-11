import { useEffect } from 'react'
import './Skills.css'

const SKILL_CATEGORIES = [
  { category: 'Languages', skills: ['Python', 'SQL'] },
  { category: 'Math & Statistics', skills: ['Statistics', 'Probability', 'Linear Algebra'] },
  { category: 'ML Libraries', skills: ['Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'XGBoost'] },
  { category: 'BI & Analytics', skills: ['Microsoft Power BI', 'Microsoft Excel'] },
  { category: 'Others', skills: ['A/B Testing', 'Predictive Modeling', 'Data Visualization', 'Hypothesis Testing', 'Jupyter Notebook', 'Cursor'] },
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
