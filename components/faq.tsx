import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "When is the Google Genie 3 release date?",
      answer:
        "Project Genie (Genie 3) is currently in a closed experimental phase. While a public release date hasn't been officially announced by Google DeepMind, early access is rolling out to select Google AI Ultra subscribers in the US via Google Labs.",
    },
    {
      question: "How can I get Project Genie access?",
      answer:
        "Access is currently limited. The official way to try Genie 3 is by checking the Google Labs portal. We recommend subscribing to Google AI Ultra for the best chance of receiving an invitation to the preview.",
    },
    {
      question: "Is Genie 3 the same as Sora or Runway?",
      answer:
        "No. While Sora and Runway generate passive video clips, Genie 3 is a 'Generative World Model'. This means it creates interactive, playable environments where you can control characters and consistency is maintained via a physics simulation.",
    },
    {
      question: "What are 'Promptable World Events'?",
      answer:
        "This feature allows you to use text commands to modify the world in real-time. You can type commands like 'add a storm' or 'spawn a vehicle', and the world model will update the simulation instantly while keeping the rest of the world consistent.",
    },
    {
      question: "Can I use my own images?",
      answer:
        "Yes! Genie 3 supports 'Image-to-World' and 'Sketch-to-World' capabilities, allowing you to upload photos or simple drawings to serve as the blueprint for your generated 3D environment.",
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
