import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Filter, MapPin, Search } from "lucide-react"

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

// قائمة المدن السياحية في المملكة
const cities = [
  {
    id: "riyadh",
    name: "الرياض",
    description: "عاصمة المملكة العربية السعودية ومركز الأعمال والثقافة، تجمع بين التراث العريق والحداثة المعاصرة.",
    image: "/placeholder.svg?height=400&width=600",
    region: "الوسطى",
    tags: ["مدينة رئيسية", "تسوق", "ترفيه", "تراث"],
    attractions: 45,
  },
  {
    id: "jeddah",
    name: "جدة",
    description: "بوابة الحرمين الشريفين وعروس البحر الأحمر، تتميز بشواطئها الخلابة وأسواقها التاريخية.",
    image: "/placeholder.svg?height=400&width=600",
    region: "الغربية",
    tags: ["ساحلية", "تاريخية", "تسوق", "ترفيه"],
    attractions: 38,
  },
  {
    id: "alula",
    name: "العلا",
    description:
      "متحف مفتوح يضم آثاراً تاريخية فريدة ومناظر طبيعية خلابة، موطن مدائن صالح أول موقع سعودي مسجل في اليونسكو.",
    image: "/placeholder.svg?height=400&width=600",
    region: "الشمالية الغربية",
    tags: ["تراثية", "طبيعية", "ثقافية", "تاريخية"],
    attractions: 25,
  },
  {
    id: "taif",
    name: "الطائف",
    description: "مدينة الورد والفاكهة، تتميز بمناخها المعتدل وطبيعتها الخضراء الخلابة.",
    image: "/placeholder.svg?height=400&width=600",
    region: "الغربية",
    tags: ["جبلية", "طبيعية", "ترفيهية", "زراعية"],
    attractions: 30,
  },
  {
    id: "abha",
    name: "أبها",
    description: "عروس الجبل وعاصمة السياحة في المملكة، تتميز بمناخها المعتدل ومناظرها الطبيعية الساحرة.",
    image: "/placeholder.svg?height=400&width=600",
    region: "الجنوبية",
    tags: ["جبلية", "طبيعية", "تراثية", "مناخ معتدل"],
    attractions: 32,
  },
  {
    id: "dammam",
    name: "الدمام",
    description: "عاصمة المنطقة الشرقية وبوابة المملكة على الخليج العربي، تتميز بشواطئها وحدائقها الجميلة.",
    image: "/placeholder.svg?height=400&width=600",
    region: "الشرقية",
    tags: ["ساحلية", "صناعية", "ترفيهية", "تسوق"],
    attractions: 28,
  },
  {
    id: "makkah",
    name: "مكة المكرمة",
    description: "مهبط الوحي وقبلة المسلمين، تضم المسجد الحرام والكعبة المشرفة وتعتبر أقدس مدينة في الإسلام.",
    image: "/placeholder.svg?height=400&width=600",
    region: "الغربية",
    tags: ["دينية", "تاريخية", "روحانية", "تراثية"],
    attractions: 20,
  },
  {
    id: "madinah",
    name: "المدينة المنورة",
    description: "المدينة المنورة هي ثاني أقدس مدينة في الإسلام، تضم المسجد النبوي الشريف وقبر الرسول محمد ﷺ.",
    image: "/placeholder.svg?height=400&width=600",
    region: "الغربية",
    tags: ["دينية", "تاريخية", "روحانية", "تراثية"],
    attractions: 18,
  },
  {
    id: "khobar",
    name: "الخبر",
    description: "مدينة ساحلية عصرية في المنطقة الشرقية، تشتهر بكورنيشها الجميل ومراكز التسوق والترفيه.",
    image: "/placeholder.svg?height=400&width=600",
    region: "الشرقية",
    tags: ["ساحلية", "تسوق", "ترفيه", "عصرية"],
    attractions: 22,
  },
  {
    id: "tabuk",
    name: "تبوك",
    description: "بوابة الشمال وأرض الحضارات القديمة، تتميز بطبيعتها الخلابة وآثارها التاريخية.",
    image: "/placeholder.svg?height=400&width=600",
    region: "الشمالية",
    tags: ["تاريخية", "طبيعية", "صحراوية", "ساحلية"],
    attractions: 24,
  },
  {
    id: "hail",
    name: "حائل",
    description: "مدينة الأجواد وعاصمة الشمال، تشتهر بكرم أهلها وتراثها العريق وجبالها الشاهقة.",
    image: "/placeholder.svg?height=400&width=600",
    region: "الشمالية",
    tags: ["تراثية", "صحراوية", "جبلية", "ثقافية"],
    attractions: 20,
  },
  {
    id: "najran",
    name: "نجران",
    description: "بوابة الجنوب وأرض الحضارة والتاريخ، تتميز بعمارتها التقليدية الفريدة وتراثها العريق.",
    image: "/placeholder.svg?height=400&width=600",
    region: "الجنوبية",
    tags: ["تراثية", "تاريخية", "ثقافية", "حدودية"],
    attractions: 18,
  },
]

export default function CitiesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-muted">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">استكشف مدن المملكة العربية السعودية</h1>
              <p className="text-xl text-muted-foreground mb-6">
                تعرف على أجمل المدن السياحية في المملكة وما تقدمه من تجارب فريدة ومعالم مميزة
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Input placeholder="ابحث عن مدينة..." className="pl-10" />
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
                  جميع المدن
                </Badge>
                <Badge variant="outline" className="rounded-full px-4 py-2 hover:bg-primary/10">
                  المنطقة الوسطى
                </Badge>
                <Badge variant="outline" className="rounded-full px-4 py-2 hover:bg-primary/10">
                  المنطقة الغربية
                </Badge>
                <Badge variant="outline" className="rounded-full px-4 py-2 hover:bg-primary/10">
                  المنطقة الشرقية
                </Badge>
                <Badge variant="outline" className="rounded-full px-4 py-2 hover:bg-primary/10">
                  المنطقة الشمالية
                </Badge>
                <Badge variant="outline" className="rounded-full px-4 py-2 hover:bg-primary/10">
                  المنطقة الجنوبية
                </Badge>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-sm text-muted-foreground">ترتيب حسب:</span>
                <Select defaultValue="popular">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="اختر الترتيب" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>الترتيب</SelectLabel>
                      <SelectItem value="popular">الأكثر شهرة</SelectItem>
                      <SelectItem value="attractions">عدد المعالم</SelectItem>
                      <SelectItem value="az">أبجدي (أ-ي)</SelectItem>
                      <SelectItem value="za">أبجدي (ي-أ)</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Cities Grid */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cities.map((city) => (
                <Card key={city.id} className="overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={city.image || "/placeholder.svg"}
                      alt={city.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{city.name}</CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 ml-1" />
                        <span>{city.region}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {city.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                      {city.tags.length > 3 && <Badge variant="outline">+{city.tags.length - 3}</Badge>}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base line-clamp-3">{city.description}</CardDescription>
                    <div className="mt-4 text-sm text-muted-foreground">
                      <span className="font-medium">{city.attractions}</span> معلم سياحي
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href={`/cities/${city.id}`}>
                        استكشف المدينة
                        <ChevronLeft className="mr-2 h-4 w-4" />
                      </Link>
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
