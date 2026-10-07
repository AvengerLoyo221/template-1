import { useRef, useState } from 'react'
import Clock from './Clock.jsx'

const keySteps = { ArrowUp: 1, ArrowRight: 1, ArrowDown: -1, ArrowLeft: -1, PageUp: 10, PageDown: -10, Home: -100, End: 100 }

export default function SidePanel() {
  const [rad, setRad] = useState(35)
  const lastY = useRef(null)
  const angle = -125 + (rad / 100) * 250

  const adjust = (amount) => setRad((level) => Math.min(100, Math.max(0, level + amount)))

  function onKeyDown(event) {
    if (!(event.key in keySteps)) return
    event.preventDefault()
    adjust(keySteps[event.key])
  }

  function onPointerDown(event) {
    event.currentTarget.setPointerCapture(event.pointerId)
    lastY.current = event.clientY
  }

  function onPointerMove(event) {
    if (lastY.current === null) return
    const steps = Math.trunc((lastY.current - event.clientY) / 2)
    if (steps === 0) return
    adjust(steps)
    lastY.current = event.clientY
  }

  const stopDragging = () => {
    lastY.current = null
  }

  return (
    <aside className="side-console" aria-label="Terminal status" style={{ '--angle': `${angle}deg` }}>
      <div className="side-tag">BETTER IDEAS.<br />A BRIGHTER TOMORROW.</div>
      <div className="rad-meter">
        <span className="meter-label">RADS</span>
        <div className="meter-face" role="img" aria-label={`Level radiasi ${rad} dari 100`}>
          <i />
        </div>
        <small>x100</small>
        <output className="rad-value">{rad} RAD</output>
      </div>
      <ul className="stat-list">
        {['STAT', 'INV', 'DATA', 'MAP', 'RADIO'].map((name) => (
          <li key={name}><span>–</span> {name}</li>
        ))}
      </ul>
      <Clock />
      <div className="pipboy-label">PIP-BOY<span>◉</span></div>
      <div
        className="control-knob"
        role="slider"
        aria-orientation="vertical"
        tabIndex={0}
        aria-label="Pengatur level radiasi"
        title="Seret knob atau gunakan tombol panah untuk mengatur level RAD"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={rad}
        aria-valuetext={`${rad} RAD`}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
      >
        <i />
      </div>
    </aside>
  )
}
