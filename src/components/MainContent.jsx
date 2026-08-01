import React from 'react'

import Hero from './Hero'
import Projects from './Projects'
import Experience from './Experience'
import TechStack from './TechStack'
import Contact from './Contact'

const MainContent = () => {
  return (
    <div className="flex-1 h-full overflow-hidden relative">
      <div id="main-scroll" className="h-full overflow-y-auto p-[30px] no-scrollbar">

        <Hero />

        <Projects />

        <Experience />

        <TechStack />

        <Contact />

      </div>
    </div>
  )
}

export default MainContent
