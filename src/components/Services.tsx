import { Globe, Zap, TrendingUp, Cog, Gauge } from 'lucide-react'
import AnimateOnScroll from './AnimateOnScroll'

export default function Services() {

  const servicesList = [
    { icon: Globe, title: 'Custom Website Development', desc: 'High-performance websites built for conversions, not decorations. SEO-optimized, mobile-responsive, and designed to generate revenue.' },
    { icon: Zap, title: 'AI Automation & AI Receptionists', desc: 'Automate customer interactions, lead qualification, and business processes. Reduce operational costs while improving customer experience.' },
    { icon: TrendingUp, title: 'Sales Funnels & Landing Pages', desc: 'Conversion-focused landing pages and sales funnels. Every element tested and optimized for maximum ROI.' },
    { icon: Cog, title: 'Business Process Automation', desc: 'Eliminate manual tasks with intelligent automation. Save 20+ hours per week and eliminate human error.' },
    { icon: Gauge, title: 'Performance & Conversion Optimization', desc: 'Improve page speed, reduce bounce rates, and increase conversions. Data-driven optimization that moves the business forward.' }
  ]

  return (
    <section id="services" className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Everything I offer is designed around one metric: does it move your business forward?
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => {
            const Icon = service.icon
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
