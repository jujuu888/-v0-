"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function HeroSection() {
  const [searchType, setSearchType] = useState("cities")

  return (
    <div className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
      </div>
      <div className="container relative h-full flex flex-col items-center justify-center text-center text-white space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight">اكتشف روعة المملكة العربية السعودية</h1>
        <p className="text-lg md:text-xl max-w-2xl text-white/90">
          دليلك الشامل لاستكشاف أجمل المدن والمعالم السياحية والفعاليات في المملكة
        </p>
        <div className="w-full max-w-3xl bg-white/10 backdrop-blur-md rounded-lg p-4 mt-8">
          <div className="flex flex-col md:flex-row gap-4">
            <Select value={searchType} onValueChange={setSearchType}>
              <SelectTrigger className="bg-white/20 border-0 text-white">
                <SelectValue placeholder="نوع البحث" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cities">المدن</SelectItem>
                <SelectItem value="heritage">المواقع التراثية</SelectItem>
                <SelectItem value="events">الفعاليات</SelectItem>
                <SelectItem value="services">الخدمات السياحية</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex-1 relative">
              <Input
                placeholder={
                  searchType === "cities"
                    ? "ابحث عن مدينة..."
                    : searchType === "heritage"
                      ? "ابحث عن موقع تراثي..."
                      : searchType === "events"
                        ? "ابحث عن فعالية..."
                        : "ابحث عن خدمة سياحية..."
                }
                className="bg-white/20 border-0 text-white placeholder:text-white/70 h-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
            </div>
            <Button className="bg-primary hover:bg-primary/90">بحث</Button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
            الرياض
          </Button>
          <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
            جدة
          </Button>
          <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
            العلا
          </Button>
          <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
            الطائف
          </Button>
          <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
            أبها
          </Button>
        </div>
      </div>
    </div>
  )
}
