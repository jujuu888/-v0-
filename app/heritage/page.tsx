import Image from "next/image"
import Link from "next/link"
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

// قائمة المواقع التراثية في المملكة
const heritageItems = [
  {
    id: "madain-saleh",
    name: "مدائن صالح",
    description: "أول موقع سعودي مسجل في قائمة التراث العالمي لليونسكو، يضم مقابر نبطية منحوتة في الصخر.",
    image: "/placeholder.svg?height=400&width=600",
    location: "العلا",
    region: "المنطقة الشمالية الغربية",
    tags: ["تراث عالمي", "آثار", "نبطي"],
    period: "القرن الأول قبل الميلاد",
  },
  {
    id: "diriyah",
    name: "الدرعية التاريخية",
    description: "العاصمة الأولى للدولة السعودية، تضم حي الطريف التاريخي المسجل في قائمة التراث العالمي.",
    image: "/placeholder.svg?height=400&width=600",
    location: "الرياض",
    region: "المنطقة الوسطى",
    tags: ["تراث عالمي", "عمارة طينية", "تاريخي"],
    period: "القرن الثامن عشر",
  },
  {
    id: "jeddah-historical",
    name: "جدة التاريخية",
    description: "البلد القديمة في جدة، تضم مباني تاريخية فريدة بعمارتها التقليدية المميزة والرواشين الخشبية.",
    image: "/placeholder.svg?height=400&width=600",
    location: "جدة",
    region: "المنطقة الغربية",
    tags: ["تراث عالمي", "عمارة تقليدية", "ساحلي"],
    period: "القرن التاسع عشر",
  },
  {
    id: "rijal-almaa",
    name: "قرية رجال ألمع",
    description: "قرية تراثية تقع في منطقة عسير، تتميز بمبانيها الحجرية المرتفعة ذات الطراز المعماري الفريد.",
    image: "/placeholder.svg?height=400&width=600",
    location: "عسير",
    region: "المنطقة الجنوبية",
    tags: ["قرى تراثية", "عمارة جبلية", "ثقافي"],
    period: "أكثر من 400 عام",
  },
  {
    id: "jubbah-rock-art",
    name: "فن الصخور في جبة",
    description: "موقع للنقوش الصخرية يعود تاريخه إلى العصر الحجري، يضم رسومات ونقوش تعكس حياة الإنسان القديم.",
    image: "/placeholder.svg?height=400&width=600",
    location: "حائل",
    region: "المنطقة الشمالية",
    tags: ["تراث عالمي", "نقوش صخرية", "ما قبل التاريخ"],
    period: "العصر الحجري",
  },
  {
    id: "turaif-district",
    name: "حي الطريف",
    description: "أحد أحياء الدرعية التاريخية، يضم قصر سلوى التاريخي ومسجد الإمام محمد بن سعود.",
    image: "/placeholder.svg?height=400&width=600",
    location: "الدرعية",
    region: "المنطقة الوسطى",
    tags: ["تراث عالمي", "عمارة طينية", "تاريخي"],
    period: "القرن الثامن عشر",
  },
  {
    id: "al-ahsa-oasis",
    name: "واحة الأحساء",
    description: "أكبر واحة نخيل في العالم، تضم عيون مائية وقنوات ري تقليدية وقلاع تاريخية.",
    image: "/placeholder.svg?height=400&width=600",
    location: "الأحساء",
    region: "المنطقة الشرقية",
    tags: ["تراث عالمي", "واحات", "زراعي"],
    period: "آلاف السنين",
  },
  {
    id: "al-qatt-art",
    name: "فن القط العسيري",
    description: "فن زخرفي تقليدي تشتهر به منطقة عسير، يتميز بالألوان الزاهية والأشكال الهندسية.",
    image: "/placeholder.svg?height=400&width=600",
    location: "عسير",
    region: "المنطقة الجنوبية",
    tags: ["تراث ثقافي", "فنون شعبية", "زخارف"],
    period: "مئات السنين",
  },
  {
    id: "al-ula-old-town",
    name: "بلدة العلا القديمة",
    description: "مدينة تاريخية مبنية من الطين، تضم متاهة من الشوارع الضيقة والمنازل المتلاصقة.",
    image: "/placeholder.svg?height=400&width=600",
    location: "العلا",
    region: "المنطقة الشمالية الغربية",
    tags: ["عمارة طينية", "تاريخي", "مدن قديمة"],
    period: "القرن الثالث عشر",
  },
  {
    id: "tarut-castle",
    name: "قلعة تاروت",
    description: "قلعة تاريخية تقع في جزيرة تاروت، تعتبر من أقدم المستوطنات البشرية في شبه الجزيرة العربية.",
    image: "/placeholder.svg?height=400&width=600",
    location: "القطيف",
    region: "المنطقة الشرقية",
    tags: ["قلاع", "تاريخي", "ساحلي"],
    period: "5000 سنة",
  },
  {
    id: "shubra-palace",
    name: "قصر شبرا",
    description: "قصر تاريخي في الطائف، بني في عهد الشريف الحسين بن علي، ويعكس العمارة الإسلامية التقليدية.",
    image: "/placeholder.svg?height=400&width=600",
    location: "الطائف",
    region: "المنطقة الغربية",
    tags: ["قصور", "عمارة إسلامية", "تاريخي"],
    period: "القرن العشرين",
  },
  {
    id: "al-balad-taif",
    name: "البلد القديمة في الطائف",
    description: "المنطقة التاريخية في الطائف، تضم أسواقاً تقليدية ومباني تاريخية.",
    image: "/placeholder.svg?height=400&width=600",
    location: "الطائف",
    region: "المنطقة الغربية",
    tags: ["أسواق تقليدية", "عمارة تقليدية", "تاريخي"],
    period: "القرن التاسع عشر",
  },
]

export default function HeritagePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-muted">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">التراث والثقافة في المملكة</h1>
              <p className="text-xl text-muted-foreground mb-6">
                اكتشف روعة التراث السعودي العريق والمواقع التاريخية الفريدة التي تحكي قصة حضارة عريقة
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Input placeholder="ابحث عن موقع تراثي..." className="pl-10" />
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
                  جميع المواقع
                </Badge>
                <Badge variant="outline" className="rounded-full px-4 py-2 hover:bg-primary/10">
                  تراث عالمي
                </Badge>
                <Badge variant="outline" className="rounded-full px-4 py-2 hover:bg-primary/10">
                  قرى تراثية
                </Badge>
                <Badge variant="outline" className="rounded-full px-4 py-2 hover:bg-primary/10">
                  قلاع وقصور
                </Badge>
                <Badge variant="outline" className="rounded-full px-4 py-2 hover:bg-primary/10">
                  فنون شعبية
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
                      <SelectItem value="az">أبجدي (أ-ي)</SelectItem>
                      <SelectItem value="za">أبجدي (ي-أ)</SelectItem>
                      <SelectItem value="oldest">الأقدم</SelectItem>
                      <SelectItem value="newest">الأحدث</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Heritage Sites Grid */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {heritageItems.map((item) => (
                <Card key={item.id} className="overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{item.name}</CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 ml-1" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base line-clamp-3">{item.description}</CardDescription>
                    <div className="mt-4 text-sm text-muted-foreground">
                      <span className="font-medium">الفترة التاريخية:</span> {item.period}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href={`/heritage/${item.id}`}>
                        اكتشف المزيد
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
