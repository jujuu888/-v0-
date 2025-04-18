"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Review {
  id: string
  user: {
    name: string
    avatar: string
  }
  rating: number
  date: string
  comment: string
}

interface CityReviewsProps {
  cityName: string
  reviews: Review[]
  averageRating: number
  totalReviews: number
}

export function CityReviews({ cityName, reviews, averageRating, totalReviews }: CityReviewsProps) {
  const [showAll, setShowAll] = useState(false)

  const displayedReviews = showAll ? reviews : reviews.slice(0, 3)

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">تقييمات الزوار</h2>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-5 w-5 ${
                    star <= Math.round(averageRating) ? "fill-amber-500 text-amber-500" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="font-medium">{averageRating.toFixed(1)}</span>
            <span className="text-muted-foreground">({totalReviews} تقييم)</span>
          </div>
        </div>
        <Button>إضافة تقييم</Button>
      </div>

      <div className="space-y-4">
        {displayedReviews.map((review) => (
          <Card key={review.id}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={review.user.avatar || "/placeholder.svg"} alt={review.user.name} />
                    <AvatarFallback>{review.user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">{review.user.name}</CardTitle>
                    <CardDescription>{review.date}</CardDescription>
                  </div>
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${star <= review.rating ? "fill-amber-500 text-amber-500" : "text-gray-300"}`}
                    />
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>{review.comment}</p>
            </CardContent>
          </Card>
        ))}

        {reviews.length > 3 && (
          <div className="text-center">
            <Button variant="outline" onClick={() => setShowAll(!showAll)}>
              {showAll ? "عرض أقل" : `عرض المزيد (${reviews.length - 3})`}
            </Button>
          </div>
        )}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>أضف تقييمك</CardTitle>
          <CardDescription>شاركنا تجربتك في زيارة {cityName}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="mb-2 font-medium">التقييم</div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Button key={star} variant="ghost" size="icon" className="h-8 w-8">
                  <Star className="h-6 w-6 text-gray-300 hover:text-amber-500 hover:fill-amber-500" />
                </Button>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-2 font-medium">التعليق</div>
            <Textarea placeholder="اكتب تعليقك هنا..." className="min-h-[120px]" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>إرسال التقييم</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
