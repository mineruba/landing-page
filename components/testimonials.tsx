export default function Testimonials() {
  const testimonials = [
    {
      content:
        "Minervaに入って、勉強が苦痛ではなく楽しくなりました。AIを使った学習管理や動画フィードバックのおかげで、自分の弱点が明確になり、効率よく勉強できています。",
      author: "東京大学 文学部 合格",
      image: "/person-icon.png",
    },
    {
      content:
        "先生方の丁寧な指導と、オンライン自習室での仲間の存在が大きな支えになりました。一人では挫折していたかもしれませんが、Minervaのおかげで第一志望に合格できました。",
      author: "京都大学 法学部 合格",
      image: "/person-icon.png",
    },
    {
      content:
        "1冊の参考書を完璧にするという方針に最初は不安でしたが、本当に効果がありました。深い理解ができるようになり、応用問題も解けるようになりました。",
      author: "大阪大学 医学部 合格",
      image: "/person-icon.png",
    },
    {
      content:
        "動画フィードバックのおかげで、自分の弱点を具体的に把握でき、効率的に改善することができました。モチベーションを維持しながら勉強を続けられたのが合格の秘訣です。",
      author: "慶應義塾大学 経済学部 合格",
      image: "/person-icon.png",
    },
  ]

  return (
    <section className="py-12 sm:py-20 md:py-28 bg-black/80" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            <span className="gold-text-luxe">受講生の声</span>
          </h2>
          <div className="w-20 h-1 bg-gold-gradient mx-auto mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            Minervaで学んだ先輩たちの体験談をご紹介します
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 p-4 sm:p-6 md:p-8 rounded-lg hover:border-luxe hover:gold-border transition duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="rounded-full overflow-hidden mr-4 border-2 border-luxe">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt="生徒アイコン"
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-cover"
                  />
                </div>
                <div>
                  <p className="text-luxe-light font-semibold">{testimonial.author}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
