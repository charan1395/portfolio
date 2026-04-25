import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'
import { personal } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="container-section">
      <h2 className="section-title">Let's Connect</h2>
      <p className="section-subtitle">
        Currently open to AI/ML Engineer and Data Scientist roles. Always happy to discuss interesting problems.
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <a
          href={`mailto:${personal.email}`}
          className="card flex items-center gap-4 group"
        >
          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent-light group-hover:bg-accent/20 transition-colors">
            <FaEnvelope />
          </div>
          <div className="overflow-hidden">
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Email</p>
            <p className="text-sm text-white truncate">{personal.email}</p>
          </div>
        </a>

        <a href={`tel:${personal.phone}`} className="card flex items-center gap-4 group">
          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent-light group-hover:bg-accent/20 transition-colors">
            <FaPhone />
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Phone</p>
            <p className="text-sm text-white">{personal.phone}</p>
          </div>
        </a>

        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="card flex items-center gap-4 group"
        >
          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent-light group-hover:bg-accent/20 transition-colors">
            <FaLinkedin />
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">LinkedIn</p>
            <p className="text-sm text-white">Connect on LinkedIn</p>
          </div>
        </a>

        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="card flex items-center gap-4 group"
        >
          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent-light group-hover:bg-accent/20 transition-colors">
            <FaGithub />
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">GitHub</p>
            <p className="text-sm text-white">View Repositories</p>
          </div>
        </a>
      </div>

      <div className="text-center mt-12">
        <a href={personal.resume} download className="btn-primary">
          Download My Resume
        </a>
      </div>
    </section>
  )
}
