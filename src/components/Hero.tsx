import { ArrowRight, Zap } from 'lucide-react'
import AnimateOnScroll from './AnimateOnScroll'
import { useTranslation } from '../i18n'

export default function Hero() {
  const { t } = useTranslation()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen bg-slate-950 text-white flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse animation-delay-2000"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <AnimateOnScroll>
              <div className="inline-block mb-4 px-4 py-2 bg-slate-800 rounded-full border border-slate-700">
                <span className="text-cyan-400 text-sm font-semibold flex items-center gap-2">
                  <Zap size={16} /> {t('hero.badge')}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                {t('hero.title')}
              </h1>

              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                {t('hero.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition font-semibold flex items-center justify-center gap-2"
                >
                  {t('hero.bookCall')} <ArrowRight size={20} />
                </button>
                <button 
                  onClick={() => scrollToSection('work')}
                  className="px-8 py-4 border border-slate-600 text-white rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition font-semibold"
                >
                  {t('hero.viewWork')}
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-cyan-400">50+</div>
                  <p className="text-slate-400 text-sm">{t('hero.stats.projects')}</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400">$5M+</div>
                  <p className="text-slate-400 text-sm">{t('hero.stats.revenue')}</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400">98%</div>
                  <p className="text-slate-400 text-sm">{t('hero.stats.satisfaction')}</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right Column - Visual Element */}
          <div className="hidden md:block relative">
            <AnimateOnScroll>
              <div className="relative w-full">
                {/* 3 Website Mockups */}
                <div className="space-y-6">
                  {/* Website 1 - Main */}
                  <div className="relative transform translate-x-4">
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
                      {/* Browser Header */}
                      <div className="bg-slate-800 px-4 py-2 flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <div className="ml-4 flex-1 bg-slate-700 rounded px-3 py-1 text-xs text-slate-400">joaomateus.com</div>
                      </div>
                      {/* Website Content */}
                      <div className="p-4 space-y-3">
                        <div className="h-3 bg-cyan-500/20 rounded w-3/4"></div>
                        <div className="h-3 bg-slate-700 rounded w-1/2"></div>
                        <div className="flex gap-2 mt-4">
                          <div className="h-16 flex-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30"></div>
                          <div className="h-16 flex-1 bg-slate-700/50 rounded-lg"></div>
                          <div className="h-16 flex-1 bg-slate-700/50 rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Website 2 - Offset */}
                  <div className="relative transform -translate-x-8">
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl opacity-90">
                      {/* Browser Header */}
                      <div className="bg-slate-800 px-4 py-2 flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <div className="ml-4 flex-1 bg-slate-700 rounded px-3 py-1 text-xs text-slate-400">saas-platform.io</div>
                      </div>
                      {/* Website Content */}
                      <div className="p-4 space-y-3">
                        <div className="h-3 bg-blue-500/20 rounded w-2/3"></div>
                        <div className="h-3 bg-slate-700 rounded w-1/3"></div>
                        <div className="flex gap-2 mt-4">
                          <div className="h-12 flex-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30"></div>
                          <div className="h-12 flex-1 bg-slate-700/50 rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Website 3 - Offset More */}
                  <div className="relative transform translate-x-4">
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl opacity-80">
                      {/* Browser Header */}
                      <div className="bg-slate-800 px-4 py-2 flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <div className="ml-4 flex-1 bg-slate-700 rounded px-3 py-1 text-xs text-slate-400">ecommerce.store</div>
                      </div>
                      {/* Website Content */}
                      <div className="p-4 space-y-3">
                        <div className="h-3 bg-purple-500/20 rounded w-3/4"></div>
                        <div className="h-3 bg-slate-700 rounded w-1/2"></div>
                        <div className="flex gap-2 mt-4">
                          <div className="h-10 flex-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30"></div>
                          <div className="h-10 flex-1 bg-slate-700/50 rounded-lg"></div>
                          <div className="h-10 flex-1 bg-slate-700/50 rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-cyan-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-pulse animation-delay-2000"></div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}
