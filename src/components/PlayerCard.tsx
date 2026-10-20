import { useState } from 'react'
import { CardCover } from './CardCover'
import { CardStats } from './CardStats'
import './PlayerCard.css'

export function PlayerCard() {
  const [flipped, setFlipped] = useState(false)

  function toggle() {
    setFlipped((value) => !value)
  }

  return (
    <button
      type="button"
      className={`player-card${flipped ? ' is-flipped' : ''}`}
      onClick={toggle}
      aria-pressed={flipped}
      aria-label={
        flipped
          ? 'Rohit Sharma limited edition cover. Activate to show stats card.'
          : 'Rohit Sharma limited edition stats card. Activate to show cover.'
      }
    >
      <span className="player-card__scene">
        <span className="player-card__face player-card__face--stats">
          <CardStats />
        </span>
        <span className="player-card__face player-card__face--cover">
          <CardCover />
        </span>
      </span>
    </button>
  )
}
