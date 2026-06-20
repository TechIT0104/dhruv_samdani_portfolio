import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { profile, socials } from '../data'
import { Tilt } from './ui'
import { GitHubIcon, LinkedInIcon, CodeIcon, MailIcon, DownloadIcon, ArrowDownIcon } from './icons'

function useTypewriter(words, speed = 85, pause = 1500) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [del, setDel] = useState(false)
  useEffect(() => {
    const cur = words[i % words.length]
    let t
    if (!del && text === cur) t = setTimeout(() => setDel(true), pause)
    else if (del && text === '') {
      setDel(false)
      setI((p) => p + 1)
    } else {
      t = setTimeout(
        () => setText((p) => (del ? cur.slice(0, p.length - 1) : cur.slice(0, p.length + 1))),
        del ? speed / 2 : speed,
      )
    }
    return () => clearTimeout(t)
  }, [text, del, i, words, speed, pause])
  return text
}

function useCountUp(target, ms = 1600) {
  const [n, setN] = useState(0)
  useEffect(() => {
    let raf
    const start = performance.now()
    const tick = (t) => {
      const p = Math.min((t - start) / ms, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.floor(eased * target))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, ms])
  return n
}

export default function Hero() {
  const role = useTypewriter(profile.roles)
  const bounty = useCountUp(profile.bounty)
  const [photoOk, setPhotoOk] = useState(Boolean(profile.photo))

  // Mouse parallax for floating decorations.
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 18 })
  const sy = useSpring(my, { stiffness: 60, damping: 18 })
  const onMouse = (e) => {
    const w = window.innerWidth,
      h = window.innerHeight
    mx.set((e.clientX / w - 0.5) * 2)
    my.set((e.clientY / h - 0.5) * 2)
  }
  return (
    <section
      id="top"
      onMouseMove={onMouse}
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8"
    >
      {/* speed-line burst + halftone wash */}
      <div className="speedlines pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[160vmax] w-[160vmax] -translate-x-1/2 -translate-y-1/2 animate-[spin_60s_linear_infinite]" />
      <div className="halftone pointer-events-none absolute inset-0 -z-10" />

      {/* floating comic decorations */}
      <motion.div style={{ x: sx, y: sy }} className="pointer-events-none absolute left-[6%] top-[22%] -z-10">
        <div className="h-16 w-16 animate-floaty rounded-full border-[3px] border-ink bg-gold shadow-comic" />
      </motion.div>
      <motion.div style={{ x: sy, y: sx }} className="pointer-events-none absolute right-[8%] top-[16%] -z-10">
        <div className="h-10 w-10 rotate-12 animate-wobble border-[3px] border-ink bg-ocean shadow-comic" />
      </motion.div>
      <motion.div style={{ x: sx, y: sx }} className="pointer-events-none absolute bottom-[14%] left-[14%] -z-10">
        <span className="font-bangers text-5xl text-blood drop-shadow-ink" style={{ WebkitTextStroke: '2px #1a1410' }}>
          DON!!
        </span>
      </motion.div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-[1.15fr_0.85fr]">
        {/* LEFT — intro */}
        <div>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="ink-chip mb-5 gap-2 bg-pow"
          >
            <span className="h-2.5 w-2.5 animate-ping rounded-full bg-blood" />
            Open to 6-month SDE / ML internships & new-grad roles
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="comic-title text-6xl uppercase leading-[0.92] text-pow sm:text-7xl md:text-[5.5rem]"
          >
            Hi, I'm
            <br />
            <span className="text-blood">Dhruv</span> <span className="text-ocean">Samdani</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 inline-block rounded-md border-2 border-ink bg-ink px-3 py-1 font-wanted text-base text-parchment sm:text-lg"
          >
            {'> '}
            {role}
            <span className="animate-pulse">_</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-ink/80"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#bounties" className="btn-comic bg-blood text-white">
              View the bounties
            </a>
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn-comic bg-parchment text-ink">
              <DownloadIcon width={18} height={18} /> Résumé
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 flex items-center gap-3"
          >
            {[
              [socials.github, GitHubIcon, 'GitHub'],
              [socials.linkedin, LinkedInIcon, 'LinkedIn'],
              [socials.leetcode, CodeIcon, 'LeetCode'],
              [`mailto:${profile.email}`, MailIcon, 'Email'],
            ].map(([href, Icon, label]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border-[3px] border-ink bg-[#fbf4e2] text-ink shadow-comic transition-transform hover:-translate-y-1 hover:bg-pow"
              >
                <Icon width={20} height={20} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — WANTED poster */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: -3 }}
          transition={{ duration: 0.7, delay: 0.2, type: 'spring', bounce: 0.4 }}
          className="mx-auto w-full max-w-sm"
        >
          <Tilt className="animate-floaty">
            <div className="torn relative rounded-sm border-[4px] border-ink bg-parch2 p-4 shadow-comicxl">
              <div className="halftone-gold absolute inset-0 opacity-20" />
              <div className="relative">
                <p className="text-center font-wanted text-sm font-bold tracking-[0.35em] text-ink/70">
                  ✶ MARINE ✶
                </p>
                <h2 className="section-label text-center text-6xl uppercase leading-none text-ink sm:text-7xl">
                  Wanted
                </h2>
                <p className="-mt-1 text-center font-wanted text-xs font-bold tracking-[0.4em] text-ink/70">
                  DEAD OR ALIVE
                </p>

                <div className="relative mx-auto mt-3 aspect-[4/5] w-full overflow-hidden rounded-sm border-[3px] border-ink bg-ink">
                  {photoOk ? (
                    <img
                      src={profile.photo}
                      alt={profile.name}
                      onError={() => setPhotoOk(false)}
                      className="h-full w-full object-cover object-center contrast-[1.05] saturate-[0.85] sepia-[0.25]"
                    />
                  ) : (
                    <div className="grid h-full w-full place-items-center bg-parch3 font-bangers text-7xl text-ink">DS</div>
                  )}
                  <div className="halftone pointer-events-none absolute inset-0 mix-blend-multiply" />
                </div>

                <h3 className="mt-3 text-center font-bangers text-3xl uppercase tracking-wide text-ink">
                  Dhruv “Dev” Samdani
                </h3>
                <p className="text-center font-wanted text-[11px] uppercase tracking-widest text-ink/70">
                  {profile.epithet}
                </p>

                <div className="mt-2 border-t-2 border-dashed border-ink/50 pt-2 text-center">
                  <p className="font-wanted text-[10px] uppercase tracking-[0.3em] text-ink/60">Bounty</p>
                  <p className="font-bangers text-2xl tracking-wider text-blood" style={{ WebkitTextStroke: '1px #1a1410' }}>
                    ฿ {bounty.toLocaleString('en-IN')}
                  </p>
                </div>
              </div>
            </div>
          </Tilt>
        </motion.div>
      </div>

      <a href="#origin" aria-label="Scroll" className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-ink/70">
        <ArrowDownIcon />
      </a>
    </section>
  )
}
