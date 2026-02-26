import { ArrowUp, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              JohnMatthew
            </div>
            <p className="text-sm mb-4">
              Building digital products that generate real revenue. No decorations, just results.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-cyan-400 transition">Website Development</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition">AI Automation</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition">Sales Funnels</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition">Conversion Optimization</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
              <li><a href="#work" className="hover:text-cyan-400 transition">Work</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
              <li><a href="/#" className="hover:text-cyan-400 transition">Blog</a></li>
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:hello@joaomateus.online" className="flex items-center gap-2 hover:text-cyan-400 transition">
                  <Mail size={16} /> Email
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 py-8 flex justify-between items-center">
          <p className="text-sm">
            &copy; {currentYear} JohnMatthew. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 bg-slate-900 border border-slate-800 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  )
}
