import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  const [currentMsgIndex, setCurrentMsgIndex] = useState(0);
  const [showMsg, setShowMsg] = useState(true);

  const messages = [
    "Hi there! 👋",
    "What are you up to today?",
    "Want to collaborate? ✨",
    "Looking for an AI Architect? 🤖",
    "I'm working on AI agent development 🚀",
    "Exploring LangGraph & LLMs! 🧠"
  ];

  const skills = ['Python', 'FastAPI', 'Laravel', 'Langgraph', 'React'];
  const githubUsername = 'suranjitpartho';

  useEffect(() => {
    const msgInterval = setInterval(() => {
      setShowMsg(false);
      setTimeout(() => {
        setCurrentMsgIndex((prev) => (prev + 1) % messages.length);
        setShowMsg(true);
      }, 500);
    }, 10000);

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

        const formattedStreak = streak < 10 ? `0${streak} d` : `${streak} d`;

        setGithubStats({
          total: total.toLocaleString(),
          streak: formattedStreak
        });
      })
      .catch(err => {
        console.error('GitHub fetch failed:', err);
        setGithubStats({ total: 'ERR', streak: 'ERR' });
      });

    return () => clearInterval(msgInterval);
  }, []);

  return (
    <div className="w-[290px] h-full bg-darker-bg flex flex-col z-10 border-r border-white/5">
      {/* Profile Header */}
      <div className="p-[30px_30px] text-center bg-surface relative">
        <div className="w-[85px] h-[85px] mx-auto mb-[15px] relative">
          <img src={myPhoto} alt="Suranjit Das" className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />

          {/* Pop Message Bubble - Fun Interactive Messages */}
          <AnimatePresence mode='wait'>
            {showMsg && (
              <motion.div
                key={currentMsgIndex}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                style={{ transformOrigin: '0% 0%' }}
                className="absolute top-[58px] left-[76px] bg-white/5 backdrop-blur-md border border-white/10 text-text-primary text-[0.65rem] font-medium px-4 py-2 rounded-2xl rounded-tl-none shadow-2xl z-20 whitespace-nowrap flex items-center"
              >
                {messages[currentMsgIndex]}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <h3 className="text-[1.1rem] font-header font-semibold mb-[5px] tracking-tight text-text-primary">Suranjit Das</h3>
        <p className="text-[0.7rem] text-text-secondary leading-[1.4] font-medium">
          AI Systems, Analytics &<br />Full Stack Engineer
        </p>
      </div>

      {/* Sidebar Content */}
      <div className="flex-1 overflow-y-auto p-[30px_30px] space-y-8 no-scrollbar">
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

        {/* GitHub "Infograph" */}
        <div className="space-y-5">
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

        {/* Skill Tags - Middle Aligned */}
        <div className="flex flex-wrap gap-2 justify-center">
          {skills.map(tag => (
            <span key={tag} className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[0.6rem] text-text-secondary font-medium hover:text-accent-yellow transition-colors cursor-default">
              {tag}
            </span>
          ))}
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
