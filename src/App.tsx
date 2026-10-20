import { PlayerCard } from './components/PlayerCard'
import './App.css'

function App() {
  return (
    <main className="app">
      <div className="stage">
        <p className="kicker">Visual Training · Frame 1</p>
        <PlayerCard />
        <p className="hint">
          Click or press <kbd>Enter</kbd> to flip between the stats card and the
          limited edition cover.
        </p>
      </div>
    </main>
  )
}

export default App
