import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950 bg-opacity-95 backdrop-blur border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => scrollToSection('hero')}
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition"
        >
          JohnMatthew
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('work')} className="text-slate-300 hover:text-cyan-400 transition text-sm font-medium">
            Work
          </button>
          <button onClick={() => scrollToSection('services')} className="text-slate-300 hover:text-cyan-400 transition text-sm font-medium">
            Services
          </button>
          <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-cyan-400 transition text-sm font-medium">
            About
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-cyan-400 transition text-sm font-medium">
            Contact
          </button>
          <button onClick={() => scrollToSection('contact')} className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition text-sm font-semibold">
            Book Call
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-300 hover:text-cyan-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('work')} className="block w-full text-left text-slate-300 hover:text-cyan-400 transition py-2">
              Work
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left text-slate-300 hover:text-cyan-400 transition py-2">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-slate-300 hover:text-cyan-400 transition py-2">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-slate-300 hover:text-cyan-400 transition py-2">
              Contact
            </button>
            <button onClick={() => scrollToSection('contact')} className="w-full px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition text-sm font-semibold">
              Book Call
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
