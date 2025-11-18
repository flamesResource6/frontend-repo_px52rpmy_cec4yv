import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

const LINES = [
  { t: 'Perfume is confession.', cls: 'text-5xl font-cinzel' },
  { t: 'Every fragrance reveals what you hide.', cls: 'text-3xl font-cormorant' },
  { t: 'Seven scents based on the seven deadly sins—', cls: 'text-2xl text-yellow-300' },
  { t: "each one a guilty pleasure you're finally allowed to claim.", cls: 'italic text-2xl' },
]

export default function ActConfession() {
  const { scrollYProgress } = useScroll()
  const columnsY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const flames = useTransform(scrollYProgress, [0, 1], [0, 40])

  const [index, setIndex] = useState(0)
  useEffect(() => {
    if (index >= LINES.length) return
    const delay = index === 0 ? 400 : 1200
    const t = setTimeout(() => setIndex((i) => i + 1), delay)
    return () => clearTimeout(t)
  }, [index])

  return (
    <section className="relative min-h-[130vh] bg-[#0b0b0b] text-white overflow-hidden py-24">
      {/* parchment texture */}
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />

      {/* Greek columns */}
      <motion.div style={{ y: columnsY }} className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-no-repeat bg-contain"
             style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)', backgroundPosition: 'left center' }} />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-no-repeat bg-contain"
             style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)', backgroundPosition: 'right center', transform: 'scaleX(-1)' }} />
      </motion.div>

      {/* candlelight */}
      <motion.div style={{ y: flames }} className="pointer-events-none absolute inset-x-0 bottom-0 h-48">
        <div className="absolute left-8 bottom-0 w-24 h-24 rounded-full blur-2xl" style={{ background: 'radial-gradient(circle, rgba(255,180,80,0.45), rgba(0,0,0,0))' }} />
        <div className="absolute right-8 bottom-0 w-24 h-24 rounded-full blur-2xl" style={{ background: 'radial-gradient(circle, rgba(255,180,80,0.45), rgba(0,0,0,0))' }} />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {LINES.slice(0, index).map((l, i) => (
          <motion.p key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className={`mb-6 ${l.cls}`}>
            <Type text={l.t} />
          </motion.p>
        ))}

        {index >= 4 && (
          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="my-10 flex items-center justify-center">
            <span className="text-4xl font-cinzel text-yellow-300">Ω</span>
          </motion.div>
        )}

        {index >= 4 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="text-xl font-cormorant text-white/90">
            Hand-blended. Limited batches. Unapologetically honest.
          </motion.p>
        )}
      </div>

      {/* drifting dust */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 60 }).map((_, i) => (
          <motion.span key={i} className="absolute h-0.5 w-0.5 rounded-full bg-yellow-100/60" initial={{ opacity: 0, y: -20 }} animate={{ opacity: [0, 1, 0], y: [0, 120, 180] }} transition={{ duration: 6 + (i % 4), delay: i * 0.12, repeat: Infinity }} style={{ left: `${(i * 37) % 100}%`, top: `${(i * 13) % 100}%` }} />
        ))}
      </div>
    </section>
  )
}

function Type({ text, speed = 22 }) {
  const [out, setOut] = useState('')
  useEffect(() => {
    setOut('')
    let i = 0
    const id = setInterval(() => {
      setOut((p) => p + text.charAt(i))
      i++
      if (i >= text.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [text, speed])
  return <span>{out}<span className="inline-block w-[1ch] -mb-1 animate-pulse">▍</span></span>
}
