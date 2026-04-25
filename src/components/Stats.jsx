const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '50K+', label: 'Documents Processed Annually' },
  { value: '200+', label: 'Hospitals Served' },
  { value: '3M+', label: 'Customers Modeled' },
]

export default function Stats() {
  return (
    <section className="border-y border-navy-700/50 bg-navy-800/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display font-extrabold text-3xl md:text-4xl bg-gradient-to-br from-accent-light to-accent bg-clip-text text-transparent mb-1">
                {s.value}
              </div>
              <p className="text-xs md:text-sm text-slate-400 uppercase tracking-wider">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
