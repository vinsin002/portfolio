import { useEffect } from 'react'
import './Education.css'

const EDUCATION = [
  {
    degree: 'Bachelor of Technology',
    institution: 'Indian Institute of Technology Roorkee',
    shortName: 'IIT Roorkee',
    duration: 'Oct 2022 - May 2026',
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
      <h2 className="section-title">Education</h2>
      <div className="education-grid">
        {EDUCATION.map((item) => (
          <div key={item.shortName} className="education-card">
            <div className="education-header">
              <h4>{item.institution}</h4>
              <span className="education-duration">{item.duration}</span>
            </div>
            <p className="education-institution">{item.degree}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
