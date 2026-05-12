import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react'

const Hero = () => {
  return (
    <section className="hero section-padding">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-badge"
        >
          <span className="badge-icon"><ShieldCheck size={14} /></span>
          <span>SYSTEM ENGINEER // ANALYTICS EXPERT</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-title"
        >
          Architecting the <span className="gradient-text">Future of Intelligence</span>.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-subtitle"
        >
          Full Stack Developer specialized in building scalable AI systems 
          and data-driven architectures that transform complex metrics 
          into actionable intelligence.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hero-actions"
        >
          <button className="glow-button">
            View Projects <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </button>
          <button className="outline-button">
            Data Insights
          </button>
        </motion.div>

        <div className="hero-visual">
          <div className="orbit-container">
            <div className="orbit-core"></div>
            <div className="orbit-ring ring-1"></div>
            <div className="orbit-ring ring-2"></div>
            <div className="orbit-ring ring-3"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          text-align: center;
          padding-top: 180px;
          min-height: 90vh;
          display: flex;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 16px;
          background: rgba(193, 255, 0, 0.1);
          border: 1px solid rgba(193, 255, 0, 0.2);
          border-radius: 100px;
          color: var(--accent-lime);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          margin-bottom: 2rem;
        }

        .hero-title {
          font-size: clamp(3rem, 8vw, 5.5rem);
          line-height: 1.1;
          margin-bottom: 1.5rem;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-subtitle {
          color: var(--text-secondary);
          font-size: 1.25rem;
          max-width: 600px;
          margin: 0 auto 3rem auto;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .outline-button {
          background: transparent;
          color: var(--text-primary);
          padding: 12px 28px;
          border-radius: 100px;
          font-weight: 600;
          border: 1px solid var(--surface-border);
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .outline-button:hover {
          border-color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
        }

        .hero-visual {
          margin-top: 80px;
          height: 300px;
          position: relative;
          overflow: hidden;
        }

        .orbit-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
        }

        .orbit-core {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          background: var(--accent-cyan);
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.3;
          animation: pulse 4s infinite ease-in-out;
        }

        .orbit-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 50%;
        }

        .ring-1 { width: 200px; height: 200px; animation: rotate 20s linear infinite; }
        .ring-2 { width: 400px; height: 400px; animation: rotate 30s linear reverse infinite; }
        .ring-3 { width: 600px; height: 600px; animation: rotate 40s linear infinite; }

        @keyframes rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.2); }
        }
      `}</style>
    </section>
  )
}

export default Hero
