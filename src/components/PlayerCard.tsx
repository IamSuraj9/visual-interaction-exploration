import { useState } from 'react'
import { CardCover } from './CardCover'
import { CardStats } from './CardStats'
import './PlayerCard.css'

const FLIP_KEY = 'player-card-flipped'

function readFlipped() {
  try {
    return sessionStorage.getItem(FLIP_KEY) === '1'
  } catch {
    return false
  }
}

function writeFlipped(value: boolean) {
  try {
    sessionStorage.setItem(FLIP_KEY, value ? '1' : '0')
  } catch {
    /* private mode / blocked storage */
  }
}

export function PlayerCard() {
  const [flipped, setFlipped] = useState(readFlipped)

  function toggle() {
    setFlipped((value) => {
      const next = !value
      writeFlipped(next)
      return next
    })
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
