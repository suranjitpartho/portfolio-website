import React from 'react'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import RightNav from './components/RightNav'

function App() {
  return (
    <div className="flex w-full h-full relative">
      <Sidebar />
      <MainContent />
      <RightNav />
    </div>
  )
}

export default App
