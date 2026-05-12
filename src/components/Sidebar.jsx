import React from 'react'
import { motion } from 'framer-motion'
import { User, Mail, ExternalLink, Globe } from 'lucide-react'
import myPhoto from '../assets/myphoto.jpg'

const Sidebar = () => {
  return (
    <div className="w-[290px] h-full bg-darker-bg flex flex-col z-10 border-r border-white/5">
      <div className="p-[30px] text-center bg-surface">
        <div className="w-[90px] h-[90px] mx-auto mb-[15px] relative">
          <img src={myPhoto} alt="Suranjit Das" className="w-full h-full rounded-full object-cover" />
          <div className="absolute bottom-[5px] right-[5px] w-3 h-3 bg-accent-yellow rounded-full border-2 border-surface"></div>
        </div>
        <h3 className="text-[1rem] font-extrabold mb-[5px]">Suranjit Das</h3>
        <p className="text-[0.75rem] text-text-secondary leading-[1.4]">
          Full Stack & AI Engineer<br/>Analytics Expert
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-[30px]">
        <div className="flex flex-col gap-2 text-[0.75rem]">
          <div className="flex justify-between"><span className="font-semibold">Residence:</span><span className="text-text-secondary">Canada</span></div>
          <div className="flex justify-between"><span className="font-semibold">City:</span><span className="text-text-secondary">Toronto</span></div>
          <div className="flex justify-between"><span className="font-semibold">Age:</span><span className="text-text-secondary">26</span></div>
        </div>

        <div className="h-px bg-white/5 my-6"></div>

        <div className="flex justify-between">
          <CircularProgress percentage={100} label="Bengali" />
          <CircularProgress percentage={95} label="English" />
          <CircularProgress percentage={70} label="Hindi" />
        </div>

        <div className="h-px bg-white/5 my-6"></div>

        <div className="space-y-[15px]">
          <SkillBar skill="Python / AI" percentage={95} />
          <SkillBar skill="React / JS" percentage={90} />
          <SkillBar skill="Analytics / SQL" percentage={85} />
          <SkillBar skill="Node / System" percentage={80} />
        </div>
      </div>

      <div className="p-[15px_30px] flex justify-between text-text-secondary bg-surface">
        <Globe size={16} className="hover:text-text-primary cursor-pointer transition-colors" />
        <User size={16} className="hover:text-text-primary cursor-pointer transition-colors" />
        <Mail size={16} className="hover:text-text-primary cursor-pointer transition-colors" />
        <ExternalLink size={16} className="hover:text-text-primary cursor-pointer transition-colors" />
      </div>
    </div>
  )
}

const CircularProgress = ({ percentage, label }) => (
  <div className="text-center w-[60px]">
    <svg viewBox="0 0 36 36" className="block mx-auto mb-2 max-w-full">
      <path className="fill-none stroke-darker-bg stroke-[2.5]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
      <motion.path 
        initial={{ pathLength: 0 }}
        animate={{ pathLength: percentage / 100 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="fill-none stroke-accent-yellow stroke-[2.5] [stroke-linecap:round]" 
        strokeDasharray={`${percentage}, 100`} 
        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
      />
      <text x="18" y="20.35" className="fill-text-secondary text-[0.5rem] font-semibold" style={{ textAnchor: 'middle' }}>{percentage}%</text>
    </svg>
    <span className="text-[0.65rem] font-semibold block">{label}</span>
  </div>
)

const SkillBar = ({ skill, percentage }) => (
  <div>
    <div className="flex justify-between text-[0.75rem] mb-[5px] font-semibold">
      <span>{skill}</span>
      <span>{percentage}%</span>
    </div>
    <div className="h-[4px] bg-darker-bg rounded-sm overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full bg-accent-yellow"
      />
    </div>
  </div>
)

export default Sidebar
