import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import AnimateOnScroll from './AnimateOnScroll'

const faqs = [
  {
    question: 'Who do you work with?',
    answer: 'I work with serious business owners and founders who are committed to growth. I focus on founders and CEOs of bootstrapped startups to 8-figure companies. If your goal is real revenue growth, we\'re a good fit.'
  },
  {
    question: 'How much do projects cost?',
    answer: 'Projects range from $15K to $150K+ depending on scope and complexity. I charge based on project scope, not hourly rates, because we\'re both focused on outcomes. Let\'s talk about your specific needs.'
  },
  {
    question: 'Do you offer ongoing support?',
    answer: 'Yes. Most of my clients work with me on retainers after launch for optimization, maintenance, and scaling. I stay involved until the system is generating the revenue targets we set.'
  },
  {
    question: 'How long does a project take?',
    answer: 'Typically 8-12 weeks from discovery to launch. Week 1-2: Deep discovery. Week 3-8: Design and build. Week 9+: Launch and optimization. Timeline depends on scope.'
  },
  {
    question: 'Can you integrate with my existing systems?',
    answer: 'Absolutely. I integrate with existing CRMs, payment processors, email systems, and databases. No need to rebuild everything from scratch. We integrate cleanly with what you have.'
  },
  {
    question: 'What if I\'m unsure what I need?',
    answer: 'Perfect. That\'s what the discovery call is for. I ask deep questions about your business, metrics, and goals. Together we figure out the right solution. You don\'t need to have it all figured out before we talk.'
  },
  {
    question: 'Do you handle ongoing optimization?',
    answer: 'Yes. After launch, I monitor performance, run A/B tests, and optimize continuously. We set KPIs and track everything. The work doesn\'t stop at launch — it gets better from there.'
  },
  {
    question: 'What\'s your current availability?',
    answer: 'I limit my workload to 2-3 projects at a time to ensure quality and deep focus. I\'m selective but I can usually start new projects within 2-4 weeks. Schedule a call to check current capacity.'
  }
]

export default function FAQ() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-400">
              Common questions about how I work and what it's like to partner with me.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimateOnScroll key={index}>
              <button
                onClick={() => setExpanded(expanded === index ? null : index)}
                className="w-full text-left p-6 bg-slate-800 border border-slate-700 rounded-lg hover:border-cyan-500 transition group"
              >
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-lg font-semibold group-hover:text-cyan-400 transition">{faq.question}</h3>
                  <ChevronDown
                    className={`text-cyan-400 flex-shrink-0 transition transform ${
                      expanded === index ? 'rotate-180' : ''
                    }`}
                    size={24}
                  />
                </div>

                {expanded === index && (
                  <p className="mt-4 text-slate-300 leading-relaxed">{faq.answer}</p>
                )}
              </button>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
