import Image from "next/image"
import { CalendarIcon, MapPinIcon, ClockIcon, UsersIcon, InfoIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface EventDetailProps {
  id: string
  title: string
  description: string
  longDescription?: string
  date: string
  time: string
  location: string
  image: string
  category: string
  organizer?: string
  ticketInfo?: string
  gallery?: string[]
}

export function EventDetail({
  title,
  description,
  longDescription,
  date,
  time,
  location,
  image,
  category,
  organizer,
  ticketInfo,
  gallery = [],
}: EventDetailProps) {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-6 overflow-hidden rounded-xl">
        <div className="relative h-[400px] w-full">
          <Image
            src={image || `/placeholder.svg?height=800&width=1200`}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute right-4 top-4">
            <Badge className="bg-emerald-500 px-3 py-1 text-lg hover:bg-emerald-600">{category}</Badge>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">{title}</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">{description}</p>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-4 rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950 md:grid-cols-2">
        <div className="flex items-center">
          <CalendarIcon className="mr-3 h-6 w-6 text-emerald-500" />
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">التاريخ</p>
            <p className="text-gray-900 dark:text-white">{date}</p>
          </div>
        </div>
        <div className="flex items-center">
          <ClockIcon className="mr-3 h-6 w-6 text-emerald-500" />
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">الوقت</p>
            <p className="text-gray-900 dark:text-white">{time}</p>
          </div>
        </div>
        <div className="flex items-center">
          <MapPinIcon className="mr-3 h-6 w-6 text-emerald-500" />
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">الموقع</p>
            <p className="text-gray-900 dark:text-white">{location}</p>
          </div>
        </div>
        {organizer && (
          <div className="flex items-center">
            <UsersIcon className="mr-3 h-6 w-6 text-emerald-500" />
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">المنظم</p>
              <p className="text-gray-900 dark:text-white">{organizer}</p>
            </div>
          </div>
        )}
      </div>

      {longDescription && (
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">تفاصيل الفعالية</h2>
          <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <p className="whitespace-pre-line text-gray-700 dark:text-gray-300">{longDescription}</p>
          </div>
        </div>
      )}

      {ticketInfo && (
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">معلومات التذاكر</h2>
          <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <div className="flex items-start">
              <InfoIcon className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-emerald-500" />
              <p className="text-gray-700 dark:text-gray-300">{ticketInfo}</p>
            </div>
          </div>
        </div>
      )}

      {gallery && gallery.length > 0 && (
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">معرض الصور</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {gallery.map((img, index) => (
              <div key={index} className="relative h-48 overflow-hidden rounded-lg">
                <Image
                  src={img || `/placeholder.svg?height=300&width=400&text=صورة+${index + 1}`}
                  alt={`صورة ${index + 1} للفعالية`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
