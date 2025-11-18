import { motion, useScroll, useTransform } from 'framer-motion'

// Utility to create a range array
const range = (n) => Array.from({ length: n }, (_, i) => i)

export default function ActSplitRevelation() {
  const { scrollYProgress } = useScroll()
  const archY = useTransform(scrollYProgress, [0, 1], [0, -60])

  return (
    <section className="relative min-h-[120vh] text-white overflow-hidden">
      {/* Breathing radial gradient base */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        animate={{ filter: [
          'brightness(100%)',
          'brightness(95%)',
          'brightness(100%)',
        ] }}
        transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
        style={{
          background: 'radial-gradient(circle at 50% 48%, rgba(88,12,24,0.9) 0%, rgba(42,7,13,0.96) 40%, rgba(10,4,6,1) 70%, #000 100%)'
        }}
      />

      {/* Subtle damask watermark pattern (barely visible) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"300\" height=\"300\" viewBox=\"0 0 300 300\"><defs><pattern id=\"d\" width=\"150\" height=\"150\" patternUnits=\"userSpaceOnUse\"><path d=\"M75 0c10 20 30 35 50 45-20 10-40 25-50 45-10-20-30-35-50-45 20-10 40-25 50-45Z\" fill=\"%23ffffff\" fill-opacity=\"0.8\"/><circle cx=\"75\" cy=\"75\" r=\"16\" fill=\"%23ffffff\" fill-opacity=\"0.7\"/></pattern></defs><rect width=\"100%\" height=\"100%\" fill=\"url(%23d)\"/></svg>')",
          backgroundSize: '360px 360px'
        }}
      />

      {/* Velvet texture overlay (tactile luxury) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Vignette to focus center */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.6) 100%)'
        }}
      />

      {/* Gothic arch silhouettes left/right (extreme deep background) */}
      <motion.div aria-hidden style={{ y: archY }} className="pointer-events-none absolute inset-0 opacity-[0.04]">
        {/* Left arch */}
        <svg className="absolute left-0 top-0 h-full" viewBox="0 0 200 1000" preserveAspectRatio="none">
          <defs>
            <linearGradient id="archGradL" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,1000 L0,260 C0,120 80,40 100,0 C120,40 200,120 200,260 L200,1000 Z" fill="url(#archGradL)" />
        </svg>
        {/* Right arch */}
        <svg className="absolute right-0 top-0 h-full" viewBox="0 0 200 1000" preserveAspectRatio="none">
          <defs>
            <linearGradient id="archGradR" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,1000 L0,260 C0,120 80,40 100,0 C120,40 200,120 200,260 L200,1000 Z" fill="url(#archGradR)" transform="scale(-1,1) translate(-200,0)" />
        </svg>
      </motion.div>

      {/* Blood-red light rays from corners (slow rotation) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-10 -top-10 w-[70vw] h-[70vh] origin-top-left"
        animate={{ rotate: [10, -10, 10] }}
        transition={{ duration: 45, ease: 'easeInOut', repeat: Infinity }}
        style={{
          background: 'conic-gradient(from 315deg at 0% 0%, rgba(220,20,60,0.08), rgba(220,20,60,0.0) 45%)',
          filter: 'blur(6px)'
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 w-[70vw] h-[70vh] origin-top-right"
        animate={{ rotate: [-10, 10, -10] }}
        transition={{ duration: 45, ease: 'easeInOut', repeat: Infinity }}
        style={{
          background: 'conic-gradient(from 225deg at 100% 0%, rgba(220,20,60,0.08), rgba(220,20,60,0.0) 45%)',
          filter: 'blur(6px)'
        }}
      />

      {/* Horizontal fog layers (parallax, different speeds) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-10 left-0 right-0 h-[34vh] opacity-[0.12] mix-blend-screen"
        animate={{ x: [ -120, 120 ] }}
        transition={{ duration: 120, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1600&auto=format&fit=crop)',
          backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(2px)'
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-16 left-0 right-0 h-[28vh] opacity-[0.14] mix-blend-screen"
        animate={{ x: [ -200, 200 ] }}
        transition={{ duration: 90, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop)',
          backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(1.5px)'
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[24vh] opacity-[0.1] mix-blend-screen"
        animate={{ x: [ -260, 260 ] }}
        transition={{ duration: 75, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop)',
          backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(1.5px)'
        }}
      />

      {/* Rising gold embers (ambient loop) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {range(28).map((i) => {
          const left = Math.random() * 100
          const delay = Math.random() * 10
          const duration = 10 + Math.random() * 14
          const size = 1 + Math.random() * 2.5
          return (
            <motion.span
              key={`ember-${i}`}
              className="absolute rounded-full bg-[rgba(232,197,125,0.9)] shadow-[0_0_12px_2px_rgba(232,197,125,0.45)]"
              style={{ left: `${left}%`, bottom: '-4%', width: size, height: size }}
              animate={{ y: ['0%', '-110%'], opacity: [0, 1, 0] }}
              transition={{ duration, delay, repeat: Infinity, ease: 'easeOut' }}
            />
          )
        })}
      </div>

      {/* Red sparks (brief flickers mid-screen) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {range(7).map((i) => {
          const left = 20 + Math.random() * 60
          const top = 30 + Math.random() * 35
          const delay = Math.random() * 6
          const duration = 0.5 + Math.random() * 0.4
          return (
            <motion.span
              key={`spark-${i}`}
              className="absolute bg-red-500 rounded-full"
              style={{ left: `${left}%`, top: `${top}%`, width: 2, height: 2, boxShadow: '0 0 14px 4px rgba(255,0,0,0.35)' }}
              animate={{ opacity: [0, 1, 0], scale: [0.6, 1.5, 0.6] }}
              transition={{ duration, delay, repeat: Infinity, ease: 'easeOut' }}
            />
          )
        })}
      </div>

      {/* Content: Wordmark split */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Wordmark materialization */}
          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, scale: 0.96, letterSpacing: '0.5em' }}
              whileInView={{ opacity: 1, scale: 1, letterSpacing: '0.12em' }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-8xl font-cinzel drop-shadow-[0_0_18px_rgba(239,68,68,0.25)]"
              style={{ textShadow: '0 0 18px rgba(239,68,68,0.25)' }}
            >
              ELANOR
            </motion.h2>
            {/* Blade line */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              whileInView={{ height: '16rem', opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px bg-gradient-to-b from-red-500/0 via-red-500 to-red-500/0"
            />
          </div>

          {/* Split halves with subtle 3D */}
          <div className="relative mt-12 h-20 w-full max-w-3xl">
            <motion.div
              initial={{ x: 0, rotateY: 0 }}
              whileInView={{ x: '-7%', rotateY: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="text-5xl md:text-6xl font-cinzel tracking-[0.35em]">ELA</span>
            </motion.div>
            <motion.div
              initial={{ x: 0, rotateY: 0 }}
              whileInView={{ x: '7%', rotateY: 6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="text-5xl md:text-6xl font-cinzel tracking-[0.35em]">NOR</span>
            </motion.div>
          </div>

          {/* Divider bar */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: '100%', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="mt-8 h-1 bg-red-600 shadow-[0_0_40px_8px_rgba(220,20,60,0.45)]"
          />

          {/* Oath */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 text-2xl md:text-3xl font-cormorant"
            style={{ color: 'rgb(232 197 125)' }}
          >
            “Seven scents. Seven temptations. Unapologetically yours.”
          </motion.p>
        </div>
      </div>

      {/* Additional radial rays burst around split moment (one-time) */}
      <div className="pointer-events-none absolute inset-0">
        {range(36).map((i) => (
          <motion.span
            key={`ray-${i}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 1, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: i * 0.03 }}
            className="absolute left-1/2 top-1/2 h-px w-40 origin-left bg-red-400/60"
            style={{ transform: `rotate(${i * 10}deg) translateX(8px)` }}
          />
        ))}
      </div>
    </section>
  )
}
