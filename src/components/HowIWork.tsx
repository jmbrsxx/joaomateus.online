import { CheckCircle } from 'lucide-react'
import AnimateOnScroll from './AnimateOnScroll'
import { useTranslation } from '../i18n'

export default function HowIWork() {
  const { t } = useTranslation()

  const steps = t('howIWork.steps') as unknown as { title: string; desc: string; timeline: string }[]
  const keyPoints = t('howIWork.keyPoints') as unknown as { transparent: string; transparentDesc: string; dataDriven: string; dataDrivenDesc: string }

  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('howIWork.heading')}</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              {t('howIWork.sub')}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <AnimateOnScroll key={index}>
              <div className="relative p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-500 transition">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-bold mb-4 pt-4">{step.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{step.desc}</p>

                <div className="text-sm text-cyan-400 font-semibold">{step.timeline}</div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 w-8 h-1 bg-gradient-to-r from-cyan-500 to-transparent transform translate-y-1/2"></div>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Key Points */}
        <AnimateOnScroll>
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                <CheckCircle className="text-cyan-400" size={24} />
                {keyPoints.transparent}
              </h4>
              <p className="text-slate-400">{keyPoints.transparentDesc}</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                <CheckCircle className="text-cyan-400" size={24} />
                {keyPoints.dataDriven}
              </h4>
              <p className="text-slate-400">{keyPoints.dataDrivenDesc}</p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
