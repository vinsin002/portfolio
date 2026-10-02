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
        <p className="hero-desc">
          A graduate from IIT Roorkee with a strong interest in Analytics and Business Intelligence. I have hands on experience in data analysis, dashboarding, KPI tracking, and business reporting, with exposure to Insurance, Supply Chain, FinTech, Sales, and Product Analytics gained through multiple analytics internships and full time role.
        </p>
        <p className="hero-desc">
          Currently, I work as a Data Analyst at Incomm Payments, working at the intersection of Strategy and Analytics within the Fraud Strategy team. I enjoy solving business problems using Python, SQL, Power BI, Excel, and data driven analytical approaches, with a focus on turning data into insights that drive better decisions.
        </p>
        <div className="hero-actions">
          <a
            href="https://drive.google.com/file/d/1_bOqUtnBjyt9VR8yZ66aV6hq8iaZtFHQ/view?usp=sharing"
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
