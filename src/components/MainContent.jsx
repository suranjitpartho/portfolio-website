import React from 'react'
import { motion } from 'framer-motion'
import { Terminal, ArrowRight, Download, Activity, Globe, Zap } from 'lucide-react'

import heroBanner from '../assets/hero-banner.png'

const MainContent = () => {
  return (
    <div className="flex-1 h-full overflow-hidden relative">
      <div className="h-full overflow-y-auto p-[30px] no-scrollbar">

        {/* Banner Hero - Widescreen System Strip */}
        <section className="min-h-[240px] relative flex flex-col items-center justify-center p-[30px] rounded-[12px] mb-[40px] overflow-hidden text-center border border-white/5 shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center z-0 scale-105"
            style={{
              backgroundImage: `linear-gradient(rgba(10,10,18,0.75), rgba(10,10,18,0.75)), url(${heroBanner})`
            }}
          />
          <div className="relative z-10 max-w-[800px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[1rem] md:text-[1.4rem] font-header font-extrabold leading-tight mb-3 tracking-tighter uppercase"
              >
                Engineering <span className="text-accent-yellow">AI systems</span> for <br className="hidden md:block" /> high-impact decision making
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-[0.75rem] md:text-[0.85rem] text-text-primary/70 max-w-[550px] mb-8 leading-relaxed font-medium"
              >
                Building AI-powered systems at the intersection of software engineering,
                data intelligence, and real-world problem solving.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <motion.button
                  className="relative group overflow-hidden bg-accent-yellow text-black px-6 py-2.5 font-extrabold uppercase tracking-[0.2em] text-[0.6rem] rounded-[2px] transition-all duration-300"
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Work <ArrowRight size={12} strokeWidth={3} />
                  </span>
                </motion.button>

                <motion.button
                  className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-6 py-2.5 font-extrabold uppercase tracking-[0.2em] text-[0.6rem] rounded-[2px] hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-2">
                    Resume <Download size={12} strokeWidth={2.5} />
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section - Modern Minimalist Grid */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="flex items-center gap-3">
              <Terminal size={18} className="text-accent-yellow" />
              <h2 className="text-[1.1rem] font-header font-extrabold tracking-[0.3em] uppercase text-text-primary">Projects</h2>
            </div>
            <div className="h-px flex-1 bg-white/5"></div>
          </div>
          
          <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[30px]">
            <ProjectCard 
              image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
              title="Clinical Data Analytics Agent" 
              tag="Healthcare AI"
              stack="Python • LangGraph • FastAPI"
              desc="Autonomous agent system designed to synthesize complex clinical datasets into actionable insights for healthcare providers."
            />
            <ProjectCard 
              image="https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=800"
              title="Agricultural Farm Context Agent" 
              tag="Agritech AI"
              stack="LLMs • GeoData • Python"
              desc="Context-aware AI system that processes environmental and crop data to optimize farm management and yield prediction."
            />
            <ProjectCard 
              image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
              title="Construction Site Monitor Agent" 
              tag="Industrial AI"
              stack="Computer Vision • IoT • RAG"
              desc="Real-time monitoring system that utilizes vision agents and RAG to track site progress and safety compliance."
            />
          </div>
        </section>

      </div>
    </div>
  )
}

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
      <h3 className="text-[1.1rem] font-header font-extrabold mb-2 leading-tight text-text-primary transition-colors group-hover:text-accent-yellow">
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
              className="text-[0.45rem] font-mono text-accent-yellow/90 bg-accent-yellow/10 border border-accent-yellow/10 px-2 py-0.5 rounded-full tracking-tight"
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

export default MainContent
