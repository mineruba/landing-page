"use client"

import { Menu } from "lucide-react"
import { useState, useEffect } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-luxe/30 py-1 sm:py-2"
          : "bg-black/80 backdrop-blur-sm border-b border-gray-800 py-2 sm:py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Logo and navigation in vertical layout */}
        <div className="flex flex-col items-center">
          {/* Logo with enhanced styling */}
          <div
            className={`text-xl sm:text-2xl md:text-3xl font-bold tracking-wide mb-1 sm:mb-2 relative ${
              scrolled ? "scale-90" : ""
            } transition-transform duration-300`}
          >
            <span className="text-white">大学受験</span>
            <span className="gold-text-luxe relative">
              Minerva
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-luxe to-transparent"></span>
            </span>

            {/* Decorative elements */}
            <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 text-luxe/30 text-xs">✦</span>
            <span className="absolute -right-6 top-1/2 transform -translate-y-1/2 text-luxe/30 text-xs">✦</span>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white absolute right-4 top-4 hover:text-luxe transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={24} />
          </button>

          {/* Navigation with enhanced styling */}
          <nav
            className={`
              w-full md:w-auto
              fixed md:static top-16 left-0 right-0 
              ${isOpen ? "flex" : "hidden"} 
              md:flex flex-col md:flex-row 
              gap-4 sm:gap-6 md:gap-5 lg:gap-8
              bg-black/95 md:bg-transparent 
              p-6 md:p-0
              border-b border-gray-800 md:border-0
              text-sm sm:text-base md:text-lg lg:text-xl
              whitespace-nowrap
              md:justify-center
            `}
          >
            {[
              { href: "#philosophy", label: "教育理念" },
              { href: "#features", label: "特徴" },
              { href: "#support", label: "サポート" },
              { href: "#benefits", label: "特典" },
              { href: "#pricing", label: "料金" },
              { href: "#testimonials", label: "受講生の声" },
              { href: "#faq", label: "FAQ" },
            ].map((item, index) => (
              <a key={index} href={item.href} className="hover:text-luxe transition-colors relative group">
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-luxe group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}

            <a
              href="#contact"
              className="gold-button px-3 py-1 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-luxe-light to-luxe-dark group-hover:w-full transition-all duration-500"></span>
              <span className="relative z-10">お問い合わせ</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
