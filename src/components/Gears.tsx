import type { CSSProperties } from 'react'

// A small decorative gear train. Gears use module 1 (pitch radius = teeth / 2)
// and are placed so their teeth really interleave; each one turns at the
// speed its tooth ratio gives, so they stay meshed while they spin.

type Metal = 'brass' | 'steel'
type Spec = { teeth: number; metal: Metal; angle?: number; motor?: boolean }
type Gear = Spec & { x: number; y: number; phase: number; period: number; reverse: boolean }

/** Seconds per turn of the first (driving) gear. */
const DRIVER_PERIOD = 40

const TRAIN: Spec[] = [
  { teeth: 24, metal: 'brass', motor: true },
  { teeth: 14, metal: 'steel', angle: deg(-38) },
  { teeth: 10, metal: 'brass', angle: deg(52) },
]

function deg(d: number) {
  return (d * Math.PI) / 180
}

function step(teeth: number) {
  return (2 * Math.PI) / teeth
}

/** Each gear meshes with the previous one, at `angle` from its centre. */
function layout(specs: Spec[]): Gear[] {
  const gears: Gear[] = []
  for (const spec of specs) {
    const prev = gears.at(-1)
    if (!prev) {
      gears.push({ ...spec, x: 0, y: 0, phase: 0, period: DRIVER_PERIOD, reverse: false })
      continue
    }
    const angle = spec.angle ?? 0
    const distance = (prev.teeth + spec.teeth) / 2
    // Where the previous gear's tooth sits on the line of centres, in teeth;
    // this gear must have a gap there, half a tooth further on.
    const prevTooth = (angle - prev.phase) / step(prev.teeth)
    gears.push({
      ...spec,
      x: prev.x + distance * Math.cos(angle),
      y: prev.y + distance * Math.sin(angle),
      phase: angle + Math.PI - step(spec.teeth) * (0.5 - prevTooth),
      period: (DRIVER_PERIOD * spec.teeth) / specs[0].teeth,
      reverse: !prev.reverse,
    })
  }
  return gears
}

function circle(r: number, cx = 0, cy = 0) {
  return `M${cx + r} ${cy}A${r} ${r} 0 1 0 ${cx - r} ${cy}A${r} ${r} 0 1 0 ${cx + r} ${cy}Z`
}

/** Outline of a spur gear centred on 0,0 (tooth 0 points along +x), with its holes. */
function gearPath(teeth: number) {
  const pitch = teeth / 2
  const tip = pitch + 1
  const root = pitch - 1.25
  const s = step(teeth)
  const point = (r: number, a: number) => `${(r * Math.cos(a)).toFixed(3)} ${(r * Math.sin(a)).toFixed(3)}`

  let d = ''
  for (let i = 0; i < teeth; i++) {
    const a = i * s
    d += `${i === 0 ? 'M' : 'L'}${point(root, a - s / 2)}`
    d += `L${point(root, a - s * 0.28)}L${point(tip, a - s * 0.17)}L${point(tip, a + s * 0.17)}L${point(root, a + s * 0.28)}`
  }
  d += 'Z'

  d += circle(pitch * 0.14)
  if (teeth >= 16) {
    for (let i = 0; i < 5; i++) {
      const a = (i * 2 * Math.PI) / 5
      d += circle(pitch * 0.17, pitch * 0.55 * Math.cos(a), pitch * 0.55 * Math.sin(a))
    }
  }
  return d
}

export function Gears({ className }: { className?: string }) {
  const gears = layout(TRAIN)
  const tip = (g: Gear) => g.teeth / 2 + 1
  const minX = Math.min(...gears.map((g) => g.x - tip(g)))
  const minY = Math.min(...gears.map((g) => g.y - tip(g)))
  const width = Math.max(...gears.map((g) => g.x + tip(g))) - minX
  const height = Math.max(...gears.map((g) => g.y + tip(g))) - minY

  return (
    <div className={`gears ${className ?? ''}`} style={{ aspectRatio: `${width} / ${height}` }} aria-hidden="true">
      {gears.map((g, i) => {
        const r = tip(g)
        const style: CSSProperties = {
          left: `${((g.x - r - minX) / width) * 100}%`,
          top: `${((g.y - r - minY) / height) * 100}%`,
          width: `${((2 * r) / width) * 100}%`,
          animationDuration: `${g.period}s`,
          animationDirection: g.reverse ? 'reverse' : 'normal',
        }
        return (
          <svg key={i} className={`gear gear-${g.metal}`} style={style} viewBox={`${-r} ${-r} ${2 * r} ${2 * r}`}>
            <g transform={`rotate(${(g.phase * 180) / Math.PI})`}>
              <path d={gearPath(g.teeth)} fillRule="evenodd" />
            </g>
            {g.motor && <circle className="gear-motor" r={g.teeth * 0.11} />}
          </svg>
        )
      })}
    </div>
  )
}
