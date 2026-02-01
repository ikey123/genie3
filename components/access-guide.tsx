import { Button } from "@/components/ui/button"
import { CheckCircle2, AlertCircle, ArrowRight, Sparkles } from "lucide-react"

export function AccessGuide() {
    return (
        <section id="access-guide" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="container">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4">
                        <Sparkles className="h-4 w-4" />
                        <span>Limited Availability</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">How to Try Google's Project Genie?</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Genie 3 is currently available as an experimental prototype. Here is the official way to get access.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Official Method */}
                    <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-xl text-sm font-semibold">
                            Recommended
                        </div>
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-lg">1</span>
                            Google Labs
                        </h3>
                        <p className="text-gray-600 mb-6">
                            The primary access point for Project Genie is through Google Labs. Currently, priority is given to <strong>Google AI Ultra</strong> subscribers in the US.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3 text-sm text-gray-700">
                                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                <span>Visit Google Labs portal</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-gray-700">
                                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                <span>Sign in with Google AI Ultra account</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-gray-700">
                                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                <span>Join the "Project Genie" waitlist</span>
                            </li>
                        </ul>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                            <a href="https://labs.google/" target="_blank" rel="noopener noreferrer">
                                Go to Google Labs <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </div>

                    {/* Waitlist / Updates */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 text-lg">2</span>
                            Stay Updated
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Don't have an AI Ultra subscription? Sign up for updates to be notified when the public beta or wider release opens.
                        </p>
                        <div className="space-y-4 mb-8">
                            <div className="flex gap-3 bg-amber-50 p-4 rounded-lg border border-amber-100">
                                <AlertCircle className="h-5 w-5 text-amber-600 shrink-0" />
                                <p className="text-sm text-amber-800">
                                    Note: Access rollout is gradual. Availability may vary by region.
                                </p>
                            </div>
                        </div>
                        <Button variant="outline" className="w-full">
                            Subscribe for Updates
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
