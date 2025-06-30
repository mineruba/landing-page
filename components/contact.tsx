"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Check } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [redirectCountdown, setRedirectCountdown] = useState(3)
  const { isMobileOrTablet } = useMobile()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - in a real implementation this would send data to a server
    console.log("Form submitted:", formData)

    // フォーム送信成功後、状態を更新
    setIsSubmitted(true)

    // フォームをリセット
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    })
  }

  // モバイルまたはタブレットの場合、カウントダウン後にリダイレクト
  useEffect(() => {
    if (isSubmitted && isMobileOrTablet) {
      if (redirectCountdown > 0) {
        const timer = setTimeout(() => {
          setRedirectCountdown(redirectCountdown - 1)
        }, 1000)
        return () => clearTimeout(timer)
      } else {
        // LINE公式アカウントのURLにリダイレクト
        // 実際のURLに置き換えてください
        const lineUrl = "https://line.me/R/ti/p/@your-line-id"
        window.location.href = lineUrl
      }
    }
  }, [isSubmitted, isMobileOrTablet, redirectCountdown])

  return (
    <section className="py-12 sm:py-20 md:py-28 bg-black/80" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            <span className="gold-text-luxe">お問い合わせ</span>
          </h2>
          <div className="w-20 h-1 bg-gold-gradient mx-auto mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            ご質問やご相談は、以下のフォームよりお気軽にお問い合わせください
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {!isSubmitted ? (
            <form
              onSubmit={handleSubmit}
              className="bg-black/70 backdrop-blur-sm border border-gray-800 rounded-lg p-4 sm:p-6 md:p-8 shadow-lg shadow-luxe/10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    お名前 <span className="text-luxe">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md focus:border-luxe focus:ring focus:ring-luxe/20 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    メールアドレス <span className="text-luxe">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md focus:border-luxe focus:ring focus:ring-luxe/20 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md focus:border-luxe focus:ring focus:ring-luxe/20 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="course" className="block mb-2 font-medium">
                    ご興味のあるコース
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md focus:border-luxe focus:ring focus:ring-luxe/20 focus:outline-none"
                  >
                    <option value="">選択してください</option>
                    <option value="3months">3ヶ月コース</option>
                    <option value="6months">6ヶ月コース</option>
                    <option value="12months">12ヶ月コース</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium">
                  メッセージ <span className="text-luxe">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md focus:border-luxe focus:ring focus:ring-luxe/20 focus:outline-none"
                  placeholder="ご質問やご要望をお書きください"
                ></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="gold-button px-6 py-2 sm:px-8 sm:py-3 rounded-md text-base sm:text-lg">
                  送信する
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-black/70 backdrop-blur-sm border border-gray-800 rounded-lg p-8 shadow-lg shadow-luxe/10 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-luxe-light via-luxe to-luxe-dark flex items-center justify-center">
                  <Check className="w-6 h-6 text-black" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 gold-text-luxe">お問い合わせありがとうございます</h3>

              {isMobileOrTablet ? (
                <div>
                  <p className="text-lg mb-4">
                    担当者より順次ご連絡いたします。
                    <br />
                    {redirectCountdown}秒後に公式LINEページへ移動します...
                  </p>
                  <div className="mb-4">
                    <button
                      onClick={() => (window.location.href = "https://line.me/R/ti/p/@your-line-id")}
                      className="gold-button px-6 py-2 rounded-md"
                    >
                      今すぐLINEに移動
                    </button>
                  </div>
                  <button onClick={() => setIsSubmitted(false)} className="text-luxe hover:underline">
                    キャンセル（フォームに戻る）
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <p className="text-lg mb-8">
                    担当者より順次ご連絡いたします。
                    <br />
                    より迅速なサポートをご希望の方は、公式LINEからもお問い合わせいただけます。
                  </p>

                  <div className="border-4 border-luxe p-2 rounded-lg mb-4 bg-white">
                    <img
                      src="/images/line-qr.png"
                      alt="大学受験Minerva公式LINE"
                      className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover mx-auto"
                    />
                  </div>
                  <p className="text-lg font-medium gold-text-luxe mb-2">大学受験Minerva公式LINE</p>
                  <p className="text-gray-300 mb-6">QRコードを読み取って友だち追加してください</p>

                  <button onClick={() => setIsSubmitted(false)} className="text-luxe hover:underline">
                    お問い合わせフォームに戻る
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
