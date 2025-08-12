// 博客落地页：依据 doc/设计文档.txt（英文对外，中文注释）
// - 不产生指向不存在内部详情页的链接，避免坏链
// - 展示分类与精选内容，聚焦 Genie 3 AI 长尾与用例主题

import Image from "next/image"

export const metadata = {
  title: "Genie 3 AI Blog — Insights, Guides, and Use Cases",
  description:
    "In-depth articles on Genie 3 AI: interactive world models, real-time simulation, robotics training environments, VR/AR use cases, benchmarks, and more.",
}

type Post = {
  title: string
  excerpt: string
  category: string
  image: string
  readingTime: string
}

const featured: Post[] = [
  {
    title: "Genie 3 for Game Development: Complete Tutorial and Best Practices",
    excerpt:
      "Learn how Genie 3 AI enables procedural game level generation, real-time interaction, and long-horizon consistency for indie and AAA teams. Discover Genie 3 tutorial steps and AI for immersive gaming applications.",
    category: "Game Development",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=600&fit=crop",
    readingTime: "8 min",
  },
  {
    title: "Genie 3 Robot Training: Building Safe, Scalable AI Environments",
    excerpt:
      "Design reinforcement learning scenarios, autonomous navigation tests, and embodied AI training with Genie 3 interactive simulation. Explore robot training environments and synthetic data for agents.",
    category: "Robotics & AI Research",
    image:
      "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?w=1200&h=600&fit=crop",
    readingTime: "10 min",
  },
  {
    title: "Genie 3 VR Applications: Virtual Reality World Builder Guide",
    excerpt:
      "Create immersive simulations with physics-aware interactions, promptable events, and stable world states over minutes. Learn how to create with Genie 3 for VR gaming and virtual reality world builder applications.",
    category: "VR/AR",
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1200&h=600&fit=crop",
    readingTime: "7 min",
  },
]

const categories = [
  "Game Development & Interactive Media",
  "Robotics & AI Research",
  "VR/AR Creation",
  "Education & Professional Training",
  "Synthetic Data for Agents",
  "Benchmarks & Comparisons",
]

export default function Blog() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 border-b">
        <div className="container">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Genie 3 AI Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Insights, practical guides, and industry use cases about interactive world models. Explore how Genie 3 AI powers real-time simulation, persistent memory, physics-consistent interaction, and promptable events across gaming, robotics, VR/AR, and more.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-6">Topics We Cover</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((c) => (
              <span key={c} className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured posts - 无内部详情链接，避免坏链 */}
      <section className="py-4">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-6">Featured Insights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((post) => (
              <article key={post.title} className="rounded-xl border shadow-sm overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority={false}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <div className="text-xs uppercase tracking-wider text-blue-600 font-semibold mb-2">
                    {post.category}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="text-sm text-gray-500">Reading time: {post.readingTime}</div>
                </div>
              </article>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-6">
            More articles are coming soon. We prioritize deep technical breakdowns, applied use cases, and fair comparisons (e.g., Genie 3 vs Sora / Runway).
          </p>
        </div>
      </section>

      {/* External authority links（来自设计文档的外链，避免坏链） */}
      <section className="py-16 border-t">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-4">Essential Reads</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <a
                href="https://deepmind.google/discover/blog/genie-3-a-new-frontier-for-world-models/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                DeepMind: Genie 3 — A New Frontier for World Models
              </a>
            </li>
            <li>
              <a
                href="https://deepmind.google"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                DeepMind Research
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/watch?v=PDKhUknuQDg"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Official Demo Video
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}
