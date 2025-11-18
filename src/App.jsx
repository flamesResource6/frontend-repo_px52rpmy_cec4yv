import { useState } from 'react'
import ChapterIntro from './components/ChapterIntro'
import ChapterOath from './components/ChapterOath'
import ChapterPhilosophy from './components/ChapterPhilosophy'
import ChapterSins from './components/ChapterSins'

function App() {
  const [reveal, setReveal] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Chapter 1: Mysterious opening with ELANOR reveal */}
      <ChapterIntro onReveal={() => setReveal(true)} />

      {/* Chapter 2: The Oath (brand reveal / split page) */}
      <ChapterOath />

      {/* Chapter 3: Philosophy (typewriter) */}
      <ChapterPhilosophy />

      {/* Chapter 4: Choose your sin */}
      <ChapterSins />

      {/* Footer ritual note */}
      <footer className="bg-black/95 border-t border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-6 text-center text-white/50 font-cormorant">
          Not a product page. A confession.
        </div>
      </footer>
    </div>
  )
}

export default App
