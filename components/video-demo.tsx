export function VideoDemo() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Explore Genie 3 in Action</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Witness the revolutionary capabilities of Genie 3 through these demonstrations. From creating fantastical worlds to simulating realistic 
            environments, see how text prompts transform into interactive 3D experiences.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/PDKhUknuQDg?si=khsvZKnipZwo28Jw" 
              title="Genie 3 AI - Official Demo Video by Google DeepMind" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Advanced World Generation</h3>
              <p className="text-gray-600 mb-4">
                Explore complex environments with dynamic lighting, weather systems, and 
                persistent object interactions in real-time. Experience how Genie 3 generates 
                immersive 3D worlds with unprecedented detail and consistency.
              </p>
              <div className="text-sm text-blue-600 font-medium">▶ Watch Demo</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Technical Deep Dive</h3>
              <p className="text-gray-600 mb-4">
                Understanding the autoregressive architecture and memory systems that enable 
                long-term consistency in generated worlds. Discover the cutting-edge AI 
                technology powering Genie 3's world modeling capabilities.
              </p>
              <div className="text-sm text-green-600 font-medium">▶ Watch Demo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}