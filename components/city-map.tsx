"use client"

import { useState } from "react"
import { MapPin, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Attraction {
  id: string
  name: string
  category: string
  description: string
  location: {
    lat: number
    lng: number
  }
  address: string
}

interface CityMapProps {
  cityName: string
  attractions: Attraction[]
}

export function CityMap({ cityName, attractions }: CityMapProps) {
  const [activeTab, setActiveTab] = useState("all")
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null)

  // فئات المعالم السياحية
  const categories = [
    { id: "all", name: "الكل" },
    { id: "historical", name: "تاريخي" },
    { id: "cultural", name: "ثقافي" },
    { id: "entertainment", name: "ترفيهي" },
    { id: "shopping", name: "تسوق" },
    { id: "nature", name: "طبيعي" },
  ]

  // تصفية المعالم حسب الفئة المختارة
  const filteredAttractions =
    activeTab === "all" ? attractions : attractions.filter((attraction) => attraction.category === activeTab)

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3 space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>المعالم السياحية</CardTitle>
              <CardDescription>اكتشف أبرز المعالم السياحية في {cityName}</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-3 mb-4">
                  {categories.slice(0, 3).map((category) => (
                    <TabsTrigger key={category.id} value={category.id}>
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                <TabsList className="grid grid-cols-3">
                  {categories.slice(3, 6).map((category) => (
                    <TabsTrigger key={category.id} value={category.id}>
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <TabsContent value="all" className="mt-4 space-y-2">
                  {filteredAttractions.map((attraction) => (
                    <Button
                      key={attraction.id}
                      variant="ghost"
                      className="w-full justify-start text-right h-auto py-3 px-4"
                      onClick={() => setSelectedAttraction(attraction)}
                    >
                      <div className="flex items-start gap-2">
                        <MapPin className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <div className="font-medium">{attraction.name}</div>
                          <div className="text-sm text-muted-foreground">{attraction.category}</div>
                        </div>
                      </div>
                    </Button>
                  ))}
                </TabsContent>

                {categories.slice(1).map((category) => (
                  <TabsContent key={category.id} value={category.id} className="mt-4 space-y-2">
                    {filteredAttractions.length > 0 ? (
                      filteredAttractions.map((attraction) => (
                        <Button
                          key={attraction.id}
                          variant="ghost"
                          className="w-full justify-start text-right h-auto py-3 px-4"
                          onClick={() => setSelectedAttraction(attraction)}
                        >
                          <div className="flex items-start gap-2">
                            <MapPin className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                              <div className="font-medium">{attraction.name}</div>
                              <div className="text-sm text-muted-foreground">{attraction.category}</div>
                            </div>
                          </div>
                        </Button>
                      ))
                    ) : (
                      <div className="text-center py-8 text-muted-foreground">لا توجد معالم في هذه الفئة</div>
                    )}
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>

          {selectedAttraction && (
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>{selectedAttraction.name}</CardTitle>
                <CardDescription>{selectedAttraction.category}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>{selectedAttraction.description}</p>
                <div className="text-sm">
                  <div className="font-medium">العنوان:</div>
                  <div className="text-muted-foreground">{selectedAttraction.address}</div>
                </div>
                <Button className="w-full gap-2">
                  <Navigation className="h-4 w-4" />
                  الاتجاهات
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="w-full md:w-2/3 bg-muted rounded-lg overflow-hidden">
          <div className="relative aspect-[4/3] md:aspect-auto md:h-full min-h-[400px]">
            {/* هنا يمكن دمج خريطة تفاعلية مثل Google Maps أو Mapbox */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
                <p className="text-lg font-medium">خريطة تفاعلية</p>
                <p>هنا يمكن عرض خريطة تفاعلية للمعالم السياحية في {cityName}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
