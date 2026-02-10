import { useEffect } from 'react'
import './Contact.css'

function Contact({ onViewChange }) {
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('contact')
      if (section) {
        const rect = section.getBoundingClientRect()
        if (rect.top < 300) onViewChange('contact')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [onViewChange])

  return (
    <section id="contact">
      <h2 className="section-title">Get in <span>Touch</span></h2>
      <div className="contact-content">
        <p className="contact-text">
          Interested in collaborating or discussing data analytics? Feel free to reach out.
        </p>
        <div className="contact-links">
          <a 
            href="https://github.com/vinsin002" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
          >
            GitHub
          </a>
        </div>
      </div>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Vikrant Singh · Built with React</p>
      </footer>
    </section>
  )
}

export default Contact
