import { Button } from "@/components/ui/button"
import { Play, Zap, Monitor, Clock, Globe } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-2">
                Independent Research & Access Guide
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Explore Google’s Genie 3: The <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Unofficial Guide & Community Hub</span>
              </h1>
              <p className="text-sm text-gray-500 italic">
                Independent research & access guide for DeepMind's latest world model. Not affiliated with Google.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience <strong>Google's Project Genie (Genie 3)</strong>, the revolutionary world model that generates playable AI worlds in real-time.
                Go beyond video generation—interact, play, and reshape your environment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <a href="#access-diagnostic">
                  Check Access Eligibility
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://youtube.com/watch?v=PDKhUknuQDg" target="_blank" rel="noopener noreferrer">
                  <Play className="mr-2 h-5 w-5" />
                  Watch 24fps Real-time Demo
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <div className="font-bold text-lg">24fps</div>
                <div className="text-sm text-gray-600">Real-time action</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Monitor className="h-6 w-6 text-purple-600" />
                </div>
                <div className="font-bold text-lg">Interactive</div>
                <div className="text-sm text-gray-600">Playable worlds</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <div className="font-bold text-lg">Physics</div>
                <div className="text-sm text-gray-600">Consistent laws</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Globe className="h-6 w-6 text-orange-600" />
                </div>
                <div className="font-bold text-lg">World Model</div>
                <div className="text-sm text-gray-600">Next-gen AI</div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 relative">
              {/* Simulating a video play feel with an overlay or actual video if available. Using Image for now but with overlay to suggest interactivity as requested */}
              <Image
                src="/img/genie3-intro.jpg"
                alt="Google Genie 3 Project - Interactive World Model"
                width={800}
                height={600}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm cursor-pointer hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 text-blue-600 ml-1" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg border animate-bounce-slow">
              <div className="text-sm font-medium text-gray-900">Generative World Model</div>
              <div className="text-xs text-blue-600">Try it in Labs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
