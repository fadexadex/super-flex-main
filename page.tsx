import { FeatureSection } from "@/components/feature-section"
import { StatsSection } from "@/components/stats-section"
import { Hero } from "@/components/Hero"
import { Footer } from "@/components/footer"
import { RoadmapSection } from "@/components/roadmap-section"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#efefef] relative overflow-hidden">
      <Hero />
      <FeatureSection />
      <RoadmapSection />
      <StatsSection />
      <Footer />
    </div>
  )
}
