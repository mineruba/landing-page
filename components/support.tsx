import { Video, TestTube2, Bot, VideoIcon, Users2, MessageSquare, BookOpenCheck, BarChart3 } from "lucide-react"

export default function Support() {
  const supports = [
    {
      icon: <Video className="w-10 h-10 text-luxe" />,
      title: "毎日の動画フィードバック",
      description:
        "各講義にそれぞれ課題が設けられておりそれを毎日提出していただくことで動画でのフィードバックを送ります。生徒の学習を具体的かつ分かりやすくサポートし効率的に成績を向上させます。",
    },
    {
      icon: <TestTube2 className="w-10 h-10 text-luxe" />,
      title: "週1回のテストの実施",
      description:
        "学習の成果を確認するために、定期的にテストを実施します。「何ができていて、どこに弱点があるか」を明確にし次の学習に即反映。成績の推移を見える化することで、モチベーション維持にもつながります。",
    },
    {
      icon: <Bot className="w-10 h-10 text-luxe" />,
      title: "最新のAIを利用した効率的な課題管理",
      description:
        "PLAUD AIを活用し課題の提出、録音、文字起こし、要約などを一元化させることで効率的に学習内容をアウトプットします。",
    },
    {
      icon: <VideoIcon className="w-10 h-10 text-luxe" />,
      title: "Zoomでのライブ講義",
      description:
        "リアルタイムで講師とやりとりできるZoomライブ講義を実施。ただ聞くだけの一方通行の講義ではなく、質問や確認を積極的に行う双方向型授業です。臨場感のある授業で、集中力と学習効率を最大化します。",
    },
    {
      icon: <Users2 className="w-10 h-10 text-luxe" />,
      title: "オンライン自習室の提供",
      description:
        "Zoomを活用して自宅にいながら集中できる環境を提供。オンライン自習室では、24時間講師が常駐しているのでわからない問題もすぐに質問可能。一人では続かない学習も、仲間と一緒なら乗り越えられる！",
    },
    {
      icon: <Users2 className="w-10 h-10 text-luxe" />,
      title: "Minervaのコミュニティ参加権利",
      description:
        "志望校合格という同じ目標を持った仲間たちと、日々の学習や悩みを共有できるコミュニティをご用意。勉強報告や質問、モチベアップの言葉が飛び交う空間でひとりでは得られない「仲間の力」を実感できます。",
    },
    {
      icon: <MessageSquare className="w-10 h-10 text-luxe" />,
      title: "Chatworkでの個別サポート",
      description:
        "学習の進捗管理から日々の質問対応まで、専用チャットで講師がしっかりサポート。わからないことをそのままにせず、即解決できる環境を整えています。ひとりで悩まない、常に「相談できる安心」をお届けします。",
    },
    {
      icon: <BookOpenCheck className="w-10 h-10 text-luxe" />,
      title: "Minerva専用サイトへのアクセス権利",
      description:
        "入塾後は、受講生専用サイトに無期限でアクセス可能。教材、過去の講義動画、学習ノウハウなど、いつでもどこでも見返せる環境を用意しています。復習や再確認の際に、最強の武器になります。また、今後更新されていく講義や情報も閲覧可能です。",
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-luxe" />,
      title: "学習アプリを使用した生徒の課題、成績管理",
      description:
        "学習アプリスタディプラス for スクールを使い、課題の提出状況や理解度、テスト結果などを一元化。講師と生徒の両方が進捗を常に把握できるため無駄のない学習が可能に。「どこができて、どこが弱いか」がすぐにわかるから次の一手が明確になります。",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-black to-gray-900" id="support">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 relative inline-block">
            <span className="gold-text-luxe">学習サポート</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-luxe to-transparent"></span>
          </h2>

          <p className="text-lg md:text-xl leading-relaxed">
            大学受験Minervaでは、<span className="text-luxe font-medium">多角的なアプローチ</span>
            で生徒一人ひとりの学習をサポートします
          </p>
        </div>

        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {supports.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-black/90 to-gray-900/90 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-luxe/20 hover:border-luxe/50 transition-all duration-500 group"
            >
              <div className="p-8 flex flex-col md:flex-row gap-6">
                <div className="flex flex-col items-center md:items-start md:w-1/2">
                  <div className="w-20 h-20 rounded-full bg-black/50 flex items-center justify-center mb-6 shadow-inner shadow-luxe/10 group-hover:shadow-luxe/30 transition-all duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-semibold text-luxe-light group-hover:text-luxe transition-colors duration-300 text-center md:text-left mb-4">
                    {item.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-luxe/50 to-transparent mt-1 mb-4 group-hover:w-24 transition-all duration-500"></div>
                  <p className="text-gray-300 leading-relaxed text-center md:text-left">
                    {item.description.split("。").map((sentence, i) =>
                      sentence ? (
                        <span key={i}>
                          {sentence}。<br />
                        </span>
                      ) : null,
                    )}
                  </p>
                </div>

                <div className="md:w-1/2 mt-6 md:mt-0 relative">
                  {index === 0 ? (
                    <div className="border-2 border-luxe/30 rounded-lg overflow-hidden bg-black/30 group-hover:border-luxe/50 transition-all duration-500 shadow-lg shadow-black/50 relative">
                      <img
                        src="/images/video-feedback.png"
                        alt="毎日の動画フィードバック"
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
                        <span className="text-luxe text-sm font-medium px-3 py-1 bg-black/80 rounded-full">
                          個別フィードバック
                        </span>
                      </div>
                    </div>
                  ) : index === 1 ? (
                    <div className="border-2 border-luxe/30 rounded-lg overflow-hidden bg-black/30 group-hover:border-luxe/50 transition-all duration-500 shadow-lg shadow-black/50 relative">
                      <img
                        src="/images/weekly-test.png"
                        alt="週1回のテストの実施"
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
                        <span className="text-luxe text-sm font-medium px-3 py-1 bg-black/80 rounded-full">
                          定期的な学習確認
                        </span>
                      </div>
                    </div>
                  ) : index === 2 ? (
                    <div className="border-2 border-luxe/30 rounded-lg overflow-hidden bg-black/30 group-hover:border-luxe/50 transition-all duration-500 shadow-lg shadow-black/50 relative">
                      <img
                        src="/images/ai-learning.png"
                        alt="最新のAIを利用した効率的な課題管理"
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
                        <span className="text-luxe text-sm font-medium px-3 py-1 bg-black/80 rounded-full">
                          最先端AIテクノロジー
                        </span>
                      </div>
                    </div>
                  ) : index === 3 ? (
                    <div className="border-2 border-luxe/30 rounded-lg overflow-hidden bg-black/30 group-hover:border-luxe/50 transition-all duration-500 shadow-lg shadow-black/50 relative">
                      <img
                        src="/images/zoom-lecture.png"
                        alt="Zoomでのライブ講義"
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
                        <span className="text-luxe text-sm font-medium px-3 py-1 bg-black/80 rounded-full">
                          双方向型オンライン授業
                        </span>
                      </div>
                    </div>
                  ) : index === 4 ? (
                    <div className="border-2 border-luxe/30 rounded-lg overflow-hidden bg-black/30 group-hover:border-luxe/50 transition-all duration-500 shadow-lg shadow-black/50 relative">
                      <img
                        src="/images/online-study-room.png"
                        alt="オンライン自習室の提供"
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
                        <span className="text-luxe text-sm font-medium px-3 py-1 bg-black/80 rounded-full">
                          24時間利用可能な学習環境
                        </span>
                      </div>
                    </div>
                  ) : index === 5 ? (
                    <div className="border-2 border-luxe/30 rounded-lg overflow-hidden bg-black/30 group-hover:border-luxe/50 transition-all duration-500 shadow-lg shadow-black/50 relative">
                      <img
                        src="/images/minerva-community.png"
                        alt="Minervaのコミュニティ参加権利"
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
                        <span className="text-luxe text-sm font-medium px-3 py-1 bg-black/80 rounded-full">
                          仲間と共に成長する環境
                        </span>
                      </div>
                    </div>
                  ) : index === 6 ? (
                    <div className="border-2 border-luxe/30 rounded-lg overflow-hidden bg-black/30 group-hover:border-luxe/50 transition-all duration-500 shadow-lg shadow-black/50 relative">
                      <img
                        src="/images/individual-support.png"
                        alt="Chatworkでの個別サポート"
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
                        <span className="text-luxe text-sm font-medium px-3 py-1 bg-black/80 rounded-full">
                          いつでも質問できる安心感
                        </span>
                      </div>
                    </div>
                  ) : index === 7 ? (
                    <div className="border-2 border-luxe/30 rounded-lg overflow-hidden bg-black/30 group-hover:border-luxe/50 transition-all duration-500 shadow-lg shadow-black/50 relative">
                      <img
                        src="/images/minerva-site-access.png"
                        alt="Minerva専用サイトへのアクセス権利"
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
                        <span className="text-luxe text-sm font-medium px-3 py-1 bg-black/80 rounded-full">
                          いつでもどこでも学習リソースにアクセス
                        </span>
                      </div>
                    </div>
                  ) : index === 8 ? (
                    <div className="border-2 border-luxe/30 rounded-lg overflow-hidden bg-black/30 group-hover:border-luxe/50 transition-all duration-500 shadow-lg shadow-black/50 relative">
                      <img
                        src="/images/student-management-app.png"
                        alt="学習アプリを使用した生徒の課題、成績管理"
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
                        <span className="text-luxe text-sm font-medium px-3 py-1 bg-black/80 rounded-full">
                          データ分析で学習を最適化
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-luxe/30 rounded-lg h-64 flex items-center justify-center bg-black/30 overflow-hidden group-hover:border-luxe/50 transition-all duration-500">
                      <p className="text-luxe-light text-sm">画像をここに配置</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-black/50 border border-luxe/30 rounded-lg px-8 py-4 shadow-lg">
            <p className="text-lg text-luxe-light">
              すべてのサポートは<span className="text-luxe font-semibold">あなたの学習を最大限に効果的にする</span>
              ために設計されています
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
