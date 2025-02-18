"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

interface FlipTextProps {
  text: string
  className?: string
}

export function FlipText({ text, className = "" }: FlipTextProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        {!isHovered ? (
          <motion.span
            key="normal"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`block ${className}`}
          >
            {text}
          </motion.span>
        ) : (
          <motion.span
            key="hovered"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`block ${className}`}
          >
            {text}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  )
}
