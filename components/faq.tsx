import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "What is Genie 3 AI?",
      answer:
        "Genie 3 AI is Google DeepMind's revolutionary world model that generates interactive 3D environments from text prompts. Unlike traditional AI video generators, it creates truly playable worlds that users can navigate and interact with in real-time.",
    },
    {
      question: "How does Genie 3 AI differ from Sora or Runway?",
      answer:
        "While Sora and Runway generate static videos, Genie 3 AI creates interactive environments. You can navigate through generated worlds, interact with objects, and modify environments in real-time while maintaining consistency for minutes.",
    },
    {
      question: "What resolution and frame rate does Genie 3 AI support?",
      answer:
        "Genie 3 AI generates interactive worlds at 720p resolution running at 24 frames per second, providing smooth, high-quality experiences suitable for gaming and professional applications.",
    },
    {
      question: "How can I access Genie 3 AI?",
      answer:
        "Genie 3 AI is currently available through Google DeepMind's research preview program. You can apply for early access through our waitlist. Commercial API access will be announced following the preview period.",
    },
    {
      question: "What are the main applications for Genie 3 AI?",
      answer:
        "Genie 3 AI excels in game development, robotics training, educational simulations, VR/AR content creation, and AI research. Its interactive nature makes it ideal for any application requiring explorable virtual environments.",
    },
    {
      question: "Can Genie 3 AI maintain world consistency over time?",
      answer:
        "Yes, one of Genie 3 AI's key advantages is its ability to maintain world state consistency for extended periods, unlike traditional video generators that lack persistent memory.",
    },
    {
      question: "Is Genie 3 AI suitable for commercial projects?",
      answer:
        "Commercial licensing for Genie 3 AI will be available following the research preview period. Current preview access includes priority consideration for commercial licensing opportunities.",
    },
    {
      question: "What makes Genie 3 AI unique compared to other world models?",
      answer:
        "Genie 3 AI combines real-time interactivity, persistent world memory, physics-consistent simulation, and promptable events in a single system. This makes it the first truly interactive AI world model suitable for gaming and professional applications.",
    },
    {
      question: "How does Genie 3 vs Sora compare in terms of capabilities?",
      answer:
        "While Sora generates impressive static videos, Genie 3 AI creates fully interactive 3D environments. Genie 3 AI allows real-time navigation, object interaction, and world modification for minutes, whereas Sora produces non-interactive video content limited to 60 seconds.",
    },
    {
      question: "What is the difference between Genie 3 vs Runway Gen-3?",
      answer:
        "Runway Gen-3 focuses on high-quality video generation up to 16 seconds, while Genie 3 AI creates persistent interactive worlds lasting minutes. Genie 3 AI offers real-time world simulation, promptable events, and physics-consistent simulation that Runway Gen-3 cannot provide.",
    },
    {
      question: "How to get access to Genie 3?",
      answer:
        "To get access to Genie 3, you can apply through Google DeepMind's research preview program. Join our waitlist for early access notifications. Priority is given to researchers, developers, and organizations with specific use cases in gaming, robotics, or AI research.",
    },
    {
      question: "Is Genie 3 AI free to use?",
      answer:
        "Genie 3 AI is currently available for free through the research preview program with limited availability. Commercial pricing will be announced following the preview period. Early access participants receive priority consideration for commercial licensing.",
    },
    {
      question: "What are Genie 3 AI's limitations?",
      answer:
        "Current Genie 3 AI limitations include 720p resolution (lower than some competitors), availability only through research preview, and generation time constraints. However, its unique interactive capabilities and real-time world simulation outweigh these limitations for most use cases.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions About Genie 3 AI</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about <strong>Genie 3 AI's</strong> capabilities and access
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm border-0">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
