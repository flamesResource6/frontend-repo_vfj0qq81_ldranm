function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="rounded-2xl overflow-hidden border border-rose-100 bg-gradient-to-br from-rose-50 to-orange-50 p-2">
          <img
            src="https://images.unsplash.com/photo-1515069140170-986e8f43f8a6?q=80&w=1974&auto=format&fit=crop"
            alt="Behind the scenes"
            className="rounded-xl w-full h-[420px] object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-rose-900">About</h2>
          <p className="mt-4 text-rose-900/80 leading-relaxed">
            I’m Aurelia, a model and creative based in Paris, working across beauty, fashion and lifestyle. My work blends softness with strength, capturing moments that feel effortless and refined.
          </p>
          <p className="mt-4 text-rose-900/80 leading-relaxed">
            Available for campaigns, editorials and collaborations. Let’s create something timeless together.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#contact" className="px-5 py-3 rounded-full bg-rose-500 text-white hover:bg-rose-600 transition shadow-sm">Work with me</a>
            <a href="#work" className="px-5 py-3 rounded-full bg-white/80 hover:bg-white border border-rose-100 text-rose-900 transition shadow-sm">View portfolio</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
