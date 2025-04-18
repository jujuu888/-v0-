import { EventCard } from "@/components/event-card"

// Mock data for events
const events = [
  {
    id: "1",
    title: "مهرجان الجنادرية الثقافي",
    description: "مهرجان تراثي وثقافي سنوي يقام في الرياض، يعرض التراث السعودي والفنون الشعبية والحرف اليدوية.",
    date: "15 يناير 2024",
    time: "10:00 صباحاً - 10:00 مساءً",
    location: "الرياض",
    image: "/placeholder.svg?height=400&width=600&text=مهرجان+الجنادرية",
    category: "ثقافي",
  },
  {
    id: "2",
    title: "موسم الرياض",
    description:
      "سلسلة من الفعاليات الترفيهية والثقافية التي تقام في مدينة الرياض، تشمل حفلات موسيقية ومعارض فنية وأنشطة رياضية.",
    date: "1 فبراير 2024",
    time: "4:00 مساءً - 12:00 صباحاً",
    location: "الرياض",
    image: "/placeholder.svg?height=400&width=600&text=موسم+الرياض",
    category: "ترفيهي",
  },
  {
    id: "3",
    title: "مهرجان الورد الطائفي",
    description: "مهرجان سنوي يقام في الطائف للاحتفال بموسم الورد الطائفي وصناعة العطور المحلية.",
    date: "10 أبريل 2024",
    time: "9:00 صباحاً - 6:00 مساءً",
    location: "الطائف",
    image: "/placeholder.svg?height=400&width=600&text=مهرجان+الورد+الطائفي",
    category: "ثقافي",
  },
  {
    id: "4",
    title: "رالي داكار السعودية",
    description: "سباق سيارات صحراوي دولي يقام في المملكة العربية السعودية، يجذب متسابقين من جميع أنحاء العالم.",
    date: "5 يناير 2024",
    time: "8:00 صباحاً - 5:00 مساءً",
    location: "مناطق متعددة",
    image: "/placeholder.svg?height=400&width=600&text=رالي+داكار",
    category: "رياضي",
  },
  {
    id: "5",
    title: "معرض الرياض الدولي للكتاب",
    description: "معرض سنوي للكتب يقام في الرياض، يضم دور نشر محلية وعالمية وفعاليات ثقافية متنوعة.",
    date: "20 مارس 2024",
    time: "10:00 صباحاً - 10:00 مساءً",
    location: "الرياض",
    image: "/placeholder.svg?height=400&width=600&text=معرض+الكتاب",
    category: "ثقافي",
  },
  {
    id: "6",
    title: "مهرجان البحر الأحمر السينمائي الدولي",
    description: "مهرجان سينمائي دولي يقام في جدة، يعرض أفلاماً من مختلف أنحاء العالم ويستضيف نجوم السينما.",
    date: "1 ديسمبر 2024",
    time: "6:00 مساءً - 12:00 صباحاً",
    location: "جدة",
    image: "/placeholder.svg?height=400&width=600&text=مهرجان+البحر+الأحمر+السينمائي",
    category: "فني",
  },
]

export function EventsList() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
    </div>
  )
}
