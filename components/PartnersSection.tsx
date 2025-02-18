"use client"

import { useRef, useEffect } from "react"
import { Waves, ArrowUpRight, Activity, Boxes } from "lucide-react"

const partners = [
  { name: "Bengee", Icon: Waves },
  { name: "Fadex", Icon: ArrowUpRight },
  { name: "LanAY", Icon: Activity },
  { name: "Believe Studios", Icon: Boxes },
]

export function PartnersSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (!scrollElement) return

    const scrollWidth = scrollElement.scrollWidth
    const animationDuration = scrollWidth / 50 // Adjust speed as needed

    scrollElement.style.setProperty("--scroll-width", `${scrollWidth}px`)
    scrollElement.style.setProperty("--animation-duration", `${animationDuration}s`)
  }, [])

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-black">Our Partners</h2>
      </div>

      <div className="relative mx-auto max-w-[80vw]">
        {/* Scrolling content with mask */}
        <div
          className="overflow-hidden relative"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          }}
        >
          <div
            ref={scrollRef}
            className="flex gap-32 items-center whitespace-nowrap animate-scroll"
            style={{
              animation: "scroll var(--animation-duration) linear infinite",
            }}
          >
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div key={index} className="flex items-center justify-center min-w-[220px] gap-6">
                <partner.Icon className="w-12 h-12 text-muted-foreground" />
                <span className="text-muted-foreground text-xl font-medium">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

