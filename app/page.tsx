import Header from "@/components/header"
import Hero from "@/components/hero"
import FreeTrial from "@/components/free-trial"
import Problems from "@/components/problems"
import Philosophy from "@/components/philosophy"
import Features from "@/components/features"
import Support from "@/components/support"
import Benefits from "@/components/benefits"
import Pricing from "@/components/pricing"
import FreeTrialAlt from "@/components/free-trial-alt"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import StudyDiagram from "@/components/study-diagram"
import DailySchedule from "@/components/daily-schedule"
import Story from "@/components/story"
import GradeProgress from "@/components/grade-progress"

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-black text-white font-serif">
      <div className="fixed inset-0 z-0 opacity-30">
        <img src="/images/lion-background.jpg" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10">
        <Header />
        <Hero />
        <FreeTrial />
        <Problems />
        <Philosophy />
        <Features />
        <StudyDiagram />
        <DailySchedule />
        <GradeProgress />
        <Support />
        <Benefits />
        <Pricing />
        <FreeTrialAlt />
        <Testimonials />
        <Story />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
