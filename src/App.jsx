import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-peach-50 via-rose-50 to-white text-rose-900">
      {/* subtle top glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-40 bg-gradient-to-b from-orange-200/40 to-transparent blur-2xl" />

      <Navbar />
      <Hero />
      <Work />
      <About />
      <Contact />

      <footer className="py-10 text-center text-rose-900/60">
        © {new Date().getFullYear()} Aurelia — All rights reserved.
      </footer>
    </div>
  )
}

export default App
