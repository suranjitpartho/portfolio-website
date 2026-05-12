import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Palette, Terminal, BarChart4, Quote } from 'lucide-react'

const MainContent = () => {
  const yellowBtnClasses = "bg-accent-yellow text-darker-bg px-8 py-3 font-bold cursor-pointer transition-all duration-500 ease-smooth uppercase tracking-wider text-[0.85rem] rounded-[2px] hover:bg-[#ffca28] hover:-translate-y-0.5 hover:shadow-[0_5px_20px_rgba(255,193,7,0.4)]";

  return (
    <div className="flex-1 h-full overflow-hidden relative">
      <div className="h-full overflow-y-auto p-[30px] no-scrollbar">
        
        {/* Banner Hero - Centered Mission */}
        <section className="min-h-[400px] relative flex flex-col items-center justify-center p-[60px] rounded-[4px] mb-[30px] overflow-hidden text-center">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0 scale-110" 
            style={{ 
              backgroundImage: "linear-gradient(rgba(10,10,18,0.8), rgba(10,10,18,0.8)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')" 
            }}
          />
          <div className="relative z-10 max-w-[700px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center"
            >
              <Quote size={20} className="text-accent-yellow opacity-40 mb-5 rotate-180" />
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[2rem] md:text-[2.6rem] font-header font-extrabold leading-[1.2] mb-10 tracking-tight"
              >
                Engineering AI systems for <br/> <span className="text-accent-yellow">global humanitarian</span> impact!
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <motion.button 
                  className={yellowBtnClasses}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Work
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Row */}
        <section className="flex justify-around mb-[50px] px-[10px] flex-wrap gap-10 py-5">
          <StatItem value="8+" label="Years Experience" />
          <StatItem value="143" label="Completed Projects" />
          <StatItem value="Auckland" label="Location Base" />
          <StatItem value="700+" label="GitHub Commits" />
        </section>

        {/* Services */}
        <section className="mb-10">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-[1.2rem] font-header font-extrabold tracking-widest uppercase text-accent-yellow">Solutions</h2>
            <div className="h-px flex-1 bg-white/5"></div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[30px]">
            <ServiceCard 
              title="AI System Engineering" 
              desc="Building LLM-powered agents and RAG pipelines for complex enterprise automation."
              icon={<Terminal size={20} />}
            />
            <ServiceCard 
              title="Full Stack Development" 
              desc="High-performance web architectures with React, FastAPI, and distributed systems."
              icon={<Code2 size={20} />}
            />
            <ServiceCard 
              title="Data Intelligence" 
              desc="Turning chaotic datasets into strategic business intelligence and predictive models."
              icon={<BarChart4 size={20} />}
            />
          </div>
        </section>

      </div>
    </div>
  )
}

const StatItem = ({ value, label }) => (
  <div className="flex flex-col items-center gap-1">
    <span className="text-[1.5rem] font-header font-extrabold text-accent-yellow">{value}</span>
    <span className="text-[0.6rem] text-text-secondary uppercase tracking-[0.2em]">{label}</span>
  </div>
)

const ServiceCard = ({ title, desc, icon }) => (
  <div className="bg-surface p-8 rounded-[4px] border border-white/5 transition-all duration-500 ease-smooth hover:border-accent-yellow/30 hover:-translate-y-1 group">
    <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center mb-6 text-accent-yellow group-hover:bg-accent-yellow group-hover:text-darker-bg transition-all duration-500">
      {icon}
    </div>
    <h3 className="text-[1.1rem] font-header font-extrabold mb-4">{title}</h3>
    <p className="text-[0.8rem] text-text-secondary leading-[1.6] mb-6">{desc}</p>
    <a href="#" className="text-accent-yellow text-[0.7rem] font-bold tracking-[0.2em] uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
      View Pipeline <span>&gt;</span>
    </a>
  </div>
)

export default MainContent
