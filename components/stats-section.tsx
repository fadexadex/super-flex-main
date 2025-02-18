import { motion } from "framer-motion"
import { StatCard } from "./stat-card"


export function StatsSection() {
  const stats = [
    { 
      variant: "black", 
      name: "Total Savings Growth", 
      percentage: "$10M+",
      description: "Helping businesses and individuals grow their savings beyond expectations."
    },
    { 
      variant: "white", 
      name: "Startups Empowered", 
      percentage: "5000+",
      description: "Thousands of small businesses and startups are securing their financial future with us."
    },
    { 
      variant: "black", 
      name: "Average Returns in a Year", 
      percentage: "15-20%",
      description: "Smart investment strategies driving high-yield returns within 12 months."
    },
    { 
      variant: "white", 
      name: "Financial Journeys", 
      percentage: "4.9/5",
      description: "Every saver has a unique journey— we make yours a success story."
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto mb-16 sm:mb-20"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-black via-gray-600 to-black bg-clip-text text-transparent mb-4 sm:mb-6">
          Our Impact in Numbers
        </h2>
        <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto px-4">
          Join thousands of satisfied customers who have transformed their ideas
          with GrowVault Builder.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="w-full"
          >
            <StatCard
              variant={stat.variant}
              name={stat.name}
              percentage={stat.percentage}
              description={stat.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
