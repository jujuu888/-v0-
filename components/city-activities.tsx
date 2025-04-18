import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Activity {
  id: string
  title: string
  description: string
  image: string
  category: string
  location: string
  duration: string
  price: string
  rating: number
  date?: string
  time?: string
}

interface CityActivitiesProps {
  cityName: string
  activities: Activity[]
  events: Activity[]
}

export function CityActivities({ cityName, activities, events }: CityActivitiesProps) {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="activities">
        <TabsList className="w-full">
          <TabsTrigger value="activities" className="flex-1">
            الأنشطة السياحية
          </TabsTrigger>
          <TabsTrigger value="events" className="flex-1">
            الفعاليات القادمة
          </TabsTrigger>
        </TabsList>
        <TabsContent value="activities" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity) => (
              <Card key={activity.id} className="overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge>{activity.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-1">{activity.title}</CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 ml-1" />
                    <span>{activity.location}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-2">{activity.description}</CardDescription>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{activity.duration}</span>
                    </div>
                    <div className="font-medium">{activity.price}</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/activities/${activity.id}`}>عرض التفاصيل</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="events" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary">{event.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-1">{event.title}</CardTitle>
                  <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 ml-1" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 ml-1" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 ml-1" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-2">{event.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/events/${event.id}`}>التفاصيل والحجز</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
