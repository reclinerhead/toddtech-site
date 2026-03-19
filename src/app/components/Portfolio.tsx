export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-no-repeat bg-fixed relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Portfolio
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Check out some of our recent projects and success stories.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Portfolio Item 1 */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-colors">
            <img src="/images/Screenshot 2026-03-19 095057.png" alt="Restaurant & Bait Shop Website" className="w-full h-auto rounded-lg mb-4" />
            <p className="text-gray-400 mb-4">
              Simulated restaurant + bait shop website built as a learning project and portfolio piece. Features a public-facing site, a secure manager dashboard, and real AI integrations for review management and customer service chat.
            </p>
         
            <span className="text-cyan-400 text-sm font-medium">Features: Dynamic menu, review system, and photo gallery. AI-based customer service chat.   AI-based review tools including abuse prevention, sentiment analysis, and actionable item reporting.</span>
            <a href="https://todds-grill-demo.toddtech.llc" target="_blank" rel="noopener noreferrer" className="mt-6 px-6 py-3 bg-gray-800/50 border border-cyan-500/50 rounded-xl hover:border-cyan-400 hover:bg-cyan-500/20 transition-all text-center block font-semibold text-cyan-300 hover:text-cyan-100 text-base">
              View Live Demo
            </a>
            <p className="text-gray-500 text-xs mt-3 text-center italic leading-relaxed">
              Includes read-only manager dashboard access
            </p>
          </div>
          {/* Portfolio Item 2 */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-colors">
            <div className="text-cyan-400 text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-3">Cybersecurity Audit</h3>
            <p className="text-gray-400 mb-4">
              Conducted comprehensive security assessment and implemented protection measures.
            </p>
            <span className="text-cyan-400 text-sm font-medium">Services: Penetration Testing, Compliance</span>
          </div>
          {/* Portfolio Item 3 */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-colors">
            <div className="text-cyan-400 text-4xl mb-4">☁️</div>
            <h3 className="text-xl font-semibold mb-3">Cloud Migration</h3>
            <p className="text-gray-400 mb-4">
              Migrated legacy systems to AWS cloud infrastructure with zero downtime.
            </p>
            <span className="text-cyan-400 text-sm font-medium">Cloud: AWS, Docker, Kubernetes</span>
          </div>
        </div>
      </div>
    </section>
  );
}