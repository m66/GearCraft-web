import { Gears } from '../components/Gears.tsx'
import { Layout } from '../components/Layout.tsx'
import { StoreButtons } from '../components/StoreButtons.tsx'
import hero from '../assets/screens/01_hero.webp'
import first from '../assets/screens/02_first.webp'
import ratio from '../assets/screens/03_ratio.webp'
import jam from '../assets/screens/04_jam.webp'
import watch from '../assets/screens/05_watch.webp'
import auto from '../assets/screens/06_auto.webp'
import stars from '../assets/screens/07_stars.webp'
import worlds from '../assets/screens/08_worlds.webp'

const facts = [
  { value: '153', label: 'handcrafted puzzles' },
  { value: '7', label: 'worlds to explore' },
  { value: '0', label: 'timers, lives or energy' },
  { value: '5', label: 'languages' },
]

const features = [
  {
    title: 'Drag a gear. Press Run.',
    text: 'Every level is a small mechanism on a workbench: a motor on one side, a dial, a flag, a bell or a clock hand on the other, and a few empty pegs in between.',
  },
  {
    title: 'Every failure has a reason',
    text: 'Gears that jam, a load that is too heavy, a hand that stops at the wrong hour: GearCraft explains what went wrong and lights up the part that caused it.',
  },
  {
    title: 'From one gear to a watch',
    text: 'Start with direction and speed, then run belts, chains and drive shafts, master planetary sets, gearboxes and differentials, and rebuild real watch movements.',
  },
  {
    title: 'Find the perfect machine',
    text: 'Any working machine solves a level. Three stars go to the one that uses the fewest parts: the same minimum our solver proved.',
  },
  {
    title: 'Free Build',
    text: 'Your own workshop: every part, no goals. Build anything, press Run and watch it move.',
  },
  {
    title: 'Play your way',
    text: 'Hints that always help, from a gentle nudge to placing the next gear for you. Skip any level, play fully offline, and turn on reduced motion or high contrast.',
  },
]

const screenshots = [
  { src: first, alt: 'Drag a gear. Press Run. Watch the motion travel through.' },
  { src: ratio, alt: 'Master speed and direction: small gears spin fast.' },
  { src: jam, alt: 'Every failure has a reason: see what jams, and why.' },
  { src: watch, alt: 'Take real watches apart: bridges, jewels and the escapement.' },
  { src: auto, alt: 'Gearboxes and differentials: every part follows real mechanical rules.' },
  { src: stars, alt: 'Find the perfect machine: three stars for the fewest parts.' },
  { src: worlds, alt: '153 handcrafted puzzles. No timers, no lives. Play offline.' },
]

const worldNames = ['Clockwork', 'Factory', 'Automotive', 'Workshop', 'Robotics', 'Grand Machines', 'Watchmaker']

export function Home() {
  return (
    <Layout page="home">
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Mechanical puzzle game for iPhone, iPad and Android</p>
            <h1>Build machines that really work.</h1>
            <p className="lede">
              GearCraft is a calm, tactile puzzle game about machines that almost work. Pick the right gears, press
              Run, and watch the motion travel through your machine, gear by gear.
            </p>
            <StoreButtons />
          </div>
          <div className="hero-visual">
            <Gears className="hero-gears" />
            <img
              className="phone"
              src={hero}
              width={540}
              height={960}
              alt="A GearCraft level: brass gears turning a clock's hour and minute hands."
            />
          </div>
        </div>
      </section>

      <section className="facts" aria-label="At a glance">
        <ul className="container facts-list">
          {facts.map((fact) => (
            <li key={fact.label}>
              <strong>{fact.value}</strong>
              <span>{fact.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">How it plays</h2>
          <ul className="feature-grid">
            {features.map((feature) => (
              <li key={feature.title} className="card">
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">See it run</h2>
          <ul className="gallery" tabIndex={0} aria-label="Screenshots, scroll sideways for more">
            {screenshots.map((shot) => (
              <li key={shot.src}>
                <img src={shot.src} width={540} height={960} alt={shot.alt} loading="lazy" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container worlds">
          <div>
            <h2 className="section-title">Seven worlds</h2>
            <p>
              Every level is made by hand and checked by a solver, so every puzzle is fair and has a real solution
              using only the parts in the tray.
            </p>
          </div>
          <ol className="world-list">
            {worldNames.map((name) => (
              <li key={name}>{name}</li>
            ))}
            <li className="world-free">Build your mechanism</li>
          </ol>
        </div>
      </section>

      <section className="section cta">
        <div className="container">
          <h2>Understand it. Fix it. Make it run.</h2>
          <StoreButtons />
        </div>
      </section>
    </Layout>
  )
}
