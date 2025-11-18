import { motion } from 'framer-motion'

export default function ChapterOath() {
  return (
    <section className="relative min-h-[90vh] bg-black text-white flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_20%,rgba(255,255,255,0.05),transparent_70%)]" />
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: brand split reveal */}
        <div className="flex items-center justify-center">
          <div className="relative">
            <motion.h2
              initial={{ clipPath: 'inset(0 50% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-7xl font-cinzel tracking-[0.14em]"
            >
              ELANOR
            </motion.h2>
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: '100%', opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.9 }}
              className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-white/20"
            />
          </div>
        </div>

        {/* Right: oath text */}
        <div className="flex items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-xl md:text-2xl text-white/90 font-cormorant leading-relaxed"
            >
              "Seven scents. Seven temptations. Unapologetically yours."
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-white/60"
            >
              The oath is simple: we do not moralize desire. We distill it.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
