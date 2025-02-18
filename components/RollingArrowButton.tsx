"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Zap } from "lucide-react" // Import the flash icon

interface RollingArrowButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function RollingArrowButton({ children, className = "", onClick }: RollingArrowButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }} // Scale the entire button on hover
      className="inline-block"
    >
      <Button 
        className={`group relative px-4 py-2 ${className}`} // Further reduced border radius and padding
        onClick={onClick}
      >
        {children}
        <motion.span
          className="ml-2 inline-block"
          initial={{ x: 0 }}
          whileHover={{ x: 5 }} // Move the icon slightly on hover
          transition={{ duration: 0.1 }} // Faster roll speed
        >
          <Zap className="h-4 w-4 group-hover:text-yellow-500" /> {/* Change icon color on hover */}
        </motion.span>
      </Button>
    </motion.div>
  )
}
