import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4 border-0">Social Proof</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Community & Industry Reaction</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From <strong>Reddit</strong> discussions to <strong>X (Twitter)</strong> threads, the tech world is buzzing about Project Genie.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Reddit Card */}
          <Card className="border-0 shadow-lg bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#FF4500]" />
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                <span className="font-bold text-[#FF4500]">r/Singularity</span> • Posted by u/AI_Enthusiast
              </div>
              <blockquote className="text-gray-900 font-medium text-lg mb-4">
                "Google's Genie 3 is basically an infinite GTA map generator. The physics consistency is insane compared to just video morphing."
              </blockquote>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>1.2k Upvotes</span> • <span>240 Comments</span>
              </div>
            </CardContent>
          </Card>

          {/* X / Twitter Card */}
          <Card className="border-0 shadow-lg bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-black" />
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600">JD</div>
                <div>
                  <div className="font-bold text-gray-900">Tech Analyst</div>
                  <div className="text-xs text-gray-500">@DeepTechAnalyst</div>
                </div>
                <div className="ml-auto text-gray-400">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                </div>
              </div>
              <blockquote className="text-gray-900 text-lg mb-4">
                Genie 3 isn't just a video model. It's a <span className="text-blue-600">#WorldModel</span>. The ability to "sketch" a level and play it instantly is the holy grail of game dev.
              </blockquote>
              <div className="text-sm text-gray-500">
                10:42 AM • Views: 245K
              </div>
            </CardContent>
          </Card>

          {/* Reddit Card 2 */}
          <Card className="border-0 shadow-lg bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#FF4500]" />
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                <span className="font-bold text-[#FF4500]">r/GoogleDeepMind</span> • Posted by u/Dev_2049
              </div>
              <blockquote className="text-gray-900 font-medium text-lg mb-4">
                "Finally got access via Labs! The prompt adherence for 'physics events' is surprisingly good. I made a bridge collapse just by typing it."
              </blockquote>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>856 Upvotes</span> • <span>120 Comments</span>
              </div>
            </CardContent>
          </Card>
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
