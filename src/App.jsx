import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import RightNav from './components/RightNav'
import MobileTopBar from './components/MobileTopBar'
import MobileDrawer from './components/MobileDrawer'
import MobileNav from './components/MobileNav'

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <div className="flex w-full h-full relative">
      <div className="hidden lg:block h-full">
        <Sidebar />
      </div>
      <MainContent />
      <RightNav />
      <MobileTopBar onMenuOpen={() => setDrawerOpen(true)} />
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <MobileNav />
    </div>
  )
}

export default App
