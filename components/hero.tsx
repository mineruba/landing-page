export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center relative overflow-hidden" id="hero">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-40 h-40 border border-luxe/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-luxe/20 rounded-full"></div>
        <div className="absolute top-1/4 right-1/4 w-20 h-20 border border-luxe/30 rounded-full animate-pulse"></div>

        {/* Gold accent lines */}
        <div className="absolute top-0 left-1/4 w-px h-40 bg-gradient-to-b from-transparent via-luxe/30 to-transparent"></div>
        <div className="absolute bottom-0 right-1/3 w-px h-40 bg-gradient-to-b from-transparent via-luxe/30 to-transparent"></div>
        <div className="absolute top-1/3 right-0 h-px w-40 bg-gradient-to-r from-transparent via-luxe/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Decorative corner elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-luxe/40 hidden md:block"></div>
          <div className="absolute -top-10 -right-10 w-20 h-20 border-t-2 border-r-2 border-luxe/40 hidden md:block"></div>
          <div className="absolute -bottom-10 -left-10 w-20 h-20 border-b-2 border-l-2 border-luxe/40 hidden md:block"></div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b-2 border-r-2 border-luxe/40 hidden md:block"></div>

          {/* Premium badge */}
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-luxe-dark via-luxe to-luxe-dark text-black text-xs font-bold py-1 px-4 rounded-full shadow-lg shadow-luxe/30">
            PREMIUM EDUCATION
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            勉強を
            <span className="gold-text-luxe relative inline-block">
              好きになる
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-luxe to-transparent"></span>
            </span>
            <br />
            自分で
            <span className="gold-text-luxe relative inline-block">
              学べる力
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-luxe to-transparent"></span>
            </span>
            を育む
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            大学受験Minervaは単なる合格だけでなく
            <span className="block">学ぶ力と習慣を身につける教育を提供します</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="gold-button px-8 py-4 rounded-md text-lg relative overflow-hidden group">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-luxe-light via-luxe to-luxe-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative z-10">無料相談を予約する</span>
            </a>
            <a
              href="#philosophy"
              className="bg-transparent border border-white hover:border-luxe hover:text-luxe text-white px-8 py-4 rounded-md text-lg font-medium transition relative group"
            >
              <span className="absolute inset-0 w-0 bg-black group-hover:w-full transition-all duration-300"></span>
              <span className="relative z-10">Minervaを詳しく知る</span>
            </a>
          </div>

          {/* Decorative bottom element */}
          <div className="mt-16 flex justify-center">
            <div className="flex items-center">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-luxe/50"></div>
              <div className="mx-4 text-luxe">✦</div>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-luxe/50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
