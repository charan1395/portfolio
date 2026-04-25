import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'
import { personal } from '../data'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-900 to-navy-800" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-light/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-6 text-center animate-fade-in">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-accent/30 blur-2xl" />
            <img
              src="/profile.jpg"
              alt="Sri Charan Rachakonda"
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-accent/30 shadow-2xl"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>
        </div>

        <p className="text-accent-light text-sm md:text-base font-medium tracking-widest uppercase mb-4">
          Hello, I'm
        </p>
        <h1 className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl text-white mb-4 leading-tight">
          {personal.name}
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl text-slate-300 mb-6 font-display font-semibold">
          {personal.title}
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-base md:text-lg leading-relaxed">
          {personal.summary}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href={personal.resume} download className="btn-secondary">
            <FaDownload /> Download Resume
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 text-2xl text-slate-400">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-accent-light transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-accent-light transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="hover:text-accent-light transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>

        <a
          href="#journey"
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-accent-light/60 hover:text-accent-light transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <HiArrowDown size={28} />
        </a>
      </div>
    </section>
  )
}
