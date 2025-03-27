import { Navbar } from "@/components/ui/navbar"
import { HeroSection } from "@/components/sections/hero"
import { FeaturesSection } from "@/components/sections/features"
import { WhyChooseSection } from "@/components/sections/why-choose"
import { PricingSection } from "@/components/sections/pricing"
import { FaqSection } from "@/components/sections/faq"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { Footer } from "@/components/ui/footer"
import AlphaVantage  from "@/components/sections/AlphaVantage" 

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <WhyChooseSection />
        <PricingSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  )
}
