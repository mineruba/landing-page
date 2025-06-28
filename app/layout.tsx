import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "大学受験Minerva | 勉強を習慣化し、自分で学べる力を育む",
  description:
    "大学受験Minervaは、マンツーマンサポートとAIを活用した学習で、勉強を好きになり自分で学べる力を育むことを目指す塾です。",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
