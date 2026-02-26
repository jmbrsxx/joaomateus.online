import { CheckCircle } from 'lucide-react'
import AnimateOnScroll from './AnimateOnScroll'

const steps = [
  {
    number: 1,
    title: 'Understand Your Business',
    desc: 'Deep discovery call to understand your goals, challenges, and business metrics. We analyze your competition and identify opportunities.',
    timeline: 'Week 1-2'
  },
  {
    number: 2,
    title: 'Design & Build the Solution',
    desc: 'We design and build your solution with daily progress updates. Transparent process with regular feedback loops and iterations.',
    timeline: 'Week 3-8'
  },
  {
    number: 3,
    title: 'Launch, Optimize & Scale',
    desc: 'Launch with confidence. We monitor performance, optimize based on real data, and scale what works. No guessing, only data.',
    timeline: 'Week 9+'
  }
]

export default function HowIWork() {

  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How I Work</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              A proven three-step process from discovery to scale. No surprises, just results.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <AnimateOnScroll key={index}>
              <div className="relative p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-500 transition">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
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
                Transparent Communication
              </h4>
              <p className="text-slate-400">Daily updates, weekly calls, and complete visibility into the development process. You always know what's happening.</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                <CheckCircle className="text-cyan-400" size={24} />
                Data-Driven Optimization
              </h4>
              <p className="text-slate-400">Every decision is backed by data. We test, measure, and optimize continuously to ensure maximum ROI.</p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
