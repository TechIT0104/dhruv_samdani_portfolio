import { motion } from 'framer-motion'
import { projects } from '../data'
import { Section, Chapter, Tilt, accent } from './ui'
import { GitHubIcon, ExternalIcon } from './icons'

function ProjectCard({ p, i }) {
  const a = accent(p.accent)
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
    >
      <Tilt className="h-full">
        <article className="group panel-white relative flex h-full flex-col overflow-hidden p-0">
          {/* header band */}
          <div className={`flex items-start justify-between gap-3 border-b-[3px] border-ink ${a.bg} ${a.text} px-5 py-3`}>
            <div>
              <h3 className="font-bangers text-2xl uppercase leading-none tracking-wide">{p.title}</h3>
              <p className="mt-1 font-wanted text-[11px] font-bold uppercase tracking-widest opacity-90">{p.subtitle}</p>
            </div>
            <div className="flex shrink-0 gap-1.5">
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="grid h-9 w-9 place-items-center rounded-md border-2 border-ink bg-parchment text-ink transition-transform hover:-translate-y-0.5"
                >
                  <GitHubIcon width={16} height={16} />
                </a>
              )}
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Live demo"
                  className="grid h-9 w-9 place-items-center rounded-md border-2 border-ink bg-parchment text-ink transition-transform hover:-translate-y-0.5"
                >
                  <ExternalIcon width={16} height={16} />
                </a>
              )}
            </div>
          </div>

          {/* body */}
          <div className="flex flex-1 flex-col p-5">
            <ul className="space-y-2.5">
              {p.points.map((pt, j) => (
                <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-ink/80">
                  <span className={`mt-1.5 h-2 w-2 shrink-0 rotate-45 border border-ink ${a.bg}`} />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2 pt-1">
              {p.stack.map((t) => (
                <span key={t} className="ink-chip text-xs">{t}</span>
              ))}
            </div>
          </div>
        </article>
      </Tilt>
    </motion.div>
  )
}

function GroupLabel({ children, color = 'blood' }) {
  const a = accent(color)
  return (
    <div className="mb-6 mt-16 flex items-center gap-3">
      <span className={`rounded-md border-[3px] border-ink ${a.bg} ${a.text} px-4 py-1.5 font-bangers text-xl uppercase tracking-wide shadow-comic`}>
        {children}
      </span>
      <span className="h-[3px] flex-1 bg-ink" />
    </div>
  )
}

export default function Projects() {
  const featured = projects.filter((p) => p.group === 'featured')
  const more = projects.filter((p) => p.group === 'more')
  const hackathon = projects.filter((p) => p.group === 'hackathon')

  return (
    <Section id="bounties">
      <Chapter no="03" kicker="Most Wanted" title="Projects" color="blood" />

      <div className="grid gap-6 md:grid-cols-2">
        {featured.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>

      <GroupLabel color="ocean">More Projects</GroupLabel>
      <div className="grid gap-6 md:grid-cols-2">
        {more.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>

      <GroupLabel color="gold">Hackathons</GroupLabel>
      <div className="grid gap-6 md:grid-cols-2">
        {hackathon.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>
    </Section>
  )
}
