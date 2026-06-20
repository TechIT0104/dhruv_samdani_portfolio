import { motion } from 'framer-motion'
import { profile, socials } from '../data'
import { Section, Chapter } from './ui'
import { GitHubIcon, LinkedInIcon, CodeIcon, MailIcon } from './icons'

export default function Contact() {
  return (
    <Section id="denden">
      <Chapter no="06" kicker="Final Chapter" title="Send a Den Den Mushi" color="blood" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55 }}
        className="panel relative overflow-hidden p-8 text-center md:p-14"
      >
        <div className="halftone-gold absolute -left-6 -top-6 -z-10 h-40 w-40 rounded-full opacity-30" />
        <div className="halftone-blue absolute -bottom-6 -right-6 -z-10 h-40 w-40 rounded-full opacity-30" />

        {/* speech bubble */}
        <div className="relative mx-auto mb-8 inline-block max-w-2xl rounded-2xl border-[3px] border-ink bg-[#fbf4e2] px-6 py-4 shadow-comic">
          <p className="font-bangers text-2xl uppercase tracking-wide text-ink sm:text-3xl">
            Got a crew to build, a role to fill, or just want to talk shop?
          </p>
          <span className="absolute -bottom-3 left-10 h-5 w-5 rotate-45 border-b-[3px] border-r-[3px] border-ink bg-[#fbf4e2]" />
        </div>

        <p className="mx-auto mb-8 max-w-xl text-lg font-medium text-ink/80">
          I'm open to 6-month internships and full-time software / ML roles. Let's set sail.
        </p>

        <a href={`mailto:${profile.email}`} className="btn-comic mx-auto bg-blood text-lg text-white">
          <MailIcon width={20} height={20} /> {profile.email}
        </a>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 font-wanted text-sm uppercase tracking-wider text-ink/70 sm:flex-row sm:gap-8">
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="hover:text-ink">{profile.phone}</a>
          <span>{profile.location}</span>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
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
              className="grid h-12 w-12 place-items-center rounded-full border-[3px] border-ink bg-[#fbf4e2] text-ink shadow-comic transition-transform hover:-translate-y-1 hover:bg-pow"
            >
              <Icon width={20} height={20} />
            </a>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
