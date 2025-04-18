import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Coffee, MapPin, Star, Utensils, Wifi } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Amenity {
  icon: React.ReactNode
  name: string
}

interface Hotel {
  id: string
  name: string
  description: string
  image: string
  location: string
  price: string
  rating: number
  amenities: string[]
}

interface CityHotelsProps {
  cityName: string
  hotels: Hotel[]
}

export function CityHotels({ cityName, hotels }: CityHotelsProps) {
  const amenityIcons: Record<string, React.ReactNode> = {
    wifi: <Wifi className="h-4 w-4" />,
    breakfast: <Coffee className="h-4 w-4" />,
    restaurant: <Utensils className="h-4 w-4" />,
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">أماكن الإقامة في {cityName}</h2>
          <p className="text-muted-foreground">اختر من بين أفضل الفنادق والشقق المفروشة في المدينة</p>
        </div>
        <Button variant="outline">عرض جميع أماكن الإقامة</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <Card key={hotel.id} className="overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={hotel.image || "/placeholder.svg"}
                alt={hotel.name}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="line-clamp-1">{hotel.name}</CardTitle>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                  <span className="font-medium">{hotel.rating}</span>
                </div>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 ml-1" />
                <span>{hotel.location}</span>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="line-clamp-2 mb-4">{hotel.description}</CardDescription>
              <div className="flex flex-wrap gap-2">
                {hotel.amenities.map((amenity) => (
                  <Badge key={amenity} variant="outline" className="flex items-center gap-1">
                    {amenityIcons[amenity] || null}
                    {amenity}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div>
                <div className="text-sm text-muted-foreground">تبدأ من</div>
                <div className="font-bold text-lg">{hotel.price}</div>
              </div>
              <Button asChild>
                <Link href={`/hotels/${hotel.id}`}>عرض التفاصيل</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
