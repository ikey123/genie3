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
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Transform Text Into Interactive 3D Worlds with{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Genie 3 AI
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Google DeepMind's revolutionary <strong>Genie 3 AI</strong> world model that generates playable AI worlds in real-time at 720p
                resolution and 24fps performance. Experience the future of real-time interactive world model technology where your imagination
                becomes an interactive reality. <strong>Genie 3 AI</strong> creates persistent, physics-consistent virtual environments with promptable world events.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <a href="https://youtube.com/watch?v=PDKhUknuQDg" target="_blank" rel="noopener noreferrer">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo Video
                </a>
              </Button>
              <Button size="lg" variant="outline">
                Request Access
              </Button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <div className="font-bold text-lg">24fps</div>
                <div className="text-sm text-gray-600">Real-time generation</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Monitor className="h-6 w-6 text-purple-600" />
                </div>
                <div className="font-bold text-lg">720p HD</div>
                <div className="text-sm text-gray-600">Interactive environments</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <div className="font-bold text-lg">Minutes</div>
                <div className="text-sm text-gray-600">Consistent gameplay</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Globe className="h-6 w-6 text-orange-600" />
                </div>
                <div className="font-bold text-lg">Unlimited</div>
                <div className="text-sm text-gray-600">World diversity</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/img/genie3-intro.jpg"
                alt="Genie 3 AI virtual world 3D environment interactive simulation real-time generation"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg border">
              <div className="text-sm font-medium text-gray-900">Live Demo</div>
              <div className="text-xs text-gray-600">Interactive 3D World</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
