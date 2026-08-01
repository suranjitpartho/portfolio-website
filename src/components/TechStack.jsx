import React from 'react'
import { Cpu, BrainCircuit, Database, Server, Monitor } from 'lucide-react'

const MAX_LEVEL = 5

const categories = [
  {
    title: 'AI & LLM Engineering',
    icon: <BrainCircuit size={18} strokeWidth={1.8} />,
    skills: [
      { name: 'Python', level: 5 },
      { name: 'LangGraph', level: 4 },
      { name: 'RAG', level: 4 },
      { name: 'LLMs', level: 4 },
      { name: 'Agentic Workflows', level: 4 },
      { name: 'Prompt Engineering', level: 5 },
    ],
  },
  {
    title: 'Data & Analytics',
    icon: <Database size={18} strokeWidth={1.8} />,
    skills: [
      { name: 'PostgreSQL', level: 4 },
      { name: 'SQL', level: 5 },
      { name: 'Airflow', level: 4 },
      { name: 'Power BI', level: 5 },
      { name: 'Tableau', level: 3 },
      { name: 'ETL Pipelines', level: 4 },
    ],
  },
  {
    title: 'Backend & APIs',
    icon: <Server size={18} strokeWidth={1.8} />,
    skills: [
      { name: 'FastAPI', level: 4 },
      { name: 'REST', level: 4 },
      { name: 'MySQL', level: 4 },
      { name: 'Laravel', level: 3 },
      { name: 'PHP', level: 3 },
    ],
  },
  {
    title: 'Frontend',
    icon: <Monitor size={18} strokeWidth={1.8} />,
    skills: [
      { name: 'React', level: 4 },
      { name: 'JavaScript', level: 4 },
      { name: 'Tailwind CSS', level: 4 },
      { name: 'Vite', level: 3 },
    ],
  },
]

const TechStack = () => {
  return (
    <section id="tech" className="mb-20 scroll-mt-8">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-12">
        <div className="flex items-center gap-3">
          <Cpu size={18} className="text-accent-yellow" />
          <h2 className="flex items-baseline gap-3 text-[1.1rem] font-header font-extrabold tracking-[0.3em] uppercase text-text-primary">
            Tech Stack
            <span className="font-mono text-[0.75rem] text-accent-yellow/90 tracking-normal">ngā pūkenga</span>
          </h2>
        </div>
        <div className="h-px flex-1 bg-white/5"></div>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-[36px] items-start">
        {categories.map((cat) => (
          <div key={cat.title}>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="text-text-secondary">{cat.icon}</div>
              <h3 className="text-[0.95rem] font-header font-semibold tracking-wide text-text-primary">
                {cat.title}
              </h3>
            </div>
            <div>
              {cat.skills.map((skill) => (
                <div key={skill.name} className="mb-4 last:mb-0">
                  <div className="flex items-baseline justify-between mb-1.5">
                    <span className="text-[0.7rem] font-medium text-text-primary">{skill.name}</span>
                    <span className="text-[0.55rem] font-mono text-text-secondary">
                      {skill.level}/{MAX_LEVEL}
                    </span>
                  </div>
                  <div className="h-[3px] w-full bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-text-primary/60"
                      style={{ width: `${(skill.level / MAX_LEVEL) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechStack
