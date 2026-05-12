import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Palette, Terminal, BarChart4 } from 'lucide-react'

const MainContent = () => {
  const yellowBtnClasses = "bg-accent-yellow text-darker-bg px-7 py-3 font-bold cursor-pointer transition-all duration-500 ease-smooth uppercase tracking-wider text-[0.8rem] rounded-[2px] hover:bg-[#ffca28] hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(255,193,7,0.3)]";

  return (
    <div className="flex-1 h-full overflow-hidden relative">
      <div className="h-full overflow-y-auto p-[30px]">
        
        {/* Banner Hero */}
        <section className="h-[400px] relative flex items-center p-[60px] rounded-[4px] mb-[30px] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ 
              backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')" 
            }}
          />
          <div className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[3.5rem] font-extrabold leading-[1.1] mb-5"
            >
              Architecting <br/> <span className="text-accent-yellow">Intelligent</span> Systems.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-[30px]"
            >
              <code className="bg-white/10 p-[4px_8px] rounded-[4px] text-accent-yellow font-mono text-[0.9rem]">
                I build agentic AI workflows & scalable full-stack apps.
              </code>
            </motion.p>
            <motion.button 
              className={yellowBtnClasses}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Now
            </motion.button>
          </div>
        </section>

        {/* Stats Row */}
        <section className="flex justify-between mb-[50px] px-[10px] flex-wrap gap-5">
          <StatItem value="10+" label="Years Experience" />
          <StatItem value="143" label="Completed Projects" />
          <StatItem value="114" label="Happy Customers" />
          <StatItem value="20+" label="Honors and Awards" />
        </section>

        {/* Services */}
        <section>
          <h2 className="text-[1.2rem] font-extrabold mb-[25px]">My Services</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[30px]">
            <ServiceCard 
              title="AI System Engineering" 
              desc="Building LLM-powered agents and RAG pipelines for complex enterprise automation."
            />
            <ServiceCard 
              title="Full Stack Development" 
              desc="High-performance web architectures with React, Node, and distributed systems."
            />
            <ServiceCard 
              title="Data Analytics" 
              desc="Turning chaotic datasets into strategic business intelligence and visualizations."
            />
          </div>
        </section>

      </div>
    </div>
  )
}

const StatItem = ({ value, label }) => (
  <div className="flex items-center gap-[15px]">
    <span className="text-[1.2rem] font-extrabold text-accent-yellow">{value}</span>
    <span className="text-[0.75rem] text-text-secondary max-w-[80px] leading-[1.2]">{label}</span>
  </div>
)

const ServiceCard = ({ title, desc }) => (
  <div className="bg-surface p-[30px] rounded-[4px] transition-all duration-500 ease-smooth hover:-translate-y-1">
    <h3 className="text-[1rem] font-extrabold mb-[15px]">{title}</h3>
    <p className="text-[0.8rem] text-text-secondary leading-[1.6] mb-5">{desc}</p>
    <a href="#" className="text-accent-yellow text-[0.7rem] font-extrabold tracking-widest uppercase">
      EXPLORE NOW &gt;
    </a>
  </div>
)

export default MainContent
