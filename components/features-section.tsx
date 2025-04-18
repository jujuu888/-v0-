import { Bot, Calendar, Compass, Globe, Map, MessageSquare, ShieldCheck, Ticket, Utensils } from "lucide-react"

const features = [
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: "المرشد السياحي الذكي",
    description: "مرشد سياحي ذكي مدعوم بالذكاء الاصطناعي لمساعدتك في تخطيط رحلتك بشكل مثالي.",
  },
  {
    icon: <Map className="h-10 w-10 text-primary" />,
    title: "خرائط تفاعلية",
    description: "خرائط تفاعلية لجميع المدن والمواقع السياحية مع إمكانية تحديد المسارات وأوقات الوصول.",
  },
  {
    icon: <Calendar className="h-10 w-10 text-primary" />,
    title: "تقويم الفعاليات",
    description: "تقويم شامل لجميع الفعاليات والمهرجانات في المملكة مع إمكانية الحجز المباشر.",
  },
  {
    icon: <Compass className="h-10 w-10 text-primary" />,
    title: "جولات افتراضية",
    description: "استكشف المواقع السياحية والتراثية من خلال جولات افتراضية بتقنية 360 درجة.",
  },
  {
    icon: <Utensils className="h-10 w-10 text-primary" />,
    title: "دليل المطاعم",
    description: "دليل شامل لأفضل المطاعم والمقاهي في جميع مدن المملكة مع تقييمات الزوار.",
  },
  {
    icon: <Ticket className="h-10 w-10 text-primary" />,
    title: "حجز التذاكر",
    description: "حجز تذاكر الفعاليات والمتاحف والمواقع السياحية بسهولة وبأفضل الأسعار.",
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "دعم متعدد اللغات",
    description: "دعم للعديد من اللغات لتسهيل تجربة السياح من مختلف أنحاء العالم.",
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-primary" />,
    title: "تجارب المسافرين",
    description: "اطلع على تجارب وتقييمات المسافرين السابقين للاستفادة من خبراتهم.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "معلومات موثوقة",
    description: "جميع المعلومات موثقة ومحدثة بشكل دوري بالتعاون مع الجهات الرسمية.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">مميزات المرشد السياحي</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            نقدم لك مجموعة متكاملة من الخدمات والمميزات لمساعدتك في الاستمتاع برحلة سياحية مثالية في المملكة
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
