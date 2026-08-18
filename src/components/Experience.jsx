import { useEffect } from 'react'
import './Experience.css'

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

function Tata1mgLogo() {
  return (
    <svg viewBox="0 0 60 60" className="company-logo-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="60" rx="12" fill="#FF5344" />
      <text x="30" y="24" textAnchor="middle" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="10.5" letterSpacing="1.5">TATA</text>
      <text x="30" y="47" textAnchor="middle" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="21" letterSpacing="-0.8">1mg</text>
    </svg>
  )
}

function UberLogo() {
  return (
    <svg viewBox="0 0 60 60" className="company-logo-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="60" rx="12" fill="#000000" />
      <rect x="0.5" y="0.5" width="59" height="59" rx="11.5" stroke="rgba(255,255,255,0.18)" />
      <text x="30" y="30" textAnchor="middle" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="17" letterSpacing="-0.4">Uber</text>
      <text x="30" y="45" textAnchor="middle" fill="#D1D5DB" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="7" letterSpacing="0.2">AI Solutions</text>
    </svg>
  )
}

function BigHitLogo() {
  return (
    <svg viewBox="0 0 60 60" className="company-logo-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="30" fill="url(#bighit-grad)" />
      <defs>
        <radialGradient id="bighit-grad" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#0077FF" />
          <stop offset="100%" stopColor="#0038A8" />
        </radialGradient>
        <linearGradient id="cyan-hit" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#00F0FF" />
        </linearGradient>
      </defs>
      <g transform="skewX(-10) translate(4, 0)">
        <text x="26" y="27" textAnchor="middle" fill="#FFFFFF" fontFamily="Impact, 'Arial Black', sans-serif" fontWeight="900" fontSize="18" letterSpacing="0.3">BIG</text>
        <text x="26" y="47" textAnchor="middle" fill="url(#cyan-hit)" fontFamily="Impact, 'Arial Black', sans-serif" fontWeight="900" fontSize="18" letterSpacing="0.3">HIT</text>
      </g>
    </svg>
  )
}

function TurtlemintLogo() {
  return (
    <svg viewBox="0 0 60 60" className="company-logo-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="60" rx="12" fill="#FFFFFF" />
      <rect x="0.5" y="0.5" width="59" height="59" rx="11.5" stroke="#E5E7EB" />
      <circle cx="30" cy="24" r="13" fill="#ECFDF5" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="2.5 2.5" />
      <ellipse cx="30" cy="24" rx="8" ry="7" fill="#10B981" />
      <circle cx="30" cy="20" r="4" fill="#34D399" />
      <circle cx="26.5" cy="25.5" r="2" fill="#047857" />
      <circle cx="33.5" cy="25.5" r="2" fill="#047857" />
      <circle cx="30" cy="26" r="2.5" fill="#065F46" />
      <text x="30" y="49" textAnchor="middle" fill="#0D9488" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="8.5" letterSpacing="-0.3">turtlemint</text>
    </svg>
  )
}

function CompanyLogo({ type }) {
  if (type === 'tata1mg') return <Tata1mgLogo />
  if (type === 'uber') return <UberLogo />
  if (type === 'bighit') return <BigHitLogo />
  return <TurtlemintLogo />
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
