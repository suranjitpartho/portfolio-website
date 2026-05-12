import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, BarChart3, Code2, Menu } from 'lucide-react'

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="navbar"
    >
      <div className="container nav-content">
        <div className="logo">
          <Cpu className="icon-cyan" size={24} />
          <span className="logo-text">SURANJIT<span className="accent">.DAS</span></span>
        </div>

        <div className="nav-links">
          <a href="#projects">Work</a>
          <a href="#skills">Systems</a>
          <a href="#about">About</a>
          <button className="glow-button">Contact</button>
        </div>

        <div className="mobile-menu">
          <Menu size={24} />
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 80px;
          display: flex;
          align-items: center;
          z-index: 1000;
          background: rgba(3, 3, 3, 0.5);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--surface-border);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 800;
          font-size: 1.2rem;
          letter-spacing: 0.1em;
        }

        .icon-cyan {
          color: var(--accent-cyan);
          filter: drop-shadow(0 0 8px rgba(0, 242, 255, 0.4));
        }

        .logo-text .accent {
          color: var(--accent-cyan);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .nav-links a {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .nav-links a:hover {
          color: var(--text-primary);
        }

        .mobile-menu {
          display: none;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .mobile-menu {
            display: block;
          }
        }
      `}</style>
    </motion.nav>
  )
}

export default Navbar
