import Image from "next/image"
import Link from "next/link"
import { Calendar, ChevronLeft, MapPin, Star, ThumbsUp, Ticket } from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SiteFooter } from "@/components/site-footer"

// بيانات الفعاليات (في التطبيق الحقيقي ستكون من قاعدة بيانات)
const eventsData = {
  "riyadh-season": {
    id: "riyadh-season",
    name: "موسم الرياض",
    nameEn: "Riyadh Season",
    description: "أكبر موسم ترفيهي في المملكة، يضم مجموعة متنوعة من الفعاليات والعروض الترفيهية والثقافية.",
    longDescription: `
      موسم الرياض هو أحد أكبر المواسم الترفيهية في المملكة العربية السعودية والمنطقة، ويقام سنوياً في العاصمة الرياض.
      
      يهدف موسم الرياض إلى تحويل مدينة الرياض إلى وجهة ترفيهية عالمية، وتعزيز مكانة المملكة على خريطة السياحة العالمية، وتحسين جودة الحياة للمواطنين والمقيمين، وذلك تماشياً مع رؤية المملكة 2030.
      
      يضم الموسم مجموعة متنوعة من الفعاليات والأنشطة التي تناسب مختلف الأذواق والفئات العمرية، بما في ذلك الحفلات الموسيقية، والعروض المسرحية، والمعارض الفنية، والفعاليات الرياضية، ومناطق الألعاب والترفيه، والمطاعم والمقاهي المتنوعة.
      
      يمتد موسم الرياض عادة لعدة أشهر، من أكتوبر إلى مارس، ويستقطب ملايين الزوار من داخل المملكة وخارجها، مما يساهم في تنشيط الحركة السياحية والاقتصادية في المدينة.
      
      يتميز موسم الرياض بتنوع مناطقه وفعالياته، حيث يضم العديد من المناطق المختلفة مثل بوليفارد رياض سيتي، وونتر وندرلاند، والرياض فرونت، وغيرها، وكل منطقة تقدم تجربة فريدة ومميزة للزوار.
    `,
    image: "/placeholder.svg?height=600&width=800",
    location: "الرياض",
    date: "أكتوبر 2025 - مارس 2026",
    time: "مواعيد مختلفة حسب الفعالية",
    organizer: "الهيئة العامة للترفيه",
    category: "موسم",
    attendees: "+10 مليون",
    ticketPrice: "تبدأ من 50 ريال (حسب الفعالية)",
    website: "www.riyadhseason.com",
    tags: ["ترفيه", "ثقافة", "تسوق", "رياضة", "عروض", "مطاعم", "حفلات"],
    coordinates: {
      lat: 24.7136,
      lng: 46.6753,
    },
    gallery: [
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "بوليفارد رياض سيتي",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "ونتر وندرلاند",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "الرياض فرونت",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "حفل موسيقي",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "معرض فني",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "فعالية رياضية",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "منطقة المطاعم",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "عرض مسرحي",
      },
    ],
    zones: [
      {
        name: "بوليفارد رياض سيتي",
        description: "وجهة ترفيهية متكاملة تضم مطاعم ومقاهي ومناطق ترفيهية ومسرح للعروض الحية.",
        image: "/placeholder.svg?height=400&width=600",
        activities: ["مطاعم عالمية", "عروض حية", "ألعاب ترفيهية", "متاجر تسوق"],
      },
      {
        name: "ونتر وندرلاند",
        description: "مدينة ألعاب ضخمة تضم أكثر من 100 لعبة وتجربة ترفيهية مناسبة لجميع الأعمار.",
        image: "/placeholder.svg?height=400&width=600",
        activities: ["ألعاب ترفيهية", "عروض ترفيهية", "مطاعم ومقاهي", "فعاليات للأطفال"],
      },
      {
        name: "الرياض فرونت",
        description: "منطقة مخصصة للفعاليات والحفلات الموسيقية الكبرى والعروض الحية.",
        image: "/placeholder.svg?height=400&width=600",
        activities: ["حفلات موسيقية", "عروض مسرحية", "فعاليات ثقافية", "عروض فنية"],
      },
      {
        name: "المربع",
        description: "منطقة مستوحاة من التراث السعودي، تقدم تجارب ثقافية وفنية وتراثية.",
        image: "/placeholder.svg?height=400&width=600",
        activities: ["معارض فنية", "ورش عمل", "عروض تراثية", "مأكولات تقليدية"],
      },
    ],
    events: [
      {
        name: "حفل افتتاح موسم الرياض",
        date: "1 أكتوبر 2025",
        time: "8:00 م",
        location: "الرياض فرونت",
        description: "حفل افتتاح ضخم يتضمن عروضاً موسيقية وفنية وألعاب نارية.",
        ticketPrice: "من 200 ريال",
      },
      {
        name: "مهرجان الأفلام السعودي",
        date: "15-25 أكتوبر 2025",
        time: "مواعيد مختلفة",
        location: "بوليفارد رياض سيتي",
        description: "مهرجان سينمائي يعرض أفلاماً سعودية وعربية وعالمية، مع حضور صناع الأفلام والنجوم.",
        ticketPrice: "من 50 ريال",
      },
      {
        name: "معرض الرياض للسيارات",
        date: "1-10 نوفمبر 2025",
        time: "4:00 م - 12:00 ص",
        location: "مركز الرياض الدولي للمعارض",
        description: "معرض للسيارات الفاخرة والكلاسيكية والرياضية، مع عروض وفعاليات مصاحبة.",
        ticketPrice: "من 75 ريال",
      },
      {
        name: "بطولة WWE في الرياض",
        date: "20 نوفمبر 2025",
        time: "8:00 م",
        location: "ملعب الملك فهد الدولي",
        description: "عرض مصارعة عالمي بمشاركة أبرز نجوم WWE العالميين.",
        ticketPrice: "من 150 ريال",
      },
      {
        name: "مهرجان الطعام العالمي",
        date: "1-15 ديسمبر 2025",
        time: "4:00 م - 1:00 ص",
        location: "الرياض فرونت",
        description: "مهرجان يضم أشهى المأكولات العالمية والمحلية مع عروض طهي حية.",
        ticketPrice: "من 50 ريال",
      },
    ],
    faqs: [
      {
        question: "متى يبدأ موسم الرياض 2025؟",
        answer: "يبدأ موسم الرياض 2025 في شهر أكتوبر 2025 ويستمر حتى مارس 2026.",
      },
      {
        question: "كيف يمكنني شراء تذاكر فعاليات موسم الرياض؟",
        answer: "يمكن شراء التذاكر من خلال الموقع الرسمي لموسم الرياض أو تطبيق موسم الرياض على الهواتف الذكية.",
      },
      {
        question: "هل هناك فعاليات مجانية في موسم الرياض؟",
        answer: "نعم، هناك العديد من الفعاليات والمناطق المجانية في موسم الرياض، مثل بعض المعارض والفعاليات الثقافية.",
      },
      {
        question: "هل يمكن الوصول إلى مناطق موسم الرياض بوسائل النقل العام؟",
        answer:
          "نعم، يتم توفير خدمات نقل خاصة بين مناطق موسم الرياض، بالإضافة إلى إمكانية استخدام وسائل النقل العام والتطبيقات الذكية.",
      },
      {
        question: "هل تتوفر خيارات طعام متنوعة في موسم الرياض؟",
        answer: "نعم، يضم موسم الرياض مجموعة واسعة من المطاعم والمقاهي التي تقدم مأكولات محلية وعالمية متنوعة.",
      },
    ],
    reviews: [
      {
        id: "review1",
        user: {
          name: "أحمد محمد",
          avatar: "/placeholder.svg?height=100&width=100",
        },
        rating: 5,
        date: "مارس 2025",
        comment:
          "تجربة رائعة! استمتعت كثيراً بفعاليات موسم الرياض العام الماضي، خاصة منطقة بوليفارد رياض سيتي والحفلات الموسيقية. التنظيم كان ممتازاً والخيارات متنوعة لجميع أفراد العائلة.",
      },
      {
        id: "review2",
        user: {
          name: "سارة عبدالله",
          avatar: "/placeholder.svg?height=100&width=100",
        },
        rating: 4,
        date: "فبراير 2025",
        comment:
          "موسم الرياض من أفضل الفعاليات الترفيهية في المملكة. قضيت وقتاً ممتعاً مع عائلتي في ونتر وندرلاند. التذاكر كانت بأسعار معقولة والفعاليات متنوعة.",
      },
      {
        id: "review3",
        user: {
          name: "خالد العتيبي",
          avatar: "/placeholder.svg?height=100&width=100",
        },
        rating: 5,
        date: "يناير 2025",
        comment:
          "زرت موسم الرياض عدة مرات وفي كل مرة أكتشف فعاليات جديدة ومميزة. المطاعم رائعة والعروض الحية مبهرة. أنصح الجميع بزيارة موسم الرياض والاستمتاع بالأجواء الرائعة.",
      },
    ],
    averageRating: 4.8,
    totalReviews: 342,
  },
  "winter-tantora": {
    id: "winter-tantora",
    name: "شتاء طنطورة",
    nameEn: "Winter at Tantora",
    description: "مهرجان ثقافي وفني يقام في العلا، يجمع بين الموسيقى والفن والتراث في أجواء ساحرة.",
    longDescription: `
      شتاء طنطورة هو مهرجان ثقافي وفني يقام سنوياً في محافظة العلا بالمملكة العربية السعودية، ويعتبر أحد أبرز الفعاليات الثقافية في المملكة.
      
      يستمد المهرجان اسمه من "طنطورة"، وهي ساعة شمسية قديمة كانت تستخدم في العلا لتحديد بداية موسم الشتاء وموسم الزراعة.
      
      يقام المهرجان في موقع استثنائي يجمع بين جمال الطبيعة وعراقة التاريخ، حيث تحتضن العلا العديد من المواقع الأثرية المهمة مثل مدائن صالح (الحجر) وقرية العلا القديمة.
      
      يضم المهرجان مجموعة متنوعة من الفعاليات والأنشطة، بما في ذلك الحفلات الموسيقية العالمية، والعروض الفنية، والمعارض الثقافية، والتجارب الطهي، والرحلات الاستكشافية، وورش العمل التفاعلية.
      
      يهدف مهرجان شتاء طنطورة إلى تسليط الضوء على التراث الثقافي الغني للعلا، وتعزيز مكانتها كوجهة سياحية وثقافية عالمية، وذلك ضمن مبادرات رؤية المملكة 2030.
    `,
    image: "/placeholder.svg?height=600&width=800",
    location: "العلا",
    date: "ديسمبر 2025 - يناير 2026",
    time: "مواعيد مختلفة حسب الفعالية",
    organizer: "الهيئة الملكية لمحافظة العلا",
    category: "مهرجان",
    attendees: "+100 ألف",
    ticketPrice: "تبدأ من 100 ريال (حسب الفعالية)",
    website: "www.experiencealula.com",
    tags: ["ثقافة", "موسيقى", "تراث", "فنون", "طبيعة", "تاريخ"],
    coordinates: {
      lat: 26.6088,
      lng: 37.9154,
    },
    gallery: [
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "مسرح مرايا",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "حفل موسيقي",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "العلا القديمة",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "مدائن صالح",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "تجربة طهي",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "رحلة بالمنطاد",
      },
    ],
    zones: [
      {
        name: "مسرح مرايا",
        description: "أكبر مبنى مغطى بالمرايا في العالم، يستضيف الحفلات الموسيقية والعروض الفنية.",
        image: "/placeholder.svg?height=400&width=600",
        activities: ["حفلات موسيقية", "عروض فنية", "أمسيات ثقافية"],
      },
      {
        name: "العلا القديمة",
        description: "بلدة تاريخية تعود للقرن الثالث عشر، تم ترميمها وإحياؤها لاستضافة فعاليات ثقافية وفنية.",
        image: "/placeholder.svg?height=400&width=600",
        activities: ["جولات تاريخية", "معارض فنية", "ورش حرفية", "تجارب طهي"],
      },
      {
        name: "وادي عشار",
        description: "وادي طبيعي خلاب يستضيف العديد من الفعاليات الخارجية والتجارب الطبيعية.",
        image: "/placeholder.svg?height=400&width=600",
        activities: ["رحلات المنطاد", "تسلق الجبال", "التخييم", "مراقبة النجوم"],
      },
    ],
    events: [
      {
        name: "حفل افتتاح شتاء طنطورة",
        date: "15 ديسمبر 2025",
        time: "8:00 م",
        location: "مسرح مرايا",
        description: "حفل افتتاح يتضمن عروضاً موسيقية وفنية تجمع بين التراث المحلي والفن العالمي.",
        ticketPrice: "من 300 ريال",
      },
      {
        name: "أمسية موسيقية عالمية",
        date: "22 ديسمبر 2025",
        time: "8:30 م",
        location: "مسرح مرايا",
        description: "حفل موسيقي لأحد أشهر الفنانين العالميين في أجواء ساحرة.",
        ticketPrice: "من 500 ريال",
      },
      {
        name: "مهرجان الطهي",
        date: "25-30 ديسمبر 2025",
        time: "6:00 م - 11:00 م",
        location: "العلا القديمة",
        description: "تجارب طهي فريدة مع طهاة عالميين، تقدم أطباقاً مستوحاة من المكونات المحلية.",
        ticketPrice: "من 150 ريال",
      },
      {
        name: "رحلات المنطاد",
        date: "طوال فترة المهرجان",
        time: "الفترة الصباحية",
        location: "وادي عشار",
        description: "رحلات بالمنطاد فوق المناظر الطبيعية الخلابة للعلا.",
        ticketPrice: "من 400 ريال",
      },
    ],
    faqs: [
      {
        question: "متى يقام مهرجان شتاء طنطورة 2025؟",
        answer: "يقام مهرجان شتاء طنطورة من ديسمبر 2025 إلى يناير 2026 في محافظة العلا.",
      },
      {
        question: "كيف يمكنني الوصول إلى العلا؟",
        answer: "يمكن الوصول إلى العلا عبر مطار العلا الدولي، أو بالسيارة من المدن القريبة مثل المدينة المنورة وتبوك.",
      },
      {
        question: "هل تتوفر خيارات إقامة في العلا خلال المهرجان؟",
        answer: "نعم، تتوفر مجموعة متنوعة من خيارات الإقامة، من الفنادق الفاخرة إلى المخيمات الصحراوية الفاخرة.",
      },
      {
        question: "هل المهرجان مناسب للعائلات؟",
        answer: "نعم، يوفر المهرجان فعاليات وأنشطة متنوعة تناسب جميع أفراد العائلة من مختلف الأعمار.",
      },
    ],
    reviews: [
      {
        id: "review1",
        user: {
          name: "محمد السالم",
          avatar: "/placeholder.svg?height=100&width=100",
        },
        rating: 5,
        date: "فبراير 2025",
        comment:
          "تجربة لا تنسى! المكان ساحر والفعاليات راقية جداً. حضرت حفلاً موسيقياً في مسرح مرايا وكانت التجربة استثنائية. أنصح بشدة بزيارة شتاء طنطورة.",
      },
      {
        id: "review2",
        user: {
          name: "نورة الشمري",
          avatar: "/placeholder.svg?height=100&width=100",
        },
        rating: 5,
        date: "يناير 2025",
        comment:
          "من أجمل المهرجانات التي حضرتها. المزيج بين الطبيعة والتاريخ والفن يجعل التجربة فريدة. رحلة المنطاد كانت رائعة والإطلالة على العلا لا توصف.",
      },
    ],
    averageRating: 4.9,
    totalReviews: 187,
  },
}

export default function EventPage({ params }: { params: { eventId: string } }) {
  const eventId = params.eventId
  const event = eventsData[eventId as keyof typeof eventsData]

  if (!event) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">عذراً، لم يتم العثور على الفعالية</h1>
        <Button asChild className="mt-4">
          <Link href="/events">العودة إلى قائمة الفعاليات</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
            <Image src={event.image || "/placeholder.svg"} alt={event.name} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>
          <div className="container absolute bottom-0 left-0 right-0 pb-8">
            <div className="flex flex-col gap-2 text-white">
              <div className="flex items-center gap-2 text-sm">
                <Link href="/events" className="hover:underline">
                  الفعاليات
                </Link>
                <ChevronLeft className="h-4 w-4" />
                <span>{event.name}</span>
              </div>
              <h1 className="text-4xl font-bold">{event.name}</h1>
              <p className="max-w-3xl text-white/90">{event.description}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {event.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-white/20 text-white">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Event Info */}
        <section className="border-b py-8">
          <div className="container">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-center gap-3">
                <Calendar className="h-6 w-6 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">التاريخ</div>
                  <div className="font-medium">{event.date}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">الموقع</div>
                  <div className="font-medium">{event.location}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Ticket className="h-6 w-6 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">التذاكر</div>
                  <div className="font-medium">{event.ticketPrice}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ThumbsUp className="h-6 w-6 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">التقييم</div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                    <span className="font-medium">{event.averageRating}</span>
                    <span className="text-sm text-muted-foreground">({event.totalReviews} تقييم)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container">
            <Tabs defaultValue="overview" className="space-y-8">
              <TabsList className="h-auto w-full justify-start rounded-none border-b p-0">
                <div className="container flex overflow-x-auto">
                  <TabsTrigger
                    value="overview"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
                  >
                    نظرة عامة
                  </TabsTrigger>
                  <TabsTrigger
                    value="program"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
                  >
                    البرنامج
                  </TabsTrigger>
                  <TabsTrigger
                    value="zones"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
                  >
                    المناطق
                  </TabsTrigger>
                  <TabsTrigger
                    value="faq"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
                  >
                    الأسئلة الشائعة
                  </TabsTrigger>
                  <TabsTrigger
                    value="reviews"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
                  >
                    التقييمات
                  </TabsTrigger>
                </div>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold">عن {event.name}</h2>
                  <div className="whitespace-pre-line">{event.longDescription}</div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold">معرض الصور</h3>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                    {event.gallery.map((image, index) => (
                      <div key={index} className="relative aspect-square overflow-hidden rounded-md">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold">معلومات إضافية</h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="rounded-lg border p-4">
                      <div className="text-sm text-muted-foreground">المنظم</div>
                      <div className="font-medium">{event.organizer}</div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="text-sm text-muted-foreground">الفئة</div>
                      <div className="font-medium">{event.category}</div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="text-sm text-muted-foreground">عدد الحضور المتوقع</div>
                      <div className="font-medium">{event.attendees}</div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="text-sm text-muted-foreground">الموقع الإلكتروني</div>
                      <div className="font-medium">
                        <a
                          href={`https://${event.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {event.website}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="program" className="space-y-6">
                <h2 className="text-2xl font-bold">برنامج الفعاليات</h2>
                <div className="space-y-4">
                  {event.events.map((eventItem, index) => (
                    <div key={index} className="rounded-lg border p-4">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-bold">{eventItem.name}</h3>
                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>{eventItem.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>{eventItem.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Ticket className="h-4 w-4 text-primary" />
                            <span>{eventItem.ticketPrice}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground">{eventItem.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="zones" className="space-y-6">
                <h2 className="text-2xl font-bold">مناطق الفعالية</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {event.zones.map((zone, index) => (
                    <div key={index} className="overflow-hidden rounded-lg border">
                      <div className="relative h-48 w-full">
                        <Image src={zone.image || "/placeholder.svg"} alt={zone.name} fill className="object-cover" />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold">{zone.name}</h3>
                        <p className="mb-3 text-muted-foreground">{zone.description}</p>
                        <div>
                          <h4 className="mb-2 font-medium">الأنشطة:</h4>
                          <div className="flex flex-wrap gap-2">
                            {zone.activities.map((activity, actIndex) => (
                              <Badge key={actIndex} variant="outline">
                                {activity}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="faq" className="space-y-6">
                <h2 className="text-2xl font-bold">الأسئلة الشائعة</h2>
                <div className="space-y-4">
                  {event.faqs.map((faq, index) => (
                    <div key={index} className="rounded-lg border p-4">
                      <h3 className="mb-2 text-lg font-bold">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">تقييمات الزوار</h2>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                      <span className="ml-1 font-bold">{event.averageRating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({event.totalReviews} تقييم)</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {event.reviews.map((review) => (
                    <div key={review.id} className="rounded-lg border p-4">
                      <div className="flex items-start gap-3">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image
                            src={review.user.avatar || "/placeholder.svg"}
                            alt={review.user.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-bold">{review.user.name}</h3>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                              <span>{review.rating}</span>
                            </div>
                          </div>
                          <div className="text-sm text-muted-foreground">{review.date}</div>
                          <p className="mt-2">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center">
                  <Button>عرض المزيد من التقييمات</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-12 text-primary-foreground">
          <div className="container text-center">
            <h2 className="mb-4 text-3xl font-bold">احجز تذكرتك الآن</h2>
            <p className="mx-auto mb-6 max-w-2xl">
              لا تفوت فرصة حضور {event.name}! احجز تذكرتك الآن واستمتع بتجربة فريدة من نوعها.
            </p>
            <Button size="lg" variant="secondary">
              شراء التذاكر
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
