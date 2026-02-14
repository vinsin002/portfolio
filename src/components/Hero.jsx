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
          I am a final year student at IIT Roorkee with a deep passion for data. I specialize in turning raw, complex datasets into actionable insights that drive business decisions. Through predictive analytics, SQL optimization, and data-driven problem solving.
        </p>
        <div className="hero-actions">
          <a 
            href="https://drive.google.com/drive/folders/1951nz3zOTMKHPY703yEIfjqvLjqkpWKM?usp=sharing" 
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
