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
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">Vikrant Singh</h1>
        <p className="hero-title">Data Analyst <span className="title-sep">•</span> Strategy &amp; Analytics</p>
        <p className="hero-desc">
          Graduate from <strong>IIT Roorkee</strong> with a strong interest in <strong>Analytics &amp; Business Intelligence</strong>. Hands-on experience in data analysis, dashboarding, KPI tracking, and business reporting, with domain exposure across Insurance, Supply Chain, FinTech, Sales, and Product Analytics.
        </p>
        <p className="hero-desc">
          Currently working as a <strong>Data Analyst at Incomm Payments</strong> at the intersection of Strategy &amp; Analytics within the <strong>Fraud Strategy</strong> team. Dedicated to solving complex business problems using <strong>Python, SQL, Power BI, Excel</strong>, and data-driven analytical approaches to turn raw data into insights that drive better decisions.
        </p>
        <div className="hero-actions">
          <a
            href="https://drive.google.com/file/d/1hSbpWxWqHEB5cNyi-X7dXERC8kM_BlWj/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Resume
          </a>
          <button className="btn btn-secondary" onClick={() => scrollTo('projects')}>
            See Projects
          </button>
        </div>
      </div>
      <div className="hero-visual">
        <div className="chart-mock">
          <div className="bar" style={{ height: '40%' }}></div>
          <div className="bar" style={{ height: '70%' }}></div>
          <div className="bar" style={{ height: '55%' }}></div>
          <div className="bar" style={{ height: '90%' }}></div>
          <div className="bar" style={{ height: '65%' }}></div>
          <div className="bar" style={{ height: '80%' }}></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
