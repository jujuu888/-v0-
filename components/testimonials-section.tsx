"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "أحمد محمد",
    location: "الرياض",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "استخدمت المرشد السياحي في رحلتي الأخيرة إلى العلا وكانت تجربة رائعة! المعلومات كانت دقيقة وشاملة، والتوصيات ساعدتني في اكتشاف أماكن لم أكن لأعرفها بدون هذا الدليل الرائع.",
  },
  {
    id: 2,
    name: "سارة عبدالله",
    location: "جدة",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "أفضل دليل سياحي استخدمته على الإطلاق! ساعدني في التخطيط لرحلتي إلى أبها بشكل مثالي. المعلومات عن المطاعم والأماكن السياحية كانت ممتازة والمرشد الذكي وفر علي الكثير من الوقت.",
  },
  {
    id: 3,
    name: "خالد العتيبي",
    location: "الدمام",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4,
    text: "استخدمت المرشد السياحي في رحلتي العائلية إلى الطائف وكان مفيداً جداً. المعلومات عن الأماكن السياحية والمطاعم ساعدتنا في قضاء وقت ممتع. أنصح به بشدة لكل من يخطط لرحلة داخل المملكة.",
  },
  {
    id: 4,
    name: "نورة الشمري",
    location: "تبوك",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "المرشد السياحي كان رفيقي المثالي في رحلتي لاستكشاف المنطقة الشرقية. المعلومات كانت دقيقة والتوصيات كانت رائعة. الخرائط التفاعلية سهلت علي التنقل بين المواقع السياحية.",
  },
  {
    id: 5,
    name: "فهد السعيد",
    location: "المدينة المنورة",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "تطبيق رائع ومفيد جداً! ساعدني في اكتشاف معالم الرياض بطريقة منظمة وسهلة. المعلومات عن المواقع التراثية كانت شاملة والصور كانت جميلة. أنصح به لكل مهتم بالسياحة في المملكة.",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const showTestimonials = () => {
    const startIndex = currentIndex
    const endIndex = Math.min(startIndex + 3, testimonials.length)
    return testimonials.slice(startIndex, endIndex)
  }

  const nextTestimonials = () => {
    if (currentIndex + 3 < testimonials.length) {
      setCurrentIndex(currentIndex + 3)
    } else {
      setCurrentIndex(0)
    }
  }

  const prevTestimonials = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3)
    } else {
      setCurrentIndex(Math.max(0, testimonials.length - 3))
    }
  }

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">آراء المستخدمين</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            اطلع على تجارب وآراء المسافرين الذين استخدموا المرشد السياحي في رحلاتهم داخل المملكة
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {showTestimonials().map((testimonial) => (
              <Card key={testimonial.id} className="bg-muted/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating ? "fill-amber-500 text-amber-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            <Button variant="outline" size="icon" onClick={prevTestimonials}>
              <ChevronRight className="h-4 w-4" />
            </Button>
            {[...Array(Math.ceil(testimonials.length / 3))].map((_, i) => (
              <Button
                key={i}
                variant={i === Math.floor(currentIndex / 3) ? "default" : "outline"}
                size="icon"
                className="h-8 w-8"
                onClick={() => setCurrentIndex(i * 3)}
              >
                {i + 1}
              </Button>
            ))}
            <Button variant="outline" size="icon" onClick={nextTestimonials}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
