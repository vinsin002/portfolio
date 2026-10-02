import { useEffect } from 'react'
import './Experience.css'
import incommLogo from '../assets/companies/incomm.png'
import tata1mgLogo from '../assets/companies/tata1mg.png'
import uberLogo from '../assets/companies/uber.png'
import bighitLogo from '../assets/companies/bighit.png'
import turtlemintLogo from '../assets/companies/turtlemint.png'

const EXPERIENCE = [
  {
    role: 'Data Analyst',
    company: 'Incomm Payments',
    employmentType: 'Full-time',
    duration: 'September 2026 – Present',
    location: 'Remote',
    descriptions: [
      'Working in the intersection of <strong>Analytics and Strategy</strong> in Fraud Strategy Team for a US Based Gift Card Company.',
    ],
    skills: ['SQL', 'Python', 'Analytics & Strategy', 'Fraud Analytics'],
    logoType: 'incomm',
  },
  {
    role: 'Business Analyst Intern',
    company: 'Tata 1mg',
    employmentType: 'Internship',
    duration: 'July 2026 – September 2026',
    location: 'Gurugram',
    descriptions: [
      'Built a <strong>Dashboard</strong> to automate performance tracking across <strong>360+ Retail Stores</strong> for <strong>Top Leadership</strong> reducing manual dependency. Modeled various <strong>KPIs and trend visualizations</strong> like <strong>Inventory Value, Days of Inventory, Unhealthy Inventory%, Capacity Util.%, GMV, Average Order Value</strong> & other relevant Business metrics.',
      'Leveraged <strong>Claude Code</strong> integrating <strong>Databricks</strong> to built an <strong>Auto-Replenishment Minimum Stock Norm Drop Funnel</strong> for visualizing various stages of stock drop like <strong>Fullfillment Centre</strong>, Space Constraint and other checks, finally calculating a landing efficiency of planned vs actual stock landed at the retail stores.',
    ],
    skills: ['Databricks', 'Claude Code', 'SQL', 'KPI Modeling', 'Inventory Analytics'],
    logoType: 'tata1mg',
  },
  {
    role: 'AI Data Analyst',
    company: 'Uber AI Solutions',
    employmentType: 'Freelance Project',
    duration: 'March 2026 – April 2026',
    location: 'Remote',
    descriptions: [
      'Analyzed <strong>ROC-AUC</strong> charts to derive correct answers for complex multi-step questions for improving Model Accuracy.',
      'Reviewed <strong>AI Generated SQL Queries</strong> for unambiguous answers,reasoning complexity to meet quality standards.',
    ],
    skills: ['ROC-AUC', 'SQL Optimization', 'Model Accuracy', 'AI Solutions'],
    logoType: 'uber',
  },
  {
    role: 'Business Analyst Intern',
    company: 'BigHit Sportz',
    employmentType: 'Internship',
    duration: 'May 2025 – July 2025',
    location: 'Remote',
    descriptions: [
      'Analyzed <strong>10K+</strong> cross platform user data to generate real-time insights on engagement patterns and retention trends.',
      'Analyzed Merchandise Sales Data using Python to track KPIs like Average Order Value & Revenue Growth Rate.',
      'Developed <strong>Power BI Dashboard</strong> to present sales trends to stakeholders for informed data driven decision making.',
    ],
    skills: ['Python', 'Power BI', 'SQL', 'Growth Analytics', 'KPI Tracking'],
    logoType: 'bighit',
  },
  {
    role: 'Data Analyst Intern',
    company: 'Turtlemint Insurance Broking Pvt. Ltd.',
    employmentType: 'Internship',
    duration: 'Dec 2024 – Jan 2025',
    location: 'Remote',
    descriptions: [
      'Collaborated with cross functional teams like <strong>Motor Insurance, Renewal & Ninja</strong> to analyze performance metrics.',
      'Utilized <strong>Python, Pandas, SQL and Mixpanel</strong> to process and analyze complex datasets for actionable insights.',
      'Collaborated with senior management to address business requirements & delivered daily insights to stakeholders.',
    ],
    skills: ['Python', 'Pandas', 'SQL', 'Mixpanel', 'Stakeholder Management'],
    logoType: 'turtlemint',
  },
]

const LOGOS = {
  incomm: { src: incommLogo, alt: 'InComm Payments' },
  tata1mg: { src: tata1mgLogo, alt: 'Tata 1mg' },
  uber: { src: uberLogo, alt: 'Uber AI Solutions' },
  bighit: { src: bighitLogo, alt: 'BigHit Sportz' },
  turtlemint: { src: turtlemintLogo, alt: 'Turtlemint Insurance Broking Pvt. Ltd.' },
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
      <div className="experience-list">
        {EXPERIENCE.map((item) => (
          <div key={`${item.company}-${item.role}`} className="experience-card">
            <div className="experience-card-header">
              <div className="experience-brand">
                <CompanyLogo type={item.logoType} />
                <div className="experience-headings">
                  <h3 className="experience-company-name">{item.company}</h3>
                  <h4 className="experience-role-title">{item.role}</h4>
                </div>
              </div>
              <div className="experience-meta">
                <span className="experience-duration">{item.duration}</span>
                <div className="experience-tags">
                  <span className="employment-type">{item.employmentType}</span>
                  {item.location && (
                    <>
                      <span className="dot-separator">•</span>
                      <span className="experience-location-text">{item.location}</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {item.descriptions && item.descriptions.length > 0 && (
              <ul className="experience-bullets">
                {item.descriptions.map((desc, idx) => (
                  <li
                    key={idx}
                    className="experience-bullet-item"
                    dangerouslySetInnerHTML={{ __html: desc }}
                  />
                ))}
              </ul>
            )}

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
