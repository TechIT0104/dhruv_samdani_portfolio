import { useState } from 'react'
import { motion } from 'framer-motion'
import { certifications } from '../data'
import { Section, Chapter } from './ui'
import { ExternalIcon } from './icons'

export default function Certifications() {
  const [broken, setBroken] = useState({})
  if (!certifications || certifications.length === 0) return null

  return (
    <Section id="certs">
      <Chapter no="05" kicker="Verified" title="Certifications" color="ocean" />

      <div className="grid gap-6 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="panel-white flex flex-col overflow-hidden p-0"
          >
            {!broken[i] && (
              <div className="relative aspect-[4/3] w-full overflow-hidden border-b-[3px] border-ink bg-[#fbf4e2]">
                <span className="absolute right-2 top-2 z-10 rotate-6 rounded-md border-2 border-ink bg-gold px-2 py-0.5 font-wanted text-[10px] font-bold uppercase tracking-widest text-ink">
                  ✶ Verified ✶
                </span>
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  onError={() => setBroken((b) => ({ ...b, [i]: true }))}
                  className="h-full w-full object-contain p-2"
                />
              </div>
            )}
            <div className="flex items-center justify-between gap-3 p-5">
              <div>
                <h3 className="font-bangers text-2xl uppercase tracking-wide text-ink">{c.title}</h3>
                <p className="font-wanted text-[11px] font-bold uppercase tracking-widest text-ink/60">{c.issuer}</p>
              </div>
              {c.verifyUrl && (
                <a
                  href={c.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-ocean px-3 py-1.5 font-wanted text-[11px] font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5"
                >
                  Verify <ExternalIcon width={13} height={13} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
