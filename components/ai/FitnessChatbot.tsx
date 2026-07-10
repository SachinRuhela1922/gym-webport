'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, MessageCircle } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export default function FitnessChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your FitFlow fitness coach. I'm here to help with workout advice, nutrition guidance, motivation, and more. What can I help you with today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setLoading(true)

    try {
      const response = await fetch('/api/ai/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: messages.map((m) => ({
            role: m.sender === 'user' ? 'user' : 'assistant',
            content: m.text,
          })),
          context: 'User is asking for fitness coaching and support',
        }),
      })

      if (!response.ok) throw new Error('Failed to get response')

      const reader = response.body?.getReader()
      if (!reader) throw new Error('No response body')

      const decoder = new TextDecoder()
      let botMessage = ''

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: '',
        sender: 'bot',
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMsg])

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value)
        botMessage += chunk

        setMessages((prev) =>
          prev.map((m) => (m.id === botMsg.id ? { ...m, text: botMessage } : m))
        )
      }
    } catch (error) {
      console.error('Error:', error)
      const errorMsg: Message = {
        id: (Date.now() + 2).toString(),
        text: "Sorry, I encountered an error. Please try again.",
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMsg])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <MessageCircle size={28} className="text-primary" />
        Fitness Coach ChatBot
      </h2>

      <div className="glass p-6 h-[600px] flex flex-col">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto mb-6 space-y-4 pb-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  msg.sender === 'user'
                    ? 'bg-primary text-primary-foreground rounded-br-none'
                    : 'bg-white/10 text-foreground rounded-bl-none'
                }`}
              >
                <p className="text-sm leading-relaxed">{msg.text}</p>
                <span className="text-xs opacity-70 mt-1 block">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={sendMessage} className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything about fitness..."
            disabled={loading}
            className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground placeholder:text-foreground/50 text-sm disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="btn-primary px-4 py-2 h-full disabled:opacity-50 flex items-center justify-center"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  )
}
