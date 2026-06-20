import { motion } from 'framer-motion'
import { about, education, stats } from '../data'
import { Section, Chapter } from './ui'

export default function About() {
  return (
    <Section id="origin">
      <Chapter no="01" kicker="Origin Story" title="The Backstory" color="ocean" />

      <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
        {/* main panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="panel-white p-7"
        >
          <div className="halftone-blue absolute -right-3 -top-3 -z-10 h-24 w-24 rounded-full opacity-30" />
          <p className="mb-4 inline-block rounded-md border-2 border-ink bg-ocean px-3 py-1 font-bangers text-lg uppercase tracking-wide text-white">
            Who is this guy?
          </p>
          <div className="space-y-4 text-lg leading-relaxed text-ink/85">
            {about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </motion.div>

        {/* side column */}
        <div className="grid gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="panel p-5"
          >
            <p className="mb-3 font-bangers text-xl uppercase tracking-wide text-blood">Vital Stats</p>
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="rounded-md border-2 border-ink bg-[#fbf4e2] p-3 text-center">
                  <div className="font-bangers text-3xl leading-none text-ink">{s.value}</div>
                  <div className="mt-1 font-wanted text-[10px] uppercase tracking-widest text-ink/60">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="panel p-5"
          >
            <p className="mb-3 font-bangers text-xl uppercase tracking-wide text-ocean">Training Grounds</p>
            <div className="space-y-3">
              {education.map((e) => (
                <div key={e.school} className="border-l-4 border-ink pl-3">
                  <div className="font-bold leading-tight text-ink">{e.school}</div>
                  <div className="text-sm text-ink/70">{e.degree} · {e.detail}</div>
                  <div className="font-wanted text-[11px] uppercase tracking-wider text-ink/50">{e.period}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
