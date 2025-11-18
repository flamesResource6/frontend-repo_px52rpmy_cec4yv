import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'

function useType(text, speed = 55, startDelay = 600) {
  const [out, setOut] = useState('')
  useEffect(() => {
    let t1 = setTimeout(() => {
      let i = 0
      const id = setInterval(() => {
        setOut((p) => p + text.charAt(i))
        i++
        if (i >= text.length) clearInterval(id)
      }, speed)
    }, startDelay)
    return () => clearTimeout(t1)
  }, [text, speed, startDelay])
  return out
}

export default function ActVoidEntry() {
  const { scrollY } = useScroll()
  const gradientRotate = useTransform(scrollY, [0, 800], [0, 10])
  const emberY = useTransform(scrollY, [0, 800], [0, -60])
  const text = useType('Ready to indulge in sin?')

  const embers = useMemo(() => Array.from({ length: 120 }).map((_, i) => ({
    x: (i * 47) % 100,
    delay: (i % 12) * 0.2,
    size: 1 + (i % 3),
    dur: 4 + (i % 5),
    hue: 12 + (i % 40),
  })), [])

  return (
    <section className="relative h-screen w-full overflow-hidden text-white">
      {/* Rotating burgundy-to-black gradient with subtle damask texture */}
      <motion.div
        style={{ rotate: gradientRotate }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_50%,#2b000f_0%,#0a0004_45%,#000_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
             style={{
               backgroundImage:
                 'url(https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)',
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               filter: 'grayscale(1) contrast(1.4)'
             }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(255,0,0,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]" />
        {/* film grain */}
        <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />
      </motion.div>

      {/* Gold embers rising with parallax */}
      <motion.div style={{ y: emberY }} className="pointer-events-none absolute inset-0">
        {embers.map((e, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: [0, 1, 0], y: [-10, -80, -160] }}
            transition={{ duration: e.dur, delay: e.delay, repeat: Infinity, ease: 'easeOut' }}
            style={{
              left: `${e.x}%`,
              bottom: `${(i * 13) % 100}%`,
              width: e.size,
              height: e.size,
              boxShadow: `0 0 8px 2px hsl(${e.hue} 90% 55% / 0.8)` ,
              background: `hsl(${e.hue} 90% 65%)`
            }}
          />
        ))}
      </motion.div>

      {/* Center typing prompt */}
      <div className="relative z-10 h-full w-full flex items-center justify-center">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="font-cormorant text-2xl md:text-3xl"
          >
            <span className="text-white/90 drop-shadow-[0_0_8px_rgba(220,20,60,0.35)]">
              {text}
            </span>
            <span className="ml-1 inline-block w-[1ch] animate-pulse text-crimson-200">▍</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll prompt */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="flex flex-col items-center gap-2 text-white/70"
        >
          <svg width="18" height="28" viewBox="0 0 24 24" fill="none" className="opacity-80">
            <path d="M12 2v20M12 22l-6-6M12 22l6-6" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <span className="text-xs tracking-[0.25em] uppercase font-cinzel">Descend into temptation</span>
        </motion.div>
      </div>
    </section>
  )
}
