import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, X, AlertTriangle } from "lucide-react"

export function Comparison() {
  const features = [
    {
      feature: "Interactive Navigation",
      genie3: { status: "check", text: "Real-time Control" },
      sora: { status: "x", text: "Static Video" },
      veo3: { status: "x", text: "Static Video" },
      runway: { status: "x", text: "Static Video" },
      isVisual: true,
      visualType: "interaction"
    },
    {
      feature: "Physics Consistency",
      genie3: { status: "check", text: "Object Permanence" },
      sora: { status: "x", text: "Morphing/Hallucinations" },
      veo3: { status: "x", text: "Limited" },
      runway: { status: "x", text: "Limited" },
      explanation: "Genie 3 understands object permanence—a table stays a table even if you walk away."
    },
    {
      feature: "Max Duration",
      genie3: { status: "check", text: "Infinite (Playable)" },
      sora: { status: "warning", text: "60 seconds" },
      veo3: { status: "warning", text: "8 seconds" },
      runway: { status: "warning", text: "16 seconds" },
    },
    {
      feature: "Frame Rate",
      genie3: { status: "check", text: "24fps Real-time" },
      sora: { status: "warning", text: "Non-realtime Render" },
      veo3: { status: "warning", text: "Non-realtime Render" },
      runway: { status: "warning", text: "Variable" },
    },
  ]

  const StatusIcon = ({ status }: { status: string }) => {
    switch (status) {
      case "check":
        return <Check className="h-5 w-5 text-green-600" />
      case "x":
        return <X className="h-5 w-5 text-red-600" />
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-yellow-600" />
      default:
        return null
    }
  }

  return (
    <section id="comparison" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Genie 3 feels "Alive" vs Just "Video"</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Genie 3 isn't just generating pixels; it's simulating a world. See the difference between
            <strong> Passive Video</strong> (Sora) and <strong> Active Interaction</strong> (Genie 3).
          </p>
        </div>

        {/* Visual Comparison Block */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
            <div className="mb-4 aspect-video bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">Passive Video</div>
              <div className="text-center p-8">
                <div className="mb-2 text-4xl">🎥</div>
                <div className="font-bold text-gray-500">Sora / Runway</div>
                <div className="text-sm text-gray-400">great visuals, but you can't touch anything</div>
              </div>
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">Standard AI Video</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5" /> Zero interactivity</li>
              <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5" /> Physics hallucinations</li>
              <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5" /> Fixed camera path</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-lg border-2 border-blue-100 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-sm">
              Next Gen
            </div>
            <div className="mb-4 aspect-video bg-blue-50 rounded-lg flex items-center justify-center relative overflow-hidden group cursor-pointer">
              <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div> Active
              </div>
              {/* Placeholder for GIF/Video */}
              <div className="text-center p-8">
                <div className="mb-2 text-4xl animate-bounce">🎮</div>
                <div className="font-bold text-blue-700">Genie 3 AI</div>
                <div className="text-sm text-blue-600">You control the character</div>
              </div>
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">Genie 3 World Model</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5" /> Fully playable at 24fps</li>
              <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5" /> Object permanence (memory)</li>
              <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5" /> User-controlled camera</li>
            </ul>
          </div>
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
                  <TableCell className="font-medium">
                    {row.feature}
                    {row.explanation && (
                      <div className="text-xs text-gray-500 font-normal mt-1">{row.explanation}</div>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <StatusIcon status={row.genie3.status} />
                      <span className="font-medium">{row.genie3.text}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <StatusIcon status={row.sora.status} />
                      <span className="text-gray-600">{row.sora.text}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <StatusIcon status={row.veo3.status} />
                      <span className="text-gray-600">{row.veo3.text}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <StatusIcon status={row.runway.status} />
                      <span className="text-gray-600">{row.runway.text}</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
          <h3 className="font-bold text-lg mb-2">Key Advantage: Physics Consistency</h3>
          <p className="text-gray-700">
            While other AI video generators create static content that "hallucinates" when objects move off-screen,
            <strong> Genie 3 AI</strong> maintains a latent representation of the world. This means if you put an object in a drawer,
            Genie 3 "remembers" it's there.
          </p>
        </div>
      </div>
    </section>
  )
}
