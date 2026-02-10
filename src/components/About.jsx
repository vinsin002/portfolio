import { useEffect } from 'react'
import './About.css'

function About({ onViewChange }) {
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about')
      if (section) {
        const rect = section.getBoundingClientRect()
        if (rect.top < 300 && rect.bottom > 200) onViewChange('about')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [onViewChange])

  return (
    <section id="about">
      <h2 className="section-title">About <span>Me</span></h2>
      <div className="about-grid">
        <div className="about-card">
          <h3>📍 Roorkee, India</h3>
          <p>Data analyst focused on turning raw data into business value.</p>
        </div>
        <div className="about-card">
          <h3>🎯 Focus Areas</h3>
          <p>Predictive modeling, SQL analytics, revenue optimization, and machine learning for classification & NLP.</p>
        </div>
        <div className="about-card">
          <h3>📊 Industries</h3>
          <p>Aviation, finance, hospitality, retail inventory, and speech analytics.</p>
        </div>
      </div>
    </section>
  )
}

export default About
