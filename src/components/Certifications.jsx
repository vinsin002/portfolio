import { useEffect } from 'react'
import './Certifications.css'

const CERTIFICATIONS = [
  { name: 'McKinsey.org Forward Program', issuer: 'McKinsey & Company', issued: 'Dec 2025', link: 'https://credly.com/go/VzUDGar89sWBxDdaXKTw5A' },
  { name: 'Microsoft Power BI Desktop for Business Intelligence', issuer: 'Udemy', issued: 'Nov 2025', link: 'https://udemy.com/certificate/UC-049149e4-94ba-4b9f-a169-92a0e2021131/' },
  { name: 'Introduction to Statistics', issuer: 'Coursera', issued: 'Apr 2025', link: 'https://coursera.org/account/accomplishments/verify/BNFVAHP42S4F' },
  { name: 'Summer Analytics', issuer: 'Consulting & Analytics Club, IIT Guwahati', issued: 'Jun 2024', link: 'https://certificate.givemycertificate.com/c/5f738224-1a51-4905-9624-cc41a0f373d3' },
  { name: 'The Complete SQL Bootcamp', issuer: 'Udemy', issued: 'Jan 2024', link: 'https://udemy.com/certificate/UC-e7c8a67d-6d62-4d04-a90b-0110e981f08e/' },
]

function Certifications({ onViewChange }) {
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('certifications')
      if (section) {
        const rect = section.getBoundingClientRect()
        if (rect.top < 300 && rect.bottom > 200) onViewChange('certifications')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [onViewChange])

  return (
    <section id="certifications">
      <h2 className="section-title">Certifications</h2>
      <div className="certifications-grid">
        {CERTIFICATIONS.map((cert) => (
          <a
            key={cert.name}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="certification-card"
          >
            <h4 className="certification-name">{cert.name}</h4>
            <p className="certification-issuer">{cert.issuer}</p>
            <span className="certification-date">{cert.issued}</span>
            <span className="certification-link">View certificate →</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Certifications
