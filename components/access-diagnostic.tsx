"use client"

import { Check, X, ArrowRight, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { useState } from "react"

export function AccessDiagnostic() {
    const [checklist, setChecklist] = useState({
        usBased: false,
        ultraSubscriber: false,
        over18: false
    })

    const allChecked = checklist.usBased && checklist.ultraSubscriber && checklist.over18

    const toggleItem = (key: keyof typeof checklist) => {
        setChecklist(prev => ({ ...prev, [key]: !prev[key] }))
    }

    return (
        <section id="access-diagnostic" className="py-12 bg-white border-b border-gray-100">
            <div className="container max-w-4xl">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-3">Can You Use Genie 3 Today?</h2>
                    <p className="text-gray-600">Check your eligibility for the Google Labs preview.</p>
                </div>

                <Card className="border-2 border-blue-100 shadow-lg">
                    <CardContent className="p-6 md:p-8">
                        <div className="space-y-4">
                            <div
                                className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors cursor-pointer"
                                onClick={() => toggleItem('usBased')}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`h-6 w-6 rounded-full border-2 flex items-center justify-center ${checklist.usBased ? 'bg-blue-600 border-blue-600' : 'border-gray-300'}`}>
                                        {checklist.usBased && <Check className="h-4 w-4 text-white" />}
                                    </div>
                                    <span className="font-medium text-lg">Are you based in the US?</span>
                                </div>
                                <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded">Required</span>
                            </div>

                            <div
                                className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors cursor-pointer"
                                onClick={() => toggleItem('ultraSubscriber')}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`h-6 w-6 rounded-full border-2 flex items-center justify-center ${checklist.ultraSubscriber ? 'bg-blue-600 border-blue-600' : 'border-gray-300'}`}>
                                        {checklist.ultraSubscriber && <Check className="h-4 w-4 text-white" />}
                                    </div>
                                    <span className="font-medium text-lg">Are you a Google AI Ultra subscriber?</span>
                                </div>
                                <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded">Labs Only</span>
                            </div>

                            <div
                                className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors cursor-pointer"
                                onClick={() => toggleItem('over18')}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`h-6 w-6 rounded-full border-2 flex items-center justify-center ${checklist.over18 ? 'bg-blue-600 border-blue-600' : 'border-gray-300'}`}>
                                        {checklist.over18 && <Check className="h-4 w-4 text-white" />}
                                    </div>
                                    <span className="font-medium text-lg">Are you 18+ years old?</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col items-center">
                            {allChecked ? (
                                <div className="w-full text-center space-y-4">
                                    <div className="text-green-600 font-semibold flex items-center justify-center gap-2">
                                        <Check className="h-5 w-5" /> You are eligible!
                                    </div>
                                    <Button size="lg" className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-lg h-12 px-8" asChild>
                                        <a href="https://labs.google/projectgenie" target="_blank" rel="noopener noreferrer">
                                            Join Official Waitlist via Google Labs <ArrowRight className="ml-2 h-4 w-4" />
                                        </a>
                                    </Button>
                                </div>
                            ) : (
                                <div className="w-full text-center space-y-4">
                                    <div className="text-gray-500 font-medium flex items-center justify-center gap-2">
                                        Select all criteria above to check access
                                    </div>
                                    <Button size="lg" className="w-full md:w-auto text-lg h-12 px-8" disabled variant="secondary">
                                        Verify Eligibility First <Lock className="ml-2 h-4 w-4" />
                                    </Button>
                                    <p className="text-sm text-gray-400">
                                        Not eligible? <a href="#newsletter" className="text-blue-600 hover:underline">Sign up for our global availability alerts</a>
                                    </p>
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
