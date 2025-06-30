import FeaturesDiagram from "./features-diagram"

export default function Features() {
  return (
    <section className="py-12 sm:py-20 md:py-28 bg-black/80" id="features">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            <span className="gold-text-luxe">Minervaの特徴</span>
          </h2>
          <div className="w-20 h-1 bg-gold-gradient mx-auto mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            私たちは従来の受験指導の枠を超え、 最新のテクノロジーと科学的アプローチで
            <br />
            効果的な学習を実現します
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-luxe-light via-luxe to-luxe-dark flex items-center justify-center mb-5 shadow-lg shadow-luxe/20 overflow-hidden border-2 border-luxe">
              <img
                src="/images/one-on-one-support.png"
                alt="マンツーマンでのサポート"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">マンツーマンでのサポート</h3>
            <p className="text-gray-300">
              一人ひとりの学習スタイルや理解度に
              <br />
              合わせたきめ細かな個別指導を
              <br />
              提供します。
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-luxe-light via-luxe to-luxe-dark flex items-center justify-center mb-5 shadow-lg shadow-luxe/20 overflow-hidden border-2 border-luxe">
              <img src="/images/ai-learning.png" alt="AIを活用した学習" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">AIを活用した学習</h3>
            <p className="text-gray-300">
              最新のAI技術を駆使し、学習の進捗管理や 個別の弱点分析を行い、効率的な学習を
              <br />
              サポートします。
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-luxe-light via-luxe to-luxe-dark flex items-center justify-center mb-5 shadow-lg shadow-luxe/20 overflow-hidden border-2 border-luxe">
              <img src="/images/original-materials.png" alt="オリジナルの教材" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">オリジナルの教材</h3>
            <p className="text-gray-300">
              長年の指導経験から生まれた、効率的かつ 理解しやすいオリジナル教材を
              <br />
              使用します。
            </p>
          </div>
        </div>

        {/* 下の2つのブロックを中央寄せにするための新しいコンテナ */}
        <div className="flex flex-col md:flex-row justify-center gap-10 max-w-5xl mx-auto mt-10">
          <div className="flex flex-col items-center text-center max-w-md">
            <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-luxe-light via-luxe to-luxe-dark flex items-center justify-center mb-5 shadow-lg shadow-luxe/20 overflow-hidden border-2 border-luxe">
              <img src="/images/teaching-method.png" alt="人に教える学習法" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">人に教える学習法</h3>
            <p className="text-gray-300">
              学んだ内容を自分の言葉で説明することで 理解を深め
              <br />
              確実な知識の定着を実現します。
            </p>
          </div>

          <div className="flex flex-col items-center text-center max-w-md">
            <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-luxe-light via-luxe to-luxe-dark flex items-center justify-center mb-5 shadow-lg shadow-luxe/20 overflow-hidden border-2 border-luxe">
              <img
                src="/images/perfect-textbook.png"
                alt="1冊の参考書を完璧にする"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">1冊の参考書を完璧にする</h3>
            <p className="text-gray-300">
              多くの教材に手を出すのではなく、厳選された1冊を
              <br />
              徹底的に理解し、本質的な学力を養成します。
            </p>
          </div>
        </div>

        {/* 図解コンポーネントを追加 */}
        <FeaturesDiagram />
      </div>
    </section>
  )
}
