import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'
import { experiences } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="container-section">
      <h2 className="section-title">Professional Experience</h2>
      <p className="section-subtitle">
        4+ years building production AI/ML systems across Banking, Healthcare, and Insurance.
      </p>

      <div className="space-y-8">
        {experiences.map((exp) => (
          <article key={exp.company} className="card">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-1">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 text-accent-light font-medium">
                  <FaBriefcase className="text-sm" />
                  {exp.company}
                </div>
              </div>
              <div className="flex flex-col md:items-end gap-1 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt /> {exp.period}
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt /> {exp.location}
                </div>
              </div>
            </div>

            <div className="mb-4 pb-4 border-b border-navy-700/60">
              <p className="text-sm font-semibold text-slate-300 mb-1">{exp.project}</p>
              <p className="text-sm text-slate-400 leading-relaxed">{exp.summary}</p>
            </div>

            <ul className="space-y-2">
              {exp.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                  <span className="text-accent-light mt-1 flex-shrink-0">▸</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
