import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="container-section">
      <h2 className="section-title">Technical Skills</h2>
      <p className="section-subtitle">
        The full toolkit — from foundational ML to production GenAI deployment.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((group) => (
          <div key={group.category} className="card">
            <h3 className="text-lg font-display font-bold text-white mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
