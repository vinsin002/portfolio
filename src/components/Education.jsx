import { useEffect } from 'react'
import './Education.css'

const EDUCATION = [
  {
    type: 'Education',
    degree: 'B.Tech',
    institution: 'Indian Institute of Technology Roorkee',
    shortName: 'IIT Roorkee',
    duration: 'Final Year Student',
  },
]

const EXPERIENCE = [
  {
    role: 'Business Analyst',
    company: 'BigHit Sportz',
    duration: 'May - July 2025',
  },
  {
    role: 'Data Analyst',
    company: 'Turtlemint Insurance Broking Pvt Ltd',
    duration: 'Dec 2025 - Jan 2026',
  },
]

function Education({ onViewChange }) {
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('education')
      if (section) {
        const rect = section.getBoundingClientRect()
        if (rect.top < 300 && rect.bottom > 200) onViewChange('education')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [onViewChange])

  return (
    <section id="education">
      <h2 className="section-title">Education & <span>Experience</span></h2>
      <div className="education-grid">
        <div className="education-section">
          <h3 className="education-subtitle">Education</h3>
          {EDUCATION.map((item) => (
            <div key={item.shortName} className="education-card">
              <div className="education-header">
                <h4>{item.degree}</h4>
                <span className="education-duration">{item.duration}</span>
              </div>
              <p className="education-institution">{item.institution}</p>
            </div>
          ))}
        </div>
        <div className="education-section">
          <h3 className="education-subtitle">Internships</h3>
          {EXPERIENCE.map((item) => (
            <div key={`${item.company}-${item.role}`} className="education-card">
              <div className="education-header">
                <h4>{item.role}</h4>
                <span className="education-duration">{item.duration}</span>
              </div>
              <p className="education-institution">{item.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
