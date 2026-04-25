import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '../data'

const filters = ['All', 'Gen AI', 'Data Science']

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const visible = filter === 'All' ? projects : projects.filter((p) => p.type === filter)

  return (
    <section id="projects" className="container-section">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">
        Production-grade GenAI systems and academic research projects — every one open-sourced on GitHub.
      </p>

      <div className="flex justify-center gap-2 mb-10 flex-wrap">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
              filter === f
                ? 'bg-accent text-white shadow-lg shadow-accent/20'
                : 'bg-navy-800 text-slate-400 hover:text-white border border-navy-700'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((p) => (
          <article key={p.title} className="card flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <span className="tag">{p.type}</span>
              <div className="flex items-center gap-3 text-slate-400">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} GitHub`}
                    className="hover:text-accent-light transition-colors"
                  >
                    <FaGithub />
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} live demo`}
                    className="hover:text-accent-light transition-colors"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-lg font-display font-bold text-white mb-2">{p.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-grow">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-navy-700/50">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs text-slate-300 px-2 py-0.5 rounded bg-navy-700/60"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
