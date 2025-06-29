import { Check, X } from "lucide-react"

export default function Problems() {
  const problems = [
    "勉強のやり方がわからず、成績が伸び悩んでいる",
    "参考書をたくさん買ったけど、どれも途中で投げ出してしまう",
    "勉強を始めても集中力が続かず、すぐに飽きてしまう",
    "自分に合った学習計画の立て方がわからない",
    "勉強が嫌いで、モチベーションを保つのが難しい",
    "学校の授業だけでは理解できず、どう補えばいいかわからない",
  ]

  return (
    <section className="py-12 sm:py-20 md:py-28 bg-black/90" id="problems">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
            <span className="gold-text-luxe">みなさんはこんなお悩みありませんか？</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center max-w-5xl mx-auto mb-12">
          {/* 悩む学生のイラスト - 左側 */}
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 flex items-center justify-center bg-gradient-to-b from-black to-gray-900 rounded-lg p-6 border border-luxe/30 shadow-lg shadow-luxe/20">
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-luxe-dark/10 to-black/30"></div>
              </div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%82%A9%E3%81%BF-hKEUMhFAN8u6P1IiHvYuW5Jv7TopDh.png"
                alt="悩む人のイラスト"
                className="w-48 h-48 object-contain filter invert sepia hue-rotate-0 saturate-[.75] brightness-[.9] contrast-[1.2]"
                style={{ filter: "invert(1) sepia(1) hue-rotate(10deg) saturate(0.75) brightness(0.9) contrast(1.2)" }}
              />
            </div>
          </div>

          {/* 悩みリスト - 右側 */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-b from-black to-luxe-dark/10 border border-luxe/30 p-4 sm:p-5 md:p-6 rounded-lg flex items-start shadow-lg shadow-luxe/10"
                >
                  <div className="mr-4 mt-1">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-luxe-light via-luxe to-luxe-dark flex items-center justify-center">
                      <X className="w-4 h-4 text-black" />
                    </div>
                  </div>
                  <p className="text-base sm:text-lg">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-gradient-to-b from-black via-luxe-dark/5 to-luxe-dark/20 border-2 border-luxe p-10 rounded-lg shadow-xl shadow-luxe/20 relative overflow-hidden">
            {/* 装飾的な角の要素 */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-luxe/70"></div>
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-luxe/70"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-luxe/70"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-luxe/70"></div>

            {/* 装飾的な背景エフェクト */}
            <div className="absolute inset-0 bg-gradient-to-r from-luxe/5 via-transparent to-luxe/5 pointer-events-none"></div>

            <h3 className="text-3xl font-bold mb-6 relative">
              <span className="inline-block relative">
                <span className="gold-text-luxe">そんなあなたに朗報です</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-luxe to-transparent"></span>
              </span>
            </h3>
            <p className="text-xl leading-relaxed mb-8">
              大学受験Minervaでは、<span className="text-luxe font-semibold">勉強を習慣化し、自分で学べる力を育む</span>
              ことで、 これらの悩みを根本から解決します。
            </p>
            <div className="mt-8 flex flex-col md:flex-row justify-center items-center relative z-10">
              <div className="flex items-center bg-black/70 border border-luxe/60 px-8 py-4 rounded-lg mb-8 md:mb-0 md:mr-8 shadow-md shadow-luxe/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-luxe-light via-luxe to-luxe-dark flex items-center justify-center mr-4">
                  <Check className="w-6 h-6 text-black" />
                </div>
                <p className="text-xl font-medium">
                  <span className="gold-text-luxe">合格するだけでなく、一生役立つ学習能力を身につけられます</span>
                </p>
              </div>

              {/* 解決策を表すイラスト */}
              <div className="w-40 h-40 relative flex items-center justify-center bg-gradient-to-b from-black to-gray-900 rounded-lg p-4 border border-luxe/30 shadow-lg shadow-luxe/20">
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-luxe-dark/10 to-black/30"></div>
                </div>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E8%A7%A3%E6%B1%BA-8GVlZ8Bde5O4RJJJmhXgnfhU4HEdgx.png"
                  alt="解決策のイラスト"
                  className="w-32 h-32 object-contain"
                  style={{
                    filter: "invert(1) sepia(1) hue-rotate(10deg) saturate(0.75) brightness(0.9) contrast(1.2)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
