import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gamepad2, Bot, GraduationCap, FlaskConical } from "lucide-react"
import Image from "next/image"

export function UseCases() {
  const useCases = [
    {
      icon: Gamepad2,
      title: "Game Development & Interactive Media",
      items: [
        "Procedural game level generation for indie and AAA studios",
        "AI for immersive gaming experiences with dynamic environments",
        "Virtual reality world builder for VR/AR applications",
        "Rapid prototyping of game concepts and mechanics",
      ],
    },
    {
      icon: Bot,
      title: "Robotics & AI Research",
      items: [
        "Robot training environments for safe skill development",
        "Autonomous vehicle simulation with diverse scenarios",
        "Reinforcement learning world model for agent training",
        "Embodied AI training in controlled virtual environments",
      ],
    },
    {
      icon: GraduationCap,
      title: "Education & Professional Training",
      items: [
        "Virtual lab simulations for scientific education",
        "Emergency training simulations for first responders",
        "Interactive historical recreations and educational content",
        "Safe training environments for high-risk professions",
      ],
    },
    {
      icon: FlaskConical,
      title: "Research & Development",
      items: [
        "Synthetic data for agents in controlled environments",
        "Interactive simulation benchmark development",
        "Physics research and environmental modeling",
        "Neural physics simulation for scientific applications",
      ],
    },
  ]

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Applications of Genie 3 AI</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how <strong>Genie 3 AI</strong> is revolutionizing industries through interactive world generation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                  <useCase.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {useCase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop"
            alt="Virtual reality world creation interface Genie 3 AI applications robotics training VR gaming"
            width={1200}
            height={600}
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="container">
              <div className="max-w-lg text-white">
                <h3 className="text-3xl font-bold mb-4">Ready to Build the Future?</h3>
                <p className="text-lg opacity-90 mb-6">
                  Join leading organizations using Genie 3 AI to create next-generation interactive experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
