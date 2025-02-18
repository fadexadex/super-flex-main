import { Button } from "@/components/ui/button"
import { Briefcase } from "lucide-react"
import { motion } from "framer-motion"

interface DownloadButtonProps {
  variant?: "black" | "white"
  className?: string
  isNew?: boolean
  text?: string
}

export function DownloadButton({ 
  variant = "white", 
  className, 
  isNew,
  text = "Download Now"
}: DownloadButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className="relative flex-1 min-w-[240px]"
    >
      {isNew && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute -top-3 -right-2 z-10"
        >
          
        </motion.div>
      )}
      
      <Button
        variant={variant === "black" ? "default" : "outline"}
        className={`
          ${variant === "black" 
            ? "bg-black text-white hover:bg-black/90" 
            : "bg-white hover:bg-white/90"
          } 
          relative overflow-hidden shadow-lg transition-all duration-300
          hover:shadow-xl hover:translate-y-[-2px]
          w-full justify-center py-6 text-base
          ${className}
        `}
      >
        <motion.div
          initial={false}
          animate={{ 
            x: [0, -4, 4, 0],
            y: [0, -2, 2, 0]
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 3
          }}
        >
          <Briefcase className="mr-2 h-5 w-5" />
        </motion.div>
        {text} 
        
        <motion.div
          className="absolute inset-0 bg-white/10"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />
      </Button>
    </motion.div>
  )
}
