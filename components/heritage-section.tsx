import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const heritageItems = [
  {
    id: "madain-saleh",
    name: "مدائن صالح",
    description: "أول موقع سعودي مسجل في قائمة التراث العالمي لليونسكو، يضم مقابر نبطية منحوتة في الصخر.",
    image: "/placeholder.svg?height=400&width=600",
    location: "العلا",
    tags: ["تراث عالمي", "آثار"],
  },
  {
    id: "diriyah",
    name: "الدرعية التاريخية",
    description: "العاصمة الأولى للدولة السعودية، تضم حي الطريف التاريخي المسجل في قائمة التراث العالمي.",
    image: "/placeholder.svg?height=400&width=600",
    location: "الرياض",
    tags: ["تراث عالمي", "عمارة طينية"],
  },
  {
    id: "jeddah-historical",
    name: "جدة التاريخية",
    description: "البلد القديمة في جدة، تضم مباني تاريخية فريدة بعمارتها التقليدية المميزة والرواشين الخشبية.",
    image: "/placeholder.svg?height=400&width=600",
    location: "جدة",
    tags: ["تراث عالمي", "عمارة تقليدية"],
  },
  {
    id: "rijal-almaa",
    name: "قرية رجال ألمع",
    description: "قرية تراثية تقع في منطقة عسير، تتميز بمبانيها الحجرية المرتفعة ذات الطراز المعماري الفريد.",
    image: "/placeholder.svg?height=400&width=600",
    location: "عسير",
    tags: ["قرى تراثية", "عمارة جبلية"],
  },
]

export function HeritageSection() {
  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">التراث والثقافة</h2>
            <p className="text-muted-foreground max-w-2xl">
              اكتشف روعة التراث السعودي العريق والمواقع التاريخية الفريدة التي تحكي قصة حضارة عريقة
            </p>
          </div>
          <Button variant="outline" asChild className="mt-4 md:mt-0">
            <Link href="/heritage">
              عرض جميع المواقع التراثية
              <ChevronLeft className="mr-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <CardHeader className="p-4">
                <CardTitle className="text-lg">{item.name}</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span>{item.location}</span>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <CardDescription className="line-clamp-3">{item.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex flex-col items-start gap-3">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button variant="link" asChild className="p-0 h-auto">
                  <Link href={`/heritage/${item.id}`}>
                    اكتشف المزيد
                    <ChevronLeft className="mr-1 h-4 w-4" />
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
