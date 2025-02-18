"use client";

import { motion } from "framer-motion";
import { Star, BarChart2, RefreshCw } from "lucide-react";

interface AdvantageCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isFirst?: boolean;
  isLast?: boolean;
}

function AdvantageCard({ icon, title, description, isFirst, isLast }: AdvantageCardProps & { isFirst?: boolean; isLast?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`p-6 border border-[#e5e7eb] bg-white mt-4 ${ // Added mt-4 for top margin
        isFirst ? 'rounded-tl-2xl rounded-bl-2xl' : ''
      } ${ // Added mt-4 for top margin
        isLast ? 'rounded-tr-2xl rounded-br-2xl' : ''
      }`}
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
    <div className="relative overflow-hidden whitespace-nowrap py-4 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
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
          <div
            key={index}
            className="inline-block px-6 py-2 mx-2 bg-[#ece9e939] backdrop-blur-[2px] rounded-full text-black shadow-md" // Added shadow-md class
          >
            {item}
          </div>
        ))}
        {items.map((item, index) => (
          <div
            key={`repeat-${index}`}
            className="inline-block px-6 py-2 mx-2 bg-[#ece9e939] backdrop-blur-[2px] rounded-full text-black shadow-md" // Added shadow-md class
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function AdvantagesSection() {
  const advantages = [
    {
      icon: <Star className="w-4 h-4" />,
      title: "How does GrowVault help me grow my savings? ",
      description:
        "GrowVault offers high-yield savings plans that allow your money to grow through strategic investment models, ensuring maximum returns within a year.",
    },
    {
      icon: <BarChart2 className="w-4 h-4" />,
      title: "Can I withdraw my savings anytime?",
      description:
        "Yes! We offer flexible withdrawal options depending on your chosen plan. Some plans have fixed maturity periods, while others allow partial withdrawals without penalties.",
    },
    {
      icon: <RefreshCw className="w-4 h-4" />,
      title: "Is my money safe with GrowVault?",
      description:
        "Absolutely. We use top-tier encryption and security measures to protect your funds, ensuring every transaction is secure and reliable.",
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
    <section className="w-full py-16 bg-[#ffec5d1d] relative isolate">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold tracking-wider text-[#1a1a1a] uppercase mb-3">
            THE GROWVAULT EDGE
          </h2>
          <p className="text-2xl font-medium text-[#1a1a1a]">
            Why Choose Us?
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-0">
          {advantages.map((advantage, index) => (
            <AdvantageCard 
              key={index} 
              {...advantage} 
              isFirst={index === 0}
              isLast={index === advantages.length - 1}
            />
          ))}
        </div>
        <div className="my-12 relative">
          <ScrollingRow items={featuresRow1} direction="left" />
          <ScrollingRow items={featuresRow2} direction="right" />
        </div>
      </div>
    </section>
  );
}
