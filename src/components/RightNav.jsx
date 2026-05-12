import React from 'react'
import { Menu } from 'lucide-react'

const RightNav = () => {
  return (
    <div className="w-[70px] h-full bg-darker-bg flex flex-col items-center py-[30px] border-l border-white/5">
      <div className="w-10 h-10 bg-surface flex items-center justify-center rounded-[4px] cursor-pointer mb-auto">
        <Menu size={20} />
      </div>

      <div className="[writing-mode:vertical-rl] [text-orientation:mixed] text-[0.7rem] font-extrabold text-text-secondary tracking-[2px] mb-auto">
        <span>HOME</span>
      </div>

      <div className="flex flex-col gap-[10px]">
        <span className="text-[0.65rem] font-extrabold text-text-secondary cursor-pointer w-[25px] h-[25px] flex items-center justify-center">FR</span>
        <span className="text-[0.65rem] font-extrabold bg-accent-yellow text-darker-bg cursor-pointer w-[25px] h-[25px] flex items-center justify-center rounded-full">EN</span>
      </div>
    </div>
  )
}

export default RightNav
