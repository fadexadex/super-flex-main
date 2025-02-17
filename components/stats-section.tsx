import { motion } from "framer-motion"
import { StatCard } from "./stat-card"

export function StatsSection() {
  const stats = [
    { 
      variant: "black", 
      name: "Active Users", 
      percentage: "100K+",
      description: "Growing community of creators"
    },
    { 
      variant: "white", 
      name: "Pages Created", 
      percentage: "500K+",
      description: "Stunning landing pages built"
    },
    { 
      variant: "black", 
      name: "Conversion Rate", 
      percentage: "15.5%",
      description: "Average conversion increase"
    },
    { 
      variant: "white", 
      name: "Customer Rating", 
      percentage: "4.9/5",
      description: "Based on 10K+ reviews"
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
          Join thousands of satisfied customers who have transformed their online presence
          with our landing page builder.
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
