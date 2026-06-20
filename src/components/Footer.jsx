import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-ink bg-ink px-5 py-8 text-parchment sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        <p className="font-bangers text-2xl uppercase tracking-wide">
          Dhruv<span className="text-blood">.</span> Samdani
        </p>
        <p className="font-wanted text-xs uppercase tracking-widest text-parchment/70">
          The adventure continues — © {new Date().getFullYear()} · {profile.location}
        </p>
        <a href="#top" className="font-wanted text-xs uppercase tracking-widest text-pow hover:underline">
          ↑ Back to the ship
        </a>
      </div>
    </footer>
  )
}
