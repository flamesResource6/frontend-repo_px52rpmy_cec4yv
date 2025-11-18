import { motion, useAnimation } from 'framer-motion'
import { useEffect, useMemo } from 'react'

// Tiny helpers
const range = (n) => Array.from({ length: n }, (_, i) => i)
const rand = (min, max) => Math.random() * (max - min) + min

export default function ActSplitRevelation() {
  const wordmark = useAnimation()
  const blade = useAnimation()
  const halves = useAnimation()
  const divider = useAnimation()
  const quote = useAnimation()
  const shake = useAnimation()

  // Safely build the damask data-URI to avoid esbuild parsing issues
  const damaskUrl = useMemo(() => {
    const svg = `\n      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">\n        <defs>\n          <pattern id="d" width="150" height="150" patternUnits="userSpaceOnUse">\n            <path d="M75 0c10 20 30 35 50 45-20 10-40 25-50 45-10-20-30-35-50-45 20-10 40-25 50-45Z" fill="#ffffff" fill-opacity="0.6"/>\n            <circle cx="75" cy="75" r="16" fill="#ffffff" fill-opacity="0.5"/>\n          </pattern>\n        </defs>\n        <rect width="100%" height="100%" fill="url(#d)"/>\n      </svg>\n    `.trim()
    return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`
  }, [])

  useEffect(() => {
    async function run() {
      // Spotlight fade-in on the wordmark
      await wordmark.start({ opacity: 1, filter: 'brightness(100%)', transition: { duration: 2, ease: [0.16, 1, 0.3, 1] } })
      // Blade drops
      blade.start({ y: ['-60vh', '50vh'], transition: { duration: 1.5, ease: [0.2, 0.8, 0.2, 1] } })
      // Screen shake on impact near bottom
      await shake.start({
        x: [0, 2, -2, 2, -1, 0],
        y: [0, -1, 1, -1, 0.5, 0],
        transition: { duration: 0.3 }
      })
      // Split the halves
      await halves.start({
        '--leftX': '-22vw',
        '--rightX': '22vw',
        '--leftRot': '-5deg',
        '--rightRot': '5deg',
        transition: { duration: 1.5, ease: [0.2, 0.8, 0.2, 1] }
      })
      // Rotate blade to horizontal and turn into divider
      await blade.start({ rotate: 90, transition: { duration: 1, ease: [0.2, 0.8, 0.2, 1] } })
      divider.start({
        width: '100%', opacity: 1, boxShadow: ['0 0 30px #DC143C, 0 0 60px #DC143C', '0 0 10px #DC143C, 0 0 40px #DC143C', '0 0 30px #DC143C, 0 0 60px #DC143C'],
        transition: { duration: 2.2, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }
      })
      // Reveal the quote
      quote.start({ opacity: 1, y: 0, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 } })
    }
    run()
  }, [])

  // Precompute particles to avoid layout shifts
  const embers = range(28).map((i) => ({
    key: `ember-${i}`,
    left: rand(5, 95),
    delay: rand(0, 8),
    duration: rand(10, 18),
    size: rand(4, 6)
  }))
  const sparks = range(10).map((i) => ({
    key: `spark-${i}`,
    left: rand(35, 65),
    top: rand(30, 55),
    delay: rand(0, 5),
    duration: 0.8
  }))

  return (
    <section className="relative min-h-[120vh] overflow-hidden text-white">
      {/* BASE: Deep radial gradient (spotlight) with slow breathing */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        animate={{ filter: ['brightness(98%)', 'brightness(93%)', 'brightness(98%)'] }}
        transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
        style={{
          background: 'radial-gradient(circle at 50% 50%, #2A0A0F 0%, #110408 55%, #000000 100%)'
        }}
      />

      {/* Heavy vignette to frame the stage */}
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(circle at 50% 48%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.3) 65%, rgba(0,0,0,0.6) 100%)'
      }} />

      {/* Gothic arches (visible silhouettes) */}
      <div aria-hidden className="absolute inset-0 opacity-[0.08] pointer-events-none">
        {/* Left */}
        <svg className="absolute left-0 top-0 h-full" viewBox="0 0 220 1000" preserveAspectRatio="none">
          <path d="M0,1000 L0,260 C0,120 90,40 110,0 C130,40 220,120 220,260 L220,1000 Z" fill="#1b1b1b" />
        </svg>
        {/* Right */}
        <svg className="absolute right-0 top-0 h-full" viewBox="0 0 220 1000" preserveAspectRatio="none">
          <path d="M0,1000 L0,260 C0,120 90,40 110,0 C130,40 220,120 220,260 L220,1000 Z" fill="#1b1b1b" transform="scale(-1,1) translate(-220,0)" />
        </svg>
      </div>

      {/* Damask watermark (5%) */}
      <div aria-hidden className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" style={{
        backgroundImage: damaskUrl,
        backgroundSize: '360px 360px'
      }} />

      {/* Film grain (20%) */}
      <div aria-hidden className="absolute inset-0 opacity-20 pointer-events-none mix-blend-soft-light" style={{
        backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)',
        backgroundSize: 'auto'
      }} />

      {/* Stage red light beams from corners (obvious) */}
      <motion.div aria-hidden className="absolute -left-10 -top-10 w-[220px] h-[120vh] origin-top-left pointer-events-none" animate={{ rotate: [12, -12, 12] }} transition={{ duration: 45, ease: 'easeInOut', repeat: Infinity }} style={{
        background: 'linear-gradient(180deg, rgba(139,0,0,0.15), rgba(139,0,0,0))', filter: 'blur(8px)'
      }} />
      <motion.div aria-hidden className="absolute -right-10 -top-10 w-[220px] h-[120vh] origin-top-right pointer-events-none" animate={{ rotate: [-12, 12, -12] }} transition={{ duration: 45, ease: 'easeInOut', repeat: Infinity }} style={{
        background: 'linear-gradient(180deg, rgba(139,0,0,0.15), rgba(139,0,0,0))', filter: 'blur(8px)'
      }} />

      {/* THICK FOG LAYERS (dense, different speeds) */}
      <motion.div aria-hidden className="absolute bottom-[18vh] left-0 right-0 h-[28vh] opacity-[0.12] mix-blend-screen pointer-events-none" animate={{ x: [-300, 300] }} transition={{ duration: 140, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }} style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1600&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(2px)'
      }} />
      <motion.div aria-hidden className="absolute bottom-[8vh] left-0 right-0 h-[24vh] opacity-[0.16] mix-blend-screen pointer-events-none" animate={{ x: [-240, 240] }} transition={{ duration: 110, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }} style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(2px)'
      }} />
      <motion.div aria-hidden className="absolute bottom-0 left-0 right-0 h-[22vh] opacity-[0.18] mix-blend-screen pointer-events-none" animate={{ x: [-180, 180] }} transition={{ duration: 90, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }} style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(1.5px)'
      }} />

      {/* Rising gold embers (20-30, 4-6px) */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {embers.map((e) => (
          <motion.span key={e.key} className="absolute rounded-full" style={{ left: `${e.left}%`, bottom: '-4%', width: e.size, height: e.size, background: 'rgba(232,197,71,0.95)', boxShadow: '0 0 18px 6px rgba(232,197,71,0.45)' }} animate={{ y: ['0%', '-115%'], opacity: [0, 1, 0] }} transition={{ duration: e.duration, delay: e.delay, repeat: Infinity, ease: 'easeOut' }} />
        ))}
      </div>

      {/* Red sparks (8-12) around split area */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {sparks.map((s) => (
          <motion.span key={s.key} className="absolute rounded-full" style={{ left: `${s.left}%`, top: `${s.top}%`, width: 3, height: 3, background: '#DC143C', boxShadow: '0 0 16px 6px rgba(220,20,60,0.8)' }} animate={{ opacity: [0, 1, 0], scale: [0.6, 1.8, 0.6] }} transition={{ duration: s.duration, delay: s.delay, repeat: Infinity, ease: 'easeOut' }} />
        ))}
      </div>

      {/* CONTENT WRAPPER with shake effect on impact */}
      <motion.div animate={shake} className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-36">
        <div className="flex flex-col items-center justify-center text-center">
          {/* ELANOR wordmark (big, outlined gold, letterpress, red glow) */}
          <motion.h2
            initial={{ opacity: 0, filter: 'brightness(85%)' }}
            animate={wordmark}
            className="font-cinzel leading-none select-none"
            style={{
              fontSize: 'clamp(64px, 12vw, 180px)',
              letterSpacing: '0.15em',
              color: '#FFFFFF',
              WebkitTextStroke: '2px #D4AF37',
              textShadow: '0 1px 0 #111, 0 2px 2px rgba(0,0,0,0.8), 0 -1px 0 rgba(255,255,255,0.15), 0 0 30px rgba(220,20,60,0.8)'
            }}
          >
            ELANOR
          </motion.h2>

          {/* VERTICAL BLADE (dramatic) */}
          <motion.div
            initial={{ y: '-60vh', rotate: 0 }}
            animate={blade}
            className="relative mt-8"
            style={{ width: 5, height: '50vh' }}
          >
            <div className="absolute inset-0" style={{
              background: '#DC143C',
              boxShadow: '0 0 30px #DC143C, 0 0 60px #DC143C'
            }} />
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(to bottom, rgba(220,20,60,0), rgba(220,20,60,0.8), rgba(220,20,60,0))',
              filter: 'blur(6px)'
            }} />
          </motion.div>

          {/* SPLIT HALVES (clean ELA | NOR, wide gap, 3D tilt) */}
          <motion.div
            style={{ '--leftX': '0vw', '--rightX': '0vw', '--leftRot': '0deg', '--rightRot': '0deg' }}
            animate={halves}
            className="relative mt-10 h-[140px] w-full max-w-5xl"
          >
            <div className="absolute inset-y-0 left-1/2 -translate-x-[55%] flex items-center" style={{ transform: 'translateX(calc(-55% + var(--leftX))) rotateY(var(--leftRot))', transformStyle: 'preserve-3d' }}>
              <span className="font-cinzel select-none" style={{ fontSize: 'clamp(48px, 8vw, 140px)', letterSpacing: '0.15em', textShadow: '0 1px 0 #111, 0 2px 2px rgba(0,0,0,0.8)' }}>ELA</span>
            </div>
            <div className="absolute inset-y-0 left-1/2 -translate-x-[45%] flex items-center" style={{ transform: 'translateX(calc(-45% + var(--rightX))) rotateY(var(--rightRot))', transformStyle: 'preserve-3d' }}>
              <span className="font-cinzel select-none" style={{ fontSize: 'clamp(48px, 8vw, 140px)', letterSpacing: '0.15em', textShadow: '0 1px 0 #111, 0 2px 2px rgba(0,0,0,0.8)' }}>NOR</span>
            </div>
          </motion.div>

          {/* DIVIDER BAR (full width, pulsing glow) and red underglow fog */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={divider}
            className="relative mt-12 h-[8px] w-0 bg-[#DC143C]"
          >
            {/* Volumetric underglow */}
            <div className="absolute -bottom-10 left-0 right-0 h-20 pointer-events-none" style={{
              background: 'radial-gradient(ellipse at 50% 100%, rgba(220,20,60,0.35) 0%, rgba(220,20,60,0.0) 70%)', filter: 'blur(12px)'
            }} />
          </motion.div>

          {/* QUOTE (big, gold, glowing) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={quote}
            className="font-cormorant italic select-none"
            style={{
              marginTop: '120px',
              fontSize: 'clamp(28px, 4vw, 48px)',
              color: '#E8C547',
              letterSpacing: '0.03em',
              textShadow: '0 0 20px rgba(232, 197, 71, 0.5)'
            }}
          >
            “Seven scents. Seven temptations. Unapologetically yours.”
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}
