import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/c1w2QYixcPkptHWE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-peach-50/60 via-peach-50/40 to-white/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="backdrop-blur-[2px]">
          <p className="inline-flex items-center gap-2 text-rose-700/80 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400 inline-block" />
            Model Portfolio
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-rose-900">
            Soft, feminine and timeless.
          </h1>
          <p className="mt-4 text-rose-900/80 text-lg leading-relaxed max-w-xl">
            A showcase of beauty, fashion and lifestyle projects told through gentle colors, elegant typography and a touch of playfulness.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="px-5 py-3 rounded-full bg-rose-500 text-white hover:bg-rose-600 transition shadow-sm">View Work</a>
            <a href="#contact" className="px-5 py-3 rounded-full bg-white/80 hover:bg-white border border-rose-100 text-rose-900 transition shadow-sm">Book a Shoot</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
