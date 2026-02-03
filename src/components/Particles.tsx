'use client'
import { useEffect, useRef } from 'react'

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    let width = canvas!.width = window.innerWidth
    let height = canvas!.height = window.innerHeight

    let offsetX = 0
    let offsetY = 0
    let animationFrame: number

    const particleCount = 160
    const palette = ['#7D82B8', '#4ADE80', '#60A5FA']
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      dx: (Math.random() - 0.5) * 0.6,
      dy: (Math.random() - 0.5) * 0.6,
      r: Math.random() * 2.2 + 0.8,
      hue: palette[Math.floor(Math.random() * palette.length)],
      pulseOffset: Math.random() * Math.PI * 2,
    }))

    const shapes = Array.from({ length: 14 }).map(() => {
      const types = ['triangle', 'square', 'hexagon'] as const
      const type = types[Math.floor(Math.random() * types.length)]
      return {
        type,
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 90 + 50,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.003,
        orbitRadius: Math.random() * 25 + 10,
        orbitSpeed: (Math.random() - 0.5) * 0.001,
        accent: palette[Math.floor(Math.random() * palette.length)],
      }
    })

    const draw = () => {
      ctx!.globalCompositeOperation = 'source-over'
      ctx!.fillStyle = 'rgba(5,5,12,0.22)'
      ctx!.fillRect(0, 0, width, height)

      const time = Date.now() * 0.0015

      ctx!.save()
      ctx!.globalAlpha = 0.12
      ctx!.fillStyle = 'rgba(96,165,250,0.25)'
      for (const shape of shapes) {
        shape.rotation += shape.rotationSpeed
        const orbitX = Math.cos(time * 1.5 + shape.rotation) * shape.orbitRadius
        const orbitY = Math.sin(time * 1.5 + shape.rotation) * shape.orbitRadius

        ctx!.save()
        ctx!.translate(shape.x + orbitX + offsetX * 8, shape.y + orbitY + offsetY * 8)
        ctx!.rotate(shape.rotation)

        switch (shape.type) {
          case 'triangle': {
            const side = shape.size
            ctx!.beginPath()
            ctx!.moveTo(0, -side / Math.sqrt(3))
            ctx!.lineTo(-side / 2, side / (2 * Math.sqrt(3)))
            ctx!.lineTo(side / 2, side / (2 * Math.sqrt(3)))
            ctx!.closePath()
            break
          }
          case 'square': {
            const half = shape.size / 2
            ctx!.beginPath()
            ctx!.rect(-half, -half, shape.size, shape.size)
            break
          }
          case 'hexagon': {
            const radius = shape.size / 2
            ctx!.beginPath()
            for (let i = 0; i < 6; i++) {
              const angle = (Math.PI / 3) * i
              const px = radius * Math.cos(angle)
              const py = radius * Math.sin(angle)
              if (i === 0) ctx!.moveTo(px, py)
              else ctx!.lineTo(px, py)
            }
            ctx!.closePath()
            break
          }
        }

        ctx!.strokeStyle = shape.accent
        ctx!.lineWidth = 1.5
        ctx!.stroke()
        ctx!.restore()
      }
      ctx!.restore()

      for (const p of particles) {
        const pulse = Math.sin(time + p.pulseOffset) * 0.5 + 1
        const radius = p.r * pulse

        ctx!.beginPath()
        ctx!.arc(p.x + offsetX, p.y + offsetY, radius, 0, 2 * Math.PI)
        ctx!.fillStyle = p.hue
        ctx!.globalAlpha = 0.85
        ctx!.fill()
        ctx!.globalAlpha = 1

        p.x += p.dx
        p.y += p.dy

        if (p.x < 0 || p.x > width) p.dx *= -1
        if (p.y < 0 || p.y > height) p.dy *= -1
        if (p.x < -50 || p.x > width + 50) p.x = Math.random() * width
        if (p.y < -50 || p.y > height + 50) p.y = Math.random() * height
      }

      ctx!.lineWidth = 0.7
      ctx!.globalAlpha = 0.35
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = (a.x - b.x)
          const dy = (a.y - b.y)
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 160) {
            const opacity = 1 - dist / 160
            ctx!.strokeStyle = '#7D82B8'
            ctx!.globalAlpha = opacity * 0.4
            ctx!.beginPath()
            ctx!.moveTo(a.x + offsetX, a.y + offsetY)
            ctx!.lineTo(b.x + offsetX, b.y + offsetY)
            ctx!.stroke()
          }
        }
      }
      ctx!.globalAlpha = 1

      animationFrame = requestAnimationFrame(draw)
    }

    animationFrame = requestAnimationFrame(draw)

    const handleMouseMove = (e: MouseEvent) => {
      offsetX = (e.clientX - width / 2) * 0.01
      offsetY = (e.clientY - height / 2) * 0.01
    }

    const handleResize = () => {
      canvas!.width = width = window.innerWidth
      canvas!.height = height = window.innerHeight

      shapes.forEach((shape) => {
        shape.x = Math.random() * width
        shape.y = Math.random() * height
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0 opacity-80 pointer-events-none"
    />
  )
}
