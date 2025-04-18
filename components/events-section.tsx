import Link from "next/link"
import Image from "next/image"
import { Calendar, ChevronLeft, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const events = [
  {
    id: "riyadh-season",
    name: "موسم الرياض",
    description: "أكبر موسم ترفيهي في المملكة، يضم مجموعة متنوعة من الفعاليات والعروض الترفيهية والثقافية.",
    image: "/placeholder.svg?height=400&width=600",
    location: "الرياض",
    date: "أكتوبر 2025 - مارس 2026",
    tags: ["ترفيه", "ثقافة", "تسوق"],
  },
  {
    id: "jeddah-season",
    name: "موسم جدة",
    description: "فعاليات متنوعة على شواطئ البحر الأحمر، تشمل عروضاً فنية وثقافية ورياضية.",
    image: "/placeholder.svg?height=400&width=600",
    location: "جدة",
    date: "يونيو - أغسطس 2025",
    tags: ["ترفيه", "رياضة", "بحرية"],
  },
  {
    id: "winter-tantora",
    name: "شتاء طنطورة",
    description: "مهرجان ثقافي وفني يقام في العلا، يجمع بين الموسيقى والفن والتراث في أجواء ساحرة.",
    image: "/placeholder.svg?height=400&width=600",
    location: "العلا",
    date: "ديسمبر 2025 - يناير 2026",
    tags: ["ثقافة", "موسيقى", "تراث"],
  },
]

export function EventsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">الفعاليات والمهرجانات</h2>
            <p className="text-muted-foreground max-w-2xl">
              استمتع بأبرز الفعاليات والمهرجانات في مختلف مناطق المملكة على مدار العام
            </p>
          </div>
          <Button variant="outline" asChild className="mt-4 md:mt-0">
            <Link href="/events">
              عرض جميع الفعاليات
              <ChevronLeft className="mr-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <Badge className="absolute top-3 right-3 z-10">قادم</Badge>
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
                <Button asChild>
                  <Link href={`/events/${event.id}`}>التفاصيل والحجز</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
