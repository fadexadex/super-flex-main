import { Star } from "lucide-react"
import { motion } from "framer-motion"

interface FeatureCardProps {
  variant?: "black" | "white"
  transform: string
  index: number
  title: string
  description: string
}

export function FeatureCard({
  variant = "white",
  transform,
  index,
  title,
  description
}: FeatureCardProps) {
  const isBlack = variant === "black"

  return (
    <motion.div
      className={`w-full h-full mr-8 ${  // Added mr-8 for right margin
        isBlack ? "bg-black text-white" : "bg-white text-black"
      } rounded-3xl p-8 shadow-xl transition-all duration-300`}
      style={{ transform }}
      whileHover={{ y: -10 }}
    >
      <div
        className={`${
          isBlack ? "bg-[#f5e876]" : "bg-gray-200"
        } rounded-full p-3 w-12 h-12 flex items-center justify-center mb-auto`}
      >
        <Star className={`w-6 h-6 ${isBlack ? "text-black" : "text-gray-600"}`} />
      </div>
      <div className="mt-auto space-y-3">
        <h4 className="text-xl font-medium">{title}</h4>
        <p className={`text-sm ${isBlack ? "text-gray-300" : "text-gray-600"}`}>
          {description}
        </p>
      </div>
    </motion.div>
  )
}
