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
          Button
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
            Landing Page
            <br />
            Builder
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-md mx-auto mb-12">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit
          </p>
          <Button className="bg-black text-white hover:bg-black/90 rounded-full px-8 py-3 text-sm">
            Button
          </Button>
        </motion.div>
      </main>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-[4%] left-[25%] w-[96px] h-[96px] bg-black rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute top-[8%] right-[84%] w-[164px] h-[164px] bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute top-[18%] left-[20%] w-[196px] h-[196px] bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute top-[6.5%] right-[8%] w-[132px] h-[132px] bg-black rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute top-[16.5%] right-[8%] w-[264px] h-[264px] bg-black rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
        />
      </div>
    </>
  )
}
