import { useEffect } from 'react'
import './Achievements.css'

const ACHIEVEMENTS = [
  {
    title: 'McKinsey Forward Learning Program',
    highlight: 'Selected',
    description: 'Selected for McKinsey Forward Learning Program — an initiative focused on leadership, adaptability, and professional growth.',
    organization: 'McKinsey & Company',
    type: 'Leadership & Growth',
    icon: 'star',
  },
  {
    title: "Trilytics'25 Analytics Case Competition",
    highlight: '38th Rank',
    subHighlight: 'among 7.7K participants',
    description: "Secured 38th Rank among 7.7K participants in Round I of Trilytics'25 Analytics Case Competition organized by IIMC.",
    organization: 'IIM Calcutta (IIMC)',
    type: 'Analytics Case Challenge',
    icon: 'trophy',
  },
  {
    title: 'Dataverse — Business Analytics Challenge',
    highlight: '60th Rank',
    subHighlight: 'among 1K participants',
    description: 'Secured 60th Rank among 1K participants in Round I of Dataverse (Business Analytics Challenge) organized by IITM.',
    organization: 'IIT Madras (IITM)',
    type: 'Business Analytics Challenge',
    icon: 'medal',
  },
]

function AchievementIcon({ type }) {
  if (type === 'trophy') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
        <path d="M4 22h16"/>
        <path d="M10 14.66V17c0 .55-.45 1-1 1H7v2h10v-2h-2c-.55 0-1-.45-1-1v-2.34"/>
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
      </svg>
    )
  }
  if (type === 'medal') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    )
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  )
}

function Achievements({ onViewChange }) {
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('achievements')
      if (section) {
        const rect = section.getBoundingClientRect()
        if (rect.top < 300 && rect.bottom > 200) onViewChange('achievements')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [onViewChange])

  return (
    <section id="achievements">
      <h2 className="section-title">
        Key <span>Achievements</span>
      </h2>
      <div className="achievements-grid">
        {ACHIEVEMENTS.map((item) => (
          <div key={item.title} className="achievement-card">
            <div className="achievement-card-header">
              <div className="achievement-icon-wrapper">
                <AchievementIcon type={item.icon} />
              </div>
              <div className="achievement-rank-tag">
                <span className="rank-main">{item.highlight}</span>
                {item.subHighlight && (
                  <span className="rank-sub">{item.subHighlight}</span>
                )}
              </div>
            </div>

            <h3 className="achievement-title">{item.title}</h3>
            <p className="achievement-desc">{item.description}</p>

            <div className="achievement-footer">
              <span className="achievement-org">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                {item.organization}
              </span>
              <span className="achievement-type">{item.type}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Achievements
