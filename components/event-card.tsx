import Image from "next/image"
import Link from "next/link"
import { CalendarIcon, MapPinIcon, ClockIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface EventCardProps {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  image: string
  category: string
}

export function EventCard({ id, title, description, date, time, location, image, category }: EventCardProps) {
  return (
    <Link href={`/events/${id}`}>
      <div className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image || `/placeholder.svg?height=400&width=600`}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute right-2 top-2">
            <Badge className="bg-emerald-500 hover:bg-emerald-600">{category}</Badge>
          </div>
        </div>
        <div className="p-4">
          <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
          <p className="mb-4 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
          <div className="flex flex-col space-y-2 text-sm">
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <ClockIcon className="mr-2 h-4 w-4" />
              <span>{time}</span>
            </div>
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <MapPinIcon className="mr-2 h-4 w-4" />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
