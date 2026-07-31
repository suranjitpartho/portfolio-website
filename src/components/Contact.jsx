import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Globe, Building, Clock, Briefcase, ArrowRight, Phone, CalendarClock } from 'lucide-react'

const EMAIL = 'suranjit.das@example.com'
const PHONE = '+64 21 234 5678'
const PHONE_HREF = `tel:${PHONE.replace(/\s/g, '')}`
const ROLES = [
  'AI Engineer',
  'Software Engineer',
  'Data Engineer',
  'BI Developer',
  'Data Analyst',
  'ML Engineer',
  'Systems Engineer',
]

const availability = [
  { label: 'Remote', icon: <Globe size={22} strokeWidth={1.8} /> },
  { label: 'On-site', icon: <Building size={22} strokeWidth={1.8} /> },
  { label: '25 hrs / week', icon: <Clock size={22} strokeWidth={1.8} /> },
]

const Contact = () => {
  return (
    <section id="contact" className="mb-20 scroll-mt-8">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-12">
        <div className="flex items-center gap-3">
          <Mail size={18} className="text-accent-yellow" />
          <h2 className="flex items-baseline gap-3 text-[1.1rem] font-header font-extrabold tracking-[0.3em] uppercase text-text-primary">
            Contact
            <span className="font-mono text-[0.75rem] text-accent-yellow/90 tracking-normal">whakapā</span>
          </h2>
        </div>
        <div className="h-px flex-1 bg-white/5"></div>
      </div>

      <div className="grid md:grid-cols-5 gap-[30px] items-stretch">
        {/* Availability - left, border-only card */}
        <div className="md:col-span-2 flex flex-col border border-white/10 rounded-[12px] p-6">
          <div className="flex items-center gap-2.5 mb-5">
            <CalendarClock size={18} className="text-text-secondary" />
            <h3 className="text-[1.2rem] font-header font-extrabold tracking-tight text-text-primary">
              Availability
            </h3>
          </div>
          <div className="flex-1 flex flex-row gap-7 items-center justify-center py-6">
            {availability.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2.5">
                <div className="text-text-secondary">{item.icon}</div>
                <span className="text-[0.6rem] font-mono uppercase tracking-[0.15em] text-text-primary text-center">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Open to roles - compact card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3 bg-surface/60 backdrop-blur-md rounded-[12px] border border-white/10 p-6"
        >
          <div className="flex items-center gap-2.5 mb-5">
            <Briefcase size={18} className="text-text-secondary" />
            <h3 className="text-[1.2rem] font-header font-extrabold tracking-tight text-text-primary">
              Open to roles
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {ROLES.map((role) => (
              <span
                key={role}
                className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[0.65rem] font-medium text-text-primary transition-colors duration-300 hover:border-white/30"
              >
                {role}
              </span>
            ))}
            <span className="px-3 py-1.5 rounded-full border border-white/10 text-[0.65rem] font-medium text-text-secondary">
              &amp; more
            </span>
          </div>
        </motion.div>
      </div>

      {/* Email / Call CTA */}
      <div className="mt-[40px] flex flex-col items-center text-center">
        <h3 className="text-[1.3rem] font-header font-extrabold tracking-tight text-text-primary mb-2">
          Kōrero mai
        </h3>
        <p className="text-[0.7rem] text-text-secondary leading-[1.5] font-medium mb-6 max-w-[420px]">
          Come talk — I&apos;d love to hear about your team. Whether it&apos;s a part-time
          AI role or a one-off build, let&apos;s kōrero.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <motion.a
            href={`mailto:${EMAIL}`}
            whileTap={{ scale: 0.95 }}
            className="relative group overflow-hidden inline-flex items-center gap-2 bg-accent-yellow text-black px-6 py-2.5 font-extrabold uppercase tracking-[0.2em] text-[0.6rem] rounded-[2px] transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            <span className="relative z-10 flex items-center gap-2">
              Email Me <ArrowRight size={12} strokeWidth={3} />
            </span>
          </motion.a>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md text-white border border-white/10 px-6 py-2.5 font-extrabold uppercase tracking-[0.2em] text-[0.6rem] rounded-[2px] hover:bg-white/10 hover:border-white/30 transition-all duration-300"
          >
            <Phone size={12} strokeWidth={2.5} /> Call Me
          </a>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 font-mono text-[0.55rem] uppercase tracking-[0.2em] text-text-secondary">
          <span className="flex items-center gap-2">
            <MapPin size={12} className="text-text-secondary" />
            Auckland, NZ · UTC+12
          </span>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-2 transition-colors duration-300 hover:text-accent-yellow"
          >
            <Mail size={12} className="text-text-secondary" />
            {EMAIL}
          </a>
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 transition-colors duration-300 hover:text-accent-yellow"
          >
            <Phone size={12} className="text-text-secondary" />
            {PHONE}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
