import { Check, X } from "lucide-react"

export default function Pricing() {
  const plans = [
    {
      title: "3ヶ月コース",
      price: "330,000",
      monthlyPayment: Math.ceil(330000 / 48).toLocaleString(), // 48回払いの月額
      features: [
        "全学習サポート機能",
        "専用サイトへの永久アクセス",
        "オンライン自習室 24時間利用可能",
        "週1回のテスト実施",
        "毎日の動画フィードバック",
        "質問し放題のチャットサポート",
      ],
    },
    {
      title: "6ヶ月コース",
      price: "640,000",
      monthlyPayment: Math.ceil(640000 / 48).toLocaleString(), // 48回払いの月額
      features: [
        "全学習サポート機能",
        "専用サイトへの永久アクセス",
        "オンライン自習室 24時間利用可能",
        "週1回のテスト実施",
        "毎日の動画フィードバック",
        "質問し放題のチャットサポート",
        "限定特典すべて利用可能",
      ],
      featured: true,
    },
    {
      title: "12ヶ月コース",
      price: "1,200,000",
      monthlyPayment: Math.ceil(1200000 / 48).toLocaleString(), // 48回払いの月額
      features: [
        "全学習サポート機能",
        "専用サイトへの永久アクセス",
        "オンライン自習室 24時間利用可能",
        "週1回のテスト実施",
        "毎日の動画フィードバック",
        "質問し放題のチャットサポート",
        "限定特典すべて利用可能",
        "就活サポート特典",
        "オフ会への優先参加権",
      ],
    },
  ]

  // 他塾との比較データ
  const comparisonData = [
    {
      feature: "月額費用（48回払い）",
      minerva: "13,334円〜",
      jukuA: "15,000円〜",
      jukuB: "20,000円〜",
      highlight: true,
    },
    {
      feature: "24時間利用可能なオンライン自習室",
      minerva: true,
      jukuA: false,
      jukuB: false,
      highlight: true,
    },
    {
      feature: "AIを活用した学習管理",
      minerva: true,
      jukuA: false,
      jukuB: true,
      highlight: true,
    },
    {
      feature: "毎日の動画フィードバック",
      minerva: true,
      jukuA: false,
      jukuB: false,
      highlight: true,
    },
    {
      feature: "質問し放題のチャットサポート",
      minerva: true,
      jukuA: true,
      jukuB: false,
      highlight: false,
    },
    {
      feature: "専用サイトへの永久アクセス",
      minerva: true,
      jukuA: false,
      jukuB: false,
      highlight: true,
    },
    {
      feature: "返金保証制度",
      minerva: true,
      jukuA: false,
      jukuB: true,
      highlight: false,
    },
    {
      feature: "大学卒業後の就活サポート",
      minerva: true,
      jukuA: false,
      jukuB: false,
      highlight: true,
    },
  ]

  return (
    <section className="py-12 sm:py-20 md:py-28" id="pricing">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            <span className="gold-text-luxe">料金</span>
          </h2>
          <div className="w-20 h-1 bg-gold-gradient mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
            あなたの学習期間に合わせてプランをお選びいただけます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden ${
                plan.featured
                  ? "border-2 border-luxe transform md:-translate-y-4 shadow-xl shadow-luxe/20"
                  : "border border-gray-800"
              }`}
            >
              {plan.featured && (
                <div className="bg-gold-gradient py-2 text-center text-black font-semibold">人気プラン</div>
              )}
              <div className="bg-black p-4 sm:p-5 md:p-6 h-full">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{plan.title}</h3>
                <div className="mb-6">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold gold-text-luxe">¥{plan.price}</span>
                  <span className="text-gray-400">(税込)</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-luxe-light to-luxe flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                        <Check className="w-3 h-3 text-black" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center py-3 px-6 rounded-md transition ${
                    plan.featured ? "gold-button" : "bg-gray-800 hover:bg-gray-700 text-white"
                  }`}
                >
                  申し込み相談をする
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-black border border-gray-800 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">
              <span className="gold-text-luxe">48回払いの場合、月々のお支払い</span>
            </h3>

            <div className="grid grid-cols-3 gap-4 mb-8 text-center">
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">3ヶ月コース</h5>
                <p className="text-2xl font-bold text-luxe">¥{plans[0].monthlyPayment}</p>
                <p className="text-xs text-gray-400 mt-1">月々</p>
              </div>
              <div className="bg-gradient-to-b from-gray-900/50 to-luxe-dark/10 p-4 rounded-lg border border-luxe/30">
                <h5 className="font-medium mb-2">6ヶ月コース</h5>
                <p className="text-2xl font-bold text-luxe">¥{plans[1].monthlyPayment}</p>
                <p className="text-xs text-gray-400 mt-1">月々</p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">12ヶ月コース</h5>
                <p className="text-2xl font-bold text-luxe">¥{plans[2].monthlyPayment}</p>
                <p className="text-xs text-gray-400 mt-1">月々</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4 text-center">お支払いについて</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2 text-luxe-light">お支払い方法</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>・一括払い</li>
                  <li>
                    ・分割払い（最大<span className="text-luxe font-semibold">48回</span>まで）
                  </li>
                  <li className="text-sm text-luxe-light">※48回払いで月々の負担を軽減できます</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-luxe-light">注意事項</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>・表示価格はすべて税込です</li>
                  <li>・AIアプリの月額課金が別途かかります</li>
                  <li>・上記以外の料金は一切かかりません</li>
                </ul>
              </div>
            </div>

            {/* 他塾との比較表 */}
            <div className="mt-10 pt-8 border-t border-gray-800">
              <h3 className="text-xl font-semibold mb-6 text-center">
                <span className="gold-text-luxe">他塾との比較</span>
              </h3>

              <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
                <table className="w-full border-collapse" style={{ minWidth: "600px" }}>
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="py-3 px-4 text-left">サービス内容</th>
                      <th className="py-3 px-4 text-center bg-gradient-to-b from-black to-luxe-dark/10 border-x border-gray-800">
                        <span className="gold-text-luxe font-bold">Minerva</span>
                      </th>
                      <th className="py-3 px-4 text-center">A塾</th>
                      <th className="py-3 px-4 text-center">B塾</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((item, index) => (
                      <tr key={index} className={`border-b border-gray-800 ${item.highlight ? "bg-luxe-dark/5" : ""}`}>
                        <td className="py-3 px-4 text-left">{item.feature}</td>
                        <td className="py-3 px-4 text-center bg-gradient-to-b from-black to-luxe-dark/10 border-x border-gray-800">
                          {typeof item.minerva === "boolean" ? (
                            item.minerva ? (
                              <div className="flex justify-center">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-luxe-light to-luxe flex items-center justify-center">
                                  <Check className="w-4 h-4 text-black" />
                                </div>
                              </div>
                            ) : (
                              <div className="flex justify-center">
                                <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center">
                                  <X className="w-4 h-4 text-gray-400" />
                                </div>
                              </div>
                            )
                          ) : (
                            <span className="font-semibold text-luxe">{item.minerva}</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {typeof item.jukuA === "boolean" ? (
                            item.jukuA ? (
                              <div className="flex justify-center">
                                <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
                                  <Check className="w-4 h-4 text-white" />
                                </div>
                              </div>
                            ) : (
                              <div className="flex justify-center">
                                <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center">
                                  <X className="w-4 h-4 text-gray-400" />
                                </div>
                              </div>
                            )
                          ) : (
                            <span>{item.jukuA}</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {typeof item.jukuB === "boolean" ? (
                            item.jukuB ? (
                              <div className="flex justify-center">
                                <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
                                  <Check className="w-4 h-4 text-white" />
                                </div>
                              </div>
                            ) : (
                              <div className="flex justify-center">
                                <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center">
                                  <X className="w-4 h-4 text-gray-400" />
                                </div>
                              </div>
                            )
                          ) : (
                            <span>{item.jukuB}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-400 mt-4 text-center">
                ※ 2023年12月時点での調査に基づく比較です。各塾の料金やサービス内容は変更される場合があります。
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-center">返金保証</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-luxe-light">
                    保証1: 決済から3ヶ月以内にサービスに満足できなかった場合
                  </h4>
                  <p className="text-gray-300 mt-2">
                    Minervaのサービスに満足いただけなかった場合、無条件で返金いたします。
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-luxe-light">
                    保証2：もし我々のサービスを3ヶ月受けて他の塾の方が成績が上がると実感した場合
                  </h4>
                  <p className="text-gray-300 mt-2">
                    他の教育サービスと比較して、効果に満足いただけなかった場合も返金対象です。
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-luxe-light">
                    保証3：もし我々のサービスを3ヶ月受けて成績が上がらない場合
                  </h4>
                  <p className="text-gray-300 mt-2">
                    3ヶ月のサービス利用で成績向上が見られなかった場合も、返金いたします。
                  </p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-md mt-4">
                  <h4 className="font-medium mb-2">注意事項</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>※返金の場合は会員コンテンツ提供・個別サポートは全て中止。</li>
                    <li>※決済事務手数料10%を差し引いた金額を返金します。</li>
                    <li>※返金の場合は決済日から3ヶ月目の23:59までにご連絡ください。</li>
                    <li>※期日を過ぎてからの返金依頼は一切受付できません。</li>
                    <li>※課題の提出と毎週のテストを受けることが条件となります。</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
