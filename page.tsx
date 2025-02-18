import { FeatureSection } from "@/components/feature-section"
import { AdvantagesSection } from "./components/advantages-section"
import { StatsSection } from "@/components/stats-section"
import { Hero } from "@/components/Hero"
import { Footer } from "@/components/footer"
import { RoadmapSection } from "@/components/roadmap-section"
import { Navbar } from "@/components/Navbar"
import { PartnersSection } from "@/components/PartnersSection"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#efefef] relative overflow-hidden">
      <Navbar />
      <Hero />
      <section id="features">
        <FeatureSection />
      </section>
      <section id="advantages">
        <AdvantagesSection />
      </section>
      <section id="roadmap">
        <RoadmapSection />
      </section>
      <PartnersSection />
      <section id="stats">
        <StatsSection />
      </section>
      <Footer />
    </div>
  )
}
