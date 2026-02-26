import AnimateOnScroll from './AnimateOnScroll'

export default function About() {

  const paragraphs = [
    "I'm João Mateus, and I build digital products that make businesses money. Not websites that look good. Not apps that are \"innovative.\" Products that generate measurable revenue and eliminate inefficiency.",
    "I started building websites when I was 14. I launched my first agency at 22. I've since worked with everyone from bootstrapped startups to 8-figure companies, and I've seen the same pattern repeat: most digital products fail because they're built for aesthetics or features, not for business outcomes.",
    "That changed how I work. Everything I build now is architected around one metric: does it move the business forward? Not \"is it pretty.\" Does it generate leads, reduce costs, increase conversions, or eliminate friction? If it doesn't answer \"yes\" to at least one of those, we redesign it.",
    "I focus on three things: performance, conversion, and automation. I obsess over page load times because every millisecond impacts revenue. I test every button, headline, and call-to-action because data tells the real story. And I build AI and automation systems because they scale what humans can't.",
    "I'm not arrogant about my work — the results speak louder than any pitch. My clients have seen 7-12x revenue increases, businesses saved 20+ hours per week, and conversions improve by an average of 240%. These aren't theoretical numbers. These are businesses that now have breathing room to grow."
  ]

  return (
    <section id="about" className="py-20 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">About Me</h2>

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
                <p className="text-slate-400">Years Building Digital Products</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <div className="text-center p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-500 transition">
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <p className="text-slate-400">Projects Delivered</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <div className="text-center p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-500 transition">
                <div className="text-4xl font-bold text-cyan-400 mb-2">$50M+</div>
                <p className="text-slate-400">Client Revenue Generated</p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Focus Areas */}
          <AnimateOnScroll>
            <div className="mt-16 p-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">My Focus</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-2">Performance</h4>
                  <p className="text-slate-400">Every millisecond matters. Speed directly impacts revenue.</p>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-2">Conversion</h4>
                  <p className="text-slate-400">Data-driven optimization. Every element tested to maximize ROI.</p>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-2">Automation</h4>
                  <p className="text-slate-400">AI and automation systems that scale beyond human capability.</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
