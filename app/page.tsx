import dynamic from "next/dynamic";
import  Header  from "@/components/header"
import  HeroSection  from "@/components/hero-section"
// import FeatureSection  from "@/components/feature-section"
// import  GuideSection  from "@/components/guide-section"
// import  CompaniesSection  from "@/components/companies-section"
// import  ContactSection  from "@/components/contact-section"
// import  Footer  from "@/components/footer"

const FeatureSection = dynamic(() => import("@/components/feature-section"));
const GuideSection = dynamic(() => import("@/components/guide-section"));
const CompaniesSection = dynamic(() => import("@/components/companies-section"));
const ContactSection = dynamic(() => import("@/components/contact-section"));
const Footer = dynamic(() => import("@/components/footer"));


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
