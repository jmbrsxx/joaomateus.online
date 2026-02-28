import { ArrowUp, Linkedin, Mail } from 'lucide-react'
import { useTranslation } from '../i18n'

export default function Footer() {
  const { t } = useTranslation()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              JoaoMateus
            </div>
            <p className="text-sm mb-4">
              {t('footer.brandTag')}
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-cyan-400 transition">{t('footer.websiteDev')}</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition">{t('footer.aiAutomation')}</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition">{t('footer.salesFunnels')}</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition">{t('footer.conversionOpt')}</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-cyan-400 transition">{t('footer.aboutLink')}</a></li>
              <li><a href="#work" className="hover:text-cyan-400 transition">{t('footer.workLink')}</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition">{t('footer.contactLink')}</a></li>
              <li><a href="/#" className="hover:text-cyan-400 transition">{t('footer.blog')}</a></li>
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t('footer.connect')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:hello@joaomateus.online" className="flex items-center gap-2 hover:text-cyan-400 transition">
                  <Mail size={16} /> {t('contact.email')}
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition">
                  <Linkedin size={16} /> {t('contact.linkedin')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 py-8 flex justify-between items-center">
          <p className="text-sm">
            {t('footer.copyright')}
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
