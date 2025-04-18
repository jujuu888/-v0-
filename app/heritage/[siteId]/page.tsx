import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Clock, Globe, History, MapPin, Star, ThumbsUp } from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CityGallery } from "@/components/city-gallery"

// بيانات المواقع التراثية (في التطبيق الحقيقي ستكون من قاعدة بيانات)
const heritageSites = {
  "madain-saleh": {
    id: "madain-saleh",
    name: "مدائن صالح",
    nameEn: "Madain Saleh",
    description: "أول موقع سعودي مسجل في قائمة التراث العالمي لليونسكو، يضم مقابر نبطية منحوتة في الصخر.",
    longDescription: `
      مدائن صالح أو الحِجر هي موقع أثري يقع في محافظة العلا شمال غرب المملكة العربية السعودية. تعتبر ثاني أكبر مستوطنة للحضارة النبطية بعد مدينة البتراء في الأردن.
      
      تم تسجيل مدائن صالح كأول موقع سعودي في قائمة التراث العالمي لليونسكو في عام 2008م، وذلك لقيمتها التاريخية والثقافية الاستثنائية.
      
      تضم مدائن صالح أكثر من 130 مقبرة منحوتة في الصخر، تتميز بواجهاتها المزخرفة بدقة متناهية. كما تحتوي على آبار ونقوش وبقايا مستوطنات تعود للحضارة النبطية.
      
      يعود تاريخ المدينة إلى القرن الأول قبل الميلاد، حيث كانت محطة تجارية مهمة على طريق البخور والتوابل الذي كان يربط جنوب الجزيرة العربية ببلاد الشام ومصر.
      
      تعكس العمارة في مدائن صالح مزيجاً فريداً من التأثيرات المعمارية المصرية والآشورية واليونانية والرومانية، مما يجعلها شاهداً على التبادل الثقافي في المنطقة.
    `,
    image: "/placeholder.svg?height=600&width=800",
    location: "العلا",
    region: "المنطقة الشمالية الغربية",
    period: "القرن الأول قبل الميلاد",
    unescoYear: "2008",
    area: "15 كم²",
    visitingHours: "8:00 ص - 6:00 م",
    entryFees: "جزء من تذكرة العلا",
    tags: ["تراث عالمي", "آثار", "نبطي", "منحوتات صخرية", "تاريخي"],
    coordinates: {
      lat: 26.7917,
      lng: 37.9542,
    },
    gallery: [
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "واجهة قصر الفريد",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "مقابر منحوتة في الصخر",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "نقوش نبطية",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "جبل إثلب",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "الديوان",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "منظر بانورامي للموقع",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "تكوينات صخرية",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "غروب الشمس في مدائن صالح",
      },
    ],
    keyFeatures: [
      {
        title: "قصر الفريد",
        description: "أشهر المقابر في مدائن صالح، يتميز بواجهته المنحوتة في صخرة منفردة.",
      },
      {
        title: "جبل إثلب",
        description: "تكوين صخري ضخم يضم العديد من النقوش والكتابات النبطية.",
      },
      {
        title: "الديوان",
        description: "غرفة منحوتة في الصخر كانت تستخدم للاجتماعات الدينية أو السياسية.",
      },
      {
        title: "محطة سكة حديد الحجاز",
        description: "محطة تاريخية لسكة حديد الحجاز التي بنيت في العهد العثماني.",
      },
      {
        title: "خزانات المياه",
        description: "نظام متطور لجمع وتخزين مياه الأمطار يعكس براعة النبطيين في إدارة الموارد المائية.",
      },
    ],
    historicalPeriods: [
      {
        title: "الفترة النبطية",
        years: "القرن الأول قبل الميلاد - القرن الأول الميلادي",
        description: "ازدهرت المدينة كمركز تجاري مهم على طريق البخور والتوابل.",
      },
      {
        title: "الفترة الرومانية",
        years: "القرن الأول - القرن الثالث الميلادي",
        description: "ضم الإمبراطورية الرومانية للمنطقة وتراجع أهمية المدينة التجارية.",
      },
      {
        title: "الفترة الإسلامية المبكرة",
        years: "القرن السابع الميلادي",
        description: "مرور النبي محمد ﷺ بالمنطقة خلال غزوة تبوك وتحذيره من دخولها.",
      },
      {
        title: "العصر الحديث",
        years: "2008 - الحاضر",
        description: "تسجيل الموقع في قائمة التراث العالمي وتطويره كوجهة سياحية عالمية.",
      },
    ],
    nearbyAttractions: [
      {
        id: "al-ula-old-town",
        name: "بلدة العلا القديمة",
        description: "مدينة تاريخية مبنية من الطين، تضم متاهة من الشوارع الضيقة والمنازل المتلاصقة.",
        image: "/placeholder.svg?height=400&width=600",
        distance: "22 كم",
      },
      {
        id: "elephant-rock",
        name: "صخرة الفيل",
        description: "تكوين صخري طبيعي يشبه الفيل، يعتبر من أشهر المعالم الطبيعية في العلا.",
        image: "/placeholder.svg?height=400&width=600",
        distance: "12 كم",
      },
      {
        id: "hegra-museum",
        name: "متحف الحجر",
        description: "متحف يعرض تاريخ المنطقة وآثارها، ويقدم معلومات تفصيلية عن الحضارة النبطية.",
        image: "/placeholder.svg?height=400&width=600",
        distance: "5 كم",
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
          "تجربة لا تنسى! المكان مذهل ويأخذك في رحلة عبر الزمن. النقوش والمقابر المنحوتة في الصخر تعكس إبداع الحضارة النبطية. أنصح بزيارة المكان مع مرشد سياحي للاستفادة القصوى.",
      },
      {
        id: "review2",
        user: {
          name: "سارة عبدالله",
          avatar: "/placeholder.svg?height=100&width=100",
        },
        rating: 4,
        date: "فبراير 2025",
        comment: "موقع تاريخي رائع، يستحق الزيارة. المناظر الطبيعية خلابة والآثار مدهشة. التنظيم جيد والمرافق متوفرة.",
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
          "من أجمل المواقع التاريخية التي زرتها. قصر الفريد مذهل والنقوش النبطية رائعة. أنصح بالزيارة في فصل الشتاء لتجنب الحرارة المرتفعة.",
      },
    ],
    averageRating: 4.8,
    totalReviews: 156,
  },
  diriyah: {
    id: "diriyah",
    name: "الدرعية التاريخية",
    nameEn: "Diriyah",
    description: "العاصمة الأولى للدولة السعودية، تضم حي الطريف التاريخي المسجل في قائمة التراث العالمي.",
    longDescription: `
      الدرعية التاريخية هي موقع تراثي يقع على ضفاف وادي حنيفة شمال غرب مدينة الرياض. تعتبر الدرعية المكان الذي انطلقت منه الدولة السعودية الأولى في عام 1744م، حيث كانت عاصمتها الأولى.
      
      تم تسجيل حي الطريف، وهو الحي التاريخي في الدرعية، في قائمة التراث العالمي لليونسكو في عام 2010م، وذلك لقيمته التاريخية والثقافية المتميزة.
      
      تتميز الدرعية بعمارتها النجدية التقليدية المبنية من الطين، والتي تعكس أسلوب البناء المحلي المتكيف مع البيئة الصحراوية.
      
      تضم الدرعية العديد من المباني التاريخية المهمة مثل قصر سلوى، ومسجد الإمام محمد بن سعود، وقصر نصر، بالإضافة إلى الأسواق التقليدية والمنازل السكنية.
      
      تشهد الدرعية حالياً مشروع تطوير ضخم ضمن رؤية المملكة 2030، يهدف إلى تحويلها إلى وجهة سياحية وثقافية عالمية مع الحفاظ على طابعها التاريخي الأصيل.
    `,
    image: "/placeholder.svg?height=600&width=800",
    location: "الرياض",
    region: "المنطقة الوسطى",
    period: "القرن الثامن عشر",
    unescoYear: "2010",
    area: "7 كم²",
    visitingHours: "9:00 ص - 9:00 م",
    entryFees: "50 ريال",
    tags: ["تراث عالمي", "عمارة طينية", "تاريخي", "عاصمة تاريخية", "نجدي"],
    coordinates: {
      lat: 24.7423,
      lng: 46.5762,
    },
    gallery: [
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "حي الطريف",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "قصر سلوى",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "مسجد الإمام محمد بن سعود",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "وادي حنيفة",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "بوابة الدرعية",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "منظر عام للدرعية",
      },
    ],
    keyFeatures: [
      {
        title: "حي الطريف",
        description: "الحي التاريخي الذي يضم قصور وبيوت آل سعود التاريخية.",
      },
      {
        title: "قصر سلوى",
        description: "أحد أهم القصور التاريخية في الدرعية، كان مقر الحكم في الدولة السعودية الأولى.",
      },
      {
        title: "مسجد الإمام محمد بن سعود",
        description: "المسجد التاريخي الذي شهد انطلاق الدعوة الإصلاحية للشيخ محمد بن عبد الوهاب.",
      },
      {
        title: "بوابة الطريف",
        description: "البوابة الرئيسية لحي الطريف التاريخي، تعكس فن العمارة النجدية التقليدية.",
      },
      {
        title: "وادي حنيفة",
        description: "الوادي الذي تقع على ضفافه الدرعية، ويعتبر شريان الحياة للمنطقة.",
      },
    ],
    historicalPeriods: [
      {
        title: "تأسيس الدرعية",
        years: "1446 م",
        description: "تأسيس مدينة الدرعية على يد مانع المريدي الدرعي.",
      },
      {
        title: "الدولة السعودية الأولى",
        years: "1744 - 1818 م",
        description: "اتفاق الإمام محمد بن سعود والشيخ محمد بن عبد الوهاب وتأسيس الدولة السعودية الأولى.",
      },
      {
        title: "سقوط الدرعية",
        years: "1818 م",
        description: "سقوط الدرعية على يد إبراهيم باشا وتدمير معظم مبانيها.",
      },
      {
        title: "العصر الحديث",
        years: "2010 - الحاضر",
        description: "تسجيل حي الطريف في قائمة التراث العالمي وإطلاق مشروع تطوير الدرعية.",
      },
    ],
    nearbyAttractions: [
      {
        id: "kingdom-tower",
        name: "برج المملكة",
        description: "أحد أبرز معالم الرياض، يضم مركز تسوق ومطاعم ومنصة مشاهدة توفر إطلالة بانورامية على المدينة.",
        image: "/placeholder.svg?height=400&width=600",
        distance: "15 كم",
      },
      {
        id: "national-museum",
        name: "المتحف الوطني السعودي",
        description: "أحد أكبر المتاحف في المملكة، يعرض تاريخ شبه الجزيرة العربية والحضارات التي تعاقبت عليها.",
        image: "/placeholder.svg?height=400&width=600",
        distance: "12 كم",
      },
      {
        id: "wadi-hanifah",
        name: "منتزه وادي حنيفة",
        description: "وادي طبيعي يمتد بطول 120 كم، تم تطويره كمنتزه طبيعي يضم مسارات للمشي وأماكن للتنزه.",
        image: "/placeholder.svg?height=400&width=600",
        distance: "1 كم",
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
        date: "أبريل 2025",
        comment:
          "زيارة الدرعية تجربة ثقافية وتاريخية رائعة. المكان يعكس عراقة التاريخ السعودي وأصالته. التطوير الجديد للمنطقة مذهل ويحافظ على الطابع التاريخي.",
      },
      {
        id: "review2",
        user: {
          name: "نورة الشمري",
          avatar: "/placeholder.svg?height=100&width=100",
        },
        rating: 4,
        date: "مارس 2025",
        comment: "مكان جميل يستحق الزيارة. العمارة الطينية رائعة والمتاحف تقدم معلومات قيمة عن تاريخ المملكة.",
      },
      {
        id: "review3",
        user: {
          name: "فهد العتيبي",
          avatar: "/placeholder.svg?height=100&width=100",
        },
        rating: 5,
        date: "فبراير 2025",
        comment:
          "من أجمل الأماكن التاريخية في المملكة. قضيت وقتاً ممتعاً في استكشاف حي الطريف والتعرف على تاريخ الدولة السعودية الأولى.",
      },
    ],
    averageRating: 4.7,
    totalReviews: 203,
  },
}

export default function HeritageSitePage({ params }: { params: { siteId: string } }) {
  const siteId = params.siteId
  const site = heritageSites[siteId as keyof typeof heritageSites]

  if (!site) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">عذراً، لم يتم العثور على الموقع التراثي</h1>
        <Button asChild className="mt-4">
          <Link href="/heritage">العودة إلى قائمة المواقع التراثية</Link>
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
            <Image src={site.image || "/placeholder.svg"} alt={site.name} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>
          <div className="container absolute bottom-0 left-0 right-0 pb-8">
            <div className="flex flex-col gap-2 text-white">
              <div className="flex items-center gap-2 text-sm">
                <Link href="/heritage" className="hover:underline">
                  التراث
                </Link>
                <ChevronLeft className="h-4 w-4" />
                <span>{site.name}</span>
              </div>
              <h1 className="text-4xl font-bold">{site.name}</h1>
              <p className="max-w-3xl text-white/90">{site.description}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {site.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-white/20 text-white">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Site Info */}
        <section className="py-8 border-b">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <Globe className="h-6 w-6 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">الموقع</div>
                  <div className="font-medium">
                    {site.location}، {site.region}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <History className="h-6 w-6 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">الفترة التاريخية</div>
                  <div className="font-medium">{site.period}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">مواعيد الزيارة</div>
                  <div className="font-medium">{site.visitingHours}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ThumbsUp className="h-6 w-6 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">التقييم</div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                    <span className="font-medium">{site.averageRating}</span>
                    <span className="text-sm text-muted-foreground">({site.totalReviews} تقييم)</span>
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
              <TabsList className="w-full justify-start border-b rounded-none p-0 h-auto">
                <div className="container flex overflow-x-auto">
                  <TabsTrigger
                    value="overview"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
                  >
                    نظرة عامة
                  </TabsTrigger>
                  <TabsTrigger
                    value="features"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
                  >
                    المعالم الرئيسية
                  </TabsTrigger>
                  <TabsTrigger
                    value="history"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
                  >
                    التاريخ
                  </TabsTrigger>
                  <TabsTrigger
                    value="nearby"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
                  >
                    أماكن قريبة
                  </TabsTrigger>
                  <TabsTrigger
                    value="reviews"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
                  >
                    التقييمات
                  </TabsTrigger>
                </div>
              </TabsList>

              <TabsContent value="overview" className="space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">عن {site.name}</h2>
                      <div className="prose max-w-none">
                        {site.longDescription.split("\n").map((paragraph, index) => (
                          <p key={index} className="mb-4">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-4">معرض الصور</h2>
                      <CityGallery images={site.gallery} />
                    </div>
                  </div>
                  <div>
                    <Card>
                      <CardHeader>
                        <CardTitle>معلومات الزيارة</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <div className="text-sm text-muted-foreground">الموقع</div>
                          <div className="font-medium">
                            {site.location}، {site.region}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">مواعيد الزيارة</div>
                          <div className="font-medium">{site.visitingHours}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">رسوم الدخول</div>
                          <div className="font-medium">{site.entryFees}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">المساحة</div>
                          <div className="font-medium">{site.area}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">سنة التسجيل في اليونسكو</div>
                          <div className="font-medium">{site.unescoYear}</div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">الحصول على الاتجاهات</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="features" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">المعالم الرئيسية في {site.name}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {site.keyFeatures.map((feature, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle>{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>{feature.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="history" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">التاريخ</h2>
                  <div className="space-y-8">
                    {site.historicalPeriods.map((period, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-1 bg-primary rounded-full relative">
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full"></div>
                        </div>
                        <div className="flex-1 pb-8">
                          <h3 className="text-xl font-bold">{period.title}</h3>
                          <div className="text-sm text-muted-foreground mb-2">{period.years}</div>
                          <p>{period.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="nearby" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">أماكن قريبة من {site.name}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {site.nearbyAttractions.map((attraction) => (
                      <Card key={attraction.id} className="overflow-hidden">
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={attraction.image || "/placeholder.svg"}
                            alt={attraction.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle>{attraction.name}</CardTitle>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 ml-1" />
                            <span>يبعد {attraction.distance}</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base">{attraction.description}</CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">تقييمات الزوار</h2>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-5 w-5 ${
                            star <= Math.round(site.averageRating) ? "fill-amber-500 text-amber-500" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-medium">{site.averageRating.toFixed(1)}</span>
                    <span className="text-muted-foreground">({site.totalReviews} تقييم)</span>
                  </div>
                  <div className="space-y-4">
                    {site.reviews.map((review) => (
                      <Card key={review.id}>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                              <div className="relative h-10 w-10 rounded-full overflow-hidden">
                                <Image
                                  src={review.user.avatar || "/placeholder.svg"}
                                  alt={review.user.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <CardTitle className="text-base">{review.user.name}</CardTitle>
                                <CardDescription>{review.date}</CardDescription>
                              </div>
                            </div>
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`h-4 w-4 ${
                                    star <= review.rating ? "fill-amber-500 text-amber-500" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p>{review.comment}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Related Sites */}
        <section className="py-12 bg-muted">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">مواقع تراثية قد تعجبك أيضاً</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.values(heritageSites)
                .filter((s) => s.id !== site.id)
                .slice(0, 4)
                .map((relatedSite) => (
                  <Card key={relatedSite.id} className="overflow-hidden">
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={relatedSite.image || "/placeholder.svg"}
                        alt={relatedSite.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg">{relatedSite.name}</CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 ml-1" />
                        <span>{relatedSite.location}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <CardDescription className="line-clamp-2">{relatedSite.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button asChild variant="outline" className="w-full">
                        <Link href={`/heritage/${relatedSite.id}`}>استكشاف</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
