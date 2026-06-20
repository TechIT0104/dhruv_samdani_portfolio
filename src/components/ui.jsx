import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const ACCENTS = {
  gold: { bg: 'bg-gold', text: 'text-ink', ring: 'border-gold' },
  ocean: { bg: 'bg-ocean', text: 'text-white', ring: 'border-ocean' },
  blood: { bg: 'bg-blood', text: 'text-white', ring: 'border-blood' },
  hero: { bg: 'bg-hero', text: 'text-white', ring: 'border-hero' },
}
export const accent = (k) => ACCENTS[k] || ACCENTS.gold

/* Manga "chapter" heading — bold Anton title with a comic underline + dot. */
export function Chapter({ no, kicker, title, color = 'blood' }) {
  const a = accent(color)
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="mb-10 md:mb-14"
    >
      <div className="mb-2 flex items-center gap-3">
        <span className={`inline-block rounded-md border-2 border-ink ${a.bg} ${a.text} px-2 py-0.5 font-wanted text-xs font-bold uppercase tracking-widest`}>
          Chapter {no}
        </span>
        <span className="font-wanted text-xs uppercase tracking-[0.3em] text-ink/60">{kicker}</span>
      </div>
      <h2 className="section-label text-5xl uppercase leading-none text-ink sm:text-6xl md:text-7xl">
        {title}
      </h2>
      <div className="mt-3 flex items-center gap-2">
        <span className={`h-[6px] w-24 rounded-full border-2 border-ink ${a.bg}`} />
        <span className="h-[6px] w-6 rounded-full border-2 border-ink bg-parchment" />
        <span className="h-[6px] w-3 rounded-full border-2 border-ink bg-parchment" />
      </div>
    </motion.div>
  )
}

/* Onomatopoeia burst (POW! BANG! DON!) — pops in on hover of a `group` parent. */
export function Boom({ word = 'POW!', color = 'gold', className = '' }) {
  const a = accent(color)
  return (
    <span
      className={`pointer-events-none absolute z-20 select-none font-bangers text-4xl ${a.text === 'text-white' ? 'text-pow' : 'text-blood'} opacity-0 drop-shadow-ink transition-all duration-200 group-hover:animate-popin group-hover:opacity-100 ${className}`}
      style={{ WebkitTextStroke: '2px #1a1410' }}
    >
      {word}
    </span>
  )
}

/* 3D tilt wrapper that follows the cursor (used for posters/cards). */
export function Tilt({ children, className = '', max = 8 }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [max, -max]), { stiffness: 150, damping: 14 })
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-max, max]), { stiffness: 150, damping: 14 })
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - r.left) / r.width - 0.5)
    y.set((e.clientY - r.top) / r.height - 0.5)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }
  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d', perspective: 900 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* Scrolling comic ribbon (news-strip style). */
export function Ribbon({ items, color = 'ink' }) {
  const bg = color === 'blood' ? 'bg-blood text-white' : color === 'gold' ? 'bg-gold text-ink' : 'bg-ink text-parchment'
  const row = [...items, ...items]
  return (
    <div className={`relative overflow-hidden border-y-[3px] border-ink ${bg} py-3`}>
      <div className="flex w-max animate-ticker gap-8 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="font-bangers text-xl uppercase tracking-wider">
            {t} <span className="px-2 opacity-60">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

/* Section shell with id + responsive padding. */
export function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 md:py-28 ${className}`}>
      {children}
    </section>
  )
}

export { useState }
