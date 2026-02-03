import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { VideoDemo } from "@/components/video-demo"
import { HowItWorks } from "@/components/how-it-works"
import { Comparison } from "@/components/comparison"
import { UseCases } from "@/components/use-cases"
import { Testimonials } from "@/components/testimonials"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

import { TechExplanation } from "@/components/tech-explanation"
import { InteractiveFeatures } from "@/components/interactive-features"
import { AccessGuide } from "@/components/access-guide"

import { AccessDiagnostic } from "@/components/access-diagnostic"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <AccessDiagnostic />
        <TechExplanation />
        <VideoDemo />
        <InteractiveFeatures />
        <AccessGuide />
        <Features />
        <HowItWorks />
        <Comparison />
        <UseCases />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
