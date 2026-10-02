import { useEffect } from 'react'
import './Hero.css'

function Hero({ onViewChange }) {
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('home')
      if (hero && hero.getBoundingClientRect().bottom > 200) {
        onViewChange('home')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [onViewChange])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    onViewChange(id)
  }

  return (
    <section id="home" className="hero">
      {/* Background Decorative Doodles */}
      <div className="hero-deco-ring" aria-hidden="true">
        <svg width="90" height="90" viewBox="0 0 100 100" fill="none">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="var(--accent-purple)"
            strokeWidth="3.5"
            strokeDasharray="210 45"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="hero-deco-sparkle" aria-hidden="true">
        <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
          <path
            d="M20 2 C20 12 20 12 30 20 C20 20 20 20 20 38 C20 20 20 20 10 20 C20 12 20 12 20 2 Z"
            stroke="var(--accent-cyan)"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="hero-deco-arrow" aria-hidden="true">
        <svg width="60" height="42" viewBox="0 0 60 42" fill="none">
          <path
            d="M6 36 C22 36 38 24 50 12"
            stroke="var(--accent-pink)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M38 10 L52 12 L47 24"
            stroke="var(--accent-pink)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          <span>DATA ANALYST · IIT ROORKEE</span>
        </div>

        <h1 className="hero-name">
          Hi, I'm <br />
          <span className="hero-name-gradient">Vikrant Singh</span>
          <span className="hero-dot">.</span>
        </h1>

        <div className="hero-squiggle-wrap" aria-hidden="true">
          <svg className="hero-squiggle" viewBox="0 0 260 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="heroSquiggleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="55%" stopColor="#c084fc" />
                <stop offset="100%" stopColor="#f472b6" />
              </linearGradient>
            </defs>
            <path
              d="M6 16 C35 6, 55 6, 85 16 C115 26, 135 26, 165 16 C195 6, 215 6, 245 16"
              stroke="url(#heroSquiggleGrad)"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <p className="hero-desc">
          I turn raw numbers into decisions — with hands-on experience in data analysis, dashboarding, KPI tracking and business reporting across Insurance, Supply Chain, FinTech, Sales and Product Analytics. Currently on the Fraud Strategy team at InComm Payments.
        </p>

        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
            See Projects
          </button>
          <a
            href="https://drive.google.com/file/d/1hSbpWxWqHEB5cNyi-X7dXERC8kM_BlWj/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Resume
          </a>
        </div>

        {/* 3 Metric Stat Cards */}
        <div className="hero-stats">
          <div className="hero-stat-card">
            <div className="stat-number">5</div>
            <div className="stat-label">Roles &amp; Internships</div>
          </div>
          <div className="hero-stat-card">
            <div className="stat-number">6</div>
            <div className="stat-label">Featured Projects</div>
          </div>
          <div className="hero-stat-card">
            <div className="stat-number">38/7.7K</div>
            <div className="stat-label">IIM Calcutta Rank</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
