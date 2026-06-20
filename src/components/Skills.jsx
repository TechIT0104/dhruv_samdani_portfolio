import { motion } from 'framer-motion'
import { skills } from '../data'
import { Section, Chapter, accent } from './ui'

const COLORS = ['gold', 'ocean', 'blood', 'hero', 'gold', 'ocean']

export default function Skills() {
  return (
    <Section id="powers">
      <Chapter no="02" kicker="Arsenal" title="Skills & Tech" color="gold" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => {
          const a = accent(COLORS[i % COLORS.length])
          return (
            <motion.div
              key={s.group}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6, rotate: -1 }}
              className="group panel-white relative overflow-hidden p-5"
            >
              <div className="halftone absolute inset-0 -z-10 opacity-[0.07]" />
              <div className="mb-3 flex items-center gap-2">
                <span className={`h-4 w-4 shrink-0 rotate-45 border-2 border-ink ${a.bg}`} />
                <h3 className="font-bangers text-2xl uppercase tracking-wide text-ink">{s.group}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span key={it} className="ink-chip text-xs transition-colors group-hover:bg-pow">
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
