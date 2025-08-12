import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import Image from "next/image"

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Genie 3 AI represents a quantum leap in world model technology. The real-time interactive capabilities at 24fps are unprecedented and will fundamentally change how we approach AI environment generation.",
      author: "Dr. Sarah Chen",
      title: "AI Research Director, Stanford University",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    },
    {
      quote:
        "The temporal consistency and physics understanding in Genie 3 AI opens entirely new possibilities for robotics research. This breakthrough will accelerate advances in autonomous systems and robot training.",
      author: "Prof. Michael Rodriguez",
      title: "Computer Vision Expert, MIT",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      quote:
        "As a researcher in world models, I'm impressed by Genie 3 AI's multi-domain simulation capabilities. Its ability to generate diverse environments while maintaining consistency is remarkable.",
      author: "Prof. Minghua Li",
      title: "Machine Learning Researcher, Tsinghua University",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">What AI Researchers Say About Genie 3 AI</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading experts from top research institutions share their insights on <strong>Genie 3 AI's</strong>{" "}
            revolutionary capabilities
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-blue-600 mb-4" />
                <blockquote className="text-gray-700 mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=400&fit=crop"
            alt="AI technology neural network visualization Genie 3 AI research community DeepMind world model"
            width={1200}
            height={400}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold mb-2">Join the Research Community</h3>
              <p className="text-lg opacity-90">Connect with leading AI researchers exploring Genie 3 AI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
