"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { FlipText } from "./FlipText"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.3,
      }}
      className={`fixed top-6 left-32 right-32 z-50 transition-all duration-300 rounded-xl shadow-xl bg-white/80 backdrop-blur-md`}
    >
      <div className={`container mx-auto px-8 py-3 flex items-center justify-between transition-all duration-300 gap-12`}>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">G</span>
          </div>
          <span className="text-black font-bold text-lg">Grow Vault Builder</span>
        </div>

        <div className={`hidden md:flex items-center transition-all duration-300 gap-12`}>
          <Link href="#features" className="relative">
            <FlipText 
              text="Features" 
              className="text-black text-sm font-medium"
            />
          </Link>
          <Link href="#roadmap" className="relative">
            <FlipText 
              text="Roadmap" 
              className="text-black text-sm font-medium"
            />
          </Link>
          <Link href="#stats" className="relative">
            <FlipText 
              text="Stats" 
              className="text-black text-sm font-medium"
            />
          </Link>
        </div>

        <Button 
          className="bg-black text-white hover:bg-black/90 rounded-lg px-5 py-2.5 text-[15px] font-medium group"
        >
          Start Saving
          <motion.span
            className="ml-2 inline-block"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.1 }}
          >
            <ArrowRight className="h-4 w-4" />
          </motion.span>
        </Button>
      </div>
    </motion.nav>
  )
}
