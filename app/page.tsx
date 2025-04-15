import HeroSection from "@/components/hero-section"
import EhrAgnosticSection from "@/components/ehr-agnostic-section"
import GpBenefitsSection from "@/components/gp-benefits-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <GpBenefitsSection />
        <EhrAgnosticSection />
      </main>
      <Footer />
    </div>
  )
}
