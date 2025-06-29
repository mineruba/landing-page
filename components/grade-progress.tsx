"use client"

import { useEffect, useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

// 成績推移データ
const studentProgressData = [
  {
    id: 1,
    name: "Aさん（東京大学合格）",
    subject: "英語",
    data: [
      { month: "入塾時", score: 45 },
      { month: "1ヶ月後", score: 52 },
      { month: "3ヶ月後", score: 63 },
      { month: "6ヶ月後", score: 72 },
      { month: "1年後", score: 85 },
    ],
    color: "#d4af37",
  },
  {
    id: 2,
    name: "Bさん（京都大学合格）",
    subject: "数学",
    data: [
      { month: "入塾時", score: 38 },
      { month: "1ヶ月後", score: 45 },
      { month: "3ヶ月後", score: 58 },
      { month: "6ヶ月後", score: 67 },
      { month: "1年後", score: 79 },
    ],
    color: "#f9e3b1",
  },
  {
    id: 3,
    name: "Cさん（大阪大学合格）",
    subject: "国語",
    data: [
      { month: "入塾時", score: 42 },
      { month: "1ヶ月後", score: 48 },
      { month: "3ヶ月後", score: 55 },
      { month: "6ヶ月後", score: 65 },
      { month: "1年後", score: 76 },
    ],
    color: "#9e7c23",
  },
]

// 平均点上昇データ
const averageImprovementData = [
  { subject: "英語", improvement: 35, color: "#d4af37" },
  { subject: "数学", improvement: 32, color: "#f9e3b1" },
  { subject: "国語", improvement: 28, color: "#9e7c23" },
  { subject: "理科", improvement: 30, color: "#c27e10" },
  { subject: "社会", improvement: 25, color: "#e8a311" },
]

export default function GradeProgress() {
  const [activeStudent, setActiveStudent] = useState(1)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // 選択された生徒のデータ
  const selectedStudent = studentProgressData.find((student) => student.id === activeStudent) || studentProgressData[0]

  return (
    <section className="py-20 md:py-28 bg-black/90" id="grade-progress">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gold-text-luxe">実際に入塾した生徒の成績推移</span>
          </h2>
          <div className="w-20 h-1 bg-gold-gradient mx-auto mb-8"></div>
          <p className="text-lg md:text-xl leading-relaxed">
            Minervaの学習メソッドで、<span className="text-luxe">短期間で驚くほどの成績向上</span>
            を実現しています
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* 成績推移グラフ */}
          <div className="bg-gradient-to-b from-black/80 to-black/60 backdrop-blur-sm border border-gray-800 p-8 rounded-lg mb-12 hover:border-luxe hover:shadow-lg hover:shadow-luxe/10 transition-all duration-500">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              <span className="gold-text-luxe">偏差値の推移</span>
            </h3>

            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {studentProgressData.map((student) => (
                <button
                  key={student.id}
                  onClick={() => setActiveStudent(student.id)}
                  className={`px-4 py-2 rounded-md transition-all ${
                    activeStudent === student.id
                      ? "bg-gradient-to-r from-luxe-light to-luxe-dark text-black font-medium"
                      : "bg-gray-900 hover:bg-gray-800"
                  }`}
                >
                  {student.name}（{student.subject}）
                </button>
              ))}
            </div>

            <div className="h-80 w-full">
              {isMounted && (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={selectedStudent.data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="month" tick={{ fill: "#fff" }} axisLine={{ stroke: "rgba(255,255,255,0.3)" }} />
                    <YAxis
                      domain={[30, 90]}
                      tick={{ fill: "#fff" }}
                      axisLine={{ stroke: "rgba(255,255,255,0.3)" }}
                      label={{
                        value: "偏差値",
                        angle: -90,
                        position: "insideLeft",
                        style: { fill: "#fff" },
                      }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(0,0,0,0.8)",
                        borderColor: "#d4af37",
                        color: "#fff",
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="score"
                      name={`${selectedStudent.name}の${selectedStudent.subject}偏差値`}
                      stroke={selectedStudent.color}
                      strokeWidth={3}
                      dot={{ r: 6, fill: selectedStudent.color, strokeWidth: 2, stroke: "#000" }}
                      activeDot={{ r: 8, fill: selectedStudent.color, strokeWidth: 2, stroke: "#fff" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </div>

            <div className="mt-6 text-center">
              <p className="text-lg text-gray-300">
                <span className="text-luxe font-semibold">{selectedStudent.name}</span>
                の場合、入塾から1年で偏差値が
                <span className="text-luxe font-semibold">
                  {" "}
                  {selectedStudent.data[0].score}→{selectedStudent.data[4].score}{" "}
                </span>
                に上昇しました
              </p>
            </div>
          </div>

          {/* 平均点上昇データ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-b from-black/80 to-black/60 backdrop-blur-sm border border-gray-800 p-8 rounded-lg hover:border-luxe hover:shadow-lg hover:shadow-luxe/10 transition-all duration-500">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                <span className="gold-text-luxe">教科別平均点上昇</span>
              </h3>

              <div className="space-y-6">
                {averageImprovementData.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{item.subject}</span>
                      <span className="text-luxe font-semibold">+{item.improvement}点</span>
                    </div>
                    <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${(item.improvement / 40) * 100}%`,
                          background: `linear-gradient(90deg, ${item.color}88, ${item.color})`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-center text-gray-300 text-sm">※ 入塾から1年間の平均点上昇（100点満点換算）</p>
            </div>

            <div className="bg-gradient-to-b from-black/80 to-black/60 backdrop-blur-sm border border-gray-800 p-8 rounded-lg hover:border-luxe hover:shadow-lg hover:shadow-luxe/10 transition-all duration-500">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                <span className="gold-text-luxe">合格実績</span>
              </h3>

              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-gray-700 pb-4">
                  <span className="text-lg">東京大学</span>
                  <span className="text-luxe font-semibold">12名</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-700 pb-4">
                  <span className="text-lg">京都大学</span>
                  <span className="text-luxe font-semibold">8名</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-700 pb-4">
                  <span className="text-lg">東北大学</span>
                  <span className="text-luxe font-semibold">15名</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-700 pb-4">
                  <span className="text-lg">大阪大学</span>
                  <span className="text-luxe font-semibold">10名</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg">その他国公立・難関私大</span>
                  <span className="text-luxe font-semibold">47名</span>
                </div>
              </div>

              <p className="mt-8 text-center text-gray-300 text-sm">※ 過去3年間の合格実績（延べ人数）</p>
            </div>
          </div>

          {/* 成功事例 */}
          <div className="mt-12 bg-gradient-to-b from-black/80 to-luxe-dark/10 backdrop-blur-sm border border-gray-800 p-8 rounded-lg hover:border-luxe hover:shadow-lg hover:shadow-luxe/10 transition-all duration-500">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              <span className="gold-text-luxe">成功事例</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-luxe flex items-center justify-center mr-4">
                    <span className="text-black font-bold">A</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">偏差値40→70</h4>
                    <p className="text-sm text-gray-400">東京大学 文学部合格</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  「勉強のやり方がわからなかった私が、Minervaの『教える学習法』で短期間で偏差値30アップ。自分の言葉で説明できるようになると、理解が格段に深まりました。」
                </p>
              </div>

              <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-luxe flex items-center justify-center mr-4">
                    <span className="text-black font-bold">B</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">偏差値35→65</h4>
                    <p className="text-sm text-gray-400">京都大学 法学部合格</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  「AIを活用した学習管理と毎日の動画フィードバックで、自分の弱点が明確になり、効率よく勉強できました。オンライン自習室の存在も大きな支えでした。」
                </p>
              </div>

              <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-luxe flex items-center justify-center mr-4">
                    <span className="text-black font-bold">C</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">偏差値42→72</h4>
                    <p className="text-sm text-gray-400">大阪大学 医学部合格</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  「1冊の参考書を完璧にするという方針に最初は不安でしたが、本当に効果がありました。深い理解ができるようになり、応用問題も解けるようになりました。」
                </p>
              </div>
            </div>
          </div>

          {/* 強調メッセージ */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-black to-luxe-dark/20 border-2 border-luxe/30 px-8 py-6 rounded-lg shadow-lg">
              <p className="text-xl md:text-2xl">
                <span className="gold-text-luxe font-semibold">
                  Minervaの学習メソッドで、あなたも成績を飛躍的に向上させませんか？
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
