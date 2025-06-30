"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: "オンライン指導のみですか？対面授業はありますか？",
      answer:
        "基本的にはオンライン指導となりますが、定期的にオフ会や特別講座を実施しています。詳細はお問い合わせください。",
    },
    {
      question: "どのような生徒が対象ですか？",
      answer:
        "高校生（1〜3年生）および高卒生で、大学受験を目指す方が対象です。学力は問いませんが、自ら学ぶ意欲のある方に特におすすめです。",
    },
    {
      question: "AIを活用した学習とは具体的にどのようなものですか？",
      answer:
        "AIを活用して課題の提出管理、学習の進捗分析、弱点の特定などを行います。また、AIによる文章の要約や、課題の自動フィードバックなども実施しています。これにより、効率的かつ個別最適化された学習が可能になります。",
    },
    {
      question: "途中解約はできますか？",
      answer: "はい、途中解約も可能です。ただし、解約条件や返金については以下の返金保証をご確認ください。",
    },
    {
      question: "返金保証について詳しく教えてください",
      answer:
        "私たちは3つの返金保証を提供しています。保証1: 決済から3ヶ月以内にサービスに満足できなかった場合。保証2：もし我々のサービスを3ヶ月受けて他の塾の方が成績が上がると実感した場合。保証3：もし我々のサービスを3ヶ月受けて成績が上がらない場合。いずれの場合も一定の条件のもと、返金対応いたします。※返金の場合は会員コンテンツ提供・個別サポートは全て中止。※決済事務手数料10%を差し引いた金額を返金します。※返金の場合は決済日から3ヶ月目の23:59までにご連絡ください。※期日を過ぎてからの返金依頼は一切受付できません。※課題の提出と毎週のテストを受けることが条件となります。",
    },
    {
      question: "どのような教科に対応していますか？",
      answer:
        "英語、数学、国語、理科（物理・化学・生物）、社会（日本史・世界史・政治経済・倫理）など、主要教科すべてに対応しています。",
    },
    {
      question: "受講に必要な機材はありますか？",
      answer:
        "インターネット環境、パソコンまたはタブレット、スマートフォンがあれば受講可能です。動画フィードバックの提出にはスマートフォンが便利です。",
    },
    {
      question: "月額AIアプリの料金はいくらですか？",
      answer: "月額1,980円〜3,980円程度のAIアプリを使用します。具体的なアプリはコース開始時にご案内します。",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-12 sm:py-20 md:py-28" id="faq">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            <span className="gold-text-luxe">よくある質問</span>
          </h2>
          <div className="w-20 h-1 bg-gold-gradient mx-auto mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            大学受験Minervaに関するよくある質問と回答をまとめました
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-800 rounded-lg overflow-hidden hover:border-luxe hover:gold-border transition duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between w-full p-4 sm:p-5 md:p-6 text-left bg-black/70 hover:bg-black/90 transition"
                >
                  <span className="text-base sm:text-lg font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-luxe transform transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-4 py-3 sm:px-6 sm:py-4 bg-gray-900/30">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
