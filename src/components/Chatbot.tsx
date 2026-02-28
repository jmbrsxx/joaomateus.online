import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User, ChevronDown } from 'lucide-react'
import { useTranslation } from '../i18n'

interface Message {
  id: number
  text: string
  isUser: boolean
}

interface ChatbotProps {
  className?: string
}

export default function Chatbot({ className = '' }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { t, lang } = useTranslation()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    // Add welcome message when chat opens for the first time
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: 1,
          text: t('chatbot.welcome'),
          isUser: false
        }
      ])
    }
  }, [isOpen, lang])

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()
    
    // Check for keywords in the message
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('custo') || lowerMessage.includes('costo') || lowerMessage.includes('kosten') || lowerMessage.includes('prix')) {
      return t('chatbot.responses.price')
    }
    if (lowerMessage.includes('project') || lowerMessage.includes('projeto') || lowerMessage.includes('proyecto') || lowerMessage.includes('projekt')) {
      return t('chatbot.responses.project')
    }
    if (lowerMessage.includes('time') || lowerMessage.includes('tempo') || lowerMessage.includes('tiempo') || lowerMessage.includes('dauer') || lowerMessage.includes('durée')) {
      return t('chatbot.responses.time')
    }
    if (lowerMessage.includes('ai') || lowerMessage.includes('automation') || lowerMessage.includes('automação') || lowerMessage.includes('automação') || lowerMessage.includes('automatizacion') || lowerMessage.includes('automatisierung') || lowerMessage.includes('automatisation')) {
      return t('chatbot.responses.ai')
    }
    if (lowerMessage.includes('website') || lowerMessage.includes('site') || lowerMessage.includes('web') || lowerMessage.includes('site web')) {
      return t('chatbot.responses.website')
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('contato') || lowerMessage.includes('contacto') || lowerMessage.includes('kontakt')) {
      return t('chatbot.responses.contact')
    }
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey') || lowerMessage.includes('olá') || lowerMessage.includes('hola') || lowerMessage.includes('hallo') || lowerMessage.includes('bonjour')) {
      return t('chatbot.responses.greeting')
    }
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks') || lowerMessage.includes('obrigado') || lowerMessage.includes('gracias') || lowerMessage.includes('danke') || lowerMessage.includes('merci')) {
      return t('chatbot.responses.thanks')
    }
    
    return t('chatbot.responses.default')
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isUser: true
    }
    setMessages(prev => [...prev, userMessage])
    setInputValue('')

    // Simulate bot typing
    setIsTyping(true)
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: getBotResponse(inputValue),
        isUser: false
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  const quickQuestions = [
    t('chatbot.quickQuestions.price'),
    t('chatbot.quickQuestions.time'),
    t('chatbot.quickQuestions.projects'),
    t('chatbot.quickQuestions.contact')
  ]

  const handleQuickQuestion = (question: string) => {
    setInputValue(question)
    const userMessage: Message = {
      id: Date.now(),
      text: question,
      isUser: true
    }
    setMessages(prev => [...prev, userMessage])
    
    setIsTyping(true)
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: getBotResponse(question),
        isUser: false
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1000)
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-96 max-w-[calc(100vw-3rem)] bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-600 to-cyan-500 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-white font-semibold">{t('chatbot.title')}</h3>
                <p className="text-white/80 text-xs">{t('chatbot.subtitle')}</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition"
            >
              <ChevronDown size={24} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-slate-900">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.isUser
                      ? 'bg-cyan-600 text-white rounded-br-md'
                      : 'bg-slate-700 text-slate-100 rounded-bl-md'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {!message.isUser && <Bot size={16} className="text-cyan-400 mt-1 flex-shrink-0" />}
                    {message.isUser && <User size={16} className="text-white/80 mt-1 flex-shrink-0" />}
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-700 rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length <= 2 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-slate-400 mb-2">{t('chatbot.quickQuestions.label')}</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="text-xs bg-slate-700 hover:bg-cyan-600 text-slate-200 hover:text-white px-3 py-1.5 rounded-full transition"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 bg-slate-800 border-t border-slate-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t('chatbot.placeholder')}
                className="flex-1 bg-slate-700 border border-slate-600 text-white px-4 py-2 rounded-full text-sm focus:outline-none focus:border-cyan-500 placeholder-slate-400"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-600 disabled:cursor-not-allowed text-white p-2 rounded-full transition"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 bg-gradient-to-r from-cyan-600 to-cyan-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'rotate-0' : 'hover:scale-110'
        }`}
      >
        {isOpen ? (
          <X className="text-white" size={24} />
        ) : (
          <MessageCircle className="text-white" size={24} />
        )}
      </button>
    </div>
  )
}
