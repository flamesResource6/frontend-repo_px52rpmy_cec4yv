import { motion, useScroll, useTransform } from 'framer-motion'

export default function ActTransitionStorm() {
  const { scrollYProgress } = useScroll()
  const rotateDeep = useTransform(scrollYProgress, [0, 1], [0, 20])
  const rotateMid = useTransform(scrollYProgress, [0, 1], [0, -30])
  const rotateFore = useTransform(scrollYProgress, [0, 1], [0, 40])

  return (
    <section className="relative min-h-[100vh] bg-black text-white overflow-hidden">
      {/* Cloud vortex layers */}
      <motion.div style={{ rotate: rotateDeep }} className="absolute inset-0 opacity-60" >
        <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_50%,#220016,transparent)]" />
      </motion.div>
      <motion.div style={{ rotate: rotateMid }} className="absolute inset-0 opacity-60 mix-blend-screen">
        <div className="absolute inset-0" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1543966888-7c1dc482a810?q=80&w=1600&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      </motion.div>
      <motion.div style={{ rotate: rotateFore }} className="absolute inset-0 opacity-80 mix-blend-screen">
        <div className="absolute inset-0" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      </motion.div>

      {/* Lightning */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <motion.span key={i} className="absolute left-1/2 top-10 h-px w-80 bg-purple-400/30" initial={{ opacity: 0 }} whileInView={{ opacity: [0, 1, 0] }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.6 }} style={{ transform: `rotate(${15 + i * 8}deg)` }} />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-28 text-center">
        <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-4xl md:text-5xl font-cinzel">
          Which sin will you claim?
        </motion.h3>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.8 }} className="mt-6 text-2xl text-red-400/80">
          Choose your sin...
        </motion.p>

        {/* Ink bleed wipe */}
        <motion.div initial={{ clipPath: 'inset(0 50% 0 50%)' }} whileInView={{ clipPath: 'inset(0 0% 0 0%)' }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 1.2 }} className="mt-16 h-24 bg-black/90 shadow-[0_0_40px_20px_rgba(0,0,0,0.9)]" />
      </div>
    </section>
  )
}
