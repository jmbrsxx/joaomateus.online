import { ExternalLink } from 'lucide-react'
import AnimateOnScroll from './AnimateOnScroll'
import { useTranslation } from '../i18n'

export default function Projects() {
  const { t, lang } = useTranslation()
  const projects = t('projects.items')

  // Get current language for badge
  const getLanguageBadge = () => {
    const badges: Record<string, string> = {
      en: 'EN',
      pt: 'PT',
      es: 'ES',
      de: 'DE',
      fr: 'FR'
    }
    return badges[lang] || 'EN'
  }

  return (
    <section id="work" className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium mb-4">
              {t('projects.sub') || "Professional Websites"}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('projects.heading')}</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              {t('projects.subtitle')}
            </p>
          </div>
        </AnimateOnScroll>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <div key={index} className="h-full">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-500 group h-full flex flex-col">
                {/* Card Header - Website Preview */}
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="relative h-56 overflow-hidden">
                      {/* Website Image */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>

                      {/* Project number badge */}
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </span>
                        <span className="px-2 py-1 bg-black/30 backdrop-blur-md rounded text-xs text-slate-300">
                          {getLanguageBadge()}
                        </span>
                      </div>

                      {/* Category badge */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-cyan-500/90 backdrop-blur-md rounded-full text-xs font-medium text-white">
                          {project.category}
                        </span>
                      </div>

                      {/* Project title overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-sm text-slate-300">{project.client}</p>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="relative h-56 overflow-hidden">
                    {/* Website Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>

                    {/* Project number badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <span className="px-2 py-1 bg-black/30 backdrop-blur-md rounded text-xs text-slate-300">
                        {getLanguageBadge()}
                      </span>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-cyan-500/90 backdrop-blur-md rounded-full text-xs font-medium text-white">
                        {project.category}
                      </span>
                    </div>

                    {/* Project title overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-sm text-slate-300">{project.client}</p>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                )}

                {/* Card Body - Gallery Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-slate-300 text-sm mb-4">{t('projects.description')}</p>

                  {/* Features */}
                  <div className="mt-auto pt-4 border-t border-slate-700/50">
                    <div className="flex flex-wrap gap-2">
                      {t('projects.features').map((feature: string, idx: number) => (
                        <span key={idx} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-400">{feature}</span>
                      ))}
                    </div>
                  </div>

                  {/* View Project Button */}
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                    >
                      <ExternalLink size={16} />
                      <span>{t('projects.viewWebsite')}</span>
                    </a>
                  ) : (
                    <button className="mt-4 w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn" disabled>
                      <ExternalLink size={16} />
                      <span>{t('projects.viewWebsite')}</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </section>
  )
}
