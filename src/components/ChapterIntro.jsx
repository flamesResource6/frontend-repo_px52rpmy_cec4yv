import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ChapterIntro({ onReveal }) {
  const [showTitle, setShowTitle] = useState(false)
  const [split, setSplit] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setShowTitle(true), 800)
    const t2 = setTimeout(() => setSplit(true), 3600)
    const t3 = setTimeout(() => onReveal && onReveal(), 4200)
    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3)
    }
  }, [onReveal])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Breathing vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_35%,rgba(255,255,255,0.06),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_20%,rgba(0,0,0,0.8)_100%)]" />

      {/* Floating dust */}
      <div className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_50%_at_50%_50%,#000_60%,transparent_100%)]">
        {[...Array(40)].map((_, i) => (
          <motion.span key={i}
            className="absolute h-0.5 w-0.5 rounded-full bg-white/40"
            initial={{ opacity: 0, x: (i * 73) % 300 - 150, y: (i * 37) % 500 - 250 }}
            animate={{ opacity: [0, 0.7, 0], y: [0, -40, 0] }}
            transition={{ duration: 6 + (i % 5), repeat: Infinity, delay: i * 0.12 }}
            style={{ left: `${(i * 91) % 100}%`, top: `${(i * 47) % 100}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 flex h-full items-center justify-center">
        <AnimatePresence>
          {showTitle && (
            <motion.div
              initial={{ opacity: 0, letterSpacing: '0.6em' }}
              animate={{ opacity: 1, letterSpacing: '0.1em' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.8, ease: 'easeOut' }}
              className="text-center"
            >
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className={`text-6xl md:text-8xl tracking-[0.12em] font-cinzel text-white`}
                >
                  ELANOR
                </motion.h1>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="mt-6 text-base md:text-lg text-white/70 font-cormorant"
              >
                Enter the beautiful darkness
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Split animation line */}
        {split && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '100%', opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="pointer-events-none absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        )}
      </div>
    </section>
  )
}
