"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "Minervaの授業はどのように行われますか？",
    answer:
      "Minervaの授業はZoomを使用したオンラインライブ講義を中心に行われます。双方向型の授業で、質問や確認を積極的に行うことができます。また、毎日の課題提出に対して動画でのフィードバックを提供し、週1回のテストで学習成果を確認します。",
  },
  {
    question: "料金の支払い方法について教えてください。",
    answer:
      "料金は一括払いと分割払いが可能です。分割払いの場合、最大48回払いまで対応しています。詳細は料金セクションをご確認ください。",
  },
  {
    question: "返金保証はありますか？",
    answer:
      "はい、以下の3つの返金保証をご用意しています。\n\n保証1: 決済から3ヶ月以内にサービスに満足できなかった場合\n保証2：もし我々のサービスを3ヶ月受けて他の塾の方が成績が上がると実感した場合\n保証3：もし我々のサービスを3ヶ月受けて成績が上がらない場合\n\n※返金の場合は会員コンテンツ提供・個別サポートは全て中止。\n※決済事務手数料10%を差し引いた金額を返金します。\n※返金の場合は決済日から3ヶ月目の23:59までにご連絡ください。\n※期日を過ぎてからの返金依頼は一切受付できません。\n※課題の提出と毎週のテストを受けることが条件となります",
  },
  {
    question: "AIアプリの利用料は別途必要ですか？",
    answer:
      "はい、AIアプリ（PLAUD AIなど）の月額課金は別途必要となります。詳細は料金セクションの注意事項をご確認ください。",
  },
  {
    question: "オンライン自習室はいつでも利用できますか？",
    answer:
      "はい、オンライン自習室は24時間利用可能で、講師が常駐しているため、わからない問題があればすぐに質問することができます。入塾後は永年無料でご利用いただけます。",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 md:px-8 lg:px-16 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center font-serif">よくある質問</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg md:text-xl font-medium py-4 px-6 hover:bg-gray-900 rounded-t-lg transition-all">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-gray-900 rounded-b-lg mb-4 whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
