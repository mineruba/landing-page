"use client"

import { useState, useEffect } from "react"

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth
      setIsMobile(width < 768)
      setIsTablet(width >= 768 && width < 1024)
    }

    // 初期チェック
    checkDevice()

    // リサイズイベントのリスナーを追加
    window.addEventListener("resize", checkDevice)

    // クリーンアップ
    return () => {
      window.removeEventListener("resize", checkDevice)
    }
  }, [])

  return { isMobile, isTablet, isMobileOrTablet: isMobile || isTablet }
}
