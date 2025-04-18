"use client"

import { Cloud, CloudRain, Droplets, Sun, Thermometer, Wind } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface WeatherDay {
  day: string
  date: string
  temp: {
    max: number
    min: number
  }
  condition: "sunny" | "cloudy" | "rainy" | "partly-cloudy"
  humidity: number
  windSpeed: number
  precipitation: number
}

interface CityWeatherProps {
  cityName: string
  currentWeather: {
    temp: number
    condition: "sunny" | "cloudy" | "rainy" | "partly-cloudy"
    humidity: number
    windSpeed: number
  }
  forecast: WeatherDay[]
}

export function CityWeather({ cityName, currentWeather, forecast }: CityWeatherProps) {
  const getWeatherIcon = (condition: string, size = 6) => {
    switch (condition) {
      case "sunny":
        return <Sun className={`h-${size} w-${size} text-amber-500`} />
      case "cloudy":
        return <Cloud className={`h-${size} w-${size} text-gray-500`} />
      case "rainy":
        return <CloudRain className={`h-${size} w-${size} text-blue-500`} />
      case "partly-cloudy":
        return (
          <div className="relative">
            <Sun className={`h-${size} w-${size} text-amber-500`} />
            <Cloud className={`h-${size} w-${size} text-gray-500 absolute -bottom-1 -right-1`} />
          </div>
        )
      default:
        return <Sun className={`h-${size} w-${size} text-amber-500`} />
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>الطقس في {cityName}</CardTitle>
        <CardDescription>توقعات الطقس لمدة 7 أيام</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="current">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="current">الطقس الحالي</TabsTrigger>
            <TabsTrigger value="forecast">توقعات الأسبوع</TabsTrigger>
          </TabsList>
          <TabsContent value="current" className="pt-4">
            <div className="flex flex-col items-center md:flex-row md:justify-between gap-6 p-4">
              <div className="flex flex-col items-center">
                {getWeatherIcon(currentWeather.condition, 16)}
                <div className="mt-4 text-4xl font-bold">{currentWeather.temp}°</div>
              </div>
              <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                <div className="flex items-center gap-2">
                  <Thermometer className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">درجة الحرارة</div>
                    <div className="font-medium">{currentWeather.temp}° مئوية</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Droplets className="h-5 w-5 text-blue-500" />
                  <div>
                    <div className="text-sm text-muted-foreground">الرطوبة</div>
                    <div className="font-medium">{currentWeather.humidity}%</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Wind className="h-5 w-5 text-gray-500" />
                  <div>
                    <div className="text-sm text-muted-foreground">سرعة الرياح</div>
                    <div className="font-medium">{currentWeather.windSpeed} كم/س</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="forecast" className="pt-4">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {forecast.map((day, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="p-3 text-center bg-muted">
                    <CardTitle className="text-sm font-medium">{day.day}</CardTitle>
                    <CardDescription className="text-xs">{day.date}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-3 text-center">
                    <div className="flex justify-center mb-2">{getWeatherIcon(day.condition, 6)}</div>
                    <div className="flex justify-center gap-2 text-sm">
                      <span className="font-medium">{day.temp.max}°</span>
                      <span className="text-muted-foreground">{day.temp.min}°</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
