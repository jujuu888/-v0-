"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { SendIcon, Loader2Icon, BotIcon, UserIcon } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export function AiChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "مرحباً! أنا المرشد السياحي الذكي. كيف يمكنني مساعدتك في رحلتك إلى المملكة العربية السعودية؟",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Mock responses for the AI guide
  const mockResponses = [
    "يمكنك زيارة المسجد الحرام في مكة المكرمة والمسجد النبوي في المدينة المنورة، وهما من أهم المواقع الدينية في العالم الإسلامي.",
    "أفضل وقت لزيارة المملكة هو خلال فصل الشتاء (من نوفمبر إلى فبراير) حيث تكون درجات الحرارة معتدلة.",
    "تشتهر المملكة بالقهوة العربية والتمور والكبسة والمندي والمطبق، وهي أطباق تقليدية يجب تجربتها.",
    'يمكنك استخراج تأشيرة سياحية إلكترونية من خلال منصة وزارة الخارجية أو عبر تطبيق "روح السعودية".',
    "تضم المملكة 6 مواقع مدرجة على قائمة التراث العالمي لليونسكو، منها الدرعية التاريخية وواحة الأحساء.",
    "موسم الرياض هو أحد أكبر المواسم الترفيهية في المملكة، ويقام سنوياً بين شهري أكتوبر ومارس.",
  ]

  const handleSendMessage = () => {
    if (input.trim() === "") return

    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, newUserMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)]
      const newBotMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, newBotMessage])
      setIsLoading(false)
    }, 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="flex h-[600px] flex-col rounded-lg border bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <div className="border-b bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
          <BotIcon className="mr-2 h-5 w-5 text-emerald-500" />
          المرشد السياحي الذكي
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">اسأل أي سؤال عن السياحة في المملكة العربية السعودية</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  message.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
                }`}
              >
                <div className="flex items-center">
                  {message.sender === "bot" ? (
                    <BotIcon className="mr-2 h-4 w-4 text-emerald-500" />
                  ) : (
                    <UserIcon className="mr-2 h-4 w-4 text-white" />
                  )}
                  <span className="text-xs font-medium">{message.sender === "user" ? "أنت" : "المرشد الذكي"}</span>
                </div>
                <p className="mt-1 whitespace-pre-wrap">{message.text}</p>
                <p className="mt-1 text-right text-xs opacity-70">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-lg bg-gray-100 px-4 py-2 dark:bg-gray-800">
                <div className="flex items-center">
                  <Loader2Icon className="mr-2 h-4 w-4 animate-spin text-emerald-500" />
                  <span className="text-xs font-medium">المرشد الذكي يكتب...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="border-t p-4 dark:border-gray-800">
        <div className="flex items-center space-x-2 space-x-reverse">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="اكتب سؤالك هنا..."
            className="flex-1 resize-none rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            rows={2}
          />
          <button
            onClick={handleSendMessage}
            disabled={input.trim() === "" || isLoading}
            className="rounded-md bg-blue-500 p-2 text-white transition-colors hover:bg-blue-600 disabled:opacity-50"
          >
            <SendIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
