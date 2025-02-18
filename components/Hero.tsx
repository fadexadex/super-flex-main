"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <>
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between relative z-30">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-black rounded-xl shadow-md" />
          <div className="w-28 h-10 bg-white rounded-xl shadow-md" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["link", "link", "link", "link", "link"].map((item, index) => (
            <Link 
              key={index} 
              href="#" 
              className="text-black text-sm font-medium hover:opacity-70 transition-opacity"
            >
              {item}
            </Link>
          ))}
        </div>

        <Button className="bg-[#F7E353] text-black hover:bg-[#F7E353]/90 rounded-full px-6 py-2 text-sm font-medium">
        Start Saving
        </Button>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 pt-24 pb-32 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">
          Growvault 
            <br />
            Builder
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-md mx-auto mb-12">
            Smart savings 
            <br />
            Bigger rewards
          </p>
          <Button className="bg-black text-white hover:bg-black/90 rounded-full px-8 py-3 text-sm">
          Start Saving
          </Button>
        </motion.div>
      </main>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute w-[60px] h-[60px] top-[3%] left-[12%] md:top-[4%] md:left-[25%] md:w-[96px] md:h-[96px] bg-black rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute w-[80px] h-[80px] top-[7%] right-[80%] md:top-[8%] md:right-[84%] md:w-[164px] md:h-[164px] bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute w-[120px] h-[120px] top-[12%] left-[12%] md:top-[18%] md:left-[20%] md:w-[196px] md:h-[196px] bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute w-[80px] h-[80px] top-[7%] right-[2%] md:top-[6.5%] md:right-[8%] md:w-[132px] md:h-[132px] bg-black rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute w-[120px] h-[120px] top-[13%] right-[4%] md:top-[16.5%] md:right-[8%] md:w-[264px] md:h-[264px] bg-black rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
        />
      </div>
    </>
  )
}
