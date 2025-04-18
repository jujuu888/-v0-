"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface CityGalleryProps {
  images: {
    src: string
    alt: string
  }[]
}

export function CityGallery({ images }: CityGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setIsOpen(true)
  }

  const closeLightbox = () => {
    setIsOpen(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.slice(0, 6).map((image, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
            {index === 5 && images.length > 6 && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <span className="text-white text-xl font-bold">+{images.length - 6}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
          <div className="relative bg-black rounded-lg overflow-hidden">
            <div className="relative aspect-video">
              <Image
                src={images[currentIndex].src || "/placeholder.svg"}
                alt={images[currentIndex].alt}
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute top-4 right-4">
              <Button variant="ghost" size="icon" onClick={closeLightbox} className="text-white">
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <Button variant="ghost" size="icon" onClick={goToPrevious} className="text-white">
                <ChevronRight className="h-8 w-8" />
              </Button>
            </div>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <Button variant="ghost" size="icon" onClick={goToNext} className="text-white">
                <ChevronLeft className="h-8 w-8" />
              </Button>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 px-4 py-2 rounded-full text-white text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
