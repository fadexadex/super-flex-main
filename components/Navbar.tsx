"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { FlipText } from "./FlipText";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.3,
      }}
      className={`fixed top-4 md:top-6 left-4 right-4 md:left-32 md:right-32 z-50 transition-all duration-300 rounded-xl shadow-xl bg-white/80 backdrop-blur-md`}
    >
      <div
        className={`container mx-auto px-4 md:px-8 py-3 flex items-center justify-between transition-all duration-300 gap-4 md:gap-12`}
      >
        <div className="flex items-center gap-2 md:gap-4">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-base md:text-lg">G</span>
          </div>
          <span className="text-black font-bold text-sm md:text-lg">
            Grow Vault Finance
          </span>
        </div>

        <div
          className={`hidden md:flex items-center transition-all duration-300 gap-12`}
        >
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
            <FlipText text="Stats" className="text-black text-sm font-medium" />
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Button className="hidden md:flex bg-black text-white hover:bg-black/90 rounded-lg px-5 py-2.5 text-[15px] font-medium group">
            <motion.div
              className="flex items-center"
              whileHover={{ x: 0 }} // This triggers the group hover
            >
              Start Saving
              <motion.span
                className="ml-2 inline-block"
                initial={{ x: 0 }}
                animate={{ x: 0 }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.span>
            </motion.div>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="flex flex-col px-4 py-4 gap-4">
              <Link
                href="#features"
                className="text-black text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#roadmap"
                className="text-black text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Roadmap
              </Link>
              <Link
                href="#stats"
                className="text-black text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Stats
              </Link>
              <Button
                className="w-full bg-black text-white hover:bg-black/90 rounded-lg px-5 py-2.5 text-[15px] font-medium group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start Saving
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
