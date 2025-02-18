"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { RollingArrowButton } from "./RollingArrowButton";
import Image from "next/image";

export function Hero() {
  return (
    <>
      {/* Premium Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#FCFCFC] bg-opacity-50" /> {/* Base light background */}
        <div className="absolute w-full h-full bg-gradient-to-tr from-[#FFD700]/5 via-transparent to-[#FFD700]/5" /> {/* Subtle gold gradient */}
        <div className="absolute w-[50%] h-[50%] top-0 left-0 bg-gradient-to-br from-[#FFD700]/10 to-transparent blur-3xl" /> {/* Top-left gold blur */}
        <div className="absolute w-[50%] h-[50%] bottom-0 right-0 bg-gradient-to-tl from-[#FFD700]/10 to-transparent blur-3xl" /> {/* Bottom-right gold blur */}
      </div>

      {/* Bouncy Vault with enhanced gold gradient */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1,
          y: [0, -30, 0] // Bouncy animation
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          },
          opacity: {
            duration: 0.5
          }
        }}
        className="absolute z-30 w-[140px] h-[140px] top-[3%] left-[14%] md:top-[7%] md:left-[22%]"
      >
        <div className="absolute bottom-0 w-[300%] h-32 left-[-100%]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFD700]/20 to-transparent rounded-full blur-2xl" /> {/* Main gradient - reduced from 30% to 20% */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/15 via-[#FFD700]/15 to-transparent rounded-full blur-3xl" /> {/* Layered gradient - reduced from 20% to 15% */}
        </div>
        <Image
          src="/vault-image.png"
          alt="Secure vault with golden handle"
          width={140}
          height={140}
          className="select-none pointer-events-none opacity-90 relative z-10 w-[60px] h-[60px] md:w-[140px] md:h-[140px]"
          priority
        />
      </motion.div>

     {/* Animated Credit Card */}
     <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1,
          y: [0, -25, 0] // Slightly less bounce than vault for visual harmony
        }}
        transition={{
          y: {
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut"
          },
          opacity: {
            duration: 0.5
          }
        }}
        className="absolute z-30 w-[140px] h-[88px] top-[3%] right-[1%] md:top-[4%] md:right-[24%]"
      >
        <div className="absolute bottom-0 w-[300%] h-32 left-[-100%]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFD700]/20 to-transparent rounded-full blur-2xl" /> {/* Main gradient - reduced from 30% to 20% */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/15 via-[#FFD700]/15 to-transparent rounded-full blur-3xl" /> {/* Layered gradient - reduced from 20% to 15% */}
        </div>
        <Image
          src="/percent.png"
          alt="Credit Card"
          width={140}
          height={88}
          className="select-none pointer-events-none opacity-90 relative z-10 rounded-xl w-[60px] h-[60px] md:w-[140px] md:h-[140px]"
          priority
        />
      </motion.div>

      {/* Main Content */}
      <main className="container mx-auto px-6 pt-44 pb-32 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">
            Growvault
            <br />
            Finance
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-md mx-auto mb-12">
            Save Smart
            <br />
            Grow Fast
            <br/>
            Secure Your Future
          </p>
          <RollingArrowButton className="bg-black text-white hover:bg-black/90 rounded-md px-6 py-2.5 text-[15px] font-medium">
            Get started
          </RollingArrowButton>
        </motion.div>
      </main>

      {/* Decorative Elements with enhanced shadows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute w-[60px] h-[60px] top-[1%] left-[10%] md:top-[2%] md:left-[10%] md:w-[96px] md:h-[96px] bg-gradient-to-br from-black to-gray-900 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute w-[80px] h-[80px] top-[4.5%] right-[80%] md:top-[6%] md:right-[84%] md:w-[164px] md:h-[164px] bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute w-[120px] h-[120px] top-[6%] left-[12%] md:top-[10%] md:left-[20%] md:w-[196px] md:h-[196px] bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute w-[60px] h-[60px] top-[2.5%] right-[2%] md:top-[3%] md:right-[8%] md:w-[132px] md:h-[132px] bg-black rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.25)] "
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute w-[120px] h-[120px] top-[5%] right-[4%] md:top-[10%] md:right-[8%] md:w-[264px] md:h-[264px] bg-black rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
        />
      </div>
    </>
  );
}
