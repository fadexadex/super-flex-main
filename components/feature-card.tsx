import { Star } from "lucide-react"
import { motion } from "framer-motion"

interface FeatureCardProps {
  variant?: "black" | "white" | "orange"
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
  const getBackgroundColor = () => {
    switch(variant) {
      case "black":
        return "bg-black text-white"
      case "orange":
        return "bg-[#F4B659] text-black"
      default:
        return "bg-white text-black"
    }
  }

  return (
    <motion.div
      className={`w-full h-full mr-8 ${getBackgroundColor()} rounded-3xl p-8 shadow-xl transition-all duration-300`}
      style={{ transform }}
      whileHover={{ y: -10 }}
    >
      <div
        className={`${
          variant === "black" ? "bg-[#f5e876]" : 
          variant === "orange" ? "bg-white" : "bg-gray-200"
        } rounded-full p-3 w-12 h-12 flex items-center justify-center mb-auto`}
      >
        <Star className={`w-6 h-6 ${
          variant === "black" ? "text-black" : 
          variant === "orange" ? "text-[#f4b659]" : 
          "text-gray-600"
        }`} />
      </div>
      <div className="mt-auto space-y-3">
        <h4 className="text-xl font-medium">{title}</h4>
        <p className={`text-sm ${
          variant === "black" ? "text-gray-300" : 
          variant === "orange" ? "text-black/80" : 
          "text-gray-600"
        }`}>
          {description}
        </p>
      </div>
    </motion.div>
  )
}
