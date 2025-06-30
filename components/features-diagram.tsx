"use client"

import { useEffect, useRef } from "react"

export default function FeaturesDiagram() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // キャンバスの解像度を設定
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()

    // 正方形のキャンバスにするための調整
    const size = Math.min(rect.width, rect.height)
    canvas.width = size * dpr
    canvas.height = size * dpr
    ctx.scale(dpr, dpr)

    // 背景を透明に
    ctx.clearRect(0, 0, size, size)

    // 図解を描画
    drawDiagram(ctx, size, size)
  }, [])

  // 図解を描画する関数
  const drawDiagram = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // スマホかどうかを判定
    const isMobile = width < 768

    // キャンバス全体のサイズを調整 - スマホ時は中央配置を重視
    const canvasSize = Math.min(width, height)
    const scaleFactor = isMobile ? 0.85 : 1.0 // スマホ時の縮小率を調整

    // フォントサイズをスマホ用に最適化
    const titleFontSize = isMobile ? "8px" : "18px"
    const textFontSize = isMobile ? "6px" : "14px"

    // 中央の円の半径をスマホ時に適切なサイズに
    const centerRadius = canvasSize * (isMobile ? 0.08 : 0.15) * scaleFactor

    // 周囲の円の配置をスマホ時に最適化
    const radius = canvasSize * (isMobile ? 0.25 : 0.35) * scaleFactor

    // 高級感のあるカラーパレット
    const colors = {
      gold: "#d4af37",
      lightGold: "#f9e3b1",
      darkGold: "#9e7c23",
      black: "#000000",
      darkGray: "#1a1a1a",
      lightGray: "#555555",
    }

    // 中央の円（Minerva）
    const centerX = width / 2
    const centerY = height / 2

    // 中央の円のグラデーション
    const centerGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, centerRadius)
    centerGradient.addColorStop(0, colors.lightGold)
    centerGradient.addColorStop(0.7, colors.gold)
    centerGradient.addColorStop(1, colors.darkGold)

    // 中央の円を描画
    ctx.beginPath()
    ctx.arc(centerX, centerY, centerRadius, 0, Math.PI * 2)
    ctx.fillStyle = centerGradient
    ctx.fill()
    ctx.strokeStyle = colors.darkGold
    ctx.lineWidth = isMobile ? 1 : 2
    ctx.stroke()

    // 中央のテキスト
    ctx.fillStyle = "#000"
    ctx.font = `bold ${titleFontSize} 'Noto Serif JP', serif`
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("Minerva", centerX, centerY)
    ctx.font = `${textFontSize} 'Noto Serif JP', serif`
    ctx.fillText("学習メソッド", centerX, centerY + (isMobile ? 8 : 22))

    // 周囲の特徴（5つ）
    const features = [
      { name: "マンツーマン\nサポート", icon: "Users" },
      { name: "AIを活用した\n学習", icon: "Brain" },
      { name: "オリジナル\n教材", icon: "BookOpen" },
      { name: "人に教える\n学習法", icon: "GraduationCap" },
      { name: "1冊の参考書を\n完璧にする", icon: "BookMarked" },
    ]

    features.forEach((feature, i) => {
      const angle = (Math.PI * 2 * i) / features.length - Math.PI / 2
      const x = centerX + radius * Math.cos(angle)
      const y = centerY + radius * Math.sin(angle)

      // 特徴の円のサイズをスマホ時により小さく
      const featureRadius = centerRadius * (isMobile ? 0.6 : 0.8)

      // 特徴の円のグラデーション
      const featureGradient = ctx.createRadialGradient(x, y, 0, x, y, featureRadius)
      featureGradient.addColorStop(0, "rgba(30, 30, 30, 0.9)")
      featureGradient.addColorStop(1, "rgba(10, 10, 10, 0.9)")

      // 特徴の円を描画
      ctx.beginPath()
      ctx.arc(x, y, featureRadius, 0, Math.PI * 2)
      ctx.fillStyle = featureGradient
      ctx.fill()
      ctx.strokeStyle = colors.gold
      ctx.lineWidth = isMobile ? 1 : 1.5
      ctx.stroke()

      // 中央から特徴への線
      ctx.beginPath()
      ctx.moveTo(centerX + centerRadius * Math.cos(angle), centerY + centerRadius * Math.sin(angle))
      ctx.lineTo(x - featureRadius * Math.cos(angle), y - featureRadius * Math.sin(angle))

      // 線のグラデーション
      const lineGradient = ctx.createLinearGradient(
        centerX + centerRadius * Math.cos(angle),
        centerY + centerRadius * Math.sin(angle),
        x - featureRadius * Math.cos(angle),
        y - featureRadius * Math.sin(angle),
      )
      lineGradient.addColorStop(0, colors.gold)
      lineGradient.addColorStop(1, "rgba(212, 175, 55, 0.3)")

      ctx.strokeStyle = lineGradient
      ctx.lineWidth = isMobile ? 1 : 1.5
      ctx.stroke()

      // 特徴のテキスト
      ctx.fillStyle = "#fff"
      ctx.font = `bold ${textFontSize} 'Noto Serif JP', serif`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      // 改行対応 - スマホ時は行間を狭く
      const lines = feature.name.split("\n")
      lines.forEach((line, index) => {
        const lineY = y + (index - (lines.length - 1) / 2) * (isMobile ? 6 : 18)
        ctx.fillText(line, x, lineY)
      })
    })

    // 効果を示す外側の円
    const outerRadius = Math.min(width, height) * (isMobile ? 0.35 : 0.45)
    ctx.beginPath()
    ctx.arc(centerX, centerY, outerRadius, 0, Math.PI * 2)
    ctx.strokeStyle = "rgba(212, 175, 55, 0.2)"
    ctx.lineWidth = isMobile ? 8 : 15
    ctx.stroke()
  }

  // 角丸の長方形を描画するヘルパー関数
  function roundRect(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
  ) {
    ctx.beginPath()
    ctx.moveTo(x + radius, y)
    ctx.lineTo(x + width - radius, y)
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
    ctx.lineTo(x + width, y + height - radius)
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
    ctx.lineTo(x + radius, y + height)
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
    ctx.lineTo(x, y + radius)
    ctx.quadraticCurveTo(x, y, x + radius, y)
    ctx.closePath()
  }

  return (
    <div className="w-full max-w-5xl mx-auto mt-12 mb-8">
      <div className="bg-black/70 backdrop-blur-sm border border-gray-800 rounded-lg p-4 md:p-6 overflow-hidden shadow-lg shadow-black/50">
        <h3 className="text-lg sm:text-xl font-bold mb-6 text-center">
          <span className="gold-text-luxe">Minervaの学習メソッド図解</span>
        </h3>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center py-4 md:py-0 min-h-[400px] md:min-h-0">
          {/* 図解部分 - スマホ用中央寄せと余白追加 */}
          <div className="relative w-full lg:w-1/2 flex justify-center py-4 md:py-0">
            <canvas
              ref={canvasRef}
              className="w-full max-w-full mx-auto h-[200px] sm:h-[250px] md:h-[400px] lg:h-[500px] object-contain block"
              style={{ margin: "0 auto", display: "block" }}
            />
          </div>

          {/* 表部分 */}
          <div className="lg:w-1/2 w-[90%] md:w-full max-w-[90vw] md:max-w-full mx-auto py-4 md:py-0 mt-12 md:mt-0">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse min-w-[280px] text-sm md:text-base">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="py-2 md:py-3 px-2 md:px-4 text-left text-luxe-light text-sm md:text-base">特徴</th>
                    <th className="py-2 md:py-3 px-2 md:px-4 text-left text-luxe-light text-sm md:text-base">
                      得られるもの
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800">
                    <td className="py-2 md:py-3 px-2 md:px-4 font-medium text-sm md:text-base">マンツーマンサポート</td>
                    <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base">
                      <span className="text-luxe">効率的な学習</span> - 一人ひとりの理解度に
                      <br className="hidden md:block" />
                      合わせた指導で学習効率が飛躍的に向上します
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-2 md:py-3 px-2 md:px-4 font-medium text-sm md:text-base">AIを活用した学習</td>
                    <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base">
                      <span className="text-luxe">勉強を好きになる</span> -
                      最新技術で学習の進捗を可視化し、達成感を得られます
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-2 md:py-3 px-2 md:px-4 font-medium text-sm md:text-base">オリジナル教材</td>
                    <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base">
                      <span className="text-luxe">理解の深化</span> -
                      本質を捉えた教材で、単なる暗記ではなく真の理解が得られます
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-2 md:py-3 px-2 md:px-4 font-medium text-sm md:text-base">人に教える学習法</td>
                    <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base">
                      <span className="text-luxe">自ら学ぶ力</span> -
                      教えることで知識が定着し、自分で考える力が身につきます
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-2 md:py-3 px-2 md:px-4 font-medium text-sm md:text-base">
                      1冊の参考書を完璧にする
                    </td>
                    <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base">
                      <span className="text-luxe">学習習慣の定着</span> -
                      継続的な取り組みで、確実な学力と学習習慣が身につきます
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-4 text-center text-xs md:text-sm text-gray-400 py-2 px-4 md:px-0">
          ※ Minervaの特徴的な学習メソッドが相互に作用し、効果的な学習環境を実現します
        </div>
      </div>
    </div>
  )
}
