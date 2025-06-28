"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Clock, Gift, CheckCircle2, Users } from "lucide-react"

export default function FreeTrialAlt() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-black/90 to-gray-900/90" id="free-trial-alt">
      <div className="container mx-auto px-4">
        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gold-text-luxe">まずは無料で体験してみませんか？</span>
            </h2>
            <div className="w-20 h-1 bg-gold-gradient mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl leading-relaxed">
              Minervaの学習メソッドを<span className="text-luxe">2週間無料</span>で体験できます
            </p>
          </div>

          <div className="bg-black/60 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* 左側：体験内容 */}
              <div className="p-10 md:p-12 relative">
                <div className="absolute top-0 right-0 bg-luxe text-black font-bold py-1 px-4 rounded-bl-lg text-sm">
                  期間限定
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
                  <Clock className="w-8 h-8 mr-3 text-luxe" />
                  <span>2週間無料体験</span>
                </h3>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-luxe mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-xl mb-1">マンツーマンサポート（2回）</h4>
                      <p className="text-gray-300">
                        専任講師による個別指導で、あなたの学習スタイルや弱点を分析します。
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-luxe mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-xl mb-1">オンライン自習室の利用</h4>
                      <p className="text-gray-300">
                        24時間利用可能なオンライン自習室で、集中して学習できる環境を体験できます。
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-luxe mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-xl mb-1">動画フィードバック（1回）</h4>
                      <p className="text-gray-300">提出課題に対する詳細な動画フィードバックで、理解度を深めます。</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-luxe mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-xl mb-1">PLAUD AIの試用アクセス</h4>
                      <p className="text-gray-300">学習効率を高めるAIアプリを実際に試して、その効果を実感できます。</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-luxe mr-2" />
                    <span className="text-luxe-light">残り枠わずか</span>
                  </div>
                  <div className="text-luxe font-bold">残り5枠</div>
                </div>
              </div>

              {/* 右側：特典と申し込みボタン */}
              <div className="bg-gradient-to-br from-gray-900 to-black p-10 md:p-12 border-t lg:border-t-0 lg:border-l border-gray-800">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
                  <Gift className="w-8 h-8 mr-3 text-luxe" />
                  <span>体験特典</span>
                </h3>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-luxe flex items-center justify-center text-black font-bold mr-3 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl mb-1 text-luxe-light">学習診断書を無料進呈</h4>
                      <p className="text-gray-300">
                        あなたの学習スタイルや弱点を分析した診断書を作成し、無料で提供します。
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-luxe flex items-center justify-center text-black font-bold mr-3 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl mb-1 text-luxe-light">オリジナル教材サンプル</h4>
                      <p className="text-gray-300">Minerva独自の効果的な学習教材のサンプルをプレゼント。</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-luxe flex items-center justify-center text-black font-bold mr-3 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl mb-1 text-luxe-light">無料相談（60分）</h4>
                      <p className="text-gray-300">
                        学習方法や受験対策について、専門スタッフによる個別相談を無料で受けられます。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-luxe-light via-luxe to-luxe-dark text-black font-bold text-xl px-10 py-4 rounded-lg shadow-lg shadow-luxe/20 hover:shadow-luxe/40 transition-all duration-300 hover:scale-105"
                  >
                    無料体験に申し込む
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                  <p className="mt-4 text-gray-400 text-sm">※ 完全無料・無理な勧誘は一切ありません</p>
                </div>
              </div>
            </div>
          </div>

          {/* 体験者の声 */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className={`bg-black/50 border border-gray-800 p-6 rounded-lg shadow-md transition-all duration-1000 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-luxe-light to-luxe-dark flex items-center justify-center mr-4">
                  <span className="text-black font-bold">K</span>
                </div>
                <div>
                  <h4 className="font-semibold">高校2年生 Kさん</h4>
                  <p className="text-sm text-gray-400">東京都</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "無料体験で受けたマンツーマン指導が素晴らしく、自分の弱点が明確になりました。AIを使った学習管理も効率的で、すぐに入塾を決めました。"
              </p>
            </div>

            <div
              className={`bg-black/50 border border-gray-800 p-6 rounded-lg shadow-md transition-all duration-1000 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-luxe-light to-luxe-dark flex items-center justify-center mr-4">
                  <span className="text-black font-bold">M</span>
                </div>
                <div>
                  <h4 className="font-semibold">高校3年生 Mさん</h4>
                  <p className="text-sm text-gray-400">大阪府</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "オンライン自習室の雰囲気が良く、集中して勉強できました。動画フィードバックも具体的で、自分の理解度が深まりました。無料なのに本格的な内容で驚きました。"
              </p>
            </div>

            <div
              className={`bg-black/50 border border-gray-800 p-6 rounded-lg shadow-md transition-all duration-1000 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-luxe-light to-luxe-dark flex items-center justify-center mr-4">
                  <span className="text-black font-bold">S</span>
                </div>
                <div>
                  <h4 className="font-semibold">高卒生 Sさん</h4>
                  <p className="text-sm text-gray-400">福岡県</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "無料体験から入塾して3ヶ月で偏差値が10上がりました。PLAUD
                AIの使い方も丁寧に教えてもらえて、学習効率が格段に上がりました。体験してみて本当に良かったです。"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
