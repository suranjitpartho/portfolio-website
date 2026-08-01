import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'

import ParticleField from './ParticleField'

const Hero = () => {
  return (
    <section id="home" className="min-h-[240px] relative flex flex-col items-center justify-center p-5 md:p-[30px] rounded-[12px] mb-[40px] overflow-hidden text-center border border-white/5 shadow-2xl">
      <div className="absolute inset-0 z-0 bg-darker-bg"></div>
      <ParticleField />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-darker-bg/60 via-transparent to-darker-bg/80"></div>
      <div className="relative z-10 max-w-[800px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-5 font-mono text-[0.65rem] uppercase tracking-normal text-white"
          >
            nau mai haere mai
          </motion.div>
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
  )
}

export default Hero
