import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Building, Zap, Brain, Gamepad2, Atom } from "lucide-react"
import Image from "next/image"

export function Features() {
  const features = [
    {
      icon: Target,
      title: "Real-Time Interactive World Model",
      description:
        "Generate and navigate dynamic 3D worlds instantly. Unlike traditional text-to-video AI tools, Genie 3 AI creates truly interactive 3D environments where users can influence and explore persistent virtual spaces with real-time feedback.",
    },
    {
      icon: Building,
      title: "Advanced World Generation",
      description:
        "Create diverse environments from simple text prompts - from realistic physical simulations to fantastical animated worlds. Our autoregressive world model maintains long-horizon consistency, ensuring your generated worlds remain coherent and explorable.",
    },
    {
      icon: Zap,
      title: "Unmatched Performance",
      description:
        "Experience smooth 720p resolution at 24 frames per second. Genie 3 AI delivers professional-grade performance for real-time world simulation, making it ideal for gaming, robotics training, and immersive experiences.",
    },
    {
      icon: Brain,
      title: "Persistent World Memory",
      description:
        "Unlike competitors, Genie 3 AI maintains world state consistency for extended periods. Objects, lighting, and environmental elements remain coherent as you explore, creating truly believable virtual experiences.",
    },
    {
      icon: Gamepad2,
      title: "Promptable Events",
      description:
        "Dynamically modify your generated worlds in real-time. Add weather effects, spawn objects, or change environmental conditions with simple text commands while maintaining world consistency.",
    },
    {
      icon: Atom,
      title: "Physics-Consistent Simulation",
      description:
        "Built-in understanding of intuitive physics enables realistic environmental interactions. Water flows naturally, objects respond to gravity, and lighting behaves authentically without requiring external physics engines.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Revolutionary Capabilities of Genie 3 AI</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <strong>Genie 3 AI</strong> represents a breakthrough in world model technology, offering unprecedented
            capabilities for creating interactive virtual environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=600&fit=crop"
            alt="Interactive 3D simulation holographic display Genie 3 AI world model demonstration"
            width={1200}
            height={600}
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold mb-2">See Genie 3 AI in Action</h3>
              <p className="text-lg opacity-90">Experience real-time interactive world generation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
