export default function FreeTrial() {
  return (
    <section className="py-10 md:py-16 bg-black/90 relative overflow-hidden" id="free-trial">
      {/* 装飾的な背景要素 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-20 bg-gradient-to-b from-luxe/30 to-transparent"></div>
        <div className="absolute bottom-0 right-1/4 w-px h-20 bg-gradient-to-b from-transparent to-luxe/30"></div>
        <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-40 h-40 border border-luxe/10 rounded-full"></div>
        <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 w-40 h-40 border border-luxe/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-black to-luxe-dark/10 border-2 border-luxe p-8 md:p-10 rounded-lg shadow-xl shadow-luxe/20 relative">
          {/* 装飾的な角の要素 */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-luxe/70"></div>
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-luxe/70"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-luxe/70"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-luxe/70"></div>

          {/* 限定バッジ */}
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-luxe-dark via-luxe to-luxe-dark text-black text-sm font-bold py-1 px-6 rounded-full shadow-lg shadow-luxe/30">
            期間限定キャンペーン
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 relative inline-block">
              <span className="gold-text-luxe">2週間無料体験受講受付中</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-luxe to-transparent"></span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mt-6">
              Minervaの学習メソッドを<span className="text-luxe font-semibold">無料</span>で体験できるチャンス！
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-black/50 p-6 rounded-lg border border-luxe/30">
              <h3 className="text-xl font-semibold mb-4 text-luxe-light">体験内容</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-luxe-light to-luxe flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>
                  <span>マンツーマンサポート（2回）</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-luxe-light to-luxe flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>
                  <span>オンライン自習室の利用</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-luxe-light to-luxe flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>
                  <span>動画フィードバック（1回）</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-luxe-light to-luxe flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>
                  <span>PLAUD AIの試用アクセス</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/50 p-6 rounded-lg border border-luxe/30">
              <h3 className="text-xl font-semibold mb-4 text-luxe-light">特典</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-luxe-light to-luxe flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>
                  <span>学習診断書を無料進呈</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-luxe-light to-luxe flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>
                  <span>オリジナル教材サンプルプレゼント</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-luxe-light to-luxe flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>
                  <span>無料相談（60分）</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg mb-6">
              <span className="text-luxe font-semibold">残り5枠</span> - 定員に達し次第終了します
            </p>
            <a
              href="#contact"
              className="gold-button px-10 py-4 rounded-md text-xl font-semibold relative overflow-hidden inline-block group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-luxe-light via-luxe to-luxe-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative z-10">無料体験に申し込む</span>
            </a>
            <p className="text-sm text-gray-400 mt-4">※ 完全無料・無理な勧誘は一切ありません</p>
          </div>
        </div>
      </div>
    </section>
  )
}
