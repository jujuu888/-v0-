import Image from "next/image"
import Link from "next/link"
import { Calendar, ChevronLeft, Filter, MapPin, Search } from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// قائمة الفعاليات في المملكة
const events = [
  {
    id: "riyadh-season",
    name: "موسم الرياض",
    description: "أكبر موسم ترفيهي في المملكة، يضم مجموعة متنوعة من الفعاليات والعروض الترفيهية والثقافية.",
    image: "/placeholder.svg?height=400&width=600",
    location: "الرياض",
    date: "أكتوبر 2025 - مارس 2026",
    category: "موسم",
    tags: ["ترفيه", "ثقافة", "تسوق", "رياضة"],
    featured: true,
  },
  {
    id: "jeddah-season",
    name: "موسم جدة",
    description: "فعاليات متنوعة على شواطئ البحر الأحمر، تشمل عروضاً فنية وثقافية ورياضية.",
    image: "/placeholder.svg?height=400&width=600",
    location: "جدة",
    date: "يونيو - أغسطس 2025",
    category: "موسم",
    tags: ["ترفيه", "رياضة", "بحرية", "ثقافة"],
    featured: true,
  },
  {
    id: "winter-tantora",
    name: "شتاء طنطورة",
    description: "مهرجان ثقافي وفني يقام في العلا، يجمع بين الموسيقى والفن والتراث في أجواء ساحرة.",
    image: "/placeholder.svg?height=400&width=600",
    location: "العلا",
    date: "ديسمبر 2025 - يناير 2026",
    category: "مهرجان",
    tags: ["ثقافة", "موسيقى", "تراث", "فنون"],
    featured: true,
  },
  {
    id: "diriyah-formula-e",
    name: "سباق فورمولا إي الدرعية",
    description: "سباق عالمي للسيارات الكهربائية يقام في موقع تاريخي فريد في الدرعية.",
    image: "/placeholder.svg?height=400&width=600",
    location: "الدرعية، الرياض",
    date: "يناير 2026",
    category: "رياضي",
    tags: ["رياضة", "سيارات", "عالمي"],
    featured: false,
  },
  {
    id: "red-sea-film-festival",
    name: "مهرجان البحر الأحمر السينمائي",
    description: "مهرجان سينمائي دولي يقام في جدة، يعرض أفلاماً من مختلف أنحاء العالم ويدعم صناعة السينما المحلية.",
    image: "/placeholder.svg?height=400&width=600",
    location: "جدة",
    date: "ديسمبر 2025",
    category: "ثقافي",
    tags: ["سينما", "فنون", "ثقافة", "عالمي"],
    featured: false,
  },
  {
    id: "taif-rose-festival",
    name: "مهرجان الورد الطائفي",
    description: "مهرجان سنوي يحتفي بموسم قطف الورد الطائفي الشهير، يتضمن معارض ومسابقات وفعاليات ثقافية.",
    image: "/placeholder.svg?height=400&width=600",
    location: "الطائف",
    date: "أبريل 2026",
    category: "مهرجان",
    tags: ["ثقافة", "تراث", "زراعة", "سياحة"],
    featured: false,
  },
  {
    id: "saudi-international-golf",
    name: "بطولة السعودية الدولية للجولف",
    description: "بطولة عالمية للجولف تستضيف نخبة من أفضل لاعبي الجولف في العالم.",
    image: "/placeholder.svg?height=400&width=600",
    location: "مدينة الملك عبدالله الاقتصادية، رابغ",
    date: "فبراير 2026",
    category: "رياضي",
    tags: ["رياضة", "جولف", "عالمي"],
    featured: false,
  },
  {
    id: "riyadh-book-fair",
    name: "معرض الرياض الدولي للكتاب",
    description: "أحد أكبر معارض الكتب في المنطقة، يضم دور نشر محلية وعالمية وفعاليات ثقافية متنوعة.",
    image: "/placeholder.svg?height=400&width=600",
    location: "الرياض",
    date: "سبتمبر 2025",
    category: "ثقافي",
    tags: ["كتب", "ثقافة", "معرض"],
    featured: false,
  },
  {
    id: "saudi-food-festival",
    name: "مهرجان الطعام السعودي",
    description: "مهرجان يحتفي بالمأكولات السعودية التقليدية والمعاصرة مع عروض طهي حية.",
    image: "/placeholder.svg?height=400&width=600",
    location: "الرياض",
    date: "نوفمبر 2025",
    category: "طعام",
    tags: ["طعام", "ثقافة", "تراث"],
    featured: false,
  },
  {
    id: "abha-summer-festival",
    name: "مهرجان أبها للتسوق",
    description: "مهرجان صيفي يقام في مدينة أبها، يتضمن فعاليات ترفيهية وثقافية وعروض تسوق.",
    image: "/placeholder.svg?height=400&width=600",
    location: "أبها",
    date: "يوليو - أغسطس 2025",
    category: "مهرجان",
    tags: ["تسوق", "ترفيه", "سياحة"],
    featured: false,
  },
  {
    id: "dakar-rally-saudi",
    name: "رالي داكار السعودية",
    description: "أحد أشهر سباقات الراليات في العالم، يقام في صحاري المملكة ويجذب متسابقين من مختلف أنحاء العالم.",
    image: "/placeholder.svg?height=400&width=600",
    location: "مناطق متعددة",
    date: "يناير 2026",
    category: "رياضي",
    tags: ["رياضة", "سيارات", "مغامرات", "عالمي"],
    featured: false,
  },
  {
    id: "saudi-falcons-festival",
    name: "مهرجان الملك عبدالعزيز للصقور",
    description: "أكبر مهرجان للصقور في العالم، يتضمن مسابقات ومزادات وفعاليات تراثية.",
    image: "/placeholder.svg?height=400&width=600",
    location: "ملهم، الرياض",
    date: "ديسمبر 2025",
    category: "تراثي",
    tags: ["تراث", "صقور", "مسابقات"],
    featured: false,
  },
]

export default function EventsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-muted">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">الفعاليات والمهرجانات</h1>
              <p className="text-xl text-muted-foreground mb-6">
                استمتع بأبرز الفعاليات والمهرجانات في مختلف مناطق المملكة على مدار العام
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Input placeholder="ابحث عن فعالية..." className="pl-10" />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                </div>
                <Button variant="outline" className="flex gap-2">
                  <Filter className="h-5 w-5" />
                  تصفية النتائج
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 border-b">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="rounded-full px-4 py-2 bg-primary/10 hover:bg-primary/20">
                  جميع الفعاليات
                </Badge>
                <Badge variant="outline" className="rounded-full px-4 py-2 hover:bg-primary/10">
                  المواسم
                </Badge>
                <Badge variant="outline" className="rounded-full px-4 py-2 hover:bg-primary/10">
                  المهرجانات
                </Badge>
                <Badge variant="outline" className="rounded-full px-4 py-2 hover:bg-primary/10">
                  الفعاليات الرياضية
                </Badge>
                <Badge variant="outline" className="rounded-full px-4 py-2 hover:bg-primary/10">
                  الفعاليات الثقافية
                </Badge>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-sm text-muted-foreground">ترتيب حسب:</span>
                <Select defaultValue="date">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="اختر الترتيب" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>الترتيب</SelectLabel>
                      <SelectItem value="date">تاريخ الفعالية</SelectItem>
                      <SelectItem value="featured">الأكثر شهرة</SelectItem>
                      <SelectItem value="az">أبجدي (أ-ي)</SelectItem>
                      <SelectItem value="za">أبجدي (ي-أ)</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Events */}
        <section className="py-12">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">الفعاليات المميزة</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {events
                .filter((event) => event.featured)
                .map((event) => (
                  <Card key={event.id} className="overflow-hidden group">
                    <div className="relative h-48 overflow-hidden">
                      <Badge className="absolute top-3 right-3 z-10">مميز</Badge>
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{event.name}</CardTitle>
                      <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 ml-1" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 ml-1" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{event.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start gap-4">
                      <div className="flex flex-wrap gap-2">
                        {event.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button asChild className="w-full">
                        <Link href={`/events/${event.id}`}>التفاصيل والحجز</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* All Events */}
        <section className="py-12 bg-muted">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">جميع الفعاليات</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events
                .filter((event) => !event.featured)
                .map((event) => (
                  <Card key={event.id} className="overflow-hidden group">
                    <div className="relative h-48 overflow-hidden">
                      <Badge variant="outline" className="absolute top-3 right-3 z-10 bg-white/80">
                        {event.category}
                      </Badge>
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{event.name}</CardTitle>
                      <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 ml-1" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 ml-1" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base line-clamp-2">{event.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start gap-4">
                      <div className="flex flex-wrap gap-2">
                        {event.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                        {event.tags.length > 3 && <Badge variant="outline">+{event.tags.length - 3}</Badge>}
                      </div>
                      <Button asChild variant="outline" className="w-full">
                        <Link href={`/events/${event.id}`}>
                          عرض التفاصيل
                          <ChevronLeft className="mr-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* Events Calendar */}
        <section className="py-12">
          <div className="container">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">تقويم الفعاليات</h2>
              <p className="text-muted-foreground">خطط لرحلتك القادمة باستخدام تقويم الفعاليات السنوي</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold">فعاليات 2025 - 2026</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">الربع الأول (يناير - مارس)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <div className="font-medium">يناير 2026</div>
                      <ul className="text-sm text-muted-foreground space-y-1 mt-1">
                        <li>• رالي داكار السعودية</li>
                        <li>• سباق فورمولا إي الدرعية</li>
                        <li>• شتاء طنطورة (مستمر)</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium">فبراير 2026</div>
                      <ul className="text-sm text-muted-foreground space-y-1 mt-1">
                        <li>• بطولة السعودية الدولية للجولف</li>
                        <li>• مهرجان الجنادرية للتراث والثقافة</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium">مارس 2026</div>
                      <ul className="text-sm text-muted-foreground space-y-1 mt-1">
                        <li>• موسم الرياض (مستمر)</li>
                        <li>• سباق فورمولا 1 السعودية</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">الربع الثاني (أبريل - يونيو)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <div className="font-medium">أبريل 2026</div>
                      <ul className="text-sm text-muted-foreground space-y-1 mt-1">
                        <li>• مهرجان الورد الطائفي</li>
                        <li>• معرض الرياض للكتاب</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium">مايو 2026</div>
                      <ul className="text-sm text-muted-foreground space-y-1 mt-1">
                        <li>• مهرجان جدة التاريخية</li>
                        <li>• معرض الفنون السعودية</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium">يونيو 2026</div>
                      <ul className="text-sm text-muted-foreground space-y-1 mt-1">
                        <li>• موسم جدة (يبدأ)</li>
                        <li>• مهرجان الساحل</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">الربع الثالث (يوليو - سبتمبر)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <div className="font-medium">يوليو 2026</div>
                      <ul className="text-sm text-muted-foreground space-y-1 mt-1">
                        <li>• موسم جدة (مستمر)</li>
                        <li>• مهرجان أبها للتسوق (يبدأ)</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium">أغسطس 2026</div>
                      <ul className="text-sm text-muted-foreground space-y-1 mt-1">
                        <li>• موسم جدة (مستمر)</li>
                        <li>• مهرجان أبها للتسوق (مستمر)</li>
                        <li>• مهرجان الصيف</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium">سبتمبر 2026</div>
                      <ul className="text-sm text-muted-foreground space-y-1 mt-1">
                        <li>• اليوم الوطني السعودي</li>
                        <li>• معرض الرياض الدولي للكتاب</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">الربع الرابع (أكتوبر - ديسمبر)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <div className="font-medium">أكتوبر 2026</div>
                      <ul className="text-sm text-muted-foreground space-y-1 mt-1">
                        <li>• موسم الرياض (يبدأ)</li>
                        <li>• معرض الرياض للسيارات</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium">نوفمبر 2026</div>
                      <ul className="text-sm text-muted-foreground space-y-1 mt-1">
                        <li>• موسم الرياض (مستمر)</li>
                        <li>• مهرجان الطعام السعودي</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium">ديسمبر 2026</div>
                      <ul className="text-sm text-muted-foreground space-y-1 mt-1">
                        <li>• موسم الرياض (مستمر)</li>
                        <li>• مهرجان البحر الأحمر السينمائي</li>
                        <li>• شتاء طنطورة (يبدأ)</li>
                        <li>• مهرجان الملك عبدالعزيز للصقور</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
