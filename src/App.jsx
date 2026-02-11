import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Skills from './components/Skills'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark'
    }
    return 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="app">
      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        theme={theme}
        setTheme={setTheme}
      />
      <main>
        <Hero onViewChange={setActiveSection} />
        <Education onViewChange={setActiveSection} />
        <Experience onViewChange={setActiveSection} />
        <Projects onViewChange={setActiveSection} />
        <Skills onViewChange={setActiveSection} />
        <Certifications onViewChange={setActiveSection} />
        <Contact onViewChange={setActiveSection} />
      </main>
    </div>
  )
}

export default App
