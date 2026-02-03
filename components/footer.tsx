import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Twitter, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">G3</span>
              </div>
              <span className="font-bold text-xl">Genie3AI.world</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              The official community resource for Google DeepMind's Genie 3 AI world model. Explore the future of
              interactive AI world generation.
            </p>
            <div className="space-y-4">
              <h4 className="font-semibold">Stay Updated</h4>
              <div className="flex gap-2 max-w-sm">
                <Input type="email" placeholder="Enter your email" className="bg-gray-800 border-gray-700 text-white" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#features" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#comparison" className="hover:text-white transition-colors">
                  Comparisons
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li className="pt-4 text-gray-500 font-bold uppercase text-xs">Trending Now</li>
              <li>
                <Link href="#comparison" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Genie 3 vs Sora
                </Link>
              </li>
              <li>
                <Link href="#access-diagnostic" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Access Eligibility Check
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="https://deepmind.google/discover/blog/genie-3-a-new-frontier-for-world-models/"
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Official DeepMind Blog
                </Link>
              </li>
              <li>
                <Link
                  href="https://deepmind.google"
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Research Paper
                </Link>
              </li>
              <li>
                <Link
                  href="https://youtube.com/watch?v=PDKhUknuQDg"
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo Videos
                </Link>
              </li>
              {/* 已移除无页面入口：/community、/guides */}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Genie3AI.world. All rights reserved. This is an unofficial community resource for Google DeepMind's
              Genie 3 AI.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://youtube.com/watch?v=PDKhUknuQDg" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
