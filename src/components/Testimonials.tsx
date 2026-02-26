import { Star } from 'lucide-react'
import AnimateOnScroll from './AnimateOnScroll'

const testimonials = [
  {
    text: 'João rebuilt our website and the results were immediate. Within 3 months, we went from 200 monthly leads to 1,200. He doesn\'t just build websites — he builds revenue engines.',
    author: 'Marcus Chen',
    title: 'CEO, SaaS Company',
    result: '$2.4M additional revenue'
  },
  {
    text: 'The AI automation system he built saved us $18K per month in support costs. Best investment we\'ve made. João thinks like a business owner, not like a developer.',
    author: 'Sarah Mitchell',
    title: 'Founder, Service Business',
    result: '$216K annual savings'
  },
  {
    text: 'Our conversion rate went from 2% to 8.7%. João ran tests on every element of the funnel and optimized relentlessly. The data doesn\'t lie.',
    author: 'David Lopez',
    title: 'Marketing Director, E-Commerce',
    result: '+340% conversion increase'
  },
  {
    text: 'Working with João is different. He asked about our business metrics before suggesting anything. Built an agency website that generates 250+ qualified leads monthly.',
    author: 'Emma Rodriguez',
    title: 'Partner, Marketing Agency',
    result: '250+ monthly qualified leads'
  },
  {
    text: 'The website he built is lightning fast and converts like crazy. Page speed improved 65%, bounce rate cut in half. João understands the connection between speed and revenue.',
    author: 'James Wilson',
    title: 'E-Commerce Owner',
    result: '+65% speed improvement'
  },
  {
    text: 'João is a results-first operator. Every decision was based on data. We saw a 340% improvement in key metrics. Phenomenal work.',
    author: 'Lisa Anderson',
    title: 'VP Operations, Tech Startup',
    result: '$5M+ revenue generated'
  }
]

export default function Testimonials() {

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Clients Say</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Results-driven feedback from founders, CEOs, and business leaders who've worked with me.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll key={index}>
              <div className="p-8 bg-slate-800 border border-slate-700 rounded-2xl hover:border-cyan-500 transition">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-cyan-400 text-cyan-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-300 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

                {/* Author */}
                <div className="border-t border-slate-700 pt-4">
                  <p className="font-semibold mb-1">{testimonial.author}</p>
                  <p className="text-slate-400 text-sm mb-3">{testimonial.title}</p>
                  <p className="text-cyan-400 font-semibold text-sm">{testimonial.result}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
