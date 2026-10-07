import { useEffect, useState } from 'react'

const zones = [
  { label: 'WIB', timeZone: 'Asia/Jakarta' },
  { label: 'WITA', timeZone: 'Asia/Makassar' },
  { label: 'WIT', timeZone: 'Asia/Jayapura' },
]

function savedTimeZone() {
  try {
    const saved = localStorage.getItem('mephisto-time-zone')
    if (zones.some((zone) => zone.timeZone === saved)) return saved
  } catch {}
  return zones[0].timeZone
}

export default function Clock() {
  const [now, setNow] = useState(() => new Date())
  const [timeZone, setTimeZone] = useState(savedTimeZone)

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const time = now.toLocaleTimeString('en-US', { timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })
  const date = now.toLocaleDateString('en-US', { timeZone, day: '2-digit', month: 'short', year: 'numeric' }).replace(', ', ' · ')

  function changeTimeZone(event) {
    setTimeZone(event.target.value)
    localStorage.setItem('mephisto-time-zone', event.target.value)
  }

  return (
    <div className="clock-display">
      <div className="clock-header">
        <small>LOCAL TIME</small>
        <select className="timezone-select" aria-label="Pilih zona waktu" value={timeZone} onChange={changeTimeZone}>
          {zones.map((zone) => (
            <option key={zone.timeZone} value={zone.timeZone}>{zone.label}</option>
          ))}
        </select>
      </div>
      <strong>{time}</strong>
      <span>{date}</span>
    </div>
  )
}
