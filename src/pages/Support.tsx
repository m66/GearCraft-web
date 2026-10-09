import { Layout, Prose } from '../components/Layout.tsx'
import { site } from '../site.ts'

const faq = [
  {
    question: 'A level looks impossible',
    answer:
      'Every level has been checked by a solver: it always has a solution, using only the parts in the tray. Tap the lightbulb for a hint. The first hint is free, and the last one places the next gear for you. You can also skip a level and come back to it later.',
  },
  {
    question: 'Where is my progress saved?',
    answer: 'On your device. GearCraft has no account and no sign-in, and it works offline.',
  },
  {
    question: 'How do I start over?',
    answer: 'Settings › Data › Reset progress.',
  },
  {
    question: 'How do I change the language?',
    answer: 'Settings › Language. GearCraft speaks English, Русский, Türkçe, العربية and Հայերեն.',
  },
  {
    question: 'The Daily Machine is locked',
    answer:
      'It opens after you have solved 16 levels: its puzzles use the ideas of the first two chapters. There is a new machine every day, the same for everyone.',
  },
  {
    question: 'Where is Free Build?',
    answer: 'It is the first card on the Worlds screen: your own workshop, with every part and no goals.',
  },
  {
    question: 'Can I change my ad privacy choices?',
    answer:
      'Yes. In the European Economic Area, the United Kingdom and Switzerland, use Settings › Privacy › Ad privacy choices. Everywhere, you can reset your advertising identifier or limit personalised ads in your device settings.',
  },
]

export function Support() {
  return (
    <Layout page="support">
      <Prose title="Support" subtitle={`${site.fullName} · made by ${site.developer}`}>
        <div className="callout contact">
          <p>
            <strong>Need help, found a bug or have an idea?</strong>
            <br />
            Please mention your phone model and the level (for example “3-5”) if it is about a puzzle.
          </p>
          <a className="button" href={`mailto:${site.contactEmail}?subject=${encodeURIComponent('GearCraft support')}`}>
            Write to {site.contactEmail}
          </a>
        </div>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          {faq.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </Prose>
    </Layout>
  )
}
