import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, X, AlertTriangle } from "lucide-react"

export function Comparison() {
  const features = [
    {
      feature: "Interactive Navigation",
      genie3: { status: "check", text: "Real-time" },
      sora: { status: "x", text: "Static video" },
      veo3: { status: "x", text: "Static video" },
      runway: { status: "x", text: "Static video" },
    },
    {
      feature: "Max Duration",
      genie3: { status: "check", text: "3+ minutes" },
      sora: { status: "warning", text: "60 seconds" },
      veo3: { status: "warning", text: "8 seconds" },
      runway: { status: "warning", text: "16 seconds" },
    },
    {
      feature: "Resolution",
      genie3: { status: "check", text: "720p HD" },
      sora: { status: "check", text: "1080p+" },
      veo3: { status: "check", text: "1080p+" },
      runway: { status: "warning", text: "768p" },
    },
    {
      feature: "Frame Rate",
      genie3: { status: "check", text: "24fps" },
      sora: { status: "warning", text: "Variable" },
      veo3: { status: "warning", text: "Variable" },
      runway: { status: "warning", text: "Variable" },
    },
    {
      feature: "World Consistency",
      genie3: { status: "check", text: "Minutes" },
      sora: { status: "x", text: "N/A" },
      veo3: { status: "x", text: "N/A" },
      runway: { status: "x", text: "N/A" },
    },
    {
      feature: "Promptable Events",
      genie3: { status: "check", text: "Real-time" },
      sora: { status: "x", text: "No" },
      veo3: { status: "x", text: "No" },
      runway: { status: "x", text: "No" },
    },
    {
      feature: "Physics Simulation",
      genie3: { status: "check", text: "Built-in" },
      sora: { status: "x", text: "Limited" },
      veo3: { status: "x", text: "Limited" },
      runway: { status: "x", text: "Limited" },
    },
    {
      feature: "Agent Training Ready",
      genie3: { status: "check", text: "Optimized" },
      sora: { status: "x", text: "No" },
      veo3: { status: "x", text: "No" },
      runway: { status: "x", text: "No" },
    },
  ]

  const StatusIcon = ({ status }: { status: string }) => {
    switch (status) {
      case "check":
        return <Check className="h-4 w-4 text-green-600" />
      case "x":
        return <X className="h-4 w-4 text-red-600" />
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />
      default:
        return null
    }
  }

  return (
    <section id="comparison" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">How Genie 3 AI Outperforms Competitors</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The only AI world model that combines real-time interactivity with long-term consistency and professional
            performance. Compare Genie 3 vs Sora, Genie 3 vs Runway Gen-3, and see why Genie 3 AI leads in interactive world generation.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="font-bold">Feature</TableHead>
                <TableHead className="font-bold text-blue-600">Genie 3 AI</TableHead>
                <TableHead className="font-bold">Sora</TableHead>
                <TableHead className="font-bold">Veo 3</TableHead>
                <TableHead className="font-bold">Runway Gen-3</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{row.feature}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <StatusIcon status={row.genie3.status} />
                      <span className="font-medium">{row.genie3.text}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <StatusIcon status={row.sora.status} />
                      <span>{row.sora.text}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <StatusIcon status={row.veo3.status} />
                      <span>{row.veo3.text}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <StatusIcon status={row.runway.status} />
                      <span>{row.runway.text}</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
          <h3 className="font-bold text-lg mb-2">Key Advantage</h3>
          <p className="text-gray-700">
            While other AI video generators create static content, <strong>Genie 3 AI</strong> generates truly
            interactive worlds suitable for gaming, robotics training, and immersive applications.
          </p>
        </div>
      </div>
    </section>
  )
}
