"use client";

import { motion } from "framer-motion";

interface RoadmapItem {
  quarter: string;
  year: string;
  icon: "star" | "diamond" | "circle";
  isLeft?: boolean;
}

export function RoadmapSection() {
  const roadmapItems: RoadmapItem[] = [
    { quarter: "Q1", year: "2022", icon: "star", isLeft: true },
    { quarter: "Q2", year: "2022", icon: "diamond", isLeft: false },
    { quarter: "Q3", year: "2022", icon: "circle", isLeft: true },
  ];

  const IconComponent = ({ type }: { type: RoadmapItem["icon"] }) => {
    switch (type) {
      case "star":
        return (
          <div className="w-24 h-16 bg-black rounded-[24px] shadow-xl flex items-center justify-center transform transition-transform duration-300 hover:scale-105">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L14.8 7.6L21 8.4L16.5 12.8L17.8 19L12 16L6.2 19L7.5 12.8L3 8.4L9.2 7.6L12 2Z"
                fill="#F7E353"
              />
            </svg>
          </div>
        );
      case "diamond":
        return (
          <div className="w-24 h-16 bg-white rounded-[24px] shadow-xl flex items-center justify-center transform transition-transform duration-300 hover:scale-105">
            <div className="w-7 h-7 border-[2.5px] border-black rotate-45" />
          </div>
        );
      case "circle":
        return (
          <div className="w-24 h-16 bg-white rounded-[24px] shadow-xl flex items-center justify-center transform transition-transform duration-300 hover:scale-105">
            <div className="w-7 h-7 border-[2.5px] border-black rounded-full" />
          </div>
        );
    }
  };

  return (
    <section className="container mx-auto px-4 py-24 relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-24"
      >
        <h2 className="text-4xl font-bold mb-6">Turning Savings into Success</h2>
        <p className="text-muted">
          Discover how our structured savings plans
          have empowered businesses and individuals to reach their financial
          goals. [Q1-Q2-Q3] showcases real growth journeys-demonstrating the
          impact of smart saving, strategic investing, and financial discipline.
        </p>
      </motion.div>

      <div className="relative max-w-3xl mx-auto">
        {/* Curved Connection Line */}
        <svg
          className="absolute left-0 top-0 w-full h-full"
          viewBox="0 0 800 600"
          preserveAspectRatio="none"
          style={{
            zIndex: -1,
            pointerEvents: "none",
          }}
        >
          <path
            d="M 200,120 C 300,120 350,200 600,300 C 800,380 400,450 200,500"
            fill="none"
            stroke="#D1D5DB"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>

        {/* Roadmap Items */}
        <div className="relative">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: item.isLeft ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`
                flex items-center
                ${
                  index === 0
                    ? "h-[120px]"
                    : index === 1
                    ? "h-[180px]"
                    : "h-[120px]"
                }
                ${item.isLeft ? "flex-row" : "flex-row-reverse"}
                justify-center gap-6 md:gap-8
              `}
            >
              <div
                className={`flex-1 ${item.isLeft ? "text-right" : "text-left"}`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`inline-block ${
                    item.isLeft ? "ml-auto" : "mr-auto"
                  }`}
                >
                  <IconComponent type={item.icon} />
                </motion.div>
              </div>

              <div className="w-32 md:w-40 text-center">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight whitespace-nowrap">
                  {item.quarter} {item.year}
                </h3>
              </div>

              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
