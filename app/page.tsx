import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-[#f5f0e5] py-6 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-2xl font-family: Alex Brush italic font-medium text-[#333]">Tathya Pulse</h1>
            <p className="text-xs text-[#555] mt-1">Providing clarity, fostering ideas</p>
          </div>
          <nav>
            <ul className="flex space-x-6 text-sm">
              <li>
                <Link href="/" className="text-[#333] hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/progress" className="text-[#333] hover:underline">
                  Progress
                </Link>
              </li>
              <li>
                <Link href="/what-drive-us" className="text-[#333] hover:underline">
                  What Drive Us
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-[#333] hover:underline">
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#f5f0e5] py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
          <div>
            <Image
              src="/images/question-cards.jpg"
              alt="Hand writing question marks on cards"
              width={400}
              height={500}
              className="rounded-md shadow-md"
            />
          </div>
          <div className="flex items-center justify-center relative">
            <div className="absolute w-80 h-80 opacity-100">
              <Image src="/images/circular-lines.png" alt="Decorative circular lines" width={600} height={600} />
            </div>
            <h2 className="text-4xl md:text-5xl font-Alex Brush italic text-center leading-tight relative z-10">
              Crafting Clarity in
              <br />
              Science & Innovations
            </h2>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="border-b border-gray-300 my-8"></div>
      </div>

      {/* The Pulse of Progress */}
      <section className="bg-[#f5f0e5] py-10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-end mb-8">
            <h2 className="text-2xl font-serif italic text-right">
              The Pulse of
              <br />
              Progress
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="space-y-4">
              <Image
                src="/images/content-plan.jpg"
                alt="Content plan on laptop"
                width={400}
                height={300}
                className="w-full h-200 object-cover"
              />
              <div className="flex items-center gap-2">
                <span className="text-3xl font-serif italic text-gray-400">1</span>
                <h3 className="text-xl font-serif italic">RegenMed Insights</h3>
              </div>
              <p className="text-sm text-gray-700">Pioneering Breakthroughs in Regenerative Medicine</p>
            </div>

            {/* Card 2 */}
            <div className="space-y-4">
              <Image
                src="/images/analytics.jpg"
                alt="Analytics on tablet"
                width={400}
                height={300}
                className="w-full h-200 object-cover"
              />
              <div className="flex items-center gap-2">
                <span className="text-3xl font-serif italic text-gray-400">2</span>
                <h3 className="text-xl font-serif italic">Venture Sphere</h3>
              </div>
              <p className="text-sm text-gray-700">Navigating the World of Startups, Innovation, and Business Growth</p>
            </div>

            {/* Card 3 */}
            <div className="space-y-4">
              <Image
                src="/images/open-book.jpg"
                alt="Open book with pencil"
                width={400}
                height={300}
                className="w-full h-100 object-cover"
              />
              <div className="flex items-center gap-2">
                <span className="text-3xl font-serif italic text-gray-400">3</span>
                <h3 className="text-xl font-serif italic">SciBiz Nexus</h3>
              </div>
              <p className="text-sm text-gray-700">Bridging Science and Business for the Future of Biotech</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section className="bg-[#e8e0d0] py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-serif text-center mb-16">What Drives Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="bg-white p-6 rounded-sm">
              <div className="flex justify-center mb-4">
                <div className="bg-black rounded-full p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
              </div>
              <h3 className="text-center font-bold mb-6">CURATED SCIENCE WRITING</h3>
              <div className="space-y-2">
                <div className="border border-gray-300 rounded-sm py-1 px-3 text-center text-sm">
                  Breakthroughs & Discoveries
                </div>
                <div className="border border-gray-300 rounded-sm py-1 px-3 text-center text-sm">
                  Challenges & Debates
                </div>
                <div className="border border-gray-300 rounded-sm py-1 px-3 text-center text-sm">Future & Trends</div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="bg-white p-6 rounded-sm">
              <div className="flex justify-center mb-4">
                <div className="bg-black rounded-full p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 16a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1-5a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-center font-bold mb-6">INNOVATION STORYTELLING</h3>
              <div className="space-y-2">
                <div className="border border-gray-300 rounded-sm py-1 px-3 text-center text-sm">
                  Startup Success Stories
                </div>
                <div className="border border-gray-300 rounded-sm py-1 px-3 text-center text-sm">
                  Business & Market Trends
                </div>
                <div className="border border-gray-300 rounded-sm py-1 px-3 text-center text-sm">
                  Funding & Growth Strategies
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="bg-white p-6 rounded-sm">
              <div className="flex justify-center mb-4">
                <div className="bg-black rounded-full p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-center font-bold mb-6">BRIDGING SCIENCE & BUSINESS</h3>
              <div className="space-y-2">
                <div className="border border-gray-300 rounded-sm py-1 px-3 text-center text-sm">
                  From Lab to Market
                </div>
                <div className="border border-gray-300 rounded-sm py-1 px-3 text-center text-sm">
                  Regulatory & Commercialization
                </div>
                <div className="border border-gray-300 rounded-sm py-1 px-3 text-center text-sm">Industry Insights</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Tathya Pulse */}
      <section className="bg-[#f5f0e5] py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-3xl font-serif italic mb-6">About Tathya Pulse</h2>
              
              <div className="mb-6">
                <Image
                  src="/images/tathya-logo.png"
                  alt="Tathya Pulse Logo"
                  width={700}
                  height={700}
                  className="w-full max-w-[700px]"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="mb-4">
                TathyaPulse is a curated digital space where science meets storytelling.We focus on regenerative
                medicine, biotech innovation, and the journey from research to real-world impact — not as a service, but
                as a source of inspiration.
              </p>
              <p className="mb-4">
                At our core, we believe in preserving truth and powering ideas through clear, intentional writing.
              </p>
              <p className="mb-8">
                Every article is an attempt to make complexity understandable, and every section reflects a facet of
                wisdom in motion.
              </p>

              <div className="border-t border-gray-300 pt-6 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-serif italic mb-3">Breakthroughs x RegenMed Insights</h3>
                    <p className="text-sm">
                      We analyze emerging clinical studies, future directions in regenerative medicine
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-serif italic mb-3">Bold Ideas x Venture Sphere</h3>
                    <p className="text-sm">
                      We explore captivating bold ideas, business pivots, and innovation narratives.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-serif italic mb-3">Bench to Business x SciBiz Nexus</h3>
                    <p className="text-sm">
                      We explore how research evolves into commercial products, enters markets, and how science becomes
                      strategy.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-serif italic mb-3">Unfiltered x The Open Desk</h3>
                    <p className="text-sm">
                      Unstructured, reflective, and personal. Here, silence steps aside to make room for voice,
                      vulnerability, and honest takes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Read. Reflect. Resonate. */}
      <section className="bg-[#e8e0d0] py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/reading-book.jpg"
                alt="Person reading a book"
                width={500}
                height={600}
                className="w-400 h-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-8">
                Read. Reflect.
                <br />
                Resonate.
              </h2>
              <p className="mb-4">
                At TathyaPulse, we believe in the quiet power of words —<br />
                to inform, to inspire, and to ignite conversations that matter.
              </p>
              <p className="mb-6">We invite you to:</p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Read with intention.</li>
                <li>Practice thoughtful reading as a skill — not just a habit.</li>
                <li>Cite and share our articles wherever ideas deserve to travel.</li>
                <li>Spread the knowledge — let it pulse outward.</li>
              </ul>
              <p className="italic">Because every idea shared is a ripple in the right direction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f5f0e5] py-8 border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-serif italic mb-1">Tathya Pulse</h3>
              <p className="text-xs text-gray-600">Providing clarity, fostering ideas</p>
            </div>
            <div className="md:col-span-1 md:text-center">
              <p className="text-sm">© 2024 Tathya Pulse. All rights reserved.</p>
            </div>
            <div className="md:text-right">
              <h3 className="text-lg mb-2">Contact Us</h3>
              <p className="text-sm">Phone no: 123456789</p>
              <p className="text-sm">Email: info@tathyapulse.com</p>
            </div>
          </div>
          <div className="mt-8 flex justify-center space-x-6 text-sm">
            <Link href="/" className="text-gray-600 hover:underline">
              Home
            </Link>
            <Link href="/progress" className="text-gray-600 hover:underline">
              Progress
            </Link>
            <Link href="/what-drive-us" className="text-gray-600 hover:underline">
              What Drive Us
            </Link>
            <Link href="/about-us" className="text-gray-600 hover:underline">
              About Us
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
