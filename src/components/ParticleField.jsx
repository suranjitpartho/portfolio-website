import React, { useEffect, useRef } from 'react'

const AMBER = '255,181,7'
const WHITE = '245,245,247'
const LINK_DIST = 130
const MOUSE_RADIUS = 150
const MAX_SPEED = 1.2

const ParticleField = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const area = canvas.parentElement
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let rafId = null
    let width = 0
    let height = 0
    let particles = []
    let mouse = { x: null, y: null }

    const init = () => {
      const count = Math.min(90, Math.max(35, Math.floor((width * height) / 16000)))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: reduceMotion ? 0 : (Math.random() - 0.5) * 0.2,
        vy: reduceMotion ? 0 : (Math.random() - 0.5) * 0.2,
        r: Math.random() * 1.5 + 0.8,
        color: Math.random() < 0.55 ? AMBER : WHITE,
      }))
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = area.offsetWidth
      height = area.offsetHeight
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      init()
    }

    const step = () => {
      ctx.clearRect(0, 0, width, height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        if (mouse.x !== null) {
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const dist = Math.hypot(dx, dy)
          if (dist < MOUSE_RADIUS && dist > 0.01) {
            const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS
            p.vx += (dx / dist) * force * 0.03
            p.vy += (dy / dist) * force * 0.03
          }
        }

        if (Math.hypot(p.vx, p.vy) > MAX_SPEED) {
          p.vx *= 0.95
          p.vy *= 0.95
        }

        if (p.x < -20) p.x = width + 20
        if (p.x > width + 20) p.x = -20
        if (p.y < -20) p.y = height + 20
        if (p.y > height + 20) p.y = -20

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color},0.7)`
        ctx.fill()
      }

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.35
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(${AMBER},${alpha})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      if (mouse.x !== null) {
        for (const p of particles) {
          const dist = Math.hypot(mouse.x - p.x, mouse.y - p.y)
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.7
            ctx.beginPath()
            ctx.moveTo(mouse.x, mouse.y)
            ctx.lineTo(p.x, p.y)
            ctx.strokeStyle = `rgba(${AMBER},${alpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      step()
      rafId = requestAnimationFrame(animate)
    }

    const onMouseMove = (e) => {
      const rect = area.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const onMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    resize()
    window.addEventListener('resize', resize)

    if (reduceMotion) {
      step()
    } else {
      area.addEventListener('mousemove', onMouseMove)
      area.addEventListener('mouseleave', onMouseLeave)
      animate()
    }

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
      area.removeEventListener('mousemove', onMouseMove)
      area.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 h-full w-full" aria-hidden="true" />
}

export default ParticleField
