import React, { useState } from 'react'
import { Home, Layers, Briefcase, Cpu, FileText, Mail } from 'lucide-react'

const navItems = [
  { id: 'home', icon: <Home size={18} />, label: 'Home' },
  { id: 'projects', icon: <Layers size={18} />, label: 'Projects' },
  { id: 'experience', icon: <Briefcase size={18} />, label: 'Experience' },
  { id: 'tech', icon: <Cpu size={18} />, label: 'Tech Stack' },
  { id: 'blog', icon: <FileText size={18} />, label: 'Blog' },
  { id: 'contact', icon: <Mail size={18} />, label: 'Contact' },
]

const RightNav = () => {
  const [activeItem, setActiveItem] = useState('home')

  return (
    <div className="w-[80px] h-full bg-darker-bg flex flex-col items-center justify-center border-l border-white/5 relative z-20">
      
      {/* Navigation Stack */}
      <nav className="flex flex-col gap-8">
        {navItems.map((item) => (
          <button 
            key={item.id}
            onClick={() => setActiveItem(item.id)}
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
              ? 'bg-accent-yellow text-darker-bg shadow-[0_10px_30px_rgba(255,181,7,0.25)]' 
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
