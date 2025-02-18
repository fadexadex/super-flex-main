"use client";

import { motion } from "framer-motion";
import { Star, BarChart2, RefreshCw } from "lucide-react";

interface AdvantageCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function AdvantageCard({ icon, title, description }: AdvantageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-6 border border-[#e5e7eb] bg-white"
    >
      <div className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center mb-6">
        <div className="text-white">{icon}</div>
      </div>
      <h3 className="text-[1.375rem] font-medium text-[#1a1a1a] mb-3 leading-tight">
        {title}
      </h3>
      <p className="text-[#4b5563] text-[12px] leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

function ScrollingRow({ items, direction = "left" }: { items: string[]; direction?: "left" | "right" }) {
  return (
    <div className="relative overflow-hidden whitespace-nowrap py-4">
      <motion.div
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="inline-block"
      >
        {items.map((item, index) => (
          <span
            key={index}
            className="inline-block px-6 py-2 mx-2 bg-[#d4d4d439] rounded-full text-black"
          >
            {item}
          </span>
        ))}
        {items.map((item, index) => (
          <span
            key={`repeat-${index}`}
            className="inline-block px-6 py-2 mx-2 bg-[#d4d4d42a] rounded-full text-black"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function AdvantagesSection() {
  const advantages = [
    {
      icon: <Star className="w-4 h-4" />,
      title: "AI-Optimized Savings ",
      description:
        "Never miss an opportunity to save. Unlike traditional cards, our AI dynamically adjusts to maximize your savings on every purchase in real-time.",
    },
    {
      icon: <BarChart2 className="w-4 h-4" />,
      title: "Real-Time Insights – Smarter Spending",
      description:
        "Stay in control with detailed analytics. Winden provides transparent spending reports and intelligent insights to guide your financial decisions.",
    },
    {
      icon: <RefreshCw className="w-4 h-4" />,
      title: "Flexible Plans – Tailored for You",
      description:
        "Adaptive plans adjust monthly, ensuring you always get the best savings, rewards, and maximum optimal value for your business needs.",
    },
  ];

  const featuresRow1 = [
    "Real-Time Reports",
    "Secure Transactions",
    "Dedicated Support",
    "Automatic Adjustments",
    "Real-Time Reports",
    "Secure Transactions",
  ];

  const featuresRow2 = [
    "Smart Spending",
    "Customizable Plans",
    "Instant Savings",
    "Flexible Payments",
    "Smart Spending",
    "Customizable Plans",
  ];

  return (
    <section className="w-full py-16 bg-[#ffec5d1d]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold tracking-wider text-[#1a1a1a] uppercase mb-3">
            THE CLOVER ADVANTAGES
          </h2>
          <p className="text-2xl font-medium text-[#1a1a1a]">
            Why Choose Us?
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-0">
          {advantages.map((advantage, index) => (
            <AdvantageCard key={index} {...advantage} />
          ))}
        </div>
        <div className="my-12">
          <ScrollingRow items={featuresRow1} direction="left" />
          <ScrollingRow items={featuresRow2} direction="right" />
        </div>
      </div>
    </section>
  );
}
