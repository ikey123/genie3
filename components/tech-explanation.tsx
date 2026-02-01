import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Layers, Wand2, MousePointer2 } from "lucide-react"

export function TechExplanation() {
    return (
        <section className="py-20 bg-white">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <Badge className="mb-4" variant="secondary">Technology Deep Dive</Badge>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">More Than Just Video Generation</h2>
                    <p className="text-xl text-gray-600">
                        Understanding why <span className="font-semibold text-blue-600">Genie 3</span> is a "Generative World Model" and not just another video generator like Sora.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    <div className="space-y-8">
                        <div className="flex gap-4 items-start">
                            <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                                <MousePointer2 className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Interactive vs. Passive</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Traditional video AI (Sora, Runway) creates passive videos you watch. Genie 3 creates active worlds you <strong>play</strong>. It predicts not just pixels, but user actions and physics responses.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
                                <Layers className="h-6 w-6 text-purple-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Generative World Model</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    The model understands the underlying "laws" of the world it generates. It simulates gravity, collision, and object permanence, allowing for consistent long-form interaction.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                                <Wand2 className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Promptable Events</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Change the world on the fly. "Make it rain", "Spawn a dragon", "Collapse the bridge". The world model adapts instantly to your commands while maintaining scene integrity.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 relative">
                        <h3 className="text-lg font-bold mb-6 text-center">Genie 3 vs. Traditional Video AI</h3>
                        <div className="space-y-4">
                            <div className="grid grid-cols-3 gap-4 pb-4 border-b text-sm font-semibold text-gray-500">
                                <div>Feature</div>
                                <div className="text-center">Video AI (Sora/Runway)</div>
                                <div className="text-center text-blue-600">Genie 3</div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 items-center text-sm">
                                <div className="font-medium">Interaction</div>
                                <div className="text-center text-gray-500">None (Passive)</div>
                                <div className="text-center font-bold text-green-600">Full Control</div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 items-center text-sm">
                                <div className="font-medium">Frame Rate</div>
                                <div className="text-center text-gray-500">Variable</div>
                                <div className="text-center font-bold text-green-600">Consistent 24fps</div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 items-center text-sm">
                                <div className="font-medium">Consistency</div>
                                <div className="text-center text-gray-500">Visual Only</div>
                                <div className="text-center font-bold text-green-600">Physics & Visual</div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 items-center text-sm">
                                <div className="font-medium">Duration</div>
                                <div className="text-center text-gray-500">Short Clips</div>
                                <div className="text-center font-bold text-green-600">Infinite</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
