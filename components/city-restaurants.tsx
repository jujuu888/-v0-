import Image from "next/image"
import Link from "next/link"
import { Clock, MapPin, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Restaurant {
  id: string
  name: string
  description: string
  image: string
  location: string
  cuisine: string
  priceRange: string
  rating: number
  openingHours: string
}

interface CityRestaurantsProps {
  cityName: string
  restaurants: Restaurant[]
}

export function CityRestaurants({ cityName, restaurants }: CityRestaurantsProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">المطاعم في {cityName}</h2>
          <p className="text-muted-foreground">استمتع بتجربة أشهى المأكولات المحلية والعالمية</p>
        </div>
        <Button variant="outline">عرض جميع المطاعم</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
          <Card key={restaurant.id} className="overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={restaurant.image || "/placeholder.svg"}
                alt={restaurant.name}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute top-3 right-3">
                <Badge>{restaurant.cuisine}</Badge>
              </div>
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="line-clamp-1">{restaurant.name}</CardTitle>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                  <span className="font-medium">{restaurant.rating}</span>
                </div>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 ml-1" />
                <span>{restaurant.location}</span>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="line-clamp-2 mb-4">{restaurant.description}</CardDescription>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{restaurant.openingHours}</span>
                </div>
                <Badge variant="outline">{restaurant.priceRange}</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/restaurants/${restaurant.id}`}>عرض القائمة والحجز</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
