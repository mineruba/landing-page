export default function Philosophy() {
  return (
    <section className="py-12 sm:py-20 md:py-28 relative" id="philosophy">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 border border-luxe/10 rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-60 h-60 border border-luxe/10 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-px h-40 bg-gradient-to-b from-transparent via-luxe/20 to-transparent"></div>
        <div className="absolute bottom-1/3 left-1/4 w-px h-40 bg-gradient-to-b from-transparent via-luxe/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 relative">
          {/* Decorative corner elements */}
          <div className="absolute -top-10 -left-10 w-16 h-16 border-t-2 border-l-2 border-luxe/30 hidden md:block"></div>
          <div className="absolute -top-10 -right-10 w-16 h-16 border-t-2 border-r-2 border-luxe/30 hidden md:block"></div>
          <div className="absolute -bottom-10 -left-10 w-16 h-16 border-b-2 border-l-2 border-luxe/30 hidden md:block"></div>
          <div className="absolute -bottom-10 -right-10 w-16 h-16 border-b-2 border-r-2 border-luxe/30 hidden md:block"></div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            <span className="gold-text-luxe">教育理念</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-luxe to-transparent"></span>
          </h2>
          <div className="w-20 h-1 bg-gold-gradient mx-auto mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            大学受験Minervaは、<span className="text-luxe">受験合格を目標にするだけでなく</span>、 勉強を好きになり
            <br />
            自分で学ぶ習慣を身につけることを重視しています。
            <br />
            <br />
            私たちは、一時的な成績向上ではなく、
            <span className="text-luxe">生涯にわたって活きる学習能力</span>を育むことを目指しています。
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* 自ら学ぶ力 */}
          <div className="bg-gradient-to-b from-black/80 to-black/60 backdrop-blur-sm border border-gray-800 p-6 sm:p-8 md:p-10 rounded-lg hover:border-luxe hover:shadow-lg hover:shadow-luxe/10 transition-all duration-500 relative group">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-luxe/0 group-hover:border-luxe/40 transition-colors duration-500"></div>
            <div className="absolute top-0 right-0 w-10 h-10 border-t border-r border-luxe/0 group-hover:border-luxe/40 transition-colors duration-500"></div>
            <div className="absolute bottom-0 left-0 w-10 h-10 border-b border-l border-luxe/0 group-hover:border-luxe/40 transition-colors duration-500"></div>
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-luxe/0 group-hover:border-luxe/40 transition-colors duration-500"></div>

            <div className="flex flex-col items-center mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-luxe mb-4 shadow-lg shadow-luxe/20 group-hover:shadow-luxe/40 transition-all duration-500">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E8%87%AA%E3%82%89%E5%AD%A6%E3%81%B5%E3%82%99-DWrYxEpOEQuWFshulQSys2I5Bol15x.png"
                  alt="自ら学ぶ"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 text-luxe-light group-hover:text-luxe transition-colors duration-300">
                自ら学ぶ力
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-luxe to-transparent mb-6"></div>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-center mb-6">
              教えられるだけでなく、自ら考え、学び続ける力を養います。 これこそが 大学入学後も
              社会に出てからも活きる真の学力です。
            </p>
            <div className="bg-black/50 border-l-4 border-luxe p-6 rounded-r-lg transform group-hover:translate-y-1 transition-transform duration-500">
              <p className="text-lg">
                <span className="text-luxe font-semibold">Minervaの方法：</span>{" "}
                私たちは「教える」のではなく「引き出す」指導を行います。
                問いかけを通じて思考を促し、自分で答えを見つける喜びを体験させます。
                また、AIを活用した自己分析により、自分の弱点を客観的に把握し、 自ら改善策を考える習慣を身につけます。
              </p>
            </div>
          </div>

          {/* 勉強を好きになる */}
          <div className="bg-gradient-to-b from-black/80 to-black/60 backdrop-blur-sm border border-gray-800 p-6 sm:p-8 md:p-10 rounded-lg hover:border-luxe hover:shadow-lg hover:shadow-luxe/10 transition-all duration-500 relative group">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-luxe/0 group-hover:border-luxe/40 transition-colors duration-500"></div>
            <div className="absolute top-0 right-0 w-10 h-10 border-t border-r border-luxe/0 group-hover:border-luxe/40 transition-colors duration-500"></div>
            <div className="absolute bottom-0 left-0 w-10 h-10 border-b border-l border-luxe/0 group-hover:border-luxe/40 transition-colors duration-500"></div>
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-luxe/0 group-hover:border-luxe/40 transition-colors duration-500"></div>

            <div className="flex flex-col items-center mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-luxe mb-4 shadow-lg shadow-luxe/20 group-hover:shadow-luxe/40 transition-all duration-500">
                <img
                  src="/images/enjoying-study.jpg"
                  alt="勉強を好きになる"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 text-luxe-light group-hover:text-luxe transition-colors duration-300">
                勉強を好きになる
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-luxe to-transparent mb-6"></div>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-center mb-6">
              知ることの喜び、理解することの楽しさを体験することで、 勉強そのものが楽しくなる 環境を提供します。
            </p>
            <div className="bg-black/50 border-l-4 border-luxe p-6 rounded-r-lg transform group-hover:translate-y-1 transition-transform duration-500">
              <p className="text-lg">
                <span className="text-luxe font-semibold">Minervaの方法：</span>{" "}
                「わかった！」という体験を積み重ねることで、
                学ぶことへの自信と喜びを育みます。一人ひとりの興味関心に合わせた教材選定や、
                実生活と結びつけた学習アプローチにより、知識を得ることの意義を実感できるようにします。
                また、小さな成功体験を可視化し、達成感を味わえる仕組みを取り入れています。
              </p>
            </div>
          </div>

          {/* 学習習慣の定着 */}
          <div className="bg-gradient-to-b from-black/80 to-black/60 backdrop-blur-sm border border-gray-800 p-6 sm:p-8 md:p-10 rounded-lg hover:border-luxe hover:shadow-lg hover:shadow-luxe/10 transition-all duration-500 relative group">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-luxe/0 group-hover:border-luxe/40 transition-colors duration-500"></div>
            <div className="absolute top-0 right-0 w-10 h-10 border-t border-r border-luxe/0 group-hover:border-luxe/40 transition-colors duration-500"></div>
            <div className="absolute bottom-0 left-0 w-10 h-10 border-b border-l border-luxe/0 group-hover:border-luxe/40 transition-colors duration-500"></div>
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-luxe/0 group-hover:border-luxe/40 transition-colors duration-500"></div>

            <div className="flex flex-col items-center mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-luxe mb-4 shadow-lg shadow-luxe/20 group-hover:shadow-luxe/40 transition-all duration-500">
                <img
                  src="/images/learning-habit.jpg"
                  alt="学習習慣の定着"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 text-luxe-light group-hover:text-luxe transition-colors duration-300">
                学習習慣の定着
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-luxe to-transparent mb-6"></div>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-center mb-6">
              日々の継続的な学習を支援し、自分で計画し実行できる 確かな学習習慣を身につけます。
            </p>
            <div className="bg-black/50 border-l-4 border-luxe p-6 rounded-r-lg transform group-hover:translate-y-1 transition-transform duration-500">
              <p className="text-lg">
                <span className="text-luxe font-semibold">Minervaの方法：</span>{" "}
                学習管理アプリとAIを活用した進捗管理システムにより、
                日々の学習状況を可視化します。また、24時間利用可能なオンライン自習室や
                仲間との学習コミュニティを通じて、「一人じゃない」という安心感を提供。
                毎日の動画フィードバックで小さな成長を実感できるため、
                モチベーションを維持しながら学習習慣を確立できます。
              </p>
            </div>
          </div>
        </div>

        {/* Decorative bottom element */}
        <div className="mt-16 text-center">
          <div className="inline-block">
            <div className="flex items-center">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-luxe/50"></div>
              <div className="mx-4 text-luxe">✦</div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-luxe/50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
