"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // هنا يمكن إضافة كود لإرسال البريد الإلكتروني إلى قاعدة البيانات
      setIsSubmitted(true)
      setEmail("")
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }
  }

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">اشترك في نشرتنا البريدية</h2>
          <p className="mb-8">
            احصل على آخر العروض والفعاليات السياحية وأفضل الوجهات في المملكة مباشرة إلى بريدك الإلكتروني
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="البريد الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/20 border-white/30 placeholder:text-white/70 text-white"
              required
            />
            <Button type="submit" variant="secondary" className="shrink-0">
              {isSubmitted ? (
                <span className="flex items-center">
                  <Check className="mr-2 h-4 w-4" /> تم الاشتراك
                </span>
              ) : (
                "اشترك الآن"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
