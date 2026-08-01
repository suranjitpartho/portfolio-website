import React from 'react'
import { Terminal, ArrowRight } from 'lucide-react'

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    title: 'Clinical Data Analytics Agent',
    tag: 'Healthcare AI',
    stack: 'Python • LangGraph • FastAPI',
    desc: 'Autonomous agent system designed to synthesize complex clinical datasets into actionable insights for healthcare providers.',
  },
  {
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=800',
    title: 'Agricultural Farm Context Agent',
    tag: 'Agritech AI',
    stack: 'LLMs • GeoData • Python',
    desc: 'Context-aware AI system that processes environmental and crop data to optimize farm management and yield prediction.',
  },
  {
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    title: 'Construction Site Monitor Agent',
    tag: 'Industrial AI',
    stack: 'Computer Vision • IoT • RAG',
    desc: 'Real-time monitoring system that utilizes vision agents and RAG to track site progress and safety compliance.',
  },
]

const ProjectCard = ({ image, title, tag, stack, desc }) => (
  <div className="group bg-surface/60 backdrop-blur-md rounded-[12px] border border-white/10 overflow-hidden transition-all duration-500 shadow-none">
    {/* Image Container with Stronger Amber Tint */}
    <div className="h-[160px] overflow-hidden relative bg-surface/50">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      {/* Primary Amber Color Fusion */}
      <div className="absolute inset-0 bg-accent-yellow/25 mix-blend-color group-hover:bg-accent-yellow/10 transition-colors duration-500"></div>
      {/* Darker Overlay for Depth */}
      <div className="absolute inset-0 bg-darker-bg/20 group-hover:bg-transparent transition-colors duration-500"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-darker-bg via-transparent to-transparent opacity-90"></div>

      <div className="absolute top-3 left-3 bg-surface px-2 h-4 inline-flex items-center rounded-[2px]">
        <span className="text-[0.42rem] text-white font-mono uppercase tracking-[0.2em] font-extrabold leading-none">
          {tag}
        </span>
      </div>
    </div>

    {/* Content - Compact Padded */}
    <div className="p-5">
      <h3 className="text-[1.1rem] font-header font-extrabold mb-2 leading-tight text-text-primary">
        {title}
      </h3>
      <p className="text-[0.7rem] text-text-secondary leading-[1.5] mb-6 font-medium line-clamp-2">
        {desc}
      </p>

      <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-4">
        <div className="flex flex-wrap gap-1.5">
          {stack.split(' • ').map((tech, index) => (
            <span
              key={index}
              className="text-[0.45rem] font-mono text-text-secondary bg-white/5 border border-white/10 px-2 py-0.5 rounded-full tracking-tight"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-text-secondary group-hover:text-accent-yellow group-hover:border-accent-yellow transition-all duration-500 shrink-0">
          <ArrowRight size={14} />
        </div>
      </div>
    </div>
  </div>
)

const Projects = () => {
  return (
    <section id="projects" className="mb-20 scroll-mt-8">
      <div className="flex items-center gap-4 mb-12">
        <div className="flex items-center gap-3">
          <Terminal size={18} className="text-accent-yellow" />
          <h2 className="flex items-baseline gap-3 text-[1.1rem] font-header font-extrabold tracking-[0.3em] uppercase text-text-primary">
            Projects
            <span className="font-mono text-[0.75rem] text-accent-yellow/90 tracking-normal">ngā kaupapa</span>
          </h2>
        </div>
        <div className="h-px flex-1 bg-white/5"></div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-[30px]">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
