'use client';

import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-col items-center justify-between gap-8">
          {/* Hero Content */}
          <div className="flex-1 space-y-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              Cashiflo
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Revolutionizing supply chain financing with seamless digital solutions. Empowering businesses with quick access to working capital and streamlined vendor payments.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Get Started
            </button>
          </div>

          {/* Spline Scene Container */}
          <div className="w-full md:w-full h-[420px] relative">
            <Spline 
              className="!block !w-full !h-full rounded-[50px]"
              scene="https://prod.spline.design/hrs3OYE4IJDvTpoR/scene.splinecode" 
            />
          </div>
        </div>
      </section>
    </main>
  );
}