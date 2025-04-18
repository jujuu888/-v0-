"use client"

import { useState } from "react"
import { Bot, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const sampleQuestions = [
  "ما هي أفضل الأماكن لزيارتها في الرياض؟",
  "أين يمكنني الاستمتاع بالطبيعة في أبها؟",
  "ما هي أفضل المطاعم في جدة؟",
  "كيف يمكنني الوصول إلى العلا من الرياض؟",
]

export function AiGuideSection() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "مرحباً! أنا المرشد السياحي الذكي. كيف يمكنني مساعدتك في رحلتك داخل المملكة العربية السعودية؟",
    },
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    setMessages([...messages, { role: "user", content: input }])

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "شكراً لسؤالك! يسعدني مساعدتك في التخطيط لرحلتك. هل ترغب في معرفة المزيد عن الوجهات السياحية أو الفعاليات أو الخدمات المتاحة؟",
        },
      ])
    }, 1000)

    setInput("")
  }

  const handleSampleQuestion = (question: string) => {
    setInput(question)
  }

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">المرشد السياحي الذكي</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            استفد من خدمة المرشد السياحي الذكي المدعوم بالذكاء الاصطناعي للحصول على توصيات مخصصة وإجابات فورية لجميع
            استفساراتك السياحية
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-primary/20">
            <CardHeader className="bg-muted/50">
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-6 w-6 text-primary" />
                المرشد السياحي الذكي
              </CardTitle>
              <CardDescription>اسأل عن أي شيء يتعلق بالسياحة في المملكة العربية السعودية</CardDescription>
            </CardHeader>
            <CardContent className="p-4 h-[300px] overflow-y-auto">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.role === "assistant" ? "justify-start" : "justify-end"}`}>
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.role === "assistant" ? "bg-muted text-foreground" : "bg-primary text-primary-foreground"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4 p-4 border-t">
              <div className="flex gap-2 w-full">
                <Input
                  placeholder="اكتب سؤالك هنا..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <Button onClick={handleSend} size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 w-full">
                {sampleQuestions.map((question, index) => (
                  <Button key={index} variant="outline" size="sm" onClick={() => handleSampleQuestion(question)}>
                    {question}
                  </Button>
                ))}
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
