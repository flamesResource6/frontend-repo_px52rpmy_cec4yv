import { motion, useScroll, useTransform } from 'framer-motion'

const portals = [
  { key: 'wrath', color: '#ef4444', desc1: 'Vengeance incarnate. Fury worn like armor.', desc2: 'Leather - Smoldering Incense - Blood Orange' },
  { key: 'envy', color: '#22c55e', desc1: 'Green gaze that smiles while it burns.', desc2: 'Emerald Moss - Bitter Neroli - Vetiver' },
  { key: 'lust', color: '#fb7185', desc1: 'Heat blooming under silk.', desc2: 'Damask Rose - Labdanum - Skin Musk' },
  { key: 'greed', color: '#f59e0b', desc1: 'Gold that refuses to fade.', desc2: 'Oud - Saffron - Gilded Amber' },
  { key: 'gluttony', color: '#fbbf24', desc1: 'Decadence without apology.', desc2: 'Honeyed Fig - Rum - Burnt Sugar' },
  { key: 'sloth', color: '#a78bfa', desc1: 'The privilege of moving slowly.', desc2: 'Poppy - Lavender - Heliotrope' },
  { key: 'pride', color: '#60a5fa', desc1: 'The room turns when you enter.', desc2: 'Iris - Blue Cypress - White Amber' },
]

export default function ActConstellation() {
  const { scrollYProgress } = useScroll()
  const nebulaRotate = useTransform(scrollYProgress, [0, 1], [0, 20])
  const starsY = useTransform(scrollYProgress, [0, 1], [0, -60])

  return (
    <section className="relative min-h-[140vh] bg-black text-white overflow-hidden">
      {/* Nebula gradient */}
      <motion.div style={{ rotate: nebulaRotate }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0014] to-[#001018]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(90,0,50,0.5),transparent_70%)]" />
      </motion.div>

      {/* Stars */}
      <motion.div style={{ y: starsY }} className="pointer-events-none absolute inset-0">
        {Array.from({ length: 140 }).map((_, i) => (
          <motion.span key={i} className="absolute h-0.5 w-0.5 rounded-full bg-white/80" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 3 + (i % 5), delay: i * 0.05, repeat: Infinity }} style={{ left: `${(i * 37) % 100}%`, top: `${(i * 19) % 100}%` }} />
        ))}
      </motion.div>

      {/* Heptagram layout */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.3 } } }} className="grid grid-cols-3 gap-y-16 md:gap-y-24">
          {portals.map((p, i) => (
            <Portal key={p.key} p={p} idx={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Portal({ p, idx }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      className="col-span-1 flex flex-col items-center text-center select-none"
    >
      <motion.div
        whileHover={{ scale: 1.15, boxShadow: `0 0 40px ${p.color}` }}
        transition={{ type: 'spring', stiffness: 200, damping: 16 }}
        className="relative h-40 w-40 rounded-full border border-white/20"
        style={{ boxShadow: `0 0 20px ${p.color}40` }}
      >
        <div className="absolute inset-1 rounded-full border border-white/10" />
        {/* minimal symbol substitutes */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Symbol name={p.key} color={p.color} />
        </div>
      </motion.div>
      <div className="mt-6">
        <p className="text-white/90 font-cormorant">{p.desc1}</p>
        <p className="mt-2 text-white/60 text-sm">{p.desc2}</p>
      </div>
      <button className="mt-5 text-xs tracking-[0.25em] uppercase text-white/70 hover:text-white transition">Enter</button>
    </motion.div>
  )
}

function Symbol({ name, color }) {
  const c = color
  switch (name) {
    case 'wrath':
      return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M10 44 L28 12 L46 44" stroke={c} strokeWidth="2" />
          <path d="M14 36 L42 36" stroke={c} strokeWidth="2" />
        </svg>
      )
    case 'envy':
      return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M28 12 C20 20, 20 36, 28 44 C36 36, 36 20, 28 12 Z" stroke={c} strokeWidth="2" />
        </svg>
      )
    case 'lust':
      return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <circle cx="22" cy="28" r="10" stroke={c} strokeWidth="2" />
          <path d="M30 28 C36 22, 40 28, 44 34" stroke={c} strokeWidth="2" />
        </svg>
      )
    case 'greed':
      return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M18 38 L28 14 L38 38 Z" stroke={c} strokeWidth="2" />
          <circle cx="28" cy="34" r="6" stroke={c} strokeWidth="2" />
        </svg>
      )
    case 'gluttony':
      return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M16 36 C16 24, 40 24, 40 36 C40 44, 16 44, 16 36 Z" stroke={c} strokeWidth="2" />
          <path d="M28 22 L28 18" stroke={c} strokeWidth="2" />
        </svg>
      )
    case 'sloth':
      return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M12 30 C12 20, 44 20, 44 30 C44 36, 12 36, 12 30 Z" stroke={c} strokeWidth="2" />
          <path d="M24 30 Q28 26, 32 30" stroke={c} strokeWidth="2" />
        </svg>
      )
    case 'pride':
      return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M12 40 C20 20, 36 20, 44 40" stroke={c} strokeWidth="2" />
          <path d="M28 18 L28 44" stroke={c} strokeWidth="2" />
        </svg>
      )
    default:
      return null
  }
}
