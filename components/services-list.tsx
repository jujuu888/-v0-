import { ServiceCard } from "@/components/service-card"

// Mock data for services
const services = [
  {
    id: "1",
    title: "جولات سياحية مع مرشد",
    description: "استكشف أجمل المعالم السياحية برفقة مرشدين سياحيين محترفين يتحدثون لغات متعددة.",
    image: "/placeholder.svg?height=400&width=600&text=جولات+سياحية",
    category: "جولات",
    price: "من 200 ريال",
  },
  {
    id: "2",
    title: "تأجير سيارات فاخرة",
    description: "مجموعة متنوعة من السيارات الفاخرة والاقتصادية لتنقلاتك داخل المدن السعودية.",
    image: "/placeholder.svg?height=400&width=600&text=تأجير+سيارات",
    category: "نقل",
    price: "من 150 ريال / يوم",
  },
  {
    id: "3",
    title: "حجز فنادق",
    description: "خدمة حجز فنادق بأسعار تنافسية في جميع مدن المملكة، مع خيارات متنوعة تناسب جميع الميزانيات.",
    image: "/placeholder.svg?height=400&width=600&text=حجز+فنادق",
    category: "إقامة",
    price: "من 300 ريال / ليلة",
  },
  {
    id: "4",
    title: "رحلات صحراوية",
    description: "استمتع بتجربة فريدة في الصحراء السعودية مع أنشطة متنوعة مثل ركوب الجمال والتخييم تحت النجوم.",
    image: "/placeholder.svg?height=400&width=600&text=رحلات+صحراوية",
    category: "مغامرات",
    price: "من 500 ريال",
  },
  {
    id: "5",
    title: "جولات تسوق",
    description: "جولات مخصصة لمحبي التسوق في أشهر المولات والأسواق التقليدية في المملكة.",
    image: "/placeholder.svg?height=400&width=600&text=جولات+تسوق",
    category: "تسوق",
    price: "من 150 ريال",
  },
  {
    id: "6",
    title: "تنظيم رحلات عائلية",
    description: "خدمة متكاملة لتنظيم رحلات عائلية تشمل النقل والإقامة والأنشطة المناسبة لجميع أفراد العائلة.",
    image: "/placeholder.svg?height=400&width=600&text=رحلات+عائلية",
    category: "عائلي",
    price: "من 1000 ريال",
  },
]

export function ServicesList() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </div>
  )
}
