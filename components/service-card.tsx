import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface ServiceCardProps {
  id: string
  title: string
  description: string
  image: string
  category: string
  price?: string
}

export function ServiceCard({ id, title, description, image, category, price }: ServiceCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || `/placeholder.svg?height=400&width=600`}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute right-2 top-2">
          <Badge className="bg-blue-500 hover:bg-blue-600">{category}</Badge>
        </div>
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
        <p className="mb-4 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
        {price && <div className="mb-4 text-lg font-semibold text-emerald-600 dark:text-emerald-400">{price}</div>}
        <Link href={`#service-${id}`}>
          <div className="inline-flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-600 dark:hover:bg-blue-700">
            عرض التفاصيل
          </div>
        </Link>
      </div>
    </div>
  )
}
