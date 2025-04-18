"use client"
import { Bot, Clock, Compass, Info, MessageSquare, Search, Send } from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// أسئلة شائعة مقترحة
const suggestedQuestions = [
  "ما هي أفضل الأماكن لزيارتها في الرياض؟",
  "أين يمكنني الاستمتاع بالطبيعة في أبها؟",
  "ما هي أفضل المطاعم في جدة؟",
  "كيف يمكنني الوصول إلى العلا من الرياض؟",
  "ما هي أبرز المواقع التراثية في المملكة؟",
  "متى يقام موسم الرياض؟",
  "ما هي أفضل الأوقات لزيارة المملكة؟",
  "ما هي متطلبات الحصول على تأشيرة سياحية للمملكة؟",
]

// أمثلة على الخطط السياحية
const travelPlans = [
  {
    title: "رحلة لمدة 3 أيام في الرياض",
    description: "خطة سياحية مثالية لاستكشاف معالم الرياض في عطلة نهاية الأسبوع.",
    days: [
      {
        day: "اليوم الأول",
        activities: [
          "زيارة الدرعية التاريخية",
          "الغداء في أحد مطاعم البجيري",
          "استكشاف مركز الملك عبد العزيز التاريخي",
          "العشاء في بوليفارد الرياض",
        ],
      },
    ],
  },
]

export default function AIGuidePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 border-b">
          <div className="container px-4 md:px-6">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-center md:text-left">
              اكتشف السعودية مع مرشدك السياحي الذكي
            </h1>
            <p className="max-w-[600px] text-lg text-muted-foreground mt-4 md:text-left">
              احصل على معلومات مفصلة وخطط سياحية مخصصة لتجربة لا تنسى في المملكة العربية السعودية.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="questions" className="w-[100%]">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="questions">أسئلة شائعة</TabsTrigger>
                <TabsTrigger value="plans">خطط سياحية</TabsTrigger>
                <TabsTrigger value="chat">محادثة مباشرة</TabsTrigger>
                <TabsTrigger value="info">معلومات مفيدة</TabsTrigger>
              </TabsList>
              <TabsContent value="questions" className="mt-8">
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {suggestedQuestions.map((question, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-sm font-medium">{question}</CardTitle>
                      </CardHeader>
                      <CardFooter className="justify-between">
                        <Button variant="outline">
                          <Search className="w-4 h-4 mr-2" />
                          ابحث
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="plans" className="mt-8">
                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {travelPlans.map((plan, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold">{plan.title}</CardTitle>
                        <CardDescription>{plan.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5">
                          {plan.days.map((day, dayIndex) => (
                            <li key={dayIndex}>
                              <strong>{day.day}:</strong>
                              <ul className="list-disc pl-5">
                                {day.activities.map((activity, activityIndex) => (
                                  <li key={activityIndex}>{activity}</li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter className="justify-between">
                        <Button variant="outline">
                          <Compass className="w-4 h-4 mr-2" />
                          استكشف الخطة
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="chat" className="mt-8">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-start space-x-2">
                    <Bot className="w-6 h-6 text-muted-foreground" />
                    <div className="rounded-md border bg-secondary p-4 text-sm">
                      مرحباً! كيف يمكنني مساعدتك في التخطيط لرحلتك في المملكة العربية السعودية؟
                    </div>
                  </div>
                  <div className="flex items-start space-x-2 self-end">
                    <div className="rounded-md border bg-primary p-4 text-sm">
                      أريد معرفة المزيد عن الأماكن السياحية في الرياض.
                    </div>
                    <MessageSquare className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Input type="text" placeholder="اكتب سؤالك هنا..." className="flex-1" />
                    <Button>
                      <Send className="w-4 h-4 mr-2" />
                      إرسال
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="info" className="mt-8">
                <div className="flex flex-col space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>معلومات التأشيرة السياحية</CardTitle>
                      <CardDescription>
                        تعرف على متطلبات الحصول على تأشيرة سياحية لزيارة المملكة العربية السعودية.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>للحصول على تأشيرة سياحية، يجب عليك تقديم طلب عبر الإنترنت وتقديم المستندات المطلوبة.</p>
                    </CardContent>
                    <CardFooter>
                      <Button>
                        <Info className="w-4 h-4 mr-2" />
                        المزيد من المعلومات
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>الطقس والمناخ</CardTitle>
                      <CardDescription>
                        تعرف على حالة الطقس والمناخ في مختلف مناطق المملكة العربية السعودية.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>يتميز مناخ المملكة العربية السعودية بأنه حار وجاف في فصل الصيف ومعتدل في فصل الشتاء.</p>
                    </CardContent>
                    <CardFooter>
                      <Button>
                        <Clock className="w-4 h-4 mr-2" />
                        توقعات الطقس
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
