export default function Footer() {
  return (
    <footer className="py-8 sm:py-10 md:py-12 bg-gradient-to-b from-black/90 to-black/95 border-t border-luxe/30 relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-20 bg-gradient-to-b from-luxe/30 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-20 bg-gradient-to-b from-luxe/30 to-transparent"></div>
        <div className="absolute bottom-0 left-1/3 w-px h-20 bg-gradient-to-b from-transparent to-luxe/30"></div>
        <div className="absolute bottom-0 right-1/3 w-px h-20 bg-gradient-to-b from-transparent to-luxe/30"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-xl sm:text-2xl mb-3 sm:mb-4 md:mb-0 font-bold tracking-wide relative">
            <span className="text-white">大学受験</span>
            <span className="gold-text-luxe">Minerva</span>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-luxe/50 to-transparent"></span>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-6 sm:gap-y-3 md:gap-x-8 md:gap-y-4 justify-center">
            {[
              { href: "#philosophy", label: "教育理念" },
              { href: "#features", label: "特徴" },
              { href: "#support", label: "学習サポート" },
              { href: "#benefits", label: "限定特典" },
              { href: "#pricing", label: "料金" },
              { href: "#faq", label: "よくある質問" },
              { href: "#contact", label: "お問い合わせ" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-sm sm:text-base hover:text-luxe transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-luxe group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} 大学受験Minerva All Rights Reserved.</p>

          {/* Decorative bottom element */}
          <div className="mt-6 flex justify-center">
            <div className="w-40 h-px bg-gradient-to-r from-transparent via-luxe/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}
