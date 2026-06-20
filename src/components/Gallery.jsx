import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gallery } from '../data'
import { Section, Chapter } from './ui'

export default function Gallery() {
  const [active, setActive] = useState(null)
  const [broken, setBroken] = useState({})
  const tilts = ['-rotate-1', 'rotate-1', 'rotate-2', '-rotate-2']

  if (gallery.length === 0) return null

  return (
    <Section id="log">
      <Chapter no="05" kicker="The Log Book" title="Beyond the Code" color="gold" />

      <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
        {gallery.map((g, i) =>
          broken[i] ? null : (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
              whileHover={{ y: -6, rotate: 0, scale: 1.02 }}
              onClick={() => setActive(g)}
              className={`group relative block aspect-[4/5] overflow-hidden rounded-md border-[3px] border-ink bg-ink shadow-comic ${tilts[i % tilts.length]}`}
            >
              <img
                src={g.src}
                alt={g.caption}
                loading="lazy"
                onError={() => setBroken((b) => ({ ...b, [i]: true }))}
                className="h-full w-full object-cover object-center contrast-[1.05] saturate-[0.9] transition-transform duration-500 group-hover:scale-110"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
              <span className="absolute inset-x-0 bottom-0 p-2.5 text-left font-wanted text-[11px] font-bold uppercase leading-snug tracking-wide text-parchment sm:text-xs">
                {g.caption}
              </span>
            </motion.button>
          ),
        )}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[70] grid place-items-center bg-ink/85 p-6 backdrop-blur"
          >
            <motion.figure
              initial={{ scale: 0.9, opacity: 0, rotate: -2 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[86vh] max-w-3xl overflow-hidden rounded-md border-[4px] border-parchment bg-parchment shadow-comicxl"
            >
              <img src={active.src} alt={active.caption} className="max-h-[78vh] w-auto" />
              <figcaption className="border-t-[3px] border-ink bg-parchment p-3 text-center font-wanted text-sm font-bold uppercase tracking-wide text-ink">
                {active.caption}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
