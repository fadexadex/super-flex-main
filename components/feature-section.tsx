"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DownloadButton } from "@/components/download-button";
import { FeatureCard } from "@/components/feature-card";

export function FeatureSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const cardTransforms = [
    {
      variant: "black",
      transform: "rotate(-5deg)",
      title: " High-Yield Savings",
      description: "Watch your money grow faster with competitive returns.",
    },
    {
      variant: "orange", // Changed from "white" to "orange"
      transform: "rotate(0deg)",
      title: "Flexible Plans",
      description: "Save at your own pace with customizable options.",
    },
    {
      variant: "white",
      transform: "rotate(5deg)",
      title: "Safe & Secure",
      description: "Your funds are protected with top-tier security measures.",
    },
  ];

  const handleCardClick = (clickedIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % cardTransforms.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const SplashLines = () => (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 40 }}
    >
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.6 }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={i}
            x1="50%"
            y1="50%"
            x2="50%"
            y2="50%"
            stroke={i % 2 === 0 ? "#000" : "#F7E353"}
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{
              x2: `${50 + Math.cos((i * Math.PI) / 4) * 100}%`,
              y2: `${50 + Math.sin((i * Math.PI) / 4) * 100}%`,
              pathLength: [0, 1, 0],
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        ))}
      </motion.g>
    </svg>
  );

  return (
    <section className="container px-4 py-24 relative z-20 mt-40 md:mt-64">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-muted text-2xl md:text-3xl font-medium mb-8"
      >
        Targets
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
      >
        <DownloadButton 
          variant="black" 
          isNew={true} 
          text="Startups"
        />
        <DownloadButton 
          text="Investors"
        />
        <DownloadButton 
          text="Business"
        />
        <DownloadButton 
          text="Individuals"
        />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
            Transform your ideas into reality
          </h3>
          <p className="text-muted leading-relaxed">
            At Growvault, we believe in the power of smart saving. Our platform
            is designed to help individuals, startups, and small businesses grow
            their funds efficiently within a year. With flexible saving plans,
            high-yield returns, and expert financial strategies, we turn your
            financial goals into reality.
          </p>
        </motion.div>

        <div className="relative h-[400px] md:h-[500px] mr-16">
          {isAnimating && <SplashLines />}
          <AnimatePresence mode="popLayout">
            {cardTransforms.map((card, index) => {
              const position =
                (index - activeIndex + cardTransforms.length) %
                cardTransforms.length;
              return (
                <motion.div
                  key={index}
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    cursor: "pointer",
                    marginRight: "1rem", // Added margin to the right
                  }}
                  initial={false}
                  animate={{
                    zIndex: cardTransforms.length - position,
                    x: position === 0 ? 0 : `${position * 10}%`,
                    y: position === 0 ? 0 : `${position * 5}%`,
                    rotate: (position - 1) * 5,
                    scale: 1 - position * 0.05,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                  onClick={() => handleCardClick(index)}
                >
                  <FeatureCard
                    variant={card.variant as "black" | "white" | "orange"}
                    transform="none"
                    index={position}
                    title={card.title}
                    description={card.description}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
