import { useState, useEffect } from 'react'

const SECTION_IDS = ['home', 'projects', 'experience', 'tech', 'contact']

export const useScrollSpy = () => {
  const [activeItem, setActiveItem] = useState(SECTION_IDS[0])

  useEffect(() => {
    const container = document.getElementById('main-scroll')
    if (!container) return

    let rafId = null

    const updateActive = () => {
      const containerTop = container.getBoundingClientRect().top
      const band = container.clientHeight * 0.35
      let current = SECTION_IDS[0]
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top - containerTop <= band) {
          current = id
        }
      }
      if (container.scrollTop + container.clientHeight >= container.scrollHeight - 4) {
        current = SECTION_IDS[SECTION_IDS.length - 1]
      }
      setActiveItem(current)
    }

    const onScroll = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        rafId = null
        updateActive()
      })
    }

    updateActive()
    container.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      container.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const scrollTo = (id) => {
    setActiveItem(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return { activeItem, scrollTo }
}
