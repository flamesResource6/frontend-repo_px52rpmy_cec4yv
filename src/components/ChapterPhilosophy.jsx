import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const lines = [
  'Perfume is confession.',
  'Every fragrance reveals what you hide.',
  'Seven scents based on the seven deadly sins—',
  "each one a guilty pleasure you're finally allowed to claim.",
  'Hand-blended. Limited batches. Unapologetically honest.'
]

export default function ChapterPhilosophy() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index >= lines.length) return
    const delay = index === 0 ? 300 : 1200
    const t = setTimeout(() => setIndex((i) => i + 1), delay)
    return () => clearTimeout(t)
  }, [index])

  return (
    <section className="relative min-h-[120vh] bg-black text-white py-28">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(255,255,255,0.05),transparent_70%)]" />
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h3 className="text-sm tracking-[0.4em] text-white/50 uppercase mb-10">Philosophy</h3>

        {lines.slice(0, index).map((line, i) => (
          <TypeLine key={i} text={line} last={i === 3} />
        ))}

        {/* Omega divider appears between 4 and 5 */}
        {index >= 4 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="my-12 flex items-center justify-center"
          >
            <div className="h-px flex-1 bg-white/10" />
            <span className="px-6 text-3xl font-cinzel">Ω</span>
            <div className="h-px flex-1 bg-white/10" />
          </motion.div>
        )}

        {/* Credentials appears last */}
        {index >= 5 && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white/80 font-cormorant text-xl"
          >
            {lines[4]}
          </motion.p>
        )}
      </div>
    </section>
  )
}

function TypeLine({ text, last }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-6 text-2xl md:text-3xl leading-relaxed font-cormorant text-white/90"
    >
      <Typewriter text={text} />
    </motion.p>
  )
}

function Typewriter({ text, speed = 22 }) {
  const [out, setOut] = useState('')
  useEffect(() => {
    setOut('')
    let i = 0
    const id = setInterval(() => {
      setOut((prev) => prev + text.charAt(i))
      i++
      if (i >= text.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [text, speed])

  return (
    <span>
      {out}
      <span className="inline-block w-[1ch] -mb-1 animate-pulse">▍</span>
    </span>
  )
}
