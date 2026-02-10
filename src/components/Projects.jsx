import { useEffect } from 'react'
import ProjectCard from './ProjectCard'
import './Projects.css'

const GITHUB_BASE = 'https://github.com/vinsin002'

const PROJECTS = [
  {
    id: 'hospitality',
    title: 'Revenue Leakage & Profitability in Hospitality',
    repo: 'Optimizing-Revenue-Leakage-and-Profitability-in-the-Hospitality-Sector',
    description: 'Identifying and optimizing revenue leakage in the hospitality sector for improved profitability.',
    tags: ['Python', 'Analytics', 'Power BI', 'Business Intelligence'],
    date: '2025',
    dashboard: 'https://app.powerbi.com/view?r=eyJrIjoiYjViMjhiZTctOWZlZi00MDNiLTk4MDYtZDIzNTA2NTU5OWYzIiwidCI6IjM4ZjYyOTI2LTc1NTktNGFlZi04NGFlLWNiNWUxNzI0MDZmYiJ9',
  },
  {
    id: 'inventory-sql',
    title: 'Inventory Inefficiencies via Advanced SQL',
    repo: 'Solving-Inventory-Inefficiencies-Using-Advanced-SQL-Analytics',
    description: 'Advanced SQL analytics to identify and solve inventory inefficiencies in supply chain operations.',
    tags: ['SQL', 'Power BI', 'Analytics', 'Data Engineering'],
    date: '2025',
    dashboard: 'https://app.powerbi.com/view?r=eyJrIjoiZDgyYjQxZjgtODUyNy00NzNjLTgzZGEtMzljNjYxMDNkNTFmIiwidCI6IjM4ZjYyOTI2LTc1NTktNGFlZi04NGFlLWNiNWUxNzI0MDZmYiJ9',
  },
  {
    id: 'credit-card',
    title: 'Credit Card Default Prediction',
    repo: 'Credit-Card-Default-Prediction',
    description: 'ML model to predict credit card default risk using classification algorithms for financial risk assessment.',
    tags: ['Python', 'Classification', 'Jupyter', 'Scikit-learn'],
    date: '2025',
  },
  {
    id: 'flight-delay',
    title: 'Flight Delay Analysis & Prediction',
    repo: 'A-Data-Driven-Approach-to-Flight-Delay-Analysis-and-Prediction',
    description: 'Data-driven approach to analyze flight delays and build predictive models for airline operational planning.',
    tags: ['Python', 'ML', 'Jupyter', 'Predictive Analytics'],
    date: '2026',
  },
  {
    id: 'parking-pricing',
    title: 'Dynamic Pricing for Urban Parking',
    repo: 'Dynamic-Pricing-for-Urban-Parking-Lots',
    description: 'Optimization model for dynamic pricing of urban parking lots to maximize revenue and utilization.',
    tags: ['Python', 'Optimization', 'Jupyter', 'Data Science'],
    date: '2025',
  },
  {
    id: 'emotion-speech',
    title: 'Emotion Classification of Speech Data',
    repo: 'Emotion-Classification-of-Speech-Data',
    description: 'ML model for classifying emotions from speech audio using NLP and audio feature extraction.',
    tags: ['Python', 'NLP', 'Jupyter', 'Classification'],
    date: '2025',
  },
  {
    id: 'summer-analytics',
    title: 'Summer Analytics Assignment',
    repo: 'Summer-Analytics-Assignment-1',
    description: 'Analytics assignment covering data cleaning, EDA, and statistical analysis techniques.',
    tags: ['Python', 'EDA', 'Jupyter', 'Statistics'],
    date: '2025',
  },
]

function Projects({ onViewChange }) {
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('projects')
      if (section) {
        const rect = section.getBoundingClientRect()
        if (rect.top < 300 && rect.bottom > 200) onViewChange('projects')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [onViewChange])

  return (
    <section id="projects">
      <h2 className="section-title">Featured <span>Projects</span></h2>
      <p className="projects-intro">
        Data analysis, ML, and analytics projects from my GitHub. Click any project to view the repository.
      </p>
      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project}
            githubUrl={`${GITHUB_BASE}/${project.repo}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
