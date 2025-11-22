import { Menu, Instagram, Mail, Github } from 'lucide-react'

function Navbar() {
  return (
    <header className="relative z-20 w-full">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-rose-500 to-orange-400 bg-clip-text text-transparent">Aurelia</span>
          <span className="text-sm text-rose-700/70 bg-rose-100 px-2 py-0.5 rounded-full border border-rose-200">Portfolio</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-rose-900/80">
          <a href="#work" className="hover:text-rose-900 transition-colors">Work</a>
          <a href="#about" className="hover:text-rose-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-rose-900 transition-colors">Contact</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/70 hover:bg-white text-rose-900 border border-rose-100 shadow-sm transition">
            <Instagram size={18} />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/70 hover:bg-white text-rose-900 border border-rose-100 shadow-sm transition">
            <Github size={18} />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-400 to-orange-300 text-white shadow-sm hover:shadow-md transition">
            <Mail size={16} />
            <span>Let’s talk</span>
          </a>
        </div>
        <button className="md:hidden p-2 rounded-full bg-white/70 text-rose-900 border border-rose-100 shadow-sm">
          <Menu />
        </button>
      </div>
    </header>
  )
}

export default Navbar
