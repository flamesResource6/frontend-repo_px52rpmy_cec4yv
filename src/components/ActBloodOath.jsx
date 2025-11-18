import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'

function Ember({ delay = 0, color = 'rgba(255,120,80,0.8)' }) {
  const x = useMemo(() => Math.random() * 100, [])
  const size = useMemo(() => 2 + Math.random() * 3, [])
  const duration = useMemo(() => 2 + Math.random() * 2.5, [])
  return (
    <motion.span
      className="pointer-events-none absolute rounded-full"
      style={{ left: `${x}%`, bottom: '-10px', width: size, height: size, background: color, filter: 'blur(0.5px)' }}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: [0, 1, 0], y: [-10, -120 - Math.random() * 80], x: [0, (Math.random() - 0.5) * 30] }}
      transition={{ delay, duration, repeat: Infinity, ease: 'easeOut' }}
    />
  )
}

function GoldDust() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 40 }).map((_, i) => (
        <Ember key={i} delay={Math.random() * 3} color="rgba(255,215,130,0.6)" />
      ))}
    </div>
  )
}

function EmberField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 60 }).map((_, i) => (
        <Ember key={i} delay={Math.random() * 3} />
      ))}
    </div>
  )
}

function Smoke() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 -translate-x-1/2 w-[40vw] h-[40vh] rounded-full"
          style={{ top: `${10 + i * 10}%`, background: 'radial-gradient(closest-side, rgba(200,200,200,0.08), rgba(200,200,200,0.0))', filter: 'blur(20px)' }}
          initial={{ opacity: 0.05, y: 30, x: (i - 3) * 20 }}
          animate={{ opacity: [0.04, 0.1, 0.04], y: [-30, 30, -30], x: [(i - 3) * 30, (i - 3) * 10, (i - 3) * 30] }}
          transition={{ duration: 12 + i * 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

function EdgeFlames() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {/* Top flame */}
      <div className="absolute inset-x-0 top-0 h-24 [background:radial-gradient(100%_60%_at_50%_0%,rgba(255,60,0,0.45),rgba(255,0,0,0.08)_60%,transparent_70%)] animate-flame" />
      {/* Bottom flame */}
      <div className="absolute inset-x-0 bottom-0 h-24 [background:radial-gradient(100%_60%_at_50%_100%,rgba(255,80,20,0.5),rgba(255,0,0,0.08)_60%,transparent_70%)] animate-flame [animation-delay:120ms]" />
      {/* Left flame */}
      <div className="absolute inset-y-0 left-0 w-24 [background:radial-gradient(60%_100%_at_0%_50%,rgba(255,60,0,0.45),rgba(255,0,0,0.08)_60%,transparent_70%)] animate-flame [animation-delay:240ms]" />
      {/* Right flame */}
      <div className="absolute inset-y-0 right-0 w-24 [background:radial-gradient(60%_100%_at_100%_50%,rgba(255,60,0,0.45),rgba(255,0,0,0.08)_60%,transparent_70%)] animate-flame [animation-delay:360ms]" />
    </div>
  )
}

function GreekFragments() {
  const fragments = ['ἀλήθεια', 'ἁμαρτία', 'σάρξ', 'πόθος', 'κενόν', 'αἷμα']
  return (
    <div className="pointer-events-none absolute inset-0">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="absolute text-[18px] md:text-[22px] tracking-widest"
          style={{
            top: `${Math.random() * 80 + 5}%`,
            left: `${Math.random() * 70 + 5}%`,
            color: 'rgba(60,60,60,0.18)',
            transform: `rotate(${(Math.random() - 0.5) * 20}deg)`
          }}
        >
          {fragments[i % fragments.length]}
        </div>
      ))}
    </div>
  )
}

function InkSplotches() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            top: `${Math.random() * 80 + 5}%`,
            left: `${Math.random() * 80 + 5}%`,
            width: `${8 + Math.random() * 40}px`,
            height: `${8 + Math.random() * 40}px`,
            background: 'radial-gradient(circle at 30% 30%, rgba(60,0,10,0.5), rgba(20,0,5,0.8) 60%, rgba(0,0,0,0) 70%)',
            filter: 'blur(0.3px)'
          }}
        />
      ))}
    </div>
  )
}

function CandleFlicker() {
  return <div className="pointer-events-none absolute inset-0 mix-blend-multiply animate-candle" style={{ background: 'radial-gradient(60% 60% at 50% 40%, rgba(255,200,120,0.12), rgba(0,0,0,0))' }} />
}

function WaxSeal() {
  const [landed, setLanded] = useState(false)
  return (
    <motion.div
      initial={{ scale: 0, rotate: -10, y: -40 }}
      animate={{ scale: 1, rotate: 0, y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 18, mass: 1, onComplete: () => setLanded(true) }}
      className="relative mx-auto w-[200px] h-[200px]"
    >
      {/* Glow while hot */}
      <motion.div
        initial={{ opacity: 0.8 }}
        animate={{ opacity: [0.8, 0.15, 0.05] }}
        transition={{ duration: 2.6, ease: 'easeOut' }}
        className="absolute -inset-8 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,50,20,0.35), rgba(255,0,0,0.0) 60%)', filter: 'blur(10px)' }}
      />

      {/* Wax body */}
      <div className="absolute inset-0 rounded-full shadow-2xl" style={{ background: 'radial-gradient(70% 70% at 30% 30%, #8E0F1A, #4E0810)', boxShadow: 'inset 6px 10px 18px rgba(255,100,120,0.25), inset -8px -14px 22px rgba(0,0,0,0.5), 0 10px 30px rgba(0,0,0,0.6)' }} />

      {/* Gold shimmer */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ background: 'conic-gradient(from 180deg at 50% 50%, rgba(255,220,150,0.18), rgba(0,0,0,0), rgba(255,220,150,0.18))', mixBlendMode: 'overlay' }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />

      {/* Heptagram + circular text in SVG */}
      <svg className="absolute inset-0" viewBox="0 0 200 200">
        <defs>
          <radialGradient id="foil" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FDE7A9" />
            <stop offset="60%" stopColor="#B08C3A" />
            <stop offset="100%" stopColor="#6B541E" />
          </radialGradient>
          <filter id="innerShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feOffset dx="0" dy="2" />
            <feGaussianBlur stdDeviation="3" result="offset-blur" />
            <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
            <feFlood floodColor="#000" floodOpacity="0.6" result="color" />
            <feComposite operator="in" in="color" in2="inverse" result="shadow" />
            <feComposite operator="over" in="shadow" in2="SourceGraphic" />
          </filter>
          <path id="circlePath" d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
        </defs>

        {/* Embossed ring */}
        <circle cx="100" cy="100" r="92" fill="none" stroke="#2a0509" strokeWidth="10" filter="url(#innerShadow)" />
        <circle cx="100" cy="100" r="75" fill="none" stroke="#3c0a10" strokeWidth="8" />

        {/* Circular text */}
        <text fill="url(#foil)" fontFamily="Cinzel, serif" fontSize="12" letterSpacing="2">
          <textPath href="#circlePath" startOffset="50%" textAnchor="middle">PECCATUM EST VERITAS • PECCATUM EST VERITAS •</textPath>
        </text>

        {/* Heptagram */}
        <g transform="translate(100,100)">
          <polygon points="0,-55 39,-39 55,0 39,39 0,55 -39,39 -55,0 -39,-39" fill="none" stroke="#1f0408" strokeWidth="10" opacity="0.35" />
          <polygon points="0,-55 39,-39 55,0 39,39 0,55 -39,39 -55,0 -39,-39" fill="none" stroke="url(#foil)" strokeWidth="2.5" />
        </g>
      </svg>

      {/* Cracks overlay */}
      {landed && (
        <motion.svg className="absolute inset-0" viewBox="0 0 200 200" initial={{ opacity: 0 }} animate={{ opacity: [0, 0.35, 0.25] }} transition={{ duration: 2.2 }}>
          <g stroke="#2b0a0f" strokeWidth="1.2" strokeLinecap="round">
            <motion.path d="M90 80 L100 95 L110 90 L120 110" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2 }} />
            <motion.path d="M100 100 L105 120 L95 140" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.4, delay: 0.2 }} />
            <motion.path d="M80 110 L95 105 L100 120" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.3, delay: 0.35 }} />
          </g>
        </motion.svg>
      )}
    </motion.div>
  )
}

function QuillSignature() {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="relative mt-10 flex flex-col items-center">
      <div className="w-full h-px bg-[rgba(0,0,0,0.5)]/70 max-w-xl" />
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="relative -mt-3"
        animate={{ y: hovered ? -6 : 0, rotate: hovered ? -6 : -2 }}
        transition={{ type: 'spring', stiffness: 200, damping: 16 }}
      >
        {/* Quill SVG */}
        <svg width="220" height="70" viewBox="0 0 220 70" className="drop-shadow">
          <defs>
            <linearGradient id="quillRed" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#b11226" />
              <stop offset="100%" stopColor="#6d0b16" />
            </linearGradient>
          </defs>
          <path d="M10 40 C60 5, 140 5, 200 40 C170 55, 60 65, 10 60 Z" fill="url(#quillRed)" stroke="#2a0509" strokeWidth="1" />
          <path d="M180 42 L210 55" stroke="#2a0509" strokeWidth="3" strokeLinecap="round" />
          {/* Droplet */}
          {hovered && <circle cx="212" cy="58" r="3" fill="#7a0e18" />}
        </svg>
        {/* Stain that forms on hover */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
          transition={{ type: 'spring', stiffness: 220, damping: 18 }}
          className="absolute left-[198px] top-[46px] w-3 h-3 rounded-full"
          style={{ background: 'radial-gradient(circle at 30% 30%, #6e0b15, #2a0509 70%)' }}
        />
      </motion.div>

      <motion.div
        className="mt-4 text-[22px] text-[#7a0e18] font-cormorant italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        Choose your sin below...
      </motion.div>
    </div>
  )
}

export default function ActBloodOath() {
  return (
    <section className="relative w-full min-h-[140vh] bg-black text-black overflow-hidden">
      {/* Flames and embers around parchment */}
      <EdgeFlames />
      <EmberField />
      <Smoke />

      {/* Center parchment */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 md:py-36">
        <div className="relative rounded-xl shadow-2xl border border-black/20 overflow-hidden">
          {/* Parchment base */}
          <div
            className="relative p-8 md:p-14"
            style={{
              background: 'radial-gradient(120% 120% at 20% 10%, #F4F1E8 40%, #E9E3D1 70%, #D8D1BE 85%)',
            }}
          >
            {/* Burned edges */}
            <div className="pointer-events-none absolute inset-0 rounded-xl" style={{ boxShadow: 'inset 0 0 60px rgba(0,0,0,0.7), inset 0 0 140px rgba(0,0,0,0.6)' }} />

            {/* Water damage stains */}
            <div className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-40" style={{ background: 'radial-gradient(50% 50% at 20% 20%, rgba(120,100,80,0.1), transparent 60%), radial-gradient(40% 40% at 80% 70%, rgba(120,100,80,0.12), transparent 60%)' }} />

            {/* Candle flicker overlay */}
            <CandleFlicker />

            {/* Greek fragments + Ink */}
            <GreekFragments />
            <InkSplotches />

            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Top manuscript line */}
              <div className="font-cormorant text-[28px] md:text-[32px] text-[#4b0f1a] italic mb-6">Herein lies the covenant—</div>

              {/* Wax seal */}
              <WaxSeal />

              {/* Title */}
              <div className="mt-6 font-cinzel text-[64px] md:text-[120px] leading-none text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(180deg, #000 0%, #0c0c0c 60%, #b79b5d 100%)' }}>ELANOR</div>

              {/* Oath text */}
              <div className="mt-4 max-w-3xl text-center font-cormorant text-[22px] md:text-[28px] text-[#1a1a1a] leading-[1.8]">
                <p>Seven sins made tangible.</p>
                <p>Seven fragrances without apology.</p>
                <p>Sign your name in scent.</p>
              </div>

              {/* Gold dust floating near seal */}
              <GoldDust />

              {/* Quill + signature line */}
              <QuillSignature />
            </div>
          </div>
        </div>
      </div>

      {/* Outer darkness vignette */}
      <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 200px 60px rgba(0,0,0,1)' }} />
    </section>
  )
}
