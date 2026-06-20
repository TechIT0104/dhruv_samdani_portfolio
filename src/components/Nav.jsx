import { useEffect, useState } from 'react'

const LINKS = [
  ['origin', 'Origin'],
  ['powers', 'Powers'],
  ['bounties', 'Bounties'],
  ['claimed', 'Claimed'],
  ['log', 'The Log'],
  ['denden', 'Contact'],
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        solid ? 'border-b-[3px] border-ink bg-parchment/95 backdrop-blur' : 'border-b-[3px] border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="group flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-full border-[3px] border-ink bg-blood text-white shadow-comic transition-transform group-hover:-rotate-12">
            <span className="font-bangers text-xl leading-none">DS</span>
          </span>
          <span className="hidden font-bangers text-2xl tracking-wide text-ink sm:block">
            Dhruv<span className="text-blood">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="rounded-md border-2 border-transparent px-3 py-1.5 font-wanted text-sm font-bold uppercase tracking-wider text-ink/80 transition-all hover:-translate-y-0.5 hover:border-ink hover:bg-pow hover:text-ink"
            >
              {label}
            </a>
          ))}
          <a
            href="#denden"
            className="btn-comic ml-2 bg-ink px-5 py-2 text-sm text-parchment shadow-pow"
          >
            Recruit me
          </a>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-md border-[3px] border-ink bg-pow shadow-comic md:hidden"
        >
          <span className="font-bangers text-xl leading-none">{open ? '✕' : '☰'}</span>
        </button>
      </nav>

      {open && (
        <div className="border-t-[3px] border-ink bg-parchment px-5 pb-4 pt-2 md:hidden">
          <div className="grid grid-cols-2 gap-2">
            {LINKS.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="rounded-md border-2 border-ink bg-[#fbf4e2] px-3 py-2 text-center font-wanted text-sm font-bold uppercase"
              >
                {label}
              </a>
            ))}
          </div>
          <a href="#denden" onClick={() => setOpen(false)} className="btn-comic mt-2 w-full bg-ink text-parchment">
            Recruit me
          </a>
        </div>
      )}
    </header>
  )
}
