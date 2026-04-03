import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import AnimateOnScroll from './AnimateOnScroll'
import { useTranslation } from '../i18n'

const faqs = [
  {},
  {},
  {},
  {},
  {}
]

export default function FAQ() {
  const [expanded, setExpanded] = useState<Set<number>>(new Set())
  const { t } = useTranslation()

  const toggleExpanded = (index: number) => {
    setExpanded(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  const getFaqQuestion = (index: number) => t(`faq.items.${index}.question`)
  const getFaqAnswer = (index: number) => t(`faq.items.${index}.answer`)

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('faq.heading')}</h2>
            <p className="text-xl text-slate-400">
              {t('faq.sub') || "Common questions about how I work and what it's like to partner with me."}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="space-y-4">
          {faqs.map((_, index) => (
            <AnimateOnScroll key={index}>
              <button
                onClick={() => toggleExpanded(index)}
                className="w-full text-left p-6 bg-slate-800 border border-slate-700 rounded-lg hover:border-cyan-500 transition group"
              >
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-lg font-semibold group-hover:text-cyan-400 transition">{getFaqQuestion(index)}</h3>
                  <ChevronDown
                    className={`text-cyan-400 flex-shrink-0 transition transform ${
                      expanded.has(index) ? 'rotate-180' : ''
                    }`}
                    size={24}
                  />
                </div>

                {expanded.has(index) && (
                  <p className="mt-4 text-slate-300 leading-relaxed">{getFaqAnswer(index)}</p>
                )}
              </button>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
