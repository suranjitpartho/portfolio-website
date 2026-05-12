import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Globe, User, Mail, ExternalLink, MapPin, Quote, Zap, Activity } from 'lucide-react'
import myPhoto from '../assets/myphoto.jpg'

// Stable SVG Icons
const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
)
const GithubIconMid = ({ className = "" }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
)
const LinkedInIconSmall = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
)
const GithubIconSmall = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
)
const InstagramIconSmall = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
)

const Sidebar = () => {
  const [githubStats, setGithubStats] = useState({ total: '...', streak: '...' });
  const skills = ['Python', 'FastAPI', 'Laravel', 'Langgraph', 'React'];
  const githubUsername = 'suranjitpartho';

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${githubUsername}?y=last`)
      .then(res => res.json())
      .then(data => {
        const total = data.total?.lastYear || 0;
        let streak = 0;
        const today = new Date().toISOString().split('T')[0];
        
        if (data.contributions) {
           const allDays = [...data.contributions].reverse();
           for (const day of allDays) {
              if (day.count > 0) {
                streak++;
              } else if (day.date !== today) {
                break;
              }
           }
        }

        setGithubStats({
          total: total.toLocaleString(),
          streak: `${streak} days`
        });
      })
      .catch(err => {
        console.error('GitHub fetch failed:', err);
        setGithubStats({ total: 'ERR', streak: 'ERR' });
      });
  }, []);

  return (
    <div className="w-[290px] h-full bg-darker-bg flex flex-col z-10 border-r border-white/5">
      {/* Profile Header */}
      <div className="p-[30px] text-center bg-surface">
        <div className="w-[90px] h-[90px] mx-auto mb-[15px] relative">
          <img src={myPhoto} alt="Suranjit Das" className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
          <div className="absolute bottom-[5px] right-[5px] w-3 h-3 bg-accent-yellow rounded-full border-2 border-surface animate-pulse"></div>
        </div>
        <h3 className="text-[1.1rem] font-header font-semibold mb-[5px] tracking-tight text-text-primary">Suranjit Das</h3>
        <p className="text-[0.7rem] text-text-secondary leading-[1.4] font-medium">
          AI Systems, Analytics &<br />Full Stack Engineer
        </p>
      </div>

      {/* Sidebar Content */}
      <div className="flex-1 overflow-y-auto p-[30px] space-y-8 no-scrollbar">
        {/* Basic Info */}
        <div className="space-y-2 text-[0.7rem]">
          <div className="flex justify-between">
            <span className="font-semibold text-text-primary">Location:</span>
            <span className="text-text-secondary">Auckland, NZ</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-text-primary">Experience:</span>
            <span className="text-text-secondary">8+ Years</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-text-primary">Age:</span>
            <span className="text-text-secondary">33</span>
          </div>
        </div>

        <div className="h-px bg-white/5"></div>

        {/* GitHub "Infograph" - Icon Integrated */}
        <div className="space-y-5">
          {/* Main Stat Block */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <GithubIconMid className="text-accent-yellow opacity-80" />
              <p className="text-[1.8rem] font-header font-bold text-accent-yellow leading-none tracking-tighter">
                {githubStats.total}
              </p>
            </div>
            <p className="text-[0.65rem] text-text-secondary font-medium pl-1">
              Github commits (last 365 days)
            </p>
          </div>

          {/* Secondary Stat (Tiered) */}
          <div className="flex flex-col items-end pr-2">
            <p className="text-[1.1rem] font-header font-bold text-text-primary/90 leading-none tracking-tighter">
              {githubStats.streak}
            </p>
            <p className="text-[0.6rem] text-text-secondary mt-1">
              Current active streak
            </p>
          </div>
        </div>

        <div className="h-px bg-white/5"></div>

        {/* Mission Statement */}
        <div className="text-[0.7rem] space-y-3 text-center px-2">
          <Quote size={14} className="mx-auto text-accent-yellow opacity-60 rotate-180" />
          <p className="text-text-secondary leading-relaxed italic">
            "Engineering AI systems for global humanitarian impact!"
          </p>
        </div>

        <div className="h-px bg-white/5"></div>

        {/* Skill Tags */}
        <div className="space-y-3">
          <h4 className="text-[0.7rem] font-header font-semibold text-accent-yellow tracking-widest uppercase">Expertise</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map(tag => (
              <span key={tag} className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[0.6rem] text-text-secondary font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Social Footer */}
      <div className="p-[15px_30px] flex justify-around text-text-secondary bg-surface border-t border-white/5">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-yellow transition-colors"><LinkedInIconSmall /></a>
        <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer" className="hover:text-accent-yellow transition-colors"><GithubIconSmall /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-yellow transition-colors"><InstagramIconSmall /></a>
      </div>
    </div>
  )
}

export default Sidebar
