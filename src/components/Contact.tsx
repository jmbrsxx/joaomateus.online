import AnimateOnScroll from './AnimateOnScroll'
import { useTranslation } from '../i18n'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-20 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('contact.heading')}</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
              {t('contact.sub')}
            </p>
            <a href="https://wa.me/555192395656?text=Olá, gostaria de conversar sobre meu projeto." target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-green-600 text-white rounded-lg hover:shadow-lg transition font-semibold inline-block">
              {t('contact.bookCall')}
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
