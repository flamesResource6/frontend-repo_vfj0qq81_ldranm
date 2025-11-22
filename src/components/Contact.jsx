import { Mail, Phone } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="rounded-2xl bg-white/80 backdrop-blur border border-rose-100 p-8 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-rose-900">Let’s collaborate</h2>
              <p className="mt-3 text-rose-900/80">Bookings and inquiries — I’d love to hear from you.</p>
              <div className="mt-6 space-y-3">
                <a href="mailto:hello@example.com" className="flex items-center gap-3 text-rose-900 hover:text-rose-700">
                  <Mail size={18} /> hello@example.com
                </a>
                <a href="tel:+1234567890" className="flex items-center gap-3 text-rose-900 hover:text-rose-700">
                  <Phone size={18} /> +1 (234) 567-890
                </a>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-rose-900/80 mb-1">Name</label>
                <input className="w-full px-4 py-3 rounded-xl border border-rose-200 bg-rose-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-200" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-rose-900/80 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-rose-200 bg-rose-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-200" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-rose-900/80 mb-1">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-rose-200 bg-rose-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-200" placeholder="Tell me about your project"></textarea>
              </div>
              <button className="w-full md:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-rose-400 to-orange-300 text-white shadow-sm hover:shadow-md transition">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
