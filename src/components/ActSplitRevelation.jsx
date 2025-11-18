import { motion, useScroll, useTransform } from 'framer-motion'

export default function ActSplitRevelation() {
  const { scrollYProgress } = useScroll()
  const fogX = useTransform(scrollYProgress, [0, 1], [0, 80])
  const archY = useTransform(scrollYProgress, [0, 1], [0, -60])

  return (
    <section className="relative min-h-[120vh] bg-black text-white overflow-hidden">
      {/* Parallax arches and fog */}
      <motion.div style={{ y: archY }} className="pointer-events-none absolute inset-0 opacity-[0.12]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=1600&auto=format&fit=crop)',
          backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(1) contrast(1.2)'
        }} />
      </motion.div>
      <motion.div style={{ x: fogX }} className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1600&auto=format&fit=crop)',
          backgroundSize: 'cover', backgroundPosition: 'center'
        }} />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Wordmark */}
          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, scale: 0.96, letterSpacing: '0.5em' }}
              whileInView={{ opacity: 1, scale: 1, letterSpacing: '0.12em' }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-8xl font-cinzel drop-shadow-[0_0_18px_rgba(239,68,68,0.25)]"
              style={{ textShadow: '0 0 14px rgba(239,68,68,0.25)' }}
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

          {/* Split effect */}
          <div className="relative mt-12 h-20 w-full max-w-3xl">
            <motion.div
              initial={{ x: 0, rotateY: 0 }}
              whileInView={{ x: '-6%', rotateY: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="text-5xl md:text-6xl font-cinzel tracking-[0.35em]">ELA</span>
            </motion.div>
            <motion.div
              initial={{ x: 0, rotateY: 0 }}
              whileInView={{ x: '6%', rotateY: 5 }}
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

      {/* Rays and sparks during split moment */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <motion.span key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 1, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: i * 0.03 }}
            className="absolute left-1/2 top-1/2 h-px w-40 origin-left bg-red-400/60"
            style={{ transform: `rotate(${i * 9}deg) translateX(8px)` }}
          />
        ))}
      </div>
    </section>
  )
}
