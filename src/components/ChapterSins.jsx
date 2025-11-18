import { motion } from 'framer-motion'

const sins = [
  { key: 'pride', title: 'Pride', tagline: 'Wear your crown. Own the room.' },
  { key: 'greed', title: 'Greed', tagline: 'More is a note that lingers.' },
  { key: 'lust', title: 'Lust', tagline: 'Skin remembers before the mind does.' },
  { key: 'envy', title: 'Envy', tagline: 'Green that smiles politely while it burns.' },
  { key: 'gluttony', title: 'Gluttony', tagline: 'Decadence without apology.' },
  { key: 'wrath', title: 'Wrath', tagline: 'A thunder kept in crystal.' },
  { key: 'sloth', title: 'Sloth', tagline: 'The privilege of moving slowly.' },
]

export default function ChapterSins() {
  return (
    <section className="relative bg-black text-white py-28">
      <div className="absolute inset-0 bg-[radial-gradient(65%_60%_at_50%_0%,rgba(255,255,255,0.04),transparent_70%)]" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h3 className="text-sm tracking-[0.4em] text-white/50 uppercase mb-10">Choose your sin</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sins.map((s, idx) => (
            <motion.article
              key={s.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.04 }}
              className="relative group overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(60%_60%_at_50%_35%,rgba(255,255,255,0.06),transparent_70%)]" />
              <div className="relative p-6">
                <header className="flex items-center justify-between">
                  <h4 className="text-2xl font-cinzel tracking-[0.14em]">{s.title.toUpperCase()}</h4>
                  <span className="text-xs tracking-widest text-white/50 uppercase">E</span>
                </header>
                <p className="mt-3 text-white/70 font-cormorant">{s.tagline}</p>
                <button className="mt-6 inline-flex items-center gap-2 text-sm tracking-widest uppercase text-white/70 hover:text-white transition">
                  Enter
                  <span aria-hidden>→</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
