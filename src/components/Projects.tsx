import { ArrowRight } from 'lucide-react'
import AnimateOnScroll from './AnimateOnScroll'
import { useTranslation } from '../i18n'

const projects = [
  {
    title: 'E-Commerce Platform Redesign',
    problem: 'Client was losing customers due to poor checkout experience.',
    solution: 'Rebuilt the entire platform with focus on conversion optimization, faster load times, and streamlined checkout.',
    results: '+340% increase in conversions, 45% reduction in cart abandonment',
    client: 'E-Commerce Retailer'
  },
  {
    title: 'AI Receptionist for SaaS',
    problem: 'SaaS company spending $15K/month on customer support staff.',
    solution: 'Implemented AI receptionist system to handle 85% of inquiries automatically.',
    results: '85% automation rate, saved $150K annually, 24/7 customer support',
    client: 'B2B SaaS Company'
  },
  {
    title: 'High-Converting Sales Funnel',
    problem: 'Low conversion rates on existing landing pages.',
    solution: 'Created optimized sales funnel with A/B testing of headlines, copy, and CTAs.',
    results: '$1.2M sales pipeline generated, 12% conversion rate',
    client: 'Digital Marketing Agency'
  },
  {
    title: 'Agency Website with Lead System',
    problem: 'Agency had no lead generation system on their website.',
    solution: 'Built conversion-focused website with integrated lead capture and CRM system.',
    results: '250+ qualified leads per month, $5M+ pipeline',
    client: 'Marketing Agency'
  }
]

export default function Projects() {
  const { t } = useTranslation()

  const getProjectTitle = (index: number) => t(`projects.items.${index}.title`)
  const getProjectProblem = (index: number) => t(`projects.items.${index}.problem`)
  const getProjectSolution = (index: number) => t(`projects.items.${index}.solution`)
  const getProjectResults = (index: number) => t(`projects.items.${index}.results`)
  const getProjectClient = (index: number) => t(`projects.items.${index}.client`)

  return (
    <section id="work" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('projects.heading')}</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              {t('projects.sub') || "Case studies from clients across industries. Every project shows the same pattern: problem → solution → results."}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="space-y-12">
          {projects.map((_, index) => (
            <AnimateOnScroll key={index}>
              <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500 transition group">
                <div className="grid md:grid-cols-3 gap-8 p-8 md:p-12">
                  {/* Problem */}
                  <div>
                    <h3 className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">{t('projects.problemHeading')}</h3>
                    <p className="text-white text-lg mb-4">{getProjectProblem(index)}</p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">{t('projects.solutionHeading')}</h3>
                    <p className="text-white text-lg mb-4">{getProjectSolution(index)}</p>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">{t('projects.resultHeading')}</h3>
                    <p className="text-cyan-400 text-lg font-semibold mb-4">{getProjectResults(index)}</p>
                    <p className="text-slate-400 text-sm">{getProjectClient(index)}</p>
                  </div>
                </div>

                <div className="px-8 md:px-12 pb-8 md:pb-12 border-t border-slate-700 flex items-center justify-between">
                  <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition">{getProjectTitle(index)}</h3>
                  <ArrowRight className="text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-2 transition" size={24} />
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
