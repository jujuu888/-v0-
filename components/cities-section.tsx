import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const cities = [
  {
    id: "riyadh",
    name: "الرياض",
    description: "عاصمة المملكة العربية السعودية ومركز الأعمال والثقافة، تجمع بين التراث العريق والحداثة المعاصرة.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["مدينة رئيسية", "تسوق", "ترفيه"],
  },
  {
    id: "jeddah",
    name: "جدة",
    description: "بوابة الحرمين الشريفين وعروس البحر الأحمر، تتميز بشواطئها الخلابة وأسواقها التاريخية.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["ساحلية", "تاريخية", "تسوق"],
  },
  {
    id: "alula",
    name: "العلا",
    description:
      "متحف مفتوح يضم آثاراً تاريخية فريدة ومناظر طبيعية خلابة، موطن مدائن صالح أول موقع سعودي مسجل في اليونسكو.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["تراثية", "طبيعية", "ثقافية"],
  },
  {
    id: "taif",
    name: "الطائف",
    description: "مدينة الورد والفاكهة، تتميز بمناخها المعتدل وطبيعتها الخضراء الخلابة.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["جبلية", "طبيعية", "ترفيهية"],
  },
  {
    id: "abha",
    name: "أبها",
    description: "عروس الجبل وعاصمة السياحة في المملكة، تتميز بمناخها المعتدل ومناظرها الطبيعية الساحرة.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["جبلية", "طبيعية", "تراثية"],
  },
  {
    id: "dammam",
    name: "الدمام",
    description: "عاصمة المنطقة الشرقية وبوابة المملكة على الخليج العربي، تتميز بشواطئها وحدائقها الجميلة.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["ساحلية", "صناعية", "ترفيهية"],
  },
]

export function CitiesSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">اكتشف مدن المملكة</h2>
            <p className="text-muted-foreground max-w-2xl">
              تعرف على أجمل المدن السياحية في المملكة العربية السعودية وما تقدمه من تجارب فريدة ومعالم مميزة
            </p>
          </div>
          <Button variant="outline" asChild className="mt-4 md:mt-0">
            <Link href="/cities">
              عرض جميع المدن
              <ChevronLeft className="mr-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
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
                <CardTitle>{city.name}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {city.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{city.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link href={`/cities/${city.id}`}>
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
  )
}
