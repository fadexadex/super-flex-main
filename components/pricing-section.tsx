"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface PricingPlan {
  name: string
  price: string
  description: string
  features: string[]
  isPopular?: boolean
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Starter Plan",
    price: "$99/month",
    description: "Ideal for small businesses looking to streamline savings and boost efficiency effortlessly.",
    features: [
      "Core AI-powered savings features",
      "Real-time spending insights",
      "Basic customer support via email",
      "Access to standard reporting tools",
      "Monthly plan adjustments",
      "No long-term commitments"
    ]
  },
  {
    name: "Pro Plan",
    price: "$199/month",
    description: "Designed for growing teams that need advanced tools to maximize value and performance.",
    features: [
      "Advanced AI optimization",
      "Detailed analytics",
      "Priority support via chat and email",
      "Flexible, customizable plan options",
      "Multi-user access for teams",
      "Monthly performance reviews"
    ],
    isPopular: true
  },
  {
    name: "Enterprise Plan",
    price: "$299/month",
    description: "Perfect for large organizations seeking tailored solutions with dedicated support and features.",
    features: [
      "Tailored solutions for large-scale",
      "Dedicated account manager",
      "Full access to all premium features",
      "Enterprise-level security",
      "Customized analytics dashboards",
      "24/7 priority customer support"
    ]
  }
]

export function PricingSection() {
  return (
    <section className="py-24 bg-[#f8fee5]">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <Badge variant="outline" className="bg-[#e1ffa7] border-0 text-black mb-4">
            PRICING
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose the Perfect Plan
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            We offer flexible pricing plans that align with where your business stands today and where it's headed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white rounded-2xl p-8 shadow-lg"
            >
              {plan.isPopular && (
                <div className="absolute -top-3 right-4">
                  <Badge className="bg-[#e1ffa7] text-black border-0">
                    MOST POPULAR
                  </Badge>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-3">{plan.price}</div>
                <p className="text-muted-foreground text-sm">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className="w-full bg-black text-white hover:bg-black/90 group"
              >
                Get Started
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
              
              <p className="text-center text-muted-foreground text-xs mt-4 italic">
                *No commitment – cancel anytime*
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
