import { journey } from '../data'

export default function Journey() {
  return (
    <section id="journey" className="container-section">
      <h2 className="section-title">My Journey</h2>
      <p className="section-subtitle">
        From statistical foundations to enterprise GenAI systems.
      </p>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/60 via-accent/30 to-transparent md:-translate-x-px" />

        <div className="space-y-12">
          {journey.map((item, idx) => (
            <div
              key={item.year}
              className={`relative flex flex-col md:flex-row md:items-center gap-6 ${
                idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-navy-900 -translate-x-1/2 md:-translate-x-1/2 z-10" />

              <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                <div className="card">
                  <span className="tag mb-3">{item.year}</span>
                  <h3 className="text-xl font-display font-bold text-white mb-2 mt-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
