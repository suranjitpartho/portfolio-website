import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Star, ChevronRight } from 'lucide-react'

// TODO: Replace placeholder data with real roles
const experience = [
  {
    role: 'Senior AI Engineer',
    company: 'FinTech AI Startup',
    period: 'Jan 2022 — Present',
    mission: 'Designing agentic AI systems that turn raw data into automated, high-confidence decisions at scale.',
    achievements: [
      'Led design of a multi-agent LangGraph orchestration platform handling 10k+ daily decision workflows',
      'Scaled a RAG pipeline to 5M+ documents, cutting retrieval latency by 60% via hybrid search',
      'Built streaming data platform with Airflow + PostgreSQL powering real-time business intelligence',
      'Drove system architecture reviews that reduced infrastructure cost by 35%',
    ],
    tech: ['Python', 'LangGraph', 'RAG', 'FastAPI', 'Airflow', 'PostgreSQL'],
    keyAchievement: 'Automated end-to-end client reporting, reducing delivery time from 2 days to 2 hours.',
  },
  {
    role: 'Data Engineer',
    company: 'Data Analytics Consultancy',
    period: 'Mar 2020 — Dec 2021',
    mission: 'Building dependable data pipelines and analytics products for clients across multiple industries.',
    achievements: [
      'Engineered ETL pipelines ingesting 50M+ rows daily with Airflow orchestration and S3 staging',
      'Modeled star-schema warehouses that cut report query time by 70%',
      'Shipped self-serve BI dashboards adopted by 200+ internal stakeholders',
      'Standardized data quality checks, catching 95% of pipeline anomalies before they reached production',
    ],
    tech: ['Python', 'SQL', 'Airflow', 'Redshift', 'Tableau'],
    keyAchievement: 'Unified fragmented client data sources into a single warehouse enabling cross-department analytics.',
  },
  {
    role: 'Software Engineer',
    company: 'Digital Agency',
    period: 'Jun 2018 — Feb 2020',
    mission: 'Shipping full-stack web products end-to-end, from database schema to responsive front-end.',
    achievements: [
      'Built customer-facing web apps with Laravel + React that scaled to 100k monthly active users',
      'Optimized SQL queries and caching to improve page load speed by 50%',
      'Introduced CI/CD and code review practices that cut release cycles from weeks to days',
      'Collaborated with designers to ship pixel-perfect, accessible UI across 15+ client projects',
    ],
    tech: ['PHP', 'Laravel', 'React', 'MySQL', 'JavaScript'],
    keyAchievement: 'Rebuilt a legacy monolith into modular services, enabling 3x faster feature delivery.',
  },
]

const Experience = () => {
  return (
    <section id="experience" className="mb-20 scroll-mt-8">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-12">
        <div className="flex items-center gap-3">
          <Briefcase size={18} className="text-accent-yellow" />
          <h2 className="flex items-baseline gap-3 text-[1.1rem] font-header font-extrabold tracking-[0.3em] uppercase text-text-primary">
            Experience
            <span className="font-mono text-[0.75rem] text-accent-yellow/90 tracking-normal">ngā wheako</span>
          </h2>
        </div>
        <div className="h-px flex-1 bg-white/5"></div>
      </div>

      {/* Vertical Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-[150px] top-0 bottom-0 w-px bg-white/10 hidden md:block"></div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="relative grid grid-cols-1 md:grid-cols-[120px_20px_1fr] gap-x-5 gap-y-2 md:gap-y-0"
            >
              {/* Period - left of the timeline bar, aligned with card title */}
              <div className="md:mt-[21px] md:h-[19px] flex items-center md:justify-end md:text-right">
                <span className="font-mono text-[0.55rem] text-text-secondary whitespace-nowrap">{exp.period}</span>
              </div>

              {/* Timeline Dot - centered on the line, aligned with card title */}
              <div className="hidden md:mt-[21px] md:h-[19px] md:flex items-center justify-center">
                <span className="block w-[11px] h-[11px] rounded-full bg-accent-yellow/80"></span>
              </div>

              {/* Glassmorphism Card */}
              <div className="bg-surface/50 backdrop-blur-md rounded-[10px] border border-white/10 p-5 transition-colors duration-300 hover:border-white/25">
                {/* Header */}
                <div className="mb-2">
                  <h3 className="text-[0.95rem] font-header font-extrabold leading-tight text-text-primary">{exp.role}</h3>
                  <p className="text-[0.7rem] font-semibold text-text-secondary mt-0.5">{exp.company}</p>
                </div>

                {/* Mission */}
                <p className="text-[0.68rem] text-text-secondary leading-relaxed mb-3">{exp.mission}</p>

                {/* Achievements */}
                <ul className="space-y-1.5 mb-4">
                  {exp.achievements.map((item) => (
                    <li key={item} className="flex gap-2 text-[0.7rem] text-text-primary/80 leading-[1.5]">
                      <ChevronRight size={12} className="text-white/30 mt-[3px] shrink-0" strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[0.45rem] font-mono text-text-secondary bg-white/5 border border-white/10 px-2 py-0.5 rounded-full tracking-tight"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Achievement Callout */}
                <div className="border-l-2 border-white/20 pl-3 flex gap-2.5 items-start">
                  <Star size={13} className="text-text-secondary shrink-0 mt-[2px]" />
                  <div>
                    <p className="text-[0.5rem] font-mono uppercase tracking-[0.2em] font-extrabold text-text-secondary mb-0.5">Key Achievement</p>
                    <p className="text-[0.7rem] text-text-primary/90 leading-[1.5] font-medium">{exp.keyAchievement}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
