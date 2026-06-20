import { motion } from 'framer-motion'
import { achievements } from '../data'
import { Section, Chapter, accent } from './ui'

const COLORS = ['blood', 'gold', 'ocean', 'hero', 'blood', 'gold']

export default function Achievements() {
  return (
    <Section id="claimed">
      <Chapter no="04" kicker="Trophies & Wins" title="Achievements" color="hero" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => {
          const c = accent(COLORS[i % COLORS.length])
          return (
            <motion.div
              key={a.group}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="panel-white flex h-full flex-col p-0"
            >
              <div className={`flex items-center justify-between border-b-[3px] border-ink ${c.bg} ${c.text} px-4 py-2`}>
                <h3 className="font-bangers text-xl uppercase tracking-wide">{a.group}</h3>
                <span className="font-bangers text-2xl leading-none opacity-90">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <ul className="space-y-2.5 p-5">
                {a.items.map((it, j) => (
                  <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-ink/80">
                    <span className={`mt-1.5 h-2 w-2 shrink-0 rotate-45 border border-ink ${c.bg}`} />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
