import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { personal } from '../data'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-navy-700/50 bg-navy-900">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          © {year} Sri Charan Rachakonda. All rights reserved.
        </p>
        <div className="flex items-center gap-5 text-slate-400">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-light transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-light transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="hover:text-accent-light transition-colors"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  )
}
