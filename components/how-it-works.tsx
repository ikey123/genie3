import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Cpu, Navigation } from "lucide-react"
import Image from "next/image"

export function HowItWorks() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Describe Your Vision",
      description:
        "Input detailed text descriptions of your desired environment. Genie 3 AI understands complex prompts including environmental details, materials, lighting conditions, and interactive elements.",
    },
    {
      icon: Cpu,
      title: "Real-Time Generation",
      description:
        "Our advanced autoregressive world model processes your prompt and begins generating your interactive 3D world in real-time, maintaining consistency across all visual elements.",
    },
    {
      icon: Navigation,
      title: "Explore and Interact",
      description:
        "Navigate your generated world using standard controls. Modify environments with promptable events, interact with objects, and experience persistent world states that maintain consistency over time.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">How Genie 3 AI Creates Interactive Worlds</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of AI world generation in three simple steps
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <step.icon className="h-5 w-5 text-blue-600" />
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <Image
              src="/img/nature.jpg"
              alt="Real-time world generation interface dashboard"
              width={600}
              height={400}
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0">
          <CardHeader>
            <CardTitle className="text-2xl">Technical Foundation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Foundation World Model</h4>
                <p className="text-sm text-gray-600">Built on cutting-edge neural architecture</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Embodied AI Training</h4>
                <p className="text-sm text-gray-600">Optimized for agent training and robotics simulation</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Synthetic Data Generation</h4>
                <p className="text-sm text-gray-600">Creates unlimited training environments</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Long-Horizon Memory</h4>
                <p className="text-sm text-gray-600">Maintains consistency across extended interactions</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
