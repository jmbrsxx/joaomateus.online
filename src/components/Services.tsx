import { Globe, Zap, TrendingUp, Cog, Gauge } from 'lucide-react'
import AnimateOnScroll from './AnimateOnScroll'
import { useTranslation } from '../i18n'

const icons = [Globe, Zap, TrendingUp, Cog, Gauge]

export default function Services() {
  const { t } = useTranslation()

  const servicesList = t('services.items') as unknown as { title: string; desc: string }[]

  return (
    <section id="services" className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('services.heading')}</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              {t('services.sub')}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => {
            const Icon = icons[index]
            return (
              <AnimateOnScroll key={index}>
                <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-500 transition group cursor-pointer">
                  <div className="mb-4 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{service.desc}</p>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
