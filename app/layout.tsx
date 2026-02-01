import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Genie 3 AI - Real-Time Interactive World Model | DeepMind Genie 3 Official Community",
  description:
    "Experience Google DeepMind's revolutionary Genie 3 AI world model. Generate playable AI worlds and interactive 3D environments from text at 720p 24fps. Real-time world simulation with persistent memory, physics-consistent AI simulation, and promptable world events.",
  keywords:
    "Google project genie, Genie google ai, Google genie 3, Google's project genie, Labs google project genie, AI world model, interactive 3D environments, real-time world simulation, playable AI worlds, text-to-3D world",
  authors: [{ name: "Genie3AI.world Team" }],
  creator: "Genie3AI.world",
  publisher: "Genie3AI.world",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://genie3ai.world",
    siteName: "Genie3AI.world",
    title: "Project Genie - Google's Genie 3 World Model Guide",
    description:
      "Explore Google's Project Genie (Genie 3). A revolutionary generative world model that turns text, images, and sketches into playable, interactive 3D environments.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Google Project Genie - Interactive World Model",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Genie - Google's Genie 3 World Model Guide",
    description:
      "Explore Google's Project Genie (Genie 3). A revolutionary generative world model that turns text, images, and sketches into playable, interactive 3D environments.",
    images: ["/og-image.jpg"],
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* 页面统计脚本：Pageview */}
        <Script
          id="pageview-script"
          src="https://app.pageview.app/js/script.js"
          data-domain="genie3ai.world"
          strategy="afterInteractive"
        />
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "stp9eedzlb");
          `}
        </Script>
      </body>
    </html>
  )
}
