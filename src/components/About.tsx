import AnimateOnScroll from './AnimateOnScroll'
import { useTranslation } from '../i18n'

export default function About() {
  const { t } = useTranslation()
  
  const paragraphs = t('about.paragraphs') as unknown as string[]

  return (
    <section id="about" className="py-20 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">{t('about.heading')}</h2>

          <div className="space-y-8">
            {paragraphs.map((paragraph, index) => (
              <AnimateOnScroll key={index}>
                <p className="text-lg text-slate-300 leading-relaxed">
                  {paragraph}
                </p>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <AnimateOnScroll>
              <div className="text-center p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-500 transition">
                <div className="text-4xl font-bold text-cyan-400 mb-2">7+</div>
                <p className="text-slate-400">{t('about.stats.years')}</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <div className="text-center p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-500 transition">
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <p className="text-slate-400">{t('about.stats.projects')}</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <div className="text-center p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-500 transition">
                <div className="text-4xl font-bold text-cyan-400 mb-2">$50M+</div>
                <p className="text-slate-400">{t('about.stats.revenue')}</p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Focus Areas */}
          <AnimateOnScroll>
            <div className="mt-16 p-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">{t('about.focus')}</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-2">{t('about.focusPerformance')}</h4>
                  <p className="text-slate-400">{t('about.focusPerformanceDesc')}</p>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-2">{t('about.focusConversion')}</h4>
                  <p className="text-slate-400">{t('about.focusConversionDesc')}</p>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-2">{t('about.focusAutomation')}</h4>
                  <p className="text-slate-400">{t('about.focusAutomationDesc')}</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
