"use client"

import { useEffect, useRef, useState } from "react"

export default function StudyDiagram() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [canvasHeight, setCanvasHeight] = useState("300px")
  const [isMobile, setIsMobile] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateHeight = () => {
        const newIsMobile = window.innerWidth < 768
        setIsMobile(newIsMobile)
        if (newIsMobile) {
          setCanvasHeight("700px")
        } else {
          setCanvasHeight("300px")
        }
      }

      updateHeight()
      setIsMounted(true)

      window.addEventListener("resize", updateHeight)
      return () => window.removeEventListener("resize", updateHeight)
    }
  }, [])

  useEffect(() => {
    if (!isMounted || typeof window === "undefined") return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // キャンバスの解像度を設定
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // 背景を透明に
    ctx.clearRect(0, 0, rect.width, rect.height)

    // drawDiagram関数を修正してスマホ時にチャートを中央配置し、縦並びにする
    const drawDiagram = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      // レーダーチャートを描画 - スマホ時は中央上部に配置
      const chartCenterX = isMobile ? width / 2 : width * 0.3
      const chartCenterY = isMobile ? height * 0.25 : height / 2

      drawRadarChart(ctx, chartCenterX, chartCenterY)

      // 学習スケジュールを描画 - スマホ時は中央下部に配置、十分な間隔を確保
      const scheduleCenterX = isMobile ? width / 2 : width * 0.7
      const scheduleCenterY = isMobile ? height * 0.75 : height / 2

      drawStudySchedule(ctx, scheduleCenterX, scheduleCenterY)

      // 矢印を描画 - スマホ時は縦向きに、十分な間隔を確保
      if (isMobile) {
        drawArrow(ctx, chartCenterX, chartCenterY + 100, scheduleCenterX, scheduleCenterY - 100)
      } else {
        drawArrow(ctx, chartCenterX + 110, chartCenterY, scheduleCenterX - 130, scheduleCenterY)
      }

      // タイトルを描画 - スマホ時は位置調整
      drawTitle(ctx, chartCenterX, isMobile ? 30 : 10, "あなたの学力レベル")
      drawTitle(ctx, scheduleCenterX, isMobile ? height * 0.5 + 30 : 10, "あなたに最適な学習方法")

      // 下部のテキスト
      drawBottomText(ctx, width / 2, height - 15)
    }

    drawDiagram(ctx, rect.width, rect.height)
  }, [isMounted, isMobile])

  // レーダーチャートを描画する関数
  const drawRadarChart = (ctx: CanvasRenderingContext2D, centerX: number, centerY: number) => {
    const radius = 85
    const categories = ["数学", "英語", "国語", "理科", "社会"]
    const values = [0.8, 0.6, 0.7, 0.9, 0.5]
    const angles = categories.map((_, i) => (Math.PI * 2 * i) / categories.length - Math.PI / 2)

    // 背景の五角形を描画
    ctx.beginPath()
    for (let i = 0; i < categories.length; i++) {
      const x = centerX + radius * Math.cos(angles[i])
      const y = centerY + radius * Math.sin(angles[i])
      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    }
    ctx.closePath()
    ctx.fillStyle = "rgba(0, 0, 0, 0.3)"
    ctx.fill()
    ctx.strokeStyle = "#666"
    ctx.stroke()

    // 内側の線を描画
    for (let r = 0.2; r < 1; r += 0.2) {
      ctx.beginPath()
      for (let i = 0; i < categories.length; i++) {
        const x = centerX + radius * r * Math.cos(angles[i])
        const y = centerY + radius * r * Math.sin(angles[i])
        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.closePath()
      ctx.strokeStyle = "rgba(102, 102, 102, 0.5)"
      ctx.stroke()
    }

    // 中心から各頂点への線を描画
    for (let i = 0; i < categories.length; i++) {
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      const x = centerX + radius * Math.cos(angles[i])
      const y = centerY + radius * Math.sin(angles[i])
      ctx.lineTo(x, y)
      ctx.strokeStyle = "rgba(102, 102, 102, 0.5)"
      ctx.stroke()

      // カテゴリ名を描画 - フォントサイズを大きく
      const labelX = centerX + (radius + 18) * Math.cos(angles[i])
      const labelY = centerY + (radius + 18) * Math.sin(angles[i])
      ctx.fillStyle = "#fff"
      ctx.font = isMobile ? "14px 'Noto Serif JP', serif" : "13px 'Noto Serif JP', serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(categories[i], labelX, labelY)
    }

    // データポイントを描画
    ctx.beginPath()
    for (let i = 0; i < categories.length; i++) {
      const x = centerX + radius * values[i] * Math.cos(angles[i])
      const y = centerY + radius * values[i] * Math.sin(angles[i])
      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    }
    ctx.closePath()
    ctx.fillStyle = "rgba(212, 175, 55, 0.3)"
    ctx.fill()
    ctx.strokeStyle = "#d4af37"
    ctx.lineWidth = 2
    ctx.stroke()
    ctx.lineWidth = 1
  }

  // 学習スケジュールを描画する関数
  const drawStudySchedule = (ctx: CanvasRenderingContext2D, centerX: number, centerY: number) => {
    const width = 220
    const height = 200
    const x = centerX - width / 2
    const y = centerY - height / 2

    // 背景
    ctx.fillStyle = "rgba(0, 0, 0, 0.3)"
    ctx.fillRect(x, y, width, height)
    ctx.strokeStyle = "#666"
    ctx.strokeRect(x, y, width, height)

    // 学習項目と時間
    const items = [
      { name: "数学演習", time: "60min", color: "#d4af37" },
      { name: "英語長文", time: "45min", color: "#d4af37" },
      { name: "国語現代文", time: "30min", color: "#d4af37" },
      { name: "理科（物理）", time: "45min", color: "#d4af37" },
      { name: "AIアプリ復習", time: "30min", color: "#d4af37" },
    ]

    const itemHeight = height / items.length

    items.forEach((item, i) => {
      const itemY = y + i * itemHeight

      // 項目名 - フォントサイズを大きく
      ctx.fillStyle = "#fff"
      ctx.font = isMobile ? "14px 'Noto Serif JP', serif" : "13px 'Noto Serif JP', serif"
      ctx.textAlign = "left"
      ctx.textBaseline = "middle"
      ctx.fillText(item.name, x + 12, itemY + itemHeight / 2)

      // 時間バー
      const barWidth = 75
      const barHeight = itemHeight * 0.6
      const barX = x + width - barWidth - 12
      const barY = itemY + (itemHeight - barHeight) / 2

      ctx.fillStyle = item.color
      ctx.fillRect(barX, barY, barWidth, barHeight)

      // 時間テキスト
      ctx.fillStyle = "#000"
      ctx.font = "12px 'Noto Serif JP', serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(item.time, barX + barWidth / 2, barY + barHeight / 2)
    })
  }

  // 矢印を描画する関数
  const drawArrow = (ctx: CanvasRenderingContext2D, fromX: number, fromY: number, toX: number, toY: number) => {
    const headLength = 12
    const angle = Math.atan2(toY - fromY, toX - fromX)

    ctx.beginPath()
    ctx.moveTo(fromX, fromY)
    ctx.lineTo(toX, toY)
    ctx.lineTo(toX - headLength * Math.cos(angle - Math.PI / 6), toY - headLength * Math.sin(angle - Math.PI / 6))
    ctx.moveTo(toX, toY)
    ctx.lineTo(toX - headLength * Math.cos(angle + Math.PI / 6), toY - headLength * Math.sin(angle + Math.PI / 6))
    ctx.strokeStyle = "#d4af37"
    ctx.lineWidth = 2.5
    ctx.stroke()
    ctx.lineWidth = 1
  }

  // タイトルを描画する関数
  const drawTitle = (ctx: CanvasRenderingContext2D, x: number, y: number, text: string) => {
    ctx.fillStyle = "#fff"
    ctx.font = "bold 14px 'Noto Serif JP', serif"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(text, x, y)
  }

  // 下部のテキストを描画する関数
  const drawBottomText = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    ctx.fillStyle = "#ccc"
    ctx.font = "12px 'Noto Serif JP', serif"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("※1日の学習時間を3時間半とした場合の例", x, y)
  }

  // クライアントサイドでマウントされていない場合は何も表示しない
  if (!isMounted) {
    return (
      <section className="py-10 sm:py-16 md:py-20" id="study-diagram">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              <span className="gold-text-luxe">学習メソッド</span>
            </h2>
            <div className="w-20 h-1 bg-gold-gradient mx-auto mb-8"></div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              Minervaでは一人ひとりの学力を分析し、最適な学習プランを提供します
            </p>
          </div>

          <div className="bg-black/70 backdrop-blur-sm border border-gray-800 rounded-lg p-3 sm:p-4 md:p-6 overflow-hidden max-w-[95vw] md:max-w-4xl mx-auto min-h-[700px] md:min-h-0">
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-6 text-center py-2">
              <span className="gold-text-luxe">1日の学習メニュー例</span>
            </h3>
            <div className="flex justify-center items-center min-h-[300px]">
              <span className="text-gray-500">読み込み中...</span>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-10 sm:py-16 md:py-20" id="study-diagram">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            <span className="gold-text-luxe">学習メソッド</span>
          </h2>
          <div className="w-20 h-1 bg-gold-gradient mx-auto mb-8"></div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            Minervaでは一人ひとりの学力を分析し、最適な学習プランを提供します
          </p>
        </div>

        <div className="bg-black/70 backdrop-blur-sm border border-gray-800 rounded-lg p-3 sm:p-4 md:p-6 overflow-hidden max-w-[95vw] md:max-w-4xl mx-auto min-h-[700px] md:min-h-0">
          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-6 text-center py-2">
            <span className="gold-text-luxe">1日の学習メニュー例</span>
          </h3>

          <div className="flex flex-col md:flex-row gap-6 lg:gap-8 items-center py-4 md:py-0 min-h-[700px] md:min-h-0">
            {/* 図解部分 */}
            <div className="relative w-full lg:w-1/2 flex justify-center py-4 md:py-0 mb-6 md:mb-0">
              <canvas
                ref={canvasRef}
                className="w-full md:w-full max-w-full md:max-w-full mx-auto object-contain block max-w-full max-h-[240px] md:max-h-none"
                style={{
                  height: canvasHeight,
                  margin: "0 auto",
                  display: "block",
                  visibility: "visible",
                  maxWidth: "100%",
                  maxHeight: isMobile ? "240px" : "none",
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 text-center max-w-3xl mx-auto py-4">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-2">
            大学受験において重要なことは、<span className="text-luxe">自分の弱点を正確に把握し</span>、
            それに合わせた学習計画を
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-2">
            立てることです。Minervaでは、AIを活用した分析と講師の経験を組み合わせ
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            <span className="text-luxe">一人ひとりに最適化された学習プラン</span>を提供します。
          </p>
        </div>
      </div>
    </section>
  )
}
