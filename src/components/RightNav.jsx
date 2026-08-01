import React, { useState, useEffect } from 'react'
import { Home, Layers, Briefcase, Cpu, FileText, Mail } from 'lucide-react'

const navItems = [
  { id: 'home', icon: <Home size={18} />, label: 'Home' },
  { id: 'projects', icon: <Layers size={18} />, label: 'Projects' },
  { id: 'experience', icon: <Briefcase size={18} />, label: 'Experience' },
  { id: 'tech', icon: <Cpu size={18} />, label: 'Tech Stack' },
  { id: 'blog', icon: <FileText size={18} />, label: 'Blog' },
  { id: 'contact', icon: <Mail size={18} />, label: 'Contact' },
]

const SECTION_IDS = ['home', 'projects', 'experience', 'tech', 'contact']

const RightNav = () => {
  const [activeItem, setActiveItem] = useState('home')

  useEffect(() => {
    const container = document.getElementById('main-scroll')
    if (!container) return

    let rafId = null

    const updateActive = () => {
      const containerTop = container.getBoundingClientRect().top
      const band = container.clientHeight * 0.35
      let current = SECTION_IDS[0]
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top - containerTop <= band) {
          current = id
        }
      }
      if (container.scrollTop + container.clientHeight >= container.scrollHeight - 4) {
        current = SECTION_IDS[SECTION_IDS.length - 1]
      }
      setActiveItem(current)
    }

    const onScroll = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        rafId = null
        updateActive()
      })
    }

    updateActive()
    container.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      container.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const handleClick = (id) => {
    setActiveItem(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="w-[80px] h-full bg-darker-bg flex flex-col items-center justify-center border-l border-white/5 relative z-20">
      
      {/* Navigation Stack */}
      <nav className="flex flex-col gap-8">
        {navItems.map((item) => (
          <button 
            key={item.id}
            onClick={() => handleClick(item.id)}
            className="group relative flex items-center justify-center p-0 border-none bg-transparent"
          >
            {/* Command Label Tooltip */}
            <div className="absolute right-[110%] px-3 py-1.5 bg-surface text-text-primary text-[0.6rem] font-bold uppercase tracking-[0.2em] rounded-[4px] opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-white/5 pointer-events-none translate-x-2 group-hover:translate-x-0">
              {item.label}
              {/* Tooltip Tip */}
              <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-surface rotate-45 border-r border-t border-white/5"></div>
            </div>

            {/* Icon Container with Circular Solid BG for Active */}
            <div className={`w-9 h-9 flex items-center justify-center transition-all duration-500 rounded-full ${
              activeItem === item.id 
              ? 'bg-accent-yellow text-accent-yellow-dark shadow-[0_10px_30px_rgba(21,241,135,0.25)]' 
              : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
            }`}>
              {React.cloneElement(item.icon, { 
                strokeWidth: activeItem === item.id ? 2.5 : 1.8 
              })}
            </div>
          </button>
        ))}
      </nav>

    </div>
  )
}

export default RightNav
