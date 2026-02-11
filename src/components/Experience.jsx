import { useEffect } from 'react'
import './Experience.css'

const EXPERIENCE = [
  {
    role: 'Business Analyst Internship',
    company: 'BigHit Sportz',
    duration: 'May 2025 - July 2025',
  },
  {
    role: 'Data Analyst Internship',
    company: 'Turtlemint Insurance Broking Pvt. Ltd.',
    duration: 'Dec 2024 - Jan 2025',
  },
]

function Experience({ onViewChange }) {
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('experience')
      if (section) {
        const rect = section.getBoundingClientRect()
        if (rect.top < 300 && rect.bottom > 200) onViewChange('experience')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [onViewChange])

  return (
    <section id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience-grid">
        {EXPERIENCE.map((item) => (
          <div key={`${item.company}-${item.role}`} className="experience-card">
            <div className="experience-header">
              <h4>{item.role}</h4>
              <span className="experience-duration">{item.duration}</span>
            </div>
            <p className="experience-company">{item.company}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
