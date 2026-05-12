import React from 'react'
import { motion } from 'framer-motion'
import { Database, BrainCircuit, Layers, Activity } from 'lucide-react'

const skills = [
  {
    title: 'AI System Engineering',
    description: 'Developing agentic workflows, LLM orchestration, and RAG architectures for enterprise intelligence.',
    icon: <BrainCircuit size={24} />,
    color: 'var(--accent-purple)',
    metrics: ['Agentic Workflows', 'Prompt Engineering', 'LangGraph/LangChain']
  },
  {
    title: 'Full Stack Development',
    description: 'Building high-performance web applications with React, Node.js, and distributed systems.',
    icon: <Layers size={24} />,
    color: 'var(--accent-cyan)',
    metrics: ['React / Next.js', 'PostgreSQL / Vector DBs', 'Scalable APIs']
  },
  {
    title: 'Analytics & Insights',
    description: 'Transforming raw data into strategic intelligence through advanced visualization and modeling.',
    icon: <Activity size={24} />,
    color: 'var(--accent-lime)',
    metrics: ['Predictive Modeling', 'Real-time Dashboards', 'Statistical Analysis']
  }
]

const Skills = () => {
  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Core <span className="gradient-text">Competencies</span></h2>
          <p className="section-subtitle">Bridging the gap between engineering rigor and data intelligence.</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="skill-card glass"
            >
              <div className="skill-icon" style={{ color: skill.color, backgroundColor: `${skill.color}10` }}>
                {skill.icon}
              </div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              
              <div className="skill-metrics">
                {skill.metrics.map((metric, idx) => (
                  <span key={idx} className="metric-tag">{metric}</span>
                ))}
              </div>

              <div className="card-viz">
                <div className="viz-line" style={{ width: '80%', background: skill.color }}></div>
                <div className="viz-line" style={{ width: '60%', background: skill.color, opacity: 0.4 }}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills {
          background: rgba(255, 255, 255, 0.01);
        }

        .section-header {
          margin-bottom: 60px;
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          color: var(--text-secondary);
          max-width: 500px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
        }

        .skill-card {
          padding: 40px;
          transition: var(--transition-smooth);
          cursor: default;
        }

        .skill-card:hover {
          transform: translateY(-10px);
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.05);
        }

        .skill-icon {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .skill-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .skill-card p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .skill-metrics {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 30px;
        }

        .metric-tag {
          font-size: 0.75rem;
          padding: 4px 12px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 100px;
          color: var(--text-secondary);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .card-viz {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .viz-line {
          height: 2px;
          border-radius: 2px;
          transition: var(--transition-smooth);
        }

        .skill-card:hover .viz-line {
          width: 100% !important;
        }
      `}</style>
    </section>
  )
}

export default Skills
