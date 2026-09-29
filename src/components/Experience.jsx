import { useEffect } from 'react'
import './Experience.css'
import tata1mgLogo from '../assets/companies/tata1mg.png'
import uberLogo from '../assets/companies/uber.png'
import bighitLogo from '../assets/companies/bighit.png'
import turtlemintLogo from '../assets/companies/turtlemint.png'

const EXPERIENCE = [
  {
    role: 'Business Analyst',
    company: 'Tata 1mg',
    employmentType: 'Internship',
    duration: 'Jul 2026 - Present · 2 mos',
    location: 'Gurugram, Haryana, India · On-site',
    skills: ['SQL', 'Google Sheets', 'Business Analytics', 'Data Insights'],
    logoType: 'tata1mg',
  },
  {
    role: 'Data Analyst',
    company: 'Uber AI Solutions',
    employmentType: 'Freelance',
    duration: 'Mar 2026 - Apr 2026 · 2 mos',
    location: 'Remote',
    skills: ['Data Analysis', 'Python', 'SQL', 'AI Solutions'],
    logoType: 'uber',
  },
  {
    role: 'Business Analyst',
    company: 'BigHit Sportz',
    employmentType: 'Internship',
    duration: 'May 2025 - Jul 2025 · 3 mos',
    location: 'Remote',
    skills: ['SQL', 'Python (Programming Language)', 'Growth Analytics'],
    logoType: 'bighit',
  },
  {
    role: 'Data Analyst',
    company: 'Turtlemint',
    employmentType: 'Internship',
    duration: 'Dec 2024 - Jan 2025 · 2 mos',
    location: 'Remote',
    skills: ['Python (Programming Language)', 'Stakeholder Management', 'Data Analytics'],
    logoType: 'turtlemint',
  },
]

const LOGOS = {
  tata1mg: { src: tata1mgLogo, alt: 'Tata 1mg' },
  uber: { src: uberLogo, alt: 'Uber AI Solutions' },
  bighit: { src: bighitLogo, alt: 'BigHit Sportz' },
  turtlemint: { src: turtlemintLogo, alt: 'Turtlemint' },
}

function CompanyLogo({ type }) {
  const logo = LOGOS[type]
  if (!logo) return null
  return (
    <div className={`company-logo-wrapper logo-${type}`}>
      <img src={logo.src} alt={logo.alt} className="company-logo-img" loading="lazy" />
    </div>
  )
}

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
      <div className="section-title-wrapper">
        <h2 className="section-title">
          Work <span>Experience</span>
        </h2>
        <a
          href="https://www.linkedin.com/in/vikrant-singh-63948b236/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-profile-link"
        >
          <span>View on LinkedIn</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
      <div className="experience-grid">
        {EXPERIENCE.map((item) => (
          <div key={`${item.company}-${item.role}`} className="experience-card">
            <div className="experience-card-top">
              <CompanyLogo type={item.logoType} />
              <div className="experience-main-info">
                <div className="experience-header">
                  <h4 className="experience-role">{item.role}</h4>
                  <span className="experience-duration">{item.duration}</span>
                </div>
                <p className="experience-company">
                  <span className="company-name">{item.company}</span>
                  <span className="dot-separator">•</span>
                  <span className="employment-type">{item.employmentType}</span>
                  {item.location && (
                    <>
                      <span className="dot-separator">•</span>
                      <span className="experience-location-text">{item.location}</span>
                    </>
                  )}
                </p>
              </div>
            </div>

            {item.skills && item.skills.length > 0 && (
              <div className="experience-skills">
                <span className="skills-icon" title="Key Skills">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="6 3 18 3 22 9 12 22 2 9 6 3"></polygon>
                  </svg>
                </span>
                <div className="skills-tags">
                  {item.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
