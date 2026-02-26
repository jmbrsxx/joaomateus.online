import { useState } from 'react'
import { Mail, Phone, Linkedin, ArrowRight } from 'lucide-react'
import AnimateOnScroll from './AnimateOnScroll'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', projectType: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Schedule a strategy call to discuss your project and see how I can help you achieve your business goals.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <AnimateOnScroll>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <a href="mailto:hello@joaomateus.online" className="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-lg hover:border-cyan-500 transition group">
                    <Mail className="text-cyan-400 group-hover:scale-110 transition" size={24} />
                    <div>
                      <p className="text-slate-400 text-sm">Email</p>
                      <p className="font-semibold group-hover:text-cyan-400 transition">hello@joaomateus.online</p>
                    </div>
                  </a>

                  <a href="tel:+1234567890" className="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-lg hover:border-cyan-500 transition group">
                    <Phone className="text-cyan-400 group-hover:scale-110 transition" size={24} />
                    <div>
                      <p className="text-slate-400 text-sm">Phone</p>
                      <p className="font-semibold group-hover:text-cyan-400 transition">+1 (555) 123-4567</p>
                    </div>
                  </a>

                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-lg hover:border-cyan-500 transition group">
                    <Linkedin className="text-cyan-400 group-hover:scale-110 transition" size={24} />
                    <div>
                      <p className="text-slate-400 text-sm">LinkedIn</p>
                      <p className="font-semibold group-hover:text-cyan-400 transition">Connect with me</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg">
                <p className="text-slate-300 mb-4">
                  <strong>Typical Response Time:</strong> Within 24 hours on business days.
                </p>
                <p className="text-slate-300">
                  <strong>Next Available Start:</strong> 2-4 weeks depending on current projects.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Contact Form */}
          <AnimateOnScroll>
            <form onSubmit={handleSubmit} className="space-y-4">
              {submitted ? (
                <div className="flex items-center justify-center h-96 bg-slate-900 border border-slate-800 rounded-lg">
                  <div className="text-center">
                    <div className="text-4xl mb-4">✓</div>
                    <p className="text-xl font-semibold text-cyan-400 mb-2">Message Sent!</p>
                    <p className="text-slate-400">I'll get back to you within 24 hours.</p>
                  </div>
                </div>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-slate-500"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-slate-500"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-slate-500"
                      placeholder="Company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-cyan-500 text-white"
                    >
                      <option value="">Select a project type</option>
                      <option value="website">Website Development</option>
                      <option value="ai">AI Automation</option>
                      <option value="funnel">Sales Funnel</option>
                      <option value="optimization">Conversion Optimization</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Tell me about your project</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-slate-500 resize-none"
                      placeholder="What are you looking to build?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition font-semibold flex items-center justify-center gap-2"
                  >
                    Schedule a Call <ArrowRight size={20} />
                  </button>
                </>
              )}
            </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
