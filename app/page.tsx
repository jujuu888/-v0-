import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero-section"
import { CitiesSection } from "@/components/cities-section"
import { HeritageSection } from "@/components/heritage-section"
import { EventsSection } from "@/components/events-section"
import { FeaturesSection } from "@/components/features-section"
import { AiGuideSection } from "@/components/ai-guide-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { NewsletterSection } from "@/components/newsletter-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <CitiesSection />
        <HeritageSection />
        <EventsSection />
        <FeaturesSection />
        <AiGuideSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <SiteFooter />
    </div>
  )
}
