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
      "No long-term commitments",
    ],
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
      "Monthly performance reviews",
    ],
    isPopular: true,
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
      "24/7 priority customer support",
    ],
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8fee5] to-[#f4f8e2]" />

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <Badge
            variant="outline"
            className="bg-[#F4B659]/90 hover:bg-[#F4B659] border-none text-zinc-900 mb-4 px-4 py-1 text-sm font-medium uppercase tracking-wide"
          >
            Pricing
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-800 tracking-tight">
            Choose the <span className="text-[#F4B659]">Perfect</span> Plan
          </h2>
          <p className="text-zinc-600 max-w-2xl text-lg leading-relaxed">
            We offer flexible pricing plans that align with where your business stands today and where it's headed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-zinc-100/50 hover:border-zinc-200 transition-all duration-300 hover:shadow-xl"
            >
              {plan.isPopular && (
                <div className="absolute -top-3 right-4">
                  <Badge className="bg-[#F4B659] text-zinc-900 border-none px-3 py-1 font-medium">MOST POPULAR</Badge>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-zinc-800">{plan.name}</h3>
                <div className="text-3xl font-bold mb-3 text-zinc-900">{plan.price}</div>
                <p className="text-zinc-600 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-zinc-600">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full bg-zinc-900 text-white hover:bg-zinc-800 group transition-all duration-300">
                Get Started
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>

              <p className="text-center text-zinc-500 text-xs mt-4 italic">*No commitment – cancel anytime*</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
