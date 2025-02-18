import Link from "next/link"

export function Footer() {
  const links = ["Pricing", "Features", "Support", "About"]

  return (
    <footer className="container mx-auto px-4 py-12 relative z-20">
      <div className="bg-black rounded-3xl shadow-xl p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-xl transform hover:rotate-12 transition-transform" />
            <div className="w-28 h-10 bg-white/10 border border-white/20 rounded-xl transform hover:-rotate-3 transition-transform" />
          </div>

          <p className="text-white/60 text-sm">© 2024 GrowVault Builder. All rights reserved.</p>

          <nav className="flex items-center gap-8">
            {links.map((link) => (
              <Link 
                key={link} 
                href="#" 
                className="text-white/60 hover:text-white text-sm transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-0 after:bottom-0 hover:after:w-full after:transition-all"
              >
                {link}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
