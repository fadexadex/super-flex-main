import Link from "next/link"
import { Facebook, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black relative z-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <nav className="flex items-center gap-6">
            <Link 
              href="#" 
              className="text-white/60 hover:text-white transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link 
              href="#" 
              className="text-white/60 hover:text-white transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link 
              href="#" 
              className="text-white/60 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </nav>

          <p className="text-white/60 text-sm">© 2025 GrowVault Finance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
