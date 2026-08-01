import React from 'react'
import { Home, Layers, Briefcase, Cpu, FileText, Mail } from 'lucide-react'
import { useScrollSpy } from '../hooks/useScrollSpy'

const navItems = [
  { id: 'home', icon: <Home size={18} />, label: 'Home' },
  { id: 'projects', icon: <Layers size={18} />, label: 'Projects' },
  { id: 'experience', icon: <Briefcase size={18} />, label: 'Experience' },
  { id: 'tech', icon: <Cpu size={18} />, label: 'Tech Stack' },
  { id: 'blog', icon: <FileText size={18} />, label: 'Blog' },
  { id: 'contact', icon: <Mail size={18} />, label: 'Contact' },
]

const MobileNav = () => {
  const { activeItem, scrollTo } = useScrollSpy()

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-darker-bg/90 backdrop-blur-md border-t border-white/10 pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-center justify-around px-2 py-1.5">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            aria-label={item.label}
            className="flex flex-col items-center gap-1 px-1"
          >
            <div className={`w-9 h-9 flex items-center justify-center rounded-full transition-all duration-500 ${
              activeItem === item.id
                ? 'bg-accent-yellow text-accent-yellow-dark'
                : 'text-text-secondary'
            }`}>
              {React.cloneElement(item.icon, {
                strokeWidth: activeItem === item.id ? 2.5 : 1.8,
              })}
            </div>
            <span className={`hidden sm:block text-[0.45rem] font-mono uppercase tracking-wider ${
              activeItem === item.id ? 'text-accent-yellow' : 'text-text-secondary'
            }`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  )
}

export default MobileNav
