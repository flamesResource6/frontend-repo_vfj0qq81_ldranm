function Work() {
  const projects = [
    {
      title: 'Ethereal Bloom',
      tag: 'Beauty',
      image: 'https://images.unsplash.com/photo-1659627162657-4eb9369da0d0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFdGhlcmVhbCUyMEJsb29tfGVufDB8MHx8fDE3NjM3ODkyMjl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Soft Lines',
      tag: 'Editorial',
      image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Golden Hour',
      tag: 'Lifestyle',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Velvet & Lace',
      tag: 'Fashion',
      image: 'https://images.unsplash.com/photo-1520975867597-0af37a22e31e?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Pastel Skies',
      tag: 'Travel',
      image: 'https://images.unsplash.com/photo-1496302662116-35cc4f36df92?q=80&w=1974&auto=format&fit=crop',
    },
    {
      title: 'Glass Petals',
      tag: 'Beauty',
      image: 'https://images.unsplash.com/photo-1762328823694-553f08e46f09?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHbGFzcyUyMFBldGFsc3xlbnwwfDB8fHwxNzYzNzg5MjI5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
  ]

  return (
    <section id="work" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-rose-900">Selected Work</h2>
            <p className="text-rose-900/70 mt-2">A curated selection across beauty, fashion and lifestyle.</p>
          </div>
          <a href="#" className="text-rose-700 hover:text-rose-900">See all</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article key={i} className="group rounded-2xl overflow-hidden bg-white border border-rose-100 shadow-sm hover:shadow-md transition">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent"></div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-xs text-rose-700/80">
                  <span className="px-2 py-0.5 bg-rose-50 border border-rose-100 rounded-full">{p.tag}</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-rose-900">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
