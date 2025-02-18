interface StatCardProps {
  variant?: "black" | "white"
  name: string
  percentage: string
  description: string
}

export function StatCard({ variant = "white", name, percentage, description }: StatCardProps) {
  return (
    <div 
      className={`group relative overflow-hidden rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:transform hover:scale-105 ${
        variant === "black" 
          ? "bg-black text-white" 
          : "bg-white text-black"
      } shadow-lg hover:shadow-xl`}
    >
      <div className="flex flex-col gap-2 sm:gap-3">
        <div 
          className={`w-12 h-1 rounded-full transition-all duration-300 group-hover:w-16 ${
            variant === "black" ? "bg-[#F4B659]" : "bg-black/10"
          }`}
        />
        <h3 className="font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight">
          {percentage}
        </h3>
        <div className="space-y-1">
          <p className="font-medium text-sm sm:text-base">
            {name}
          </p>
          <p className={`text-xs sm:text-sm ${
            variant === "black" ? "text-gray-400" : "text-gray-500"
          }`}>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
