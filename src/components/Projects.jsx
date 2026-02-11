import { useEffect } from 'react'
import ProjectCard from './ProjectCard'
import './Projects.css'

const GITHUB_BASE = 'https://github.com/vinsin002'

const PROJECTS = [
  {
    id: 'hospitality',
    title: 'Revenue Leakage & Profitability in Hospitality',
    repo: 'Optimizing-Revenue-Leakage-and-Profitability-in-the-Hospitality-Sector',
    description: 'Root cause analysis of revenue leakage. Power BI dashboards for KPIs, loss drivers, and profitability strategies.',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Root Cause Analysis', 'Power BI', 'Business Intelligence'],
    dashboard: 'https://app.powerbi.com/view?r=eyJrIjoiYjViMjhiZTctOWZlZi00MDNiLTk4MDYtZDIzNTA2NTU5OWYzIiwidCI6IjM4ZjYyOTI2LTc1NTktNGFlZi04NGFlLWNiNWUxNzI0MDZmYiJ9',
  },
  {
    id: 'inventory-sql',
    title: 'Inventory Inefficiencies via Advanced SQL',
    repo: 'Solving-Inventory-Inefficiencies-Using-Advanced-SQL-Analytics',
    description: 'ERD and advanced SQL for inventory analysis. Power BI dashboards for stock-outs and supply chain optimization.',
    tags: ['SQL', 'Pandas', 'Matplotlib', 'Power BI', 'Analytics', 'ERD Diagram'],
    dashboard: 'https://app.powerbi.com/view?r=eyJrIjoiZDgyYjQxZjgtODUyNy00NzNjLTgzZGEtMzljNjYxMDNkNTFmIiwidCI6IjM4ZjYyOTI2LTc1NTktNGFlZi04NGFlLWNiNWUxNzI0MDZmYiJ9',
  },
  {
    id: 'credit-card',
    title: 'Credit Card Default Prediction',
    repo: 'Credit-Card-Default-Prediction',
    description: 'ML model for credit card default prediction. EDA, feature engineering, and classification algorithms with hyperparameter tuning.',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Classification', 'Scikit-learn'],
  },
  {
    id: 'flight-delay',
    title: 'Flight Delay Analysis & Prediction',
    repo: 'A-Data-Driven-Approach-to-Flight-Delay-Analysis-and-Prediction',
    description: 'Data-driven approach to analyze flight delays and build predictive models for airline operational planning.',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'ML', 'Predictive Analytics'],
  },
  {
    id: 'parking-pricing',
    title: 'Dynamic Pricing for Urban Parking',
    repo: 'Dynamic-Pricing-for-Urban-Parking-Lots',
    description: 'Optimization model for dynamic pricing of urban parking lots to maximize revenue and utilization.',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Optimization', 'Data Science'],
  },
  {
    id: 'emotion-speech',
    title: 'Emotion Classification of Speech Data',
    repo: 'Emotion-Classification-of-Speech-Data',
    description: 'ML model for classifying emotions from speech audio using NLP and audio feature extraction.',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'NLP', 'Classification'],
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
