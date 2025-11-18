import ActVoidEntry from './components/ActVoidEntry'
import ActSplitRevelation from './components/ActSplitRevelation'
import ActConfession from './components/ActConfession'
import ActTransitionStorm from './components/ActTransitionStorm'
import ActConstellation from './components/ActConstellation'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* ACT I: The Void Entry */}
      <ActVoidEntry />

      {/* ACT II: The Split Revelation */}
      <ActSplitRevelation />

      {/* ACT III: The Confession */}
      <ActConfession />

      {/* ACT IV: Storm Before Choice */}
      <ActTransitionStorm />

      {/* ACT V: The Constellation */}
      <ActConstellation />

      {/* Footer ritual note */}
      <footer className="bg-black/95 border-t border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-6 text-center text-white/60 font-cormorant">
          Not a product page. A confession.
        </div>
      </footer>
    </div>
  )
}

export default App
