import { CardFooter } from "@/components/ui/card"
import { CardDescription } from "@/components/ui/card"
import { CardContent } from "@/components/ui/card"
import { CardTitle } from "@/components/ui/card"
import { CardHeader } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Clock, Globe, Info, MapPin, Star, ThumbsUp } from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CityGallery } from "@/components/city-gallery"
import { CityMap } from "@/components/city-map"
import { CityWeather } from "@/components/city-weather"
import { CityActivities } from "@/components/city-activities"
import { CityHotels } from "@/components/city-hotels"
import { CityRestaurants } from "@/components/city-restaurants"
import { CityReviews } from "@/components/city-reviews"

// بيانات المدن (في التطبيق الحقيقي ستكون من قاعدة بيانات)
const cities = {
  riyadh: {
    id: "riyadh",
    name: "الرياض",
    nameEn: "Riyadh",
    description:
      "الرياض هي عاصمة المملكة العربية السعودية ومركز الأعمال والثقافة، تجمع بين التراث العريق والحداثة المعاصرة. تضم العديد من المعالم السياحية البارزة مثل برج المملكة، ومركز الملك عبد العزيز التاريخي، والدرعية التاريخية، بالإضافة إلى مراكز التسوق الفاخرة والحدائق الجميلة.",
    longDescription: `
      الرياض هي عاصمة المملكة العربية السعودية وأكبر مدنها، تقع في وسط شبه الجزيرة العربية على هضبة نجد. تعتبر الرياض مركزاً سياسياً واقتصادياً وثقافياً مهماً في المملكة والمنطقة.
      
      تتميز الرياض بمزيج فريد من التراث العريق والحداثة المعاصرة، حيث تضم العديد من المعالم التاريخية مثل قصر المصمك والدرعية التاريخية، إلى جانب المباني الشاهقة والمجمعات التجارية الحديثة.
      
      تشهد الرياض تطوراً مستمراً ضمن رؤية المملكة 2030، حيث يتم تنفيذ العديد من المشاريع الضخمة مثل مشروع القدية الترفيهي ومشروع الرياض الخضراء، بالإضافة إلى تطوير البنية التحتية ووسائل النقل العام.
      
      تعتبر الرياض وجهة سياحية مهمة في المملكة، خاصة مع انطلاق موسم الرياض الذي يضم مجموعة متنوعة من الفعاليات والأنشطة الترفيهية والثقافية التي تجذب الزوار من داخل المملكة وخارجها.
    `,
    image: "/placeholder.svg?height=600&width=800",
    region: "المنطقة الوسطى",
    population: "7.6 مليون نسمة",
    area: "1,913 كم²",
    elevation: "600 متر",
    establishedYear: "1737 م",
    timeToVisit: "أكتوبر إلى أبريل",
    tags: ["مدينة رئيسية", "تسوق", "ترفيه", "تراث", "ثقافة", "أعمال"],
    coordinates: {
      lat: 24.7136,
      lng: 46.6753,
    },
    gallery: [
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "برج المملكة",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "مركز الملك عبد العزيز التاريخي",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "بوليفارد الرياض",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "الدرعية التاريخية",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "حي الطريف",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "واجهة الرياض",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "متحف الفيصلية",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "حديقة الملك عبدالله",
      },
    ],
    attractions: [
      {
        id: "kingdom-tower",
        name: "برج المملكة",
        category: "ترفيهي",
        description: "أحد أبرز معالم الرياض، يضم مركز تسوق ومطاعم ومنصة مشاهدة توفر إطلالة بانورامية على المدينة.",
        location: {
          lat: 24.7112,
          lng: 46.6744,
        },
        address: "طريق الملك فهد، العليا، الرياض",
      },
      {
        id: "historical-center",
        name: "مركز الملك عبد العزيز التاريخي",
        category: "تاريخي",
        description: "مجمع ثقافي وتاريخي يضم قصر المربع ومتحف الملك عبد العزيز ومسجد الإمام تركي بن عبد الله.",
        location: {
          lat: 24.6358,
          lng: 46.7144,
        },
        address: "حي المربع، الرياض",
      },
      {
        id: "diriyah",
        name: "الدرعية التاريخية",
        category: "تراثي",
        description: "العاصمة الأولى للدولة السعودية، تضم حي الطريف التاريخي المسجل في قائمة التراث العالمي لليونسكو.",
        location: {
          lat: 24.7423,
          lng: 46.5762,
        },
        address: "الدرعية، شمال غرب الرياض",
      },
      {
        id: "boulevard",
        name: "بوليفارد الرياض",
        category: "ترفيهي",
        description: "وجهة ترفيهية حديثة تضم مطاعم ومقاهي ومناطق ترفيهية ومسرح للعروض الحية.",
        location: {
          lat: 24.7738,
          lng: 46.7127,
        },
        address: "حي حطين، شمال الرياض",
      },
      {
        id: "national-museum",
        name: "المتحف الوطني السعودي",
        category: "ثقافي",
        description: "أحد أكبر المتاحف في المملكة، يعرض تاريخ شبه الجزيرة العربية والحضارات التي تعاقبت عليها.",
        location: {
          lat: 24.6358,
          lng: 46.7144,
        },
        address: "حي المربع، الرياض",
      },
      {
        id: "edge-of-the-world",
        name: "حافة العالم",
        category: "طبيعي",
        description: "تكوين جيولوجي مذهل على بعد 90 كم من الرياض، يوفر إطلالات خلابة على الصحراء.",
        location: {
          lat: 24.9569,
          lng: 46.4011,
        },
        address: "جبال طويق، غرب الرياض",
      },
    ],
    weather: {
      currentWeather: {
        temp: 28,
        condition: "sunny",
        humidity: 30,
        windSpeed: 12,
      },
      forecast: [
        {
          day: "الأحد",
          date: "١٠ أبريل",
          temp: {
            max: 30,
            min: 18,
          },
          condition: "sunny",
          humidity: 25,
          windSpeed: 10,
          precipitation: 0,
        },
        {
          day: "الإثنين",
          date: "١١ أبريل",
          temp: {
            max: 32,
            min: 19,
          },
          condition: "sunny",
          humidity: 20,
          windSpeed: 8,
          precipitation: 0,
        },
        {
          day: "الثلاثاء",
          date: "١٢ أبريل",
          temp: {
            max: 31,
            min: 20,
          },
          condition: "partly-cloudy",
          humidity: 30,
          windSpeed: 12,
          precipitation: 0,
        },
        {
          day: "الأربعاء",
          date: "١٣ أبريل",
          temp: {
            max: 29,
            min: 18,
          },
          condition: "cloudy",
          humidity: 35,
          windSpeed: 15,
          precipitation: 10,
        },
        {
          day: "الخميس",
          date: "١٤ أبريل",
          temp: {
            max: 27,
            min: 17,
          },
          condition: "partly-cloudy",
          humidity: 40,
          windSpeed: 14,
          precipitation: 5,
        },
        {
          day: "الجمعة",
          date: "١٥ أبريل",
          temp: {
            max: 28,
            min: 16,
          },
          condition: "sunny",
          humidity: 30,
          windSpeed: 10,
          precipitation: 0,
        },
        {
          day: "السبت",
          date: "١٦ أبريل",
          temp: {
            max: 30,
            min: 18,
          },
          condition: "sunny",
          humidity: 25,
          windSpeed: 8,
          precipitation: 0,
        },
      ],
    },
    activities: [
      {
        id: "desert-safari",
        title: "رحلة سفاري صحراوية",
        description:
          "استمتع بتجربة مثيرة في صحراء الرياض مع ركوب الدراجات الرباعية والتزلج على الرمال والاستمتاع بالشاي التقليدي تحت النجوم.",
        image: "/placeholder.svg?height=400&width=600",
        category: "مغامرات",
        location: "صحراء الرياض",
        duration: "6 ساعات",
        price: "350 ريال",
        rating: 4.8,
      },
      {
        id: "boulevard-tour",
        title: "جولة في بوليفارد الرياض",
        description: "استكشف أحدث وجهة ترفيهية في الرياض، واستمتع بالمطاعم والمقاهي والعروض الحية.",
        image: "/placeholder.svg?height=400&width=600",
        category: "ترفيه",
        location: "بوليفارد الرياض",
        duration: "4 ساعات",
        price: "200 ريال",
        rating: 4.6,
      },
      {
        id: "historical-tour",
        title: "جولة في الدرعية التاريخية",
        description: "اكتشف تاريخ المملكة العربية السعودية من خلال زيارة الدرعية التاريخية وحي الطريف.",
        image: "/placeholder.svg?height=400&width=600",
        category: "ثقافي",
        location: "الدرعية",
        duration: "3 ساعات",
        price: "150 ريال",
        rating: 4.7,
      },
    ],
    events: [
      {
        id: "riyadh-season",
        title: "موسم الرياض",
        description: "أكبر موسم ترفيهي في المملكة، يضم مجموعة متنوعة من الفعاليات والعروض الترفيهية والثقافية.",
        image: "/placeholder.svg?height=400&width=600",
        category: "ترفيه",
        location: "مواقع متعددة في الرياض",
        date: "أكتوبر 2025 - مارس 2026",
        time: "مواعيد مختلفة",
        price: "تبدأ من 50 ريال",
        rating: 4.9,
      },
      {
        id: "book-fair",
        title: "معرض الرياض الدولي للكتاب",
        description: "أحد أكبر معارض الكتب في المنطقة، يضم دور نشر محلية وعالمية وفعاليات ثقافية متنوعة.",
        image: "/placeholder.svg?height=400&width=600",
        category: "ثقافي",
        location: "مركز الرياض الدولي للمعارض والمؤتمرات",
        date: "سبتمبر 2025",
        time: "10:00 ص - 10:00 م",
        price: "مجاناً",
        rating: 4.5,
      },
      {
        id: "food-festival",
        title: "مهرجان الطعام السعودي",
        description: "مهرجان يحتفي بالمأكولات السعودية التقليدية والمعاصرة مع عروض طهي حية.",
        image: "/placeholder.svg?height=400&width=600",
        category: "طعام",
        location: "واجهة الرياض",
        date: "نوفمبر 2025",
        time: "4:00 م - 12:00 ص",
        price: "تبدأ من 75 ريال",
        rating: 4.4,
      },
    ],
    hotels: [
      {
        id: "four-seasons",
        name: "فندق فورسيزونز الرياض",
        description: "فندق فاخر في قلب الرياض، يوفر إطلالات رائعة على المدينة وخدمات استثنائية.",
        image: "/placeholder.svg?height=400&width=600",
        location: "حي العليا، الرياض",
        price: "1,500 ريال / ليلة",
        rating: 4.9,
        amenities: ["wifi", "breakfast", "restaurant", "spa", "pool"],
      },
      {
        id: "hilton",
        name: "فندق هيلتون الرياض",
        description: "فندق عالمي يوفر إقامة مريحة وخدمات متميزة للمسافرين بغرض العمل أو الترفيه.",
        image: "/placeholder.svg?height=400&width=600",
        location: "حي المروج، الرياض",
        price: "800 ريال / ليلة",
        rating: 4.7,
        amenities: ["wifi", "breakfast", "restaurant", "gym"],
      },
      {
        id: "narcissus",
        name: "فندق نارسيس",
        description: "فندق بوتيك فاخر يجمع بين الأناقة والراحة مع خدمات شخصية متميزة.",
        image: "/placeholder.svg?height=400&width=600",
        location: "حي العليا، الرياض",
        price: "1,200 ريال / ليلة",
        rating: 4.8,
        amenities: ["wifi", "breakfast", "restaurant", "spa"],
      },
    ],
    restaurants: [
      {
        id: "najd-village",
        name: "قرية نجد",
        description: "مطعم يقدم المأكولات النجدية التقليدية في أجواء تراثية أصيلة.",
        image: "/placeholder.svg?height=400&width=600",
        location: "حي العليا، الرياض",
        cuisine: "سعودي تقليدي",
        priceRange: "متوسط",
        rating: 4.8,
        openingHours: "12:00 م - 12:00 ص",
      },
      {
        id: "takya",
        name: "تكية",
        description: "مطعم عصري يقدم مأكولات سعودية بلمسة حديثة وإبداعية.",
        image: "/placeholder.svg?height=400&width=600",
        location: "حي الورود، الرياض",
        cuisine: "سعودي معاصر",
        priceRange: "مرتفع",
        rating: 4.7,
        openingHours: "1:00 م - 11:00 م",
      },
      {
        id: "lusin",
        name: "لوسين",
        description: "مطعم أرمني راقٍ يقدم أطباقاً شهية في أجواء أنيقة.",
        image: "/placeholder.svg?height=400&width=600",
        location: "حي حطين، الرياض",
        cuisine: "أرمني",
        priceRange: "مرتفع",
        rating: 4.9,
        openingHours: "1:00 م - 12:00 ص",
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
          "زرت الرياض خلال موسم الرياض وكانت تجربة رائعة! استمتعت بالفعاليات المتنوعة والمطاعم الرائعة. سأعود بالتأكيد مرة أخرى.",
      },
      {
        id: "review2",
        user: {
          name: "سارة عبدالله",
          avatar: "/placeholder.svg?height=100&width=100",
        },
        rating: 4,
        date: "فبراير 2025",
        comment: "مدينة جميلة تجمع بين الأصالة والمعاصرة. زرت الدرعية التاريخية وبوليفارد الرياض وكانت تجربة لا تنسى.",
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
          "الرياض مدينة متطورة وحيوية. استمتعت بالتسوق في المولات الفاخرة والمطاعم المتنوعة. الطقس كان مثالياً خلال فصل الشتاء.",
      },
      {
        id: "review4",
        user: {
          name: "نورة الشمري",
          avatar: "/placeholder.svg?height=100&width=100",
        },
        rating: 4,
        date: "ديسمبر 2024",
        comment:
          "قضيت أسبوعاً في الرياض وزرت معظم المعالم السياحية. أنصح بزيارة حافة العالم والمتحف الوطني. تجربة رائعة!",
      },
      {
        id: "review5",
        user: {
          name: "فهد السعيد",
          avatar: "/placeholder.svg?height=100&width=100",
        },
        rating: 3,
        date: "نوفمبر 2024",
        comment: "مدينة جميلة لكن الازدحام المروري مزعج في بعض الأوقات. المطاعم والمقاهي متنوعة والناس ودودون.",
      },
    ],
    averageRating: 4.7,
    totalReviews: 245,
  },
}

export default function CityPage({ params }: { params: { cityId: string } }) {
  const cityId = params.cityId
  const city = cities[cityId as keyof typeof cities]

  if (!city) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">عذراً، لم يتم العثور على المدينة</h1>
        <Button asChild className="mt-4">
          <Link href="/cities">العودة إلى قائمة المدن</Link>
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
            <Image src={city.image || "/placeholder.svg"} alt={city.name} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>
          <div className="container absolute bottom-0 left-0 right-0 pb-8">
            <div className="flex flex-col gap-2 text-white">
              <div className="flex items-center gap-2 text-sm">
                <Link href="/cities" className="hover:underline">
                  المدن
                </Link>
                <ChevronLeft className="h-4 w-4" />
                <span>{city.name}</span>
              </div>
              <h1 className="text-4xl font-bold">{city.name}</h1>
              <p className="max-w-3xl text-white/90">{city.description}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {city.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-white/20 text-white">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* City Info */}
        <section className="py-8 border-b">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <Globe className="h-6 w-6 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">المنطقة</div>
                  <div className="font-medium">{city.region}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Info className="h-6 w-6 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">عدد السكان</div>
                  <div className="font-medium">{city.population}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">أفضل وقت للزيارة</div>
                  <div className="font-medium">{city.timeToVisit}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ThumbsUp className="h-6 w-6 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">التقييم</div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                    <span className="font-medium">{city.averageRating}</span>
                    <span className="text-sm text-muted-foreground">({city.totalReviews} تقييم)</span>
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
                    value="attractions"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
                  >
                    المعالم السياحية
                  </TabsTrigger>
                  <TabsTrigger
                    value="activities"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
                  >
                    الأنشطة والفعاليات
                  </TabsTrigger>
                  <TabsTrigger
                    value="hotels"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
                  >
                    الفنادق
                  </TabsTrigger>
                  <TabsTrigger
                    value="restaurants"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
                  >
                    المطاعم
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
                      <h2 className="text-2xl font-bold mb-4">عن {city.name}</h2>
                      <div className="prose max-w-none">
                        {city.longDescription.split("\n").map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-4">معرض الصور</h2>
                      <CityGallery images={city.gallery} />
                    </div>
                  </div>
                  <div>
                    <CityWeather
                      cityName={city.name}
                      currentWeather={city.weather.currentWeather}
                      forecast={city.weather.forecast}
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="attractions" className="space-y-8">
                <CityMap cityName={city.name} attractions={city.attractions} />
              </TabsContent>

              <TabsContent value="activities" className="space-y-8">
                <CityActivities cityName={city.name} activities={city.activities} events={city.events} />
              </TabsContent>

              <TabsContent value="hotels" className="space-y-8">
                <CityHotels cityName={city.name} hotels={city.hotels} />
              </TabsContent>

              <TabsContent value="restaurants" className="space-y-8">
                <CityRestaurants cityName={city.name} restaurants={city.restaurants} />
              </TabsContent>

              <TabsContent value="reviews" className="space-y-8">
                <CityReviews
                  cityName={city.name}
                  reviews={city.reviews}
                  averageRating={city.averageRating}
                  totalReviews={city.totalReviews}
                />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Related Cities */}
        <section className="py-12 bg-muted">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">مدن قد تعجبك أيضاً</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.values(cities)
                .filter((c) => c.id !== city.id)
                .slice(0, 4)
                .map((relatedCity) => (
                  <Card key={relatedCity.id} className="overflow-hidden">
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={relatedCity.image || "/placeholder.svg"}
                        alt={relatedCity.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg">{relatedCity.name}</CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 ml-1" />
                        <span>{relatedCity.region}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <CardDescription className="line-clamp-2">{relatedCity.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button asChild variant="outline" className="w-full">
                        <Link href={`/cities/${relatedCity.id}`}>استكشاف</Link>
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
