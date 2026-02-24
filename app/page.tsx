import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="w-full h-96 bg-cover bg-center relative" style={{ backgroundImage: "url('/firestation-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full">
          <h1 className="text-5xl font-bold mb-4">Lafayette Township</h1>
          <p className="text-2xl">Volunteer Fire Department</p>
        </div>
      </section>

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-red-600 text-white p-4 shadow-lg">
        <div className="relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <h2 className="text-2xl font-bold">LTVFD</h2>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold italic">Hooiser Pride, Volunteer Heart, Professional Comitment</p>
          </div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <Link href="/login" className="bg-white text-red-600 px-4 py-2 rounded hover:bg-gray-100">Employee Login</Link>
          </div>
        </div>
      </header>

      {/* Sticky Navigation Bar */}
      <nav className="sticky top-16 z-40 w-full bg-white shadow-lg">
        <div className="relative">
          <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
            <p className="text-sm text-gray-600">3235 N 100 W, Anderson, IN 46011</p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-3 items-center gap-4 px-6 py-3">
            <div></div>
            <div className="flex justify-center items-center gap-6">
              <Link href="/events" className="text-lg font-semibold text-red-600 hover:text-red-800 transition">Events</Link>
              <div className="text-gray-300">|</div>
              <Link href="/contact" className="text-lg font-semibold text-red-600 hover:text-red-800 transition">Contact</Link>
              <div className="text-gray-300">|</div>
              <Link href="/about" className="text-lg font-semibold text-red-600 hover:text-red-800 transition">About</Link>
              <div className="text-gray-300">|</div>
              <Link href="/staffing" className="text-lg font-semibold text-red-600 hover:text-red-800 transition">Staffing</Link>
            </div>
            <div className="text-right">
              {/* Placeholder for future content */}
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Staggered Information Sections */}

        {/* Section 1: Our Mission - Left Text, Right Image */}
        <section className="w-full py-12 px-6 lg:px-12 flex flex-col lg:flex-row items-stretch gap-8 bg-gray-100">
          <div className="lg:w-2/5 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-red-600">Our Mission</h3>
              <p className="text-gray-700">Dedicated to serving our community with courage and compassion. We provide professional emergency response and community education. Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text.</p>
            </div>
          </div>
          <div className="lg:w-3/5 bg-gray-300 rounded-lg h-80 flex items-center justify-center">
            <p className="text-gray-600 text-xl">Image Placeholder</p>
          </div>
        </section>

        {/* Section 2: 24/7 Service - Left Image, Right Text */}
        <section className="w-full py-12 px-6 lg:px-12 flex flex-col lg:flex-row-reverse items-stretch gap-8">
          <div className="lg:w-2/5 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-red-600">24/7 Service</h3>
              <p className="text-gray-700">Always ready to respond to emergencies. Our crew is trained and equipped to handle any situation around the clock. Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text.</p>
            </div>
          </div>
          <div className="lg:w-3/5 bg-gray-300 rounded-lg h-80 flex items-center justify-center">
            <p className="text-gray-600 text-xl">Image Placeholder</p>
          </div>
        </section>

        {/* Section 3: Community First - Left Text, Right Image */}
        <section className="w-full py-12 px-6 lg:px-12 flex flex-col lg:flex-row items-stretch gap-8 bg-gray-100">
          <div className="lg:w-2/5 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-red-600">Community First</h3>
              <p className="text-gray-700">We believe in building strong relationships with our community through education, prevention, and professional service. Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text.</p>
            </div>
          </div>
          <div className="lg:w-3/5 bg-gray-300 rounded-lg h-80 flex items-center justify-center">
            <p className="text-gray-600 text-xl">Image Placeholder</p>
          </div>
        </section>
        {/* Badge Image - Centered under Community First */}
        <section className="w-full py-8 bg-white">
          <div className="max-w-4xl mx-auto px-6 flex justify-center">
            <img src="/ltvfd-badge.png" alt="Lafayette Township Fire Department Badge" className="max-w-xs w-full h-auto rounded shadow-md" />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/events" className="hover:text-red-400">Events</Link></li>
                <li><Link href="/about" className="hover:text-red-400">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-red-400">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact Info</h4>
              <p className="text-gray-300">Phone: (555) 123-4567</p>
              <p className="text-gray-300">Email: info@ltvfd.local</p>
              <p className="text-gray-300">Emergency: 911</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Hours</h4>
              <p className="text-gray-300">Open 24/7</p>
              <p className="text-gray-300">Emergency Response</p>
              <p className="text-gray-300">Available Always</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Lafayette Township Volunteer Fire Department. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
