"use client"

import { useEffect, useRef, useState } from "react"

export default function DailySchedule() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [canvasHeight, setCanvasHeight] = useState("900px")
  const [isMobile, setIsMobile] = useState(false) // Declare isMobile variable

  useEffect(() => {
    const updateHeight = () => {
      const newIsMobile = window.innerWidth < 768
      setIsMobile(newIsMobile) // Update isMobile state
      if (newIsMobile) {
        setCanvasHeight("1000px") // スマホで全要素が収まる高さ
      } else if (window.innerWidth < 1024) {
        setCanvasHeight("750px")
      } else {
        setCanvasHeight("900px")
      }
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

    // 円グラフを描画
    drawPieChart(ctx, rect.width, rect.height)
  }, [])

  // 円グラフを描画する関数
  const drawPieChart = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // LPの雰囲気に合わせた高級感のあるカラーパレット
    const luxeColors = {
      gold: "#d4af37",
      lightGold: "#f9e3b1",
      darkGold: "#9e7c23",
      black: "#000000",
      darkGray: "#1a1a1a",
      mediumGray: "#333333",
      lightGray: "#555555",
      accent1: "#2c2c2c",
      accent2: "#3a3a3a",
    }

    // 円グラフのデータ（24時間）
    const timeSlots = [
      { name: "就寝", hours: 6, color: luxeColors.darkGray },
      { name: "起床・朝の支度", hours: 1, color: luxeColors.mediumGray },
      { name: "数学演習", hours: 1, color: luxeColors.gold, isStudy: true, minutes: 60 },
      { name: "登校・授業", hours: 8, color: luxeColors.accent2 },
      { name: "英語長文・国語現代文", hours: 1.25, color: "#e8a311", isStudy: true, minutes: 75 },
      { name: "夕食・休息", hours: 0.75, color: luxeColors.accent1 },
      { name: "理科・AIアプリ復習", hours: 1.25, color: "#c27e10", isStudy: true, minutes: 75 },
      { name: "自由時間・就寝準備", hours: 4.75, color: luxeColors.mediumGray },
    ]

    // 円グラフの中心と半径
    const centerX = width / 2
    const centerY = isMobile ? height / 4 : height / 2 - 70

    // スマホ時は画面幅の25%、PC時は従来通り
    const radius = isMobile ? Math.min(width * 0.25, height * 0.12) : Math.min(width * 0.9, height * 0.6) * 0.4

    // 円グラフの背景（黒い円）
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius + 10, 0, Math.PI * 2)
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)"
    ctx.fill()

    // 円グラフの外枠
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius + 10, 0, Math.PI * 2)
    ctx.strokeStyle = "rgba(212, 175, 55, 0.3)"
    ctx.lineWidth = 2
    ctx.stroke()

    // 円グラフのタイトルは削除
    // ctx.fillStyle = "#ffffff"
    // ctx.font = "bold 18px 'Noto Serif JP', serif"
    // ctx.textAlign = "center"
    // ctx.textBaseline = "middle"
    // ctx.fillText("1日24時間の使い方", centerX, centerY - radius - 25)

    // 総学習時間
    const totalStudyHours = timeSlots.filter((slot) => slot.isStudy).reduce((sum, slot) => sum + slot.hours, 0)
    const totalStudyMinutes = totalStudyHours * 60

    // 総学習時間を表示
    const studyTimeText = `学習時間: ${Math.floor(totalStudyHours)}時間${totalStudyMinutes % 60}分`

    // 総学習時間の背景と境界線は削除
    // const studyTimeWidth = ctx.measureText(studyTimeText).width + 40
    // const studyTimeHeight = 36
    // ctx.fillStyle = "rgba(20, 20, 20, 0.8)"
    // roundRect(ctx, centerX - studyTimeWidth / 2, centerY - radius - 100, studyTimeWidth, studyTimeHeight, 8)
    // ctx.strokeStyle = "rgba(212, 175, 55, 0.5)"
    // ctx.lineWidth = 1.5
    // ctx.beginPath()
    // roundRectPath(ctx, centerX - studyTimeWidth / 2, centerY - radius - 100, studyTimeWidth, studyTimeHeight, 8)
    // ctx.stroke()

    // 総学習時間のテキスト - グラデーションテキストで直接表示
    const textGradient = ctx.createLinearGradient(
      centerX - 100,
      centerY - radius - 80,
      centerX + 100,
      centerY - radius - 60,
    )
    textGradient.addColorStop(0, "#f9e3b1")
    textGradient.addColorStop(0.5, "#d4af37")
    textGradient.addColorStop(1, "#9e7c23")

    ctx.fillStyle = textGradient
    ctx.font = `bold ${isMobile ? "14px" : "20px"} 'Noto Serif JP', serif`
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(studyTimeText, centerX, centerY - radius - (isMobile ? 60 : 90))

    // 円グラフのセグメントを描画
    let startAngle = -Math.PI / 2 // 12時の位置から開始
    const totalHours = timeSlots.reduce((sum, slot) => sum + slot.hours, 0)

    // ラベル配置用の配列
    const labelPositions = []

    timeSlots.forEach((slot, index) => {
      const sliceAngle = (slot.hours / totalHours) * (Math.PI * 2)
      const endAngle = startAngle + sliceAngle
      const midAngle = startAngle + sliceAngle / 2

      // セグメントのグラデーション
      const gradient = ctx.createRadialGradient(
        centerX + radius * 0.5 * Math.cos(midAngle),
        centerY + radius * 0.5 * Math.sin(midAngle),
        0,
        centerX,
        centerY,
        radius,
      )

      if (slot.isStudy) {
        // 学習時間のセグメントには金色のグラデーションを使用
        gradient.addColorStop(0, lightenColor(slot.color, 20))
        gradient.addColorStop(0.7, slot.color)
        gradient.addColorStop(1, darkenColor(slot.color, 20))
      } else {
        // 他のセグメントには通常のグラデーションを使用
        const lighterColor = lightenColor(slot.color, 15)
        const darkerColor = darkenColor(slot.color, 15)
        gradient.addColorStop(0, lighterColor)
        gradient.addColorStop(0.7, slot.color)
        gradient.addColorStop(1, darkerColor)
      }

      // セグメントを描画
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, startAngle, endAngle)
      ctx.closePath()
      ctx.fillStyle = gradient
      ctx.fill()

      // セグメントの境界線
      ctx.strokeStyle = "rgba(0, 0, 0, 0.3)"
      ctx.lineWidth = 1
      ctx.stroke()

      // ラベル位置情報を保存（座標は後で計算するので、角度だけ保存）
      labelPositions.push({
        slot,
        angle: midAngle,
        sliceAngle,
      })

      startAngle = endAngle
    })

    // ラベルを円グラフの外側に描画
    labelPositions.forEach(({ slot, angle, sliceAngle }) => {
      // 十分な大きさのセグメントのみラベルを表示
      if (sliceAngle > 0.2) {
        const labelText = slot.isStudy ? `${slot.name}\n${slot.minutes}分` : slot.name
        const lines = labelText.split("\n")
        const lineHeight = isMobile ? 12 : 16
        const bgPadding = isMobile ? 4 : 6
        const bgWidth = Math.max(...lines.map((line) => ctx.measureText(line).width)) + bgPadding * 3
        const bgHeight = lines.length * lineHeight + bgPadding * 2

        // 外側のラベル位置を計算 - スマホ時は内側に配置
        let labelDistance = isMobile ? radius * 0.5 : radius * 1.25

        // 「就寝」ラベルの場合の調整もスマホ対応
        if (slot.name === "就寝" || slot.name === "登校・授業") {
          labelDistance = isMobile ? radius * 0.4 : radius * 1.4
        }

        const labelX = centerX + labelDistance * Math.cos(angle)
        const labelY = centerY + labelDistance * Math.sin(angle)

        // スマホ時はセグメントからラベルへの線を描画しない
        if (!isMobile) {
          const innerX = centerX + radius * 0.9 * Math.cos(angle)
          const innerY = centerY + radius * 0.9 * Math.sin(angle)

          ctx.beginPath()
          ctx.moveTo(innerX, innerY)
          ctx.lineTo(labelX - (bgWidth / 2) * Math.cos(angle), labelY - (bgHeight / 2) * Math.sin(angle))
          ctx.strokeStyle = slot.isStudy ? "rgba(212, 175, 55, 0.7)" : "rgba(255, 255, 255, 0.5)"
          ctx.lineWidth = 1
          ctx.stroke()
        }

        // 背景色
        const bgColor = slot.isStudy ? "rgba(255, 255, 255, 0.85)" : "rgba(0, 0, 0, 0.7)"
        // テキスト色
        const textColor = slot.isStudy ? "#000000" : "#ffffff"

        // 背景を描画
        ctx.save()
        ctx.translate(labelX, labelY)

        ctx.fillStyle = bgColor
        roundRect(ctx, -bgWidth / 2, -bgHeight / 2, bgWidth, bgHeight, 4)

        // 背景の境界線
        ctx.strokeStyle = slot.isStudy ? "rgba(212, 175, 55, 0.5)" : "rgba(255, 255, 255, 0.3)"
        ctx.lineWidth = 1
        ctx.beginPath()
        roundRectPath(ctx, -bgWidth / 2, -bgHeight / 2, bgWidth, bgHeight, 4)
        ctx.stroke()

        // テキストを描画 - スマホ時はフォントサイズを調整
        ctx.fillStyle = textColor
        ctx.font = slot.isStudy
          ? `bold ${isMobile ? "8px" : "11px"} 'Noto Serif JP', serif`
          : `${isMobile ? "8px" : "11px"} 'Noto Serif JP', serif`
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"

        lines.forEach((line, i) => {
          const lineY = (i - (lines.length - 1) / 2) * lineHeight
          ctx.fillText(line, 0, lineY)
        })

        ctx.restore()
      }
    })

    // 時間の目盛りを描画 - スマホ時は表示しない
    if (!isMobile) {
      for (let hour = 0; hour < 24; hour += 3) {
        const angle = (hour / 24) * Math.PI * 2 - Math.PI / 2
        const hourX = centerX + (radius + 35) * Math.cos(angle)
        const hourY = centerY + (radius + 35) * Math.sin(angle)

        // 時間ラベルの背景
        const hourText = `${hour}:00`
        const textWidth = ctx.measureText(hourText).width + 10
        const textHeight = 24

        ctx.fillStyle = "rgba(20, 20, 20, 0.7)"
        roundRect(ctx, hourX - textWidth / 2, hourY - textHeight / 2, textWidth, textHeight, 4)

        // 時間ラベルの境界線
        ctx.strokeStyle = "rgba(212, 175, 55, 0.3)"
        ctx.lineWidth = 1
        ctx.beginPath()
        roundRectPath(ctx, hourX - textWidth / 2, hourY - textHeight / 2, textWidth, textHeight, 4)
        ctx.stroke()

        // 時間ラベルのテキスト
        ctx.fillStyle = "#f9e3b1"
        ctx.font = "bold 10px 'Noto Serif JP', serif"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(hourText, hourX, hourY)
      }
    }

    // 凡例を描画 - 位置を上に調整
    const legendY = isMobile ? height / 2 + radius + 150 : height / 2 + radius + 160

    const legendWidth = width * 0.8
    const legendX = width / 2 - legendWidth / 2
    const legendItemHeight = 30
    const legendItemsPerRow = isMobile ? 1 : 2 // スマホ時は1列表示
    const legendItemWidth = legendWidth / legendItemsPerRow

    // 凡例の背景
    const legendBgWidth = legendWidth + 60
    const legendBgHeight = Math.ceil(timeSlots.length / legendItemsPerRow) * legendItemHeight + 100 // 80から100に増加

    ctx.fillStyle = "rgba(0, 0, 0, 0.5)"
    roundRect(ctx, legendX - legendBgWidth / 2, legendY - 40, legendBgWidth, legendBgHeight, 8)

    ctx.strokeStyle = "rgba(212, 175, 55, 0.3)"
    ctx.lineWidth = 1.5
    ctx.beginPath()
    roundRectPath(ctx, legendX - legendBgWidth / 2, legendY - 40, legendBgWidth, legendBgHeight, 8)
    ctx.stroke()

    // 凡例のタイトル
    ctx.fillStyle = "#ffffff"
    ctx.font = "bold 16px 'Noto Serif JP', serif"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("時間の内訳", width / 2, legendY - 30) // -20から-30に変更して上に移動

    // 凡例の項目を描画
    timeSlots.forEach((slot, index) => {
      const row = Math.floor(index / legendItemsPerRow)
      const col = index % legendItemsPerRow
      const itemX = legendX + col * legendItemWidth
      const itemY = legendY + row * legendItemHeight

      // 色のサンプル
      ctx.fillStyle = slot.color
      ctx.fillRect(itemX, itemY, 20, 20)
      ctx.strokeStyle = "rgba(0, 0, 0, 0.5)"
      ctx.lineWidth = 1
      ctx.strokeRect(itemX, itemY, 20, 20)

      // 項目名と時間
      let itemText = slot.name
      if (slot.isStudy) {
        itemText += ` (${slot.minutes}分)`
      } else {
        itemText += ` (${slot.hours}時間)`
      }

      ctx.fillStyle = "#ffffff"
      ctx.font = slot.isStudy ? "bold 12px 'Noto Serif JP', serif" : "12px 'Noto Serif JP', serif"
      ctx.textAlign = "left"
      ctx.textBaseline = "middle"
      ctx.fillText(itemText, itemX + 30, itemY + 10)
    })

    // 学習時間の詳細を表示 - 位置を上に調整
    const studyDetailsY = legendY + legendBgHeight + 20 // 30から20に減少させて上に移動

    // 「学習時間の詳細」というヘッダー
    ctx.fillStyle = "#ffffff"
    ctx.font = "bold 16px 'Noto Serif JP', serif"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("学習時間の詳細", width / 2, studyDetailsY)

    // 学習時間の詳細ボックス
    const studySlots = timeSlots.filter((slot) => slot.isStudy)
    const detailBoxWidth = width * 0.25
    const detailBoxHeight = 70
    const detailBoxSpacing = 20
    const totalDetailWidth = studySlots.length * detailBoxWidth + (studySlots.length - 1) * detailBoxSpacing
    let detailX = width / 2 - totalDetailWidth / 2

    studySlots.forEach((slot, index) => {
      // 詳細ボックスの背景
      const boxGradient = ctx.createLinearGradient(
        detailX,
        studyDetailsY + 20,
        detailX + detailBoxWidth,
        studyDetailsY + 20 + detailBoxHeight,
      )
      boxGradient.addColorStop(0, "rgba(40, 40, 40, 0.9)")
      boxGradient.addColorStop(1, "rgba(60, 60, 60, 0.9)")

      ctx.fillStyle = boxGradient
      roundRect(ctx, detailX, studyDetailsY + 20, detailBoxWidth, detailBoxHeight, 8)

      // 詳細ボックスの境界線
      ctx.strokeStyle = "rgba(212, 175, 55, 0.5)"
      ctx.lineWidth = 2
      ctx.beginPath()
      roundRectPath(ctx, detailX, studyDetailsY + 20, detailBoxWidth, detailBoxHeight, 8)
      ctx.stroke()

      // 科目名
      ctx.fillStyle = "#f9e3b1"
      ctx.font = "bold 12px 'Noto Serif JP', serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(slot.name, detailX + detailBoxWidth / 2, studyDetailsY + 45)

      // 時間
      ctx.fillStyle = "#ffffff"
      ctx.font = "bold 14px 'Noto Serif JP', serif"
      ctx.fillText(`${slot.minutes}分`, detailX + detailBoxWidth / 2, studyDetailsY + 75)

      detailX += detailBoxWidth + detailBoxSpacing
    })

    // 総学習時間を表示（下部） - 位置を上に調整
    const totalStudyBoxY = studyDetailsY + 20 + detailBoxHeight + 20 // 30から20に減少させて上に移動
    const totalStudyBoxWidth = width * 0.5
    const totalStudyBoxHeight = 60

    // 背景ボックス
    const totalBoxGradient = ctx.createLinearGradient(
      width / 2 - totalStudyBoxWidth / 2,
      totalStudyBoxY,
      width / 2 + totalStudyBoxWidth / 2,
      totalStudyBoxY + totalStudyBoxHeight,
    )
    totalBoxGradient.addColorStop(0, "rgba(30, 30, 30, 0.95)")
    totalBoxGradient.addColorStop(1, "rgba(50, 50, 50, 0.95)")

    ctx.fillStyle = totalBoxGradient
    roundRect(ctx, width / 2 - totalStudyBoxWidth / 2, totalStudyBoxY, totalStudyBoxWidth, totalStudyBoxHeight, 10)

    // 境界線
    ctx.strokeStyle = "rgba(212, 175, 55, 0.7)"
    ctx.lineWidth = 2.5
    ctx.beginPath()
    roundRectPath(ctx, width / 2 - totalStudyBoxWidth / 2, totalStudyBoxY, totalStudyBoxWidth, totalStudyBoxHeight, 10)
    ctx.stroke()

    // 「1日の総学習時間」のラベル
    ctx.fillStyle = "#ffffff"
    ctx.font = "bold 16px 'Noto Serif JP', serif"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("1日の総学習時間", width / 2, totalStudyBoxY + 20)

    // 総時間を大きく表示
    const totalTextGradient = ctx.createLinearGradient(
      width / 2 - 100,
      totalStudyBoxY + 40,
      width / 2 + 100,
      totalStudyBoxY + 60,
    )
    totalTextGradient.addColorStop(0, "#f9e3b1")
    totalTextGradient.addColorStop(0.5, "#d4af37")
    totalTextGradient.addColorStop(1, "#9e7c23")

    ctx.fillStyle = totalTextGradient
    ctx.font = "bold 22px 'Noto Serif JP', serif"
    ctx.fillText(`3時間30分（${totalStudyMinutes}分）`, width / 2, totalStudyBoxY + 45)
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
    roundRectPath(ctx, x, y, width, height, radius)
    ctx.closePath()
    ctx.fill()
  }

  // 角丸の長方形のパスを作成するヘルパー関数
  function roundRectPath(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
  ) {
    ctx.moveTo(x + radius, y)
    ctx.lineTo(x + width - radius, y)
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
    ctx.lineTo(x + width, y + height - radius)
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
    ctx.lineTo(x + radius, y + height)
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
    ctx.lineTo(x, y + radius)
    ctx.quadraticCurveTo(x, y, x + radius, y)
  }

  // 色を明るくするヘルパー関数
  function lightenColor(hex: string, percent: number): string {
    // #で始まる場合は除去
    hex = hex.replace(/^#/, "")

    // 16進数から10進数に変換
    let r = Number.parseInt(hex.substring(0, 2), 16)
    let g = Number.parseInt(hex.substring(2, 4), 16)
    let b = Number.parseInt(hex.substring(4, 6), 16)

    // 明るくする
    r = Math.min(255, Math.floor(r + (255 - r) * (percent / 100)))
    g = Math.min(255, Math.floor(g + (255 - g) * (percent / 100)))
    b = Math.min(255, Math.floor(b + (255 - b) * (percent / 100)))

    // 10進数から16進数に戻す
    return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`
  }

  // 色を暗くするヘルパー関数
  function darkenColor(hex: string, percent: number): string {
    // #で始まる場合は除去
    hex = hex.replace(/^#/, "")

    // 16進数から10進数に変換
    let r = Number.parseInt(hex.substring(0, 2), 16)
    let g = Number.parseInt(hex.substring(2, 4), 16)
    let b = Number.parseInt(hex.substring(4, 6), 16)

    // 暗くする
    r = Math.max(0, Math.floor(r * (1 - percent / 100)))
    g = Math.max(0, Math.floor(g * (1 - percent / 100)))
    b = Math.max(0, Math.floor(b * (1 - percent / 100)))

    // 10進数から16進数に戻す
    return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`
  }

  return (
    <section className="py-10 sm:py-16 md:py-20" id="daily-schedule">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 py-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 flex flex-col md:flex-row items-center justify-center gap-2">
            <span className="text-[#D4AF37]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="md:w-6 md:h-6"
              >
                <circle cx="12" cy="12" r="11" stroke="#D4AF37" strokeWidth="2" />
                <path
                  d="M7 12L10 15L17 8"
                  stroke="#D4AF37"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="gold-text-luxe text-center">毎日の学習を継続するためにサポートします</span>
          </h2>
          <div className="w-20 h-1 bg-gold-gradient mx-auto mb-8"></div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            大学受験の成功には、いかに多くの学習時間を確保し、継続して学習をすることが重要です。Minervaでは
            <span className="text-luxe">あなたの生活習慣にまで踏み込んだ緻密な学習スケジュール</span>を立て、
            <span className="text-luxe">どんな人でも"サボらせない"コーチング</span>を提供します。
            毎日メッセージをくれるコンサルタントがそばにいることで、一日2〜3時間の学習を継続できます。
          </p>
        </div>

        <div className="bg-black/70 backdrop-blur-sm border border-gray-800 rounded-lg p-3 sm:p-4 md:p-6 overflow-hidden max-w-[95vw] md:max-w-5xl mx-auto shadow-lg shadow-black/50 min-h-[900px] md:min-h-0">
          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-6 text-center flex flex-col md:flex-row items-center justify-center gap-2 py-2">
            <span className="w-6 h-0.5 bg-[#D4AF37]"></span>
            <span className="gold-text-luxe">1日の学習スケジュール例</span>
          </h3>

          <div className="relative max-w-3xl mx-auto py-8 md:py-0">
            <canvas
              ref={canvasRef}
              className="w-[95%] md:w-full max-w-[95vw] md:max-w-full mx-auto object-contain"
              style={{
                height: canvasHeight,
                maxWidth: "100%",
                aspectRatio: isMobile ? "1 / 1.4" : "1 / 1.2",
              }}
            />
          </div>
        </div>

        <div className="mt-8 text-center max-w-3xl mx-auto py-4">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Minervaでは、<span className="text-luxe">あなたの生活リズムに合わせた学習計画</span>を提案します。
            忙しい日々の中でも確実に学習時間を確保し、効率的に学習を進めることができます。 また、
            <span className="text-luxe">AIを活用した学習管理システム</span>により、
            学習の進捗状況をリアルタイムで把握し、最適なアドバイスを提供します。
          </p>
        </div>
      </div>
    </section>
  )
}
