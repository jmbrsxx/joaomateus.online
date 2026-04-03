import { ArrowUp, Mail, Phone } from 'lucide-react'
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
              {t('footer.brandName')}
            </div>
            <p className="text-sm mb-4">
              {t('footer.brandDesc')}
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2 text-sm">
              {t('footer.servicesList').map((service: string, index: number) => (
                <li key={index}><a href="#services" className="hover:text-cyan-400 transition">{service}</a></li>
              ))}
            </ul>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t('footer.navigation')}</h4>
            <ul className="space-y-2 text-sm">
              {t('footer.navigationList').map((item: string, index: number) => {
                const href = item === 'Sobre' ? '#about' : item === 'Portfólio' ? '#work' : item === 'Contato' ? '#contact' : '/#'
                return (
                  <li key={index}><a href={href} className="hover:text-cyan-400 transition">{item}</a></li>
                )
              })}
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="flex items-center gap-2">
                  <Mail size={16} /> jmsrs375@gmail.com
                </span>
              </li>
              <li>
                <span className="flex items-center gap-2">
                  <Phone size={16} /> +55 51 9239-5656
                </span>
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
