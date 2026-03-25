// app/page.tsx
import type { Metadata } from "next";
import { ContactForm } from "./contact/ContactForm";
import Portfolio from './components/Portfolio';
import Image from "next/image";


export const metadata: Metadata = {
  title: "ToddTech LLC - Modern Web Solutions for Small Businesses",
  description: "Custom, mobile-friendly websites and web applications with a focus on security, performance, and reliability. Based in Michigan, serving businesses across the state. ",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-950 to-gray-900 text-white">
      {/* Navigation - simple top bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold text-cyan-400">ToddTech</span>
              <span className="text-2xl font-bold text-white ml-1">LLC</span>
            </div>

            {/* Menu links - we'll make this responsive later */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</a>
             
              <a href="#portfolio" className="text-gray-300 hover:text-cyan-400 transition-colors">Portfolio</a>
              <a
                href="#contact"
                className="bg-cyan-500 text-white px-5 py-2 rounded-md font-medium hover:bg-cyan-600 transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Mobile menu button - placeholder for now */}
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-white">
                {/* Hamburger icon - you can use a real SVG later */}
                <span className="sr-only">Open menu</span>
                ☰
              </button>
            </div>
          </div>
        </div>
      </nav>

{/* Hero Section */}
<section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
  {/* Background + overlay layer – confined to this section only */}
  <div
    className="absolute inset-0 bg-no-repeat bg-cover bg-center z-0"
    style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
  >
    <div className="absolute inset-0 bg-black/70 pointer-events-none" />
  </div>

  {/* Main content – raised above background */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
    <div className="relative">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
        Modern Web Solutions for Small Businesses
       
      </h1>

      <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
        Custom, mobile-friendly websites and web applications with a focus on security, performance, and reliability. Based in Michigan, serving businesses across the state. 
      </p>

      <a
        href="#contact"
        className="inline-block bg-cyan-500 text-white text-lg font-medium px-10 py-4 rounded-lg hover:bg-cyan-600 transition-colors shadow-lg shadow-cyan-500/20"
      >
        Contact Us!
      </a>
    </div>
  </div>
</section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Service Card 3 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 text-center hover:border-cyan-500/50 transition-colors">
              <div className="text-cyan-400 text-5xl mb-4">{"</>"}</div>
              <h3 className="text-xl font-semibold mb-3">Website Development</h3>
              <p className="text-gray-400">
                Custom and mobile-friendly websites built with Next.js, TypeScript, and modern best practices.
              </p>
            </div>

            {/* Service Card 1 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 text-center hover:border-cyan-500/50 transition-colors">
              <div className="text-cyan-400 text-5xl mb-4">🛡️</div> {/* Replace with real icon later */}
              <h3 className="text-xl font-semibold mb-3">Web Applications</h3>
              <p className="text-gray-400">
                Dynamic and secure data driven web applications for business, and backend APIs with AI integration options.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 text-center hover:border-cyan-500/50 transition-colors">
              <div className="text-cyan-400 text-5xl mb-4">☁️</div>
              <h3 className="text-xl font-semibold mb-3">Cloud Migration</h3>
              <p className="text-gray-400">
                Move to the cloud services such as email or offsite backup storage safely and efficiently.
              </p>
            </div>

            

            {/* Service Card 4 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 text-center hover:border-cyan-500/50 transition-colors">
              <div className="text-cyan-400 text-5xl mb-4">🎧</div>
              <h3 className="text-xl font-semibold mb-3">24/7 IT Support</h3>
              <p className="text-gray-400">
                Fast, reliable help whenever you need it — local Michigan support you can trust.
              </p>
            </div>
          </div>
        </div>
      </section>

 <Portfolio />


      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Let&apos;s Talk About Your
              <br className="hidden sm:block" />
              <span className="text-cyan-400"> IT Needs</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Whether you need a quick answer or a full consultation, we&apos;re here to help
              Michigan businesses thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Contact Info Panel */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-5">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    {/* Person icon */}
                    <svg className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500 mb-0.5">Name</p>
                      <p className="text-gray-300">Todd Wyatt</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    {/* Map pin icon */}
                    <svg className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500 mb-0.5">Location</p>
                      <p className="text-gray-300">Michigan, USA</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    {/* Clock icon */}
                    <svg className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500 mb-0.5">Response Time</p>
                      <p className="text-gray-300">Within 1 business day</p>
                    </div>
                  </div>
                 
                 

                </div>
              </div>

              <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">What We Can Help With</h3>
                <ul className="space-y-2.5">
                  {[
                    'Modern, fast-loading and mobile-friendly websites for small businesses',
                    'Security-minded IT solutions to protect your data and customers',
                    'Database, Storage and Backup solutions',
                    'Web Analytics setup and reporting',
                    'General IT Support',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-400 text-sm">
                      <span className="text-cyan-500 mt-0.5">›</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div>
                    <Image src="/images/comptia-security-ce-certification.png" alt="CompTIA Security+ Certified" width={150} height={150} className="mt-4" />
                 </div>

              </div>

              
            </div>

            {/* Form Panel */}
            <div className="lg:col-span-3 bg-gray-800/40 border border-gray-700 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Spacer for footer later */}
      <div className="h-16"></div>
    </div>
  );
}

