import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Filter, Search, Star } from "lucide-react"

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// قائمة الخدمات السياحية
const services = [
  {
    id: "tour-guides",
    name: "المرشدين السياحيين",
    description: "مرشدين سياحيين محترفين ومرخصين لمساعدتك في استكشاف المملكة بأفضل طريقة.",
    image: "/placeholder.svg?height=400&width=600",
    category: "مرشدين",
    tags: ["مرشدين محليين", "متعدد اللغات", "خبراء بالتراث"],
    featured: true,
    providers: [
      {
        id: "saudi-guides",
        name: "المرشدين السعوديين",
        description: "شبكة من المرشدين السياحيين المحليين المتخصصين في مختلف مناطق المملكة.",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.8,
        reviews: 156,
      },
      {
        id: "heritage-guides",
        name: "مرشدي التراث",
        description: "مرشدين متخصصين في المواقع التراثية والتاريخية في المملكة.",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.7,
        reviews: 124,
      },
      {
        id: "adventure-guides",
        name: "مرشدي المغامرات",
        description: "مرشدين متخصصين في الرحلات الصحراوية والمغامرات الطبيعية.",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.9,
        reviews: 98,
      },
    ],
  },
  {
    id: "transportation",
    name: "خدمات النقل",
    description: "خيارات متنوعة للتنقل داخل المملكة، من السيارات الخاصة إلى الرحلات الجماعية.",
    image: "/placeholder.svg?height=400&width=600",
    category: "نقل",
    tags: ["سيارات خاصة", "حافلات سياحية", "رحلات جماعية"],
    featured: true,
    providers: [
      {
        id: "luxury-cars",
        name: "سيارات فاخرة مع سائق",
        description: "خدمة سيارات فاخرة مع سائقين محترفين للتنقل بين المدن والمواقع السياحية.",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.6,
        reviews: 210,
      },
      {
        id: "tourist-buses",
        name: "حافلات سياحية",
        description: "حافلات مكيفة ومريحة للرحلات الجماعية والجولات السياحية.",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.5,
        reviews: 175,
      },
      {
        id: "desert-vehicles",
        name: "سيارات الصحراء",
        description: "سيارات دفع رباعي مجهزة للرحلات الصحراوية والمناطق الوعرة.",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.8,
        reviews: 132,
      },
    ],
  },
  {
    id: "accommodation",
    name: "خدمات الإقامة",
    description: "مجموعة متنوعة من خيارات الإقامة، من الفنادق الفاخرة إلى المخيمات الصحراوية.",
    image: "/placeholder.svg?height=400&width=600",
    category: "إقامة",
    tags: ["فنادق", "شقق مفروشة", "مخيمات"],
    featured: true,
    providers: [
      {
        id: "luxury-hotels",
        name: "فنادق فاخرة",
        description: "مجموعة من أفخم الفنادق في مختلف مدن المملكة.",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.9,
        reviews: 320,
      },
      {
        id: "furnished-apartments",
        name: "شقق مفروشة",
        description: "شقق مفروشة بالكامل ومجهزة بجميع وسائل الراحة للإقامات القصيرة والطويلة.",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.7,
        reviews: 245,
      },
      {
        id: "desert-camps",
        name: "مخيمات صحراوية",
        description: "مخيمات فاخرة في الصحراء توفر تجربة إقامة فريدة وسط الطبيعة.",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.8,
        reviews: 178,
      },
    ],
  },
  {
    id: "tours",
    name: "الجولات السياحية",
    description: "جولات سياحية منظمة لاستكشاف أجمل المعالم والمدن في المملكة.",
    image: "/placeholder.svg?height=400&width=600",
    category: "جولات",
    tags: ["جولات يومية", "رحلات متعددة الأيام", "جولات خاصة"],
    featured: false,
    providers: [
      {
        id: "city-tours",
        name: "جولات المدن",
        description: "جولات يومية لاستكشاف أبرز معالم المدن السعودية.",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.7,
        reviews: 198,
      },
      {
        id: "heritage-tours",
        name: "جولات تراثية",
        description: "جولات متخصصة في المواقع التراثية والتاريخية في المملكة.",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.8,
        reviews: 165,
      },
      {
        id: "adventure-tours",
        name: "جولات المغامرات",
        description: "جولات للمغامرين تشمل التخييم والتسلق ورحلات السفاري.",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.9,
        reviews: 142,
      },
    ],
  },
  {
    id: "activities",
    name: "الأنشطة والتجارب",
    description: "مجموعة متنوعة من الأنشطة والتجارب الفريدة لإثراء رحلتك في المملكة.",
    image: "/placeholder.svg?height=400&width=600",
    category: "أنشطة",
    tags: ["مغامرات", "تجارب ثقافية", "رياضات"],
    featured: false,
    providers: [
      {
        id: "desert-adventures",
        name: "مغامرات صحراوية",
        description: "تجارب مغامرة في الصحراء تشمل ركوب الدراجات الرباعية والتزلج على الرمال.",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.8,
        reviews: 210,
      },
      {
        id: "cultural-experiences",
        name: "تجارب ثقافية",
        description: "ورش عمل وتجارب تفاعلية للتعرف على الثقافة والتراث السعودي.",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.7,
        reviews: 175,
      },
      {
        id: "water-activities",
        name: "أنشطة بحرية",
        description: "أنشطة متنوعة في البحر الأحمر والخليج العربي مثل الغوص وركوب الأمواج.",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.9,
        reviews: 156,
      },
    ],
  },
  {
    id: "food-tours",
    name: "جولات الطعام",
    description: "استكشف المأكولات السعودية التقليدية والعالمية من خلال جولات طعام منظمة.",
    image: "/placeholder.svg?height=400&width=600",
    category: "طعام",
    tags: ["مأكولات تقليدية", "تجارب طهي", "مطاعم"],
    featured: false,
    providers: [
      {
        id: "traditional-food",
        name: "جولات الطعام التقليدي",
        description: "جولات لاستكشاف المأكولات السعودية التقليدية في مختلف مناطق المملكة.",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.8,
        reviews: 187,
      },
      {
        id: "cooking-classes",
        name: "دروس الطبخ",
        description: "تعلم كيفية طهي الأطباق السعودية التقليدية مع طهاة محترفين.",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.7,
        reviews: 142,
      },
      {
        id: "restaurant-tours",
        name: "جولات المطاعم",
        description: "جولات في أفضل المطاعم في المدن السعودية لتذوق مختلف المأكولات.",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.6,
        reviews: 165,
      },
    ],
  },
  {
    id: "shopping-tours",
    name: "جولات التسوق",
    description: "جولات مخصصة للتسوق في أفضل الأسواق التقليدية والمراكز التجارية الحديثة.",
    image: "/placeholder.svg?height=400&width=600",
    category: "تسوق",
    tags: ["أسواق تقليدية", "مراكز تجارية", "حرف يدوية"],
    featured: false,
    providers: [
      {
        id: "traditional-markets",
        name: "جولات الأسواق التقليدية",
        description: "جولات في الأسواق الشعبية والتقليدية للتعرف على المنتجات المحلية.",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.7,
        reviews: 156,
      },
      {
        id: "mall-tours",
        name: "جولات المراكز التجارية",
        description: "جولات في أفخم المراكز التجارية في المملكة للتسوق والترفيه.",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.5,
        reviews: 132,
      },
      {
        id: "handicraft-shopping",
        name: "تسوق الحرف اليدوية",
        description: "جولات مخصصة لشراء الحرف اليدوية والمنتجات التقليدية السعودية.",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.8,
        reviews: 124,
      },
    ],
  },
  {
    id: "visa-services",
    name: "خدمات التأشيرات",
    description: "خدمات متكاملة للحصول على تأشيرة سياحية للمملكة بسهولة وسرعة.",
    image: "/placeholder.svg?height=400&width=600",
    category: "تأشيرات",
    tags: ["تأشيرة سياحية", "تأشيرة فعاليات", "خدمات سريعة"],
    featured: false,
    providers: [
      {
        id: "e-visa",
        name: "التأشيرة الإلكترونية",
        description: "خدمة الحصول على التأشيرة السياحية إلكترونياً بخطوات بسيطة وسريعة.",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.9,
        reviews: 245,
      },
      {
        id: "visa-assistance",
        name: "المساعدة في التأشيرات",
        description: "خدمات استشارية ومساعدة في إجراءات الحصول على التأشيرة.",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.7,
        reviews: 198,
      },
      {
        id: "event-visa",
        name: "تأشيرات الفعاليات",
        description: "خدمات الحصول على تأشيرات لحضور الفعاليات والمهرجانات في المملكة.",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.8,
        reviews: 156,
      },
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-muted">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">الخدمات السياحية</h1>
              <p className="text-xl text-muted-foreground mb-6">
                مجموعة متكاملة من الخدمات السياحية لمساعدتك في الاستمتاع برحلة مثالية في المملكة
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Input placeholder="ابحث عن خدمة..." className="pl-10" />
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
                  جميع الخدمات
                </Badge>
                <Badge variant="outline" className="rounded-full px-4 py-2 hover:bg-primary/10">
                  المرشدين السياحيين
                </Badge>
                <Badge variant="outline" className="rounded-full px-4 py-2 hover:bg-primary/10">
                  خدمات النقل
                </Badge>
                <Badge variant="outline" className="rounded-full px-4 py-2 hover:bg-primary/10">
                  الإقامة
                </Badge>
                <Badge variant="outline" className="rounded-full px-4 py-2 hover:bg-primary/10">
                  الجولات السياحية
                </Badge>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-sm text-muted-foreground">ترتيب حسب:</span>
                <Select defaultValue="featured">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="اختر الترتيب" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>الترتيب</SelectLabel>
                      <SelectItem value="featured">الأكثر شهرة</SelectItem>
                      <SelectItem value="rating">التقييم</SelectItem>
                      <SelectItem value="az">أبجدي (أ-ي)</SelectItem>
                      <SelectItem value="za">أبجدي (ي-أ)</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-12">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">الخدمات المميزة</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services
                .filter((service) => service.featured)
                .map((service) => (
                  <Card key={service.id} className="overflow-hidden group">
                    <div className="relative h-48 overflow-hidden">
                      <Badge className="absolute top-3 right-3 z-10">مميز</Badge>
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{service.name}</CardTitle>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {service.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link href={`/services/${service.id}`}>
                          عرض مزودي الخدمة
                          <ChevronLeft className="mr-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* All Services */}
        <section className="py-12 bg-muted">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">جميع الخدمات السياحية</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services
                .filter((service) => !service.featured)
                .map((service) => (
                  <Card key={service.id} className="overflow-hidden group">
                    <div className="relative h-40 overflow-hidden">
                      <Badge variant="outline" className="absolute top-3 right-3 z-10 bg-white/80">
                        {service.category}
                      </Badge>
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg">{service.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <CardDescription className="line-clamp-2">{service.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button asChild variant="outline" className="w-full">
                        <Link href={`/services/${service.id}`}>
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

        {/* Service Providers */}
        <section className="py-12">
          <div className="container">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">مزودي الخدمات المميزين</h2>
              <p className="text-muted-foreground">نخبة من أفضل مزودي الخدمات السياحية في المملكة</p>
            </div>

            <Tabs defaultValue="guides" className="space-y-8">
              <TabsList className="flex justify-center">
                <TabsTrigger value="guides">المرشدين السياحيين</TabsTrigger>
                <TabsTrigger value="transport">خدمات النقل</TabsTrigger>
                <TabsTrigger value="accommodation">خدمات الإقامة</TabsTrigger>
              </TabsList>

              <TabsContent value="guides" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {services
                    .find((service) => service.id === "tour-guides")
                    ?.providers.map((provider) => (
                      <Card key={provider.id} className="overflow-hidden">
                        <div className="relative h-40 overflow-hidden">
                          <Image
                            src={provider.image || "/placeholder.svg"}
                            alt={provider.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardHeader className="p-4">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-lg">{provider.name}</CardTitle>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                              <span className="font-medium">{provider.rating}</span>
                              <span className="text-xs text-muted-foreground">({provider.reviews})</span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <CardDescription className="line-clamp-2">{provider.description}</CardDescription>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                          <Button asChild variant="outline" className="w-full">
                            <Link href={`/services/tour-guides/${provider.id}`}>عرض التفاصيل</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="transport" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {services
                    .find((service) => service.id === "transportation")
                    ?.providers.map((provider) => (
                      <Card key={provider.id} className="overflow-hidden">
                        <div className="relative h-40 overflow-hidden">
                          <Image
                            src={provider.image || "/placeholder.svg"}
                            alt={provider.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardHeader className="p-4">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-lg">{provider.name}</CardTitle>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                              <span className="font-medium">{provider.rating}</span>
                              <span className="text-xs text-muted-foreground">({provider.reviews})</span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <CardDescription className="line-clamp-2">{provider.description}</CardDescription>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                          <Button asChild variant="outline" className="w-full">
                            <Link href={`/services/transportation/${provider.id}`}>عرض التفاصيل</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="accommodation" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {services
                    .find((service) => service.id === "accommodation")
                    ?.providers.map((provider) => (
                      <Card key={provider.id} className="overflow-hidden">
                        <div className="relative h-40 overflow-hidden">
                          <Image
                            src={provider.image || "/placeholder.svg"}
                            alt={provider.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardHeader className="p-4">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-lg">{provider.name}</CardTitle>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                              <span className="font-medium">{provider.rating}</span>
                              <span className="text-xs text-muted-foreground">({provider.reviews})</span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <CardDescription className="line-clamp-2">{provider.description}</CardDescription>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                          <Button asChild variant="outline" className="w-full">
                            <Link href={`/services/accommodation/${provider.id}`}>عرض التفاصيل</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
