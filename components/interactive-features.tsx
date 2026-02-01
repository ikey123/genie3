import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Pencil, Image as ImageIcon, ArrowRight } from "lucide-react"

export function InteractiveFeatures() {
    return (
        <section className="py-20 bg-gray-900 text-white overflow-hidden">
            <div className="container relative z-10">
                <div className="text-center mb-16">
                    <Badge className="bg-blue-600 hover:bg-blue-700 mb-4 text-white border-0">Creative Tools</Badge>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">Sketch, Snap, and Play</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Genie 3 isn't just text-to-world. Use sketches or images to define the structure of your virtual environment.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {/* Sketch to World */}
                    <Card className="bg-gray-800 border-gray-700 overflow-hidden group">
                        <div className="aspect-video relative overflow-hidden bg-black/50">
                            {/* Placeholder for Sketch to World Video/Image */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                                <div className="text-center">
                                    <Pencil className="h-12 w-12 mx-auto mb-2 opacity-50" />
                                    <span className="text-sm">Sketch-to-World Demo</span>
                                </div>
                            </div>
                            <Image
                                src="/img/sketch-demo-placeholder.jpg" // Placeholder path, assuming existence or will gracefully fail visually
                                alt="Sketch to world demonstration"
                                layout="fill"
                                objectFit="cover"
                                className="opacity-50 group-hover:opacity-75 transition-opacity"
                            />
                        </div>
                        <CardContent className="p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-10 w-10 rounded-full bg-blue-900/50 flex items-center justify-center">
                                    <Pencil className="h-5 w-5 text-blue-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Sketch-to-World</h3>
                            </div>
                            <p className="text-gray-400 mb-6">
                                Draw a simple 2D map or layout, and Genie 3 will extrude it into a fully explorable 3D environment. Define walls, hazardous zones, and goal areas with simple lines.
                            </p>
                            <div className="flex items-center text-blue-400 text-sm font-medium">
                                See How It Works <ArrowRight className="ml-2 h-4 w-4" />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Image to World */}
                    <Card className="bg-gray-800 border-gray-700 overflow-hidden group">
                        <div className="aspect-video relative overflow-hidden bg-black/50">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                                <div className="text-center">
                                    <ImageIcon className="h-12 w-12 mx-auto mb-2 opacity-50" />
                                    <span className="text-sm">Image-to-World Demo</span>
                                </div>
                            </div>
                            <Image
                                src="/img/image-demo-placeholder.jpg"
                                alt="Image to world demonstration"
                                layout="fill"
                                objectFit="cover"
                                className="opacity-50 group-hover:opacity-75 transition-opacity"
                            />
                        </div>
                        <CardContent className="p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-10 w-10 rounded-full bg-purple-900/50 flex items-center justify-center">
                                    <ImageIcon className="h-5 w-5 text-purple-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Image-to-World</h3>
                            </div>
                            <p className="text-gray-400 mb-6">
                                Upload a real-world photo or concept art. Genie 3 analyzes the scene and breathes life into it, turning static pixels into a physics-enabled, navigable 3D world.
                            </p>
                            <div className="flex items-center text-purple-400 text-sm font-medium">
                                See How It Works <ArrowRight className="ml-2 h-4 w-4" />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
