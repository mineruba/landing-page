"use client"

import { useEffect, useRef, useState } from "react"

export default function StudyDiagram() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [canvasHeight, setCanvasHeight] = useState("300px")

  useEffect(() => {
    const updateHeight = () => {
      setCanvasHeight(window.innerWidth < 640 ? "180px" : "300px")
    }

    updateHeight()
    window.addEventListener("resize", updateHeight)

    return () => window.removeEventListener("resize", updateHeight)
  }, [])

  useEffect(() => {
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

    // 左側のレーダーチャートを描画 - サイズを大きく
    drawRadarChart(ctx, rect.width * 0.3, rect.height / 2)

    // 右側の学習スケジュールを描画 - サイズを大きく
    drawStudySchedule(ctx, rect.width * 0.7, rect.height / 2)

    // 矢印を描画
    drawArrow(ctx, rect.width * 0.3 + 110, rect.height / 2, rect.width * 0.7 - 130, rect.height / 2)

    // タイトルを描画
    drawTitle(ctx, rect.width * 0.3, 10, "あなたの学力レベル")
    drawTitle(ctx, rect.width * 0.7, 10, "あなたに最適な学習方法")

    // 下部のテキスト
    drawBottomText(ctx, rect.width / 2, rect.height - 15)
  }, [])

  // レーダーチャートを描画する関数
  const drawRadarChart = (ctx: CanvasRenderingContext2D, centerX: number, centerY: number) => {
    const radius = 85 // 70から85に拡大
    const categories = ["数学", "英語", "国語", "理科", "社会"]
    const values = [0.8, 0.6, 0.7, 0.9, 0.5] // 各カテゴリの値（0〜1）
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
      ctx.font = "13px 'Noto Serif JP', serif" // 12pxから13pxに拡大
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
    const width = 220 // 200から220に拡大
    const height = 200 // 180から200に拡大
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
      ctx.font = "13px 'Noto Serif JP', serif" // 12pxから13pxに拡大
      ctx.textAlign = "left"
      ctx.textBaseline = "middle"
      ctx.fillText(item.name, x + 12, itemY + itemHeight / 2)

      // 時間バー
      const barWidth = 75 // 70から75に拡大
      const barHeight = itemHeight * 0.6
      const barX = x + width - barWidth - 12
      const barY = itemY + (itemHeight - barHeight) / 2

      ctx.fillStyle = item.color
      ctx.fillRect(barX, barY, barWidth, barHeight)

      // 時間テキスト
      ctx.fillStyle = "#000"
      ctx.font = "12px 'Noto Serif JP', serif" // 11pxから12pxに拡大
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(item.time, barX + barWidth / 2, barY + barHeight / 2)
    })
  }

  // 矢印を描画する関数
  const drawArrow = (ctx: CanvasRenderingContext2D, fromX: number, fromY: number, toX: number, toY: number) => {
    const headLength = 12 // 10から12に拡大
    const angle = Math.atan2(toY - fromY, toX - fromX)

    ctx.beginPath()
    ctx.moveTo(fromX, fromY)
    ctx.lineTo(toX, toY)
    ctx.lineTo(toX - headLength * Math.cos(angle - Math.PI / 6), toY - headLength * Math.sin(angle - Math.PI / 6))
    ctx.moveTo(toX, toY)
    ctx.lineTo(toX - headLength * Math.cos(angle + Math.PI / 6), toY - headLength * Math.sin(angle + Math.PI / 6))
    ctx.strokeStyle = "#d4af37"
    ctx.lineWidth = 2.5 // 2から2.5に拡大
    ctx.stroke()
    ctx.lineWidth = 1
  }

  // タイトルを描画する関数
  const drawTitle = (ctx: CanvasRenderingContext2D, x: number, y: number, text: string) => {
    // テキストのみ描画 - フォントサイズを大きく
    ctx.fillStyle = "#fff"
    ctx.font = "bold 14px 'Noto Serif JP', serif" // 12pxから14pxに拡大
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(text, x, y)
  }

  // 下部のテキストを描画する関数
  const drawBottomText = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    ctx.fillStyle = "#ccc"
    ctx.font = "12px 'Noto Serif JP', serif" // 11pxから12pxに拡大
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("※1日の学習時間を3時間半とした場合の例", x, y)
  }

  return (
    <section className="py-10 sm:py-16 md:py-20" id="study-diagram">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            <span className="gold-text-luxe">学習メソッド</span>
          </h2>
          <div className="w-20 h-1 bg-gold-gradient mx-auto mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            Minervaでは一人ひとりの学力を分析し、最適な学習プランを提供します
          </p>
        </div>

        <div className="bg-black/70 backdrop-blur-sm border border-gray-800 rounded-lg p-3 sm:p-4 md:p-6 overflow-hidden max-w-4xl mx-auto">
          <h3 className="text-lg sm:text-xl font-bold mb-6 text-center">
            <span className="gold-text-luxe">1日の学習メニュー例</span>
          </h3>

          <div className="relative">
            {/* 人物アイコンを表示していた div 要素を削除 */}
            <canvas ref={canvasRef} className="w-full mx-auto" style={{ height: canvasHeight }} />
          </div>
        </div>

        <div className="mt-8 text-center max-w-3xl mx-auto">
          <p className="text-base sm:text-lg leading-relaxed">
            大学受験において重要なことは、<span className="text-luxe">自分の弱点を正確に把握し</span>、
            それに合わせた学習計画を
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            立てることです。Minervaでは、AIを活用した分析と講師の経験を組み合わせ
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            <span className="text-luxe">一人ひとりに最適化された学習プラン</span>を提供します。
          </p>
        </div>
      </div>
    </section>
  )
}
