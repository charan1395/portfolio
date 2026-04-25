import { FaGraduationCap, FaCertificate } from 'react-icons/fa'
import { education, certifications } from '../data'

export default function Education() {
  return (
    <section id="education" className="container-section">
      <h2 className="section-title">Education & Certifications</h2>
      <p className="section-subtitle">
        Academic foundation and industry-recognized credentials.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="flex items-center gap-3 text-lg font-display font-bold text-white mb-4">
            <FaGraduationCap className="text-accent-light" /> Education
          </h3>
          <div className="space-y-4">
            {education.map((e) => (
              <div key={e.degree} className="card">
                <h4 className="font-semibold text-white mb-1">{e.degree}</h4>
                <p className="text-sm text-accent-light mb-1">{e.institution}</p>
                {e.period && <p className="text-xs text-slate-500">{e.period}</p>}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="flex items-center gap-3 text-lg font-display font-bold text-white mb-4">
            <FaCertificate className="text-accent-light" /> Certifications
          </h3>
          <div className="space-y-4">
            {certifications.map((c) => (
              <div key={c.name} className="card">
                <h4 className="font-semibold text-white mb-1">{c.name}</h4>
                <p className="text-sm text-accent-light">{c.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
