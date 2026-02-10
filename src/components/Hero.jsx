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
        <p className="hero-title">Data Analyst & Analytics Engineer</p>
        <p className="hero-desc">
          I turn complex data into actionable insights. Specialized in predictive analytics, 
          SQL optimization, and building data-driven solutions for aviation, finance, and hospitality.
        </p>
        <div className="hero-actions">
          <a 
            href="https://github.com/vinsin002" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View on GitHub
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
