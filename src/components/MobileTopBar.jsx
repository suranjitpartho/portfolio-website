import React from 'react'
import { Menu } from 'lucide-react'
import myPhoto from '../assets/myphoto.jpg'

const MobileTopBar = ({ onMenuOpen }) => {
  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 z-30 bg-darker-bg/90 backdrop-blur-md border-b border-white/10">
      <div className="h-16 px-4 flex items-center justify-between">
        <button
          onClick={onMenuOpen}
          className="flex items-center gap-3 bg-transparent border-none p-0 text-left"
        >
          <img
            src={myPhoto}
            alt="Suranjit Das"
            className="w-9 h-9 rounded-full object-cover grayscale"
          />
          <div>
            <p className="text-[0.8rem] font-header font-bold text-text-primary leading-tight">Suranjit Das</p>
            <p className="text-[0.55rem] text-text-secondary leading-tight">AI Systems · Software · Data</p>
          </div>
        </button>
        <button
          onClick={onMenuOpen}
          aria-label="Open menu"
          className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
        >
          <Menu size={22} strokeWidth={2} />
        </button>
      </div>
    </header>
  )
}

export default MobileTopBar
