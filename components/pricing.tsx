import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ArrowRight } from "lucide-react"

export function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Get Access to Genie 3 AI</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <strong>Genie 3 AI</strong> is currently available through Google DeepMind's research preview program.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-2 border-blue-200 shadow-lg">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl">Research Preview Access</CardTitle>
              <div className="text-4xl font-bold text-blue-600 mt-4">Free</div>
              <CardDescription className="text-lg">Limited availability</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>
                    Early access to <strong>Genie 3 AI</strong> capabilities
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Generate interactive 3D worlds from text</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Real-time navigation and interaction</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>720p resolution at 24fps</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Community support and documentation</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Priority consideration for commercial licensing</span>
                </li>
              </ul>
              <Button className="w-full" size="lg">
                Apply for Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-sm text-gray-600 text-center">Join the waitlist</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl">Developer API</CardTitle>
              <div className="text-4xl font-bold text-gray-900 mt-4">Coming Soon</div>
              <CardDescription className="text-lg">Contact for Pricing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>
                    Full <strong>Genie 3 AI</strong> integration capabilities
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Commercial usage rights</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Advanced world generation features</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Priority support and SLA</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Custom training and implementation</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full bg-transparent" size="lg">
                Request Information
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <p className="text-center text-gray-600 mt-8">
          *Pricing for commercial applications will be announced following the research preview period.
        </p>
      </div>
    </section>
  )
}
