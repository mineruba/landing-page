import { Crown } from "lucide-react"

export default function Benefits() {
  return (
    <section className="py-12 sm:py-20 md:py-28 bg-black/80" id="benefits">
      <div className="container mx-auto px-4">
        {/* ヘッダー部分 */}
        <div className="max-w-3xl mx-auto text-center mb-16 relative">
          <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-luxe/50 to-transparent"></div>

          <div className="relative">
            <span className="inline-block w-8 h-8 mb-4">
              <Crown className="w-full h-full text-luxe" />
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
              <span className="gold-text-luxe">限定特典</span>
            </h2>
            <div className="w-20 h-1 bg-gold-gradient mx-auto mb-8"></div>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              <span className="text-luxe-light">Minerva生だけが享受できる</span>特別な特典をご用意しています
            </p>
          </div>

          {/* 装飾的な角の要素 */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-luxe/50"></div>
          <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-luxe/50"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-luxe/50"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-luxe/50"></div>
        </div>

        {/* 特典グリッド */}
        <div className="flex flex-col gap-10 max-w-5xl mx-auto">
          {/* 通常の特典項目 */}
          <div className="grid grid-cols-1 gap-10">
            {/* 不定期のオフ会の開催 */}
            <div className="bg-gradient-to-b from-black to-luxe-dark/20 border border-luxe/30 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
              <div className="flex flex-col gap-6">
                <div className="flex items-center w-full mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-luxe-light via-luxe to-luxe-dark flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-black text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-luxe-light flex-grow">
                    不定期のオフ会の開催
                  </h3>
                </div>

                <div className="flex flex-col gap-4 sm:gap-6 lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                  <p className="text-gray-300 text-lg">
                    オンラインだけでなく、実際に会って交流できるオフ会を定期的に開催。
                    同じ目標を持つ仲間と直接会うことで、モチベーションアップにつながります。
                  </p>
                  <div className="border-2 border-luxe/30 rounded-lg aspect-video w-full overflow-hidden shadow-lg">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LP%E3%82%AA%E3%83%95%E4%BC%9A-6yKs7iLeKCWkalFIRz7VskdEafe80U.png"
                      alt="Minervaオフ会の様子"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 受講生限定のライブ配信 */}
            <div className="bg-gradient-to-b from-black to-luxe-dark/20 border border-luxe/30 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
              <div className="flex flex-col gap-6">
                <div className="flex items-center w-full mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-luxe-light via-luxe to-luxe-dark flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-black text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-luxe-light flex-grow">
                    受講生限定のライブ配信
                  </h3>
                </div>

                <div className="flex flex-col gap-4 sm:gap-6 lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                  <p className="text-gray-300 text-lg">
                    試験直前対策や特別講座など、受講生限定のライブ配信を実施。
                    時期に合わせた効果的な学習方法を提供します。
                  </p>
                  <div className="border-2 border-luxe/30 rounded-lg aspect-video w-full overflow-hidden shadow-lg relative">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%89%B9%E5%85%B8%E3%83%A9%E3%82%A4%E3%83%95%E3%82%99-qQKAzYSA46Td5fJoJ495A5b3lfGJ2R.png"
                      alt="受講生限定のライブ配信"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 永年無料の専用サイトの最新情報のアクセス */}
            <div className="bg-gradient-to-b from-black to-luxe-dark/20 border border-luxe/30 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
              <div className="flex flex-col gap-6">
                <div className="flex items-center w-full mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-luxe-light via-luxe to-luxe-dark flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-black text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-luxe-light flex-grow">
                    永年無料の専用サイトの最新情報のアクセス
                  </h3>
                </div>

                <div className="flex flex-col gap-4 sm:gap-6 lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                  <p className="text-gray-300 text-lg">
                    卒業後も専用サイトの最新情報にアクセス可能。 学習コンテンツや知識を常にアップデートできます。
                  </p>
                  <div className="border-2 border-luxe/30 rounded-lg aspect-video w-full overflow-hidden shadow-lg relative">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9-k0DpKJxcCL44MUBAs4gl7IwiCDlozy.png"
                      alt="専用サイトアクセス権"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 永年無料のオンライン自習室の開放とChatworkでの個別サポート */}
            <div className="bg-gradient-to-b from-black to-luxe-dark/20 border border-luxe/30 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
              <div className="flex flex-col gap-6">
                <div className="flex items-center w-full mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-luxe-light via-luxe to-luxe-dark flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-black text-2xl font-bold">4</span>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-luxe-light flex-grow">
                    永年無料のオンライン自習室の開放とChatworkでの個別サポート
                  </h3>
                </div>

                <div className="flex flex-col gap-4 sm:gap-6 lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                  <p className="text-gray-300 text-lg">
                    卒業後も自習室やチャットサポートを無料で利用可能。 大学入学後の学習もしっかりサポートします。
                  </p>
                  <div className="border-2 border-luxe/30 rounded-lg aspect-video w-full overflow-hidden shadow-lg relative">
                    <img
                      src="/images/individual-support-free.png"
                      alt="永年無料の個別サポート"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* プレミアム特典 */}
          {/* 大学卒業後の就活サポート */}
          <div className="bg-gradient-to-b from-black to-luxe-dark/20 border border-luxe/30 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
            <div className="flex flex-col gap-6">
              <div className="flex items-center w-full mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-luxe-light via-luxe to-luxe-dark flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-black text-2xl font-bold">5</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-luxe-light flex-grow">
                  大学卒業後の、就活サポート
                </h3>
              </div>

              <div className="flex flex-col gap-4 sm:gap-6 lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                <p className="text-gray-300 text-lg">
                  大学卒業後の就職活動もサポート。履歴書の添削から面接対策まで、
                  キャリア形成を見据えた総合的な支援を提供します。
                </p>
                <div className="border-2 border-luxe/30 rounded-lg aspect-video w-full overflow-hidden shadow-lg relative">
                  <img
                    src="/images/job-interview-support.png"
                    alt="大学卒業後の就活サポート"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* PLAUD AIの無料配布 */}
          <div className="bg-gradient-to-b from-black to-luxe-dark/20 border border-luxe/30 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
            <div className="flex flex-col gap-6">
              <div className="flex items-center w-full mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-luxe-light via-luxe to-luxe-dark flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-black text-2xl font-bold">6</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-luxe-light flex-grow">
                  PLAUD AIの無料配布
                </h3>
              </div>

              <div className="flex flex-col gap-4 sm:gap-6 lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                <p className="text-gray-300 text-lg">
                  学習効率を飛躍的に高めるAIアプリ「PLAUD AI」を無料で提供。
                  課題の提出、録音、文字起こし、要約などを一元管理し、効率的な学習をサポートします。
                </p>
                <div className="border-2 border-luxe/30 rounded-lg aspect-video w-full overflow-hidden shadow-lg relative bg-[#e6eeff] flex items-center justify-center">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plaud-alternatives-cover-sLf1oJpiiVTIs2YWie3tml7o1ypp2G.png"
                    alt="PLAUD AI ロゴ"
                    className="w-4/5 h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 装飾的な下部要素 */}
        <div className="max-w-5xl mx-auto mt-16 text-center">
          <div className="inline-block">
            <div className="flex flex-col items-center">
              <Crown className="w-8 h-8 text-luxe mb-3" />
              <div className="flex items-center">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-luxe/50"></div>
                <div className="w-16 h-px bg-gradient-to-l from-transparent to-luxe/50 ml-2"></div>
              </div>
            </div>
            <p className="text-luxe-light mt-4 italic">"Minervaでの学びは、合格だけでなく人生の財産になります"</p>
          </div>
        </div>
      </div>
    </section>
  )
}
