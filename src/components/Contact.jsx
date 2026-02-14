import { useState, useEffect } from 'react'
import './Contact.css'

const FORM_ENDPOINT = 'https://api.web3forms.com/submit'

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

const SOCIAL_LINKS = [
  { href: 'https://github.com/vinsin002', label: 'GitHub', icon: GitHubIcon },
  { href: 'https://www.linkedin.com/in/vikrant-singh-63948b236/', label: 'LinkedIn', icon: LinkedInIcon },
  { href: 'mailto:singh.vikrant9798@gmail.com', label: 'Email', icon: EmailIcon },
]

function Contact({ onViewChange }) {
  const [formStatus, setFormStatus] = useState('')

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    if (!accessKey) {
      setFormStatus('error')
      return
    }
    setFormStatus('sending')
    const form = e.target
    const formData = {
      access_key: accessKey,
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
      subject: 'Portfolio Contact Form',
    }
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (data.success) {
        setFormStatus('success')
        form.reset()
      } else {
        setFormStatus('error')
      }
    } catch {
      setFormStatus('error')
    }
  }

  return (
    <section id="contact">
      <h2 className="section-title">Get in <span>Touch</span></h2>
      <div className="contact-content">
        <p className="contact-text">
          Interested in collaborating or discussing data analytics? Feel free to reach out.
        </p>
        <div className="contact-layout">
          <div className="contact-links-wrapper">
            <div className="contact-links">
              {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
                <a 
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? '_self' : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="contact-link"
                >
                  <Icon />
                  {label}
                </a>
              ))}
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" placeholder="Your message" rows="5" required></textarea>
          <button type="submit" className="btn btn-primary" disabled={formStatus === 'sending'}>
            {formStatus === 'sending' ? 'Sending...' : 'Send message'}
          </button>
          {formStatus === 'success' && <p className="form-status success">Thanks! Your message was sent.</p>}
          {formStatus === 'error' && <p className="form-status error">Unable to send. Please email me at singh.vikrant9798@gmail.com</p>}
          </form>
        </div>
      </div>
      <footer className="footer">
        <p>Made by Vikrant Singh</p>
      </footer>
    </section>
  )
}

export default Contact
