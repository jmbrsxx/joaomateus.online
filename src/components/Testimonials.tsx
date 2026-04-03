import { Star } from 'lucide-react'
import AnimateOnScroll from './AnimateOnScroll'
import { useTranslation } from '../i18n'

const testimonials = [
  {
    text: 'João reconstruiu nosso site e os resultados foram imediatos. Em 3 meses, passamos de 200 leads mensais para mais de 1.000. Ele não constrói sites — ele constrói motores de receita.',
    author: 'Marcus Chen',
    title: 'CEO, Empresa SaaS',
    result: 'Aumento significativo em leads'
  },
  {
    text: 'O sistema de automação de IA que ele construiu nos economizou tempo valioso em custos de suporte. Melhor investimento que fizemos. João pensa como dono de negócio, não como desenvolvedor.',
    author: 'Sarah Mitchell',
    title: 'Fundadora, Negócio de Serviços',
    result: 'Economia significativa em suporte'
  },
  {
    text: 'Nossa taxa de conversão melhorou consideravelmente. João executou testes em cada elemento do funil e otimizou sem parar. Os dados não mentem.',
    author: 'David Lopez',
    title: 'Diretor de Marketing, E-Commerce',
    result: 'Melhoria consistente na conversão'
  },
  {
    text: 'Trabalhar com João é diferente. Ele perguntou sobre nossas métricas de negócio antes de sugerir qualquer coisa. Construiu um site de agência que gera leads qualificados mensalmente.',
    author: 'Emma Rodriguez',
    title: 'Sócia, Agência de Marketing',
    result: 'Geração consistente de leads qualificados'
  },
  {
    text: 'O site que ele construiu é extremamente rápido e converte bem. Velocidade da página melhorou, taxa de rejeição reduzida. João entende a conexão entre velocidade e receita.',
    author: 'James Wilson',
    title: 'Dono de E-Commerce',
    result: 'Melhoria na performance e conversão'
  },
  {
    text: 'João é um operador focado em resultados. Toda decisão foi baseada em dados. Vimos melhoria nas métricas principais. Trabalho fenomenal.',
    author: 'Lisa Anderson',
    title: 'VP Operações, Startup de Tecnologia',
    result: 'Resultados mensuráveis alcançados'
  }
]

export default function Testimonials() {
  const { t } = useTranslation()

  const getTestimonialText = (index: number) => t(`testimonials.items.${index}.text`)
  const getTestimonialAuthor = (index: number) => t(`testimonials.items.${index}.author`)
  const getTestimonialTitle = (index: number) => t(`testimonials.items.${index}.title`)
  const getTestimonialResult = (index: number) => t(`testimonials.items.${index}.result`)

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('testimonials.heading')}</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              {t('testimonials.sub') || "Results-driven feedback from founders, CEOs, and business leaders who've worked with me."}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((_, index) => (
            <AnimateOnScroll key={index}>
              <div className="p-8 bg-slate-800 border border-slate-700 rounded-2xl hover:border-cyan-500 transition">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-cyan-400 text-cyan-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-300 mb-6 leading-relaxed italic">"{getTestimonialText(index)}"</p>

                {/* Author */}
                <div className="border-t border-slate-700 pt-4">
                  <p className="font-semibold mb-1">{getTestimonialAuthor(index)}</p>
                  <p className="text-slate-400 text-sm mb-3">{getTestimonialTitle(index)}</p>
                  <p className="text-cyan-400 font-semibold text-sm">{getTestimonialResult(index)}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
