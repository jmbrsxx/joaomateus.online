import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useTranslation } from '../i18n'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()

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
        <div className="flex items-center gap-3">
          {/* Beta Badge */}
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 animate-pulse"></div>
            <span className="relative px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-full tracking-wider shadow-lg">
              BETA
            </span>
          </div>
          <div 
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition"
          >
            JoaoMateus
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <button onClick={() => scrollToSection('work')} className="text-slate-300 hover:text-cyan-400 transition text-sm font-medium">
            {t('nav.work')}
          </button>
          <button onClick={() => scrollToSection('services')} className="text-slate-300 hover:text-cyan-400 transition text-sm font-medium">
            {t('nav.services')}
          </button>
          <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-cyan-400 transition text-sm font-medium">
            {t('nav.about')}
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-cyan-400 transition text-sm font-medium">
            {t('nav.contact')}
          </button>
          <button onClick={() => scrollToSection('contact')} className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition text-sm font-semibold">
            {t('nav.bookCall')}
          </button>
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button 
            className="text-slate-300 hover:text-cyan-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('work')} className="block w-full text-left text-slate-300 hover:text-cyan-400 transition py-2">
              {t('nav.work')}
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left text-slate-300 hover:text-cyan-400 transition py-2">
              {t('nav.services')}
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-slate-300 hover:text-cyan-400 transition py-2">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-slate-300 hover:text-cyan-400 transition py-2">
              {t('nav.contact')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="w-full px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition text-sm font-semibold">
              {t('nav.bookCall')}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
