import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

export function CTA() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="relative rounded-3xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=600&fit=crop"
            alt="Futuristic digital environment with holographic elements Genie 3 AI interactive world generation"
            width={1200}
            height={600}
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90 flex items-center">
            <div className="container">
              <div className="max-w-2xl text-white">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Ready to Explore the Future of AI World Generation?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join thousands of developers, researchers, and creators who are pioneering the next generation of
                  interactive AI experiences with <strong>Genie 3 AI</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                    Get Early Access
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 bg-transparent"
                    asChild
                  >
                    <a href="https://youtube.com/watch?v=PDKhUknuQDg" target="_blank" rel="noopener noreferrer">
                      <Play className="mr-2 h-5 w-5" />
                      Watch Demo
                    </a>
                  </Button>
                </div>
                <p className="text-sm opacity-75 mt-4">
                  Be among the first to experience the revolutionary capabilities of <strong>Genie 3 AI</strong> and
                  transform how you create interactive virtual environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
