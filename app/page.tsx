import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"
import { GuideSection } from "@/components/guide-section"
import { CompaniesSection } from "@/components/companies-section"
// import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeatureSection />
      <GuideSection />
      <CompaniesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
