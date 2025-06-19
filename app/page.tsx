'use client';

import dynamic from 'next/dynamic';
import Preloader from '@/components/Preloader';
import FinancingOptions from '@/components/FinancingOptions';
import { useEffect, useState } from 'react';

// Dynamically import Spline with no SSR
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-black" />
});

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isTestimonialsVisible, setIsTestimonialsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const testimonialsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTestimonialsVisible(true);
        } else {
          setIsTestimonialsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    const statsSection = document.getElementById('stats-section');
    const testimonialsSection = document.getElementById('testimonials-section');

    if (statsSection) {
      observer.observe(statsSection);
    }

    if (testimonialsSection) {
      testimonialsObserver.observe(testimonialsSection);
    }

    return () => {
      if (statsSection) {
        observer.unobserve(statsSection);
      }
      if (testimonialsSection) {
        testimonialsObserver.unobserve(testimonialsSection);
      }
    };
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isTestimonialsVisible) {
      interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % 5);
      }, 5000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isTestimonialsVisible]);

  return (
    <>
      <Preloader />

      {/* Main Content */}
      <main className="min-h-screen bg-white dark:bg-[#020817] transition-colors duration-300">
        <div className="container mx-auto px-4 py-20 mt-24">
          <div className="flex flex-col items-center justify-center gap-12">
            {/* Hero Content */}
            <div className="text-center max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                CASHIFLO
            </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300">
                Revolutionizing supply chain financing with innovative working capital solutions. 
                We empower businesses to optimize their cash flow and strengthen their supply chain relationships.
              </p>
            </div>

            {/* Spline Scene */}
            <div className="w-full h-[400px] relative">
              <div className="absolute inset-0 overflow-hidden rounded-[100px] bg-white dark:bg-[#0A1128] transition-colors duration-300 shadow-lg">
                <Spline 
                  className="!block !w-full !h-full rounded-[100px]"
                  scene="https://prod.spline.design/hrs3OYE4IJDvTpoR/scene.splinecode" 
                />
          </div>
        </div>

            {/* Financing Options */}
            <FinancingOptions />

      {/* Features Section */}
            <section className="w-full py-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 rounded-3xl bg-white dark:bg-[#0A1128] border border-gray-200 dark:border-blue-900/30 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Quick Financing</h3>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Get instant access to working capital with our streamlined approval process.</p>
                </div>
                <div className="p-8 rounded-3xl bg-white dark:bg-[#0A1128] border border-gray-200 dark:border-blue-900/30 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Supply Chain Optimization</h3>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Strengthen relationships with suppliers through early payments and better cash flow management.</p>
          </div>
                <div className="p-8 rounded-3xl bg-white dark:bg-[#0A1128] border border-gray-200 dark:border-blue-900/30 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Digital Platform</h3>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Manage all your supply chain financing needs through our intuitive digital platform.</p>
          </div>
        </div>
      </section>

            {/* Testimonials Section */}
            <section id="testimonials-section" className="w-full py-20">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 transition-colors duration-300">
                What Our Clients Say
              </h2>
              <div className="max-w-6xl mx-auto px-4">
                <div className="relative">
                  {[
                    {
                      name: "Sarah Johnson",
                      role: "CFO, TechCorp Inc.",
                      image: "https://randomuser.me/api/portraits/women/1.jpg",
                      content: "Cashiflo has transformed how we manage our supply chain financing. The platform's efficiency and ease of use have significantly improved our cash flow management."
                    },
                    {
                      name: "Michael Chen",
                      role: "Supply Chain Director, Global Logistics",
                      image: "https://randomuser.me/api/portraits/men/2.jpg",
                      content: "The quick financing options and digital platform have streamlined our entire supply chain process. Our suppliers are happier, and our operations are more efficient."
                    },
                    {
                      name: "Emma Williams",
                      role: "CEO, Innovation Enterprises",
                      image: "https://randomuser.me/api/portraits/women/3.jpg",
                      content: "Working with Cashiflo has been a game-changer for our business. Their innovative approach to supply chain financing has helped us scale rapidly."
                    },
                    {
                      name: "David Martinez",
                      role: "Operations Manager, Retail Solutions",
                      image: "https://randomuser.me/api/portraits/men/4.jpg",
                      content: "The platform's intuitive interface and quick approval process have made managing our working capital a breeze. Highly recommended!"
                    },
                    {
                      name: "Lisa Thompson",
                      role: "Finance Director, Manufacturing Co.",
                      image: "https://randomuser.me/api/portraits/women/5.jpg",
                      content: "Cashiflo's solution has helped us maintain strong relationships with our suppliers while optimizing our cash flow. It's been invaluable to our growth."
                    }
                  ].map((testimonial, index) => (
                    <div
                      key={index}
                      className={`transition-opacity duration-500 ${
                        index === activeTestimonial ? 'opacity-100' : 'opacity-0 hidden'
                      }`}
                    >
                      <div className="bg-white dark:bg-[#0A1128] rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-blue-900/20 transition-colors duration-300">
                        <p className="text-gray-700 dark:text-gray-200 text-lg mb-6 transition-colors duration-300">
                          &ldquo;{testimonial.content}&rdquo;
                        </p>
                        <div className="flex items-center">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover mr-4"
                          />
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                              {testimonial.name}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-center mt-6 gap-2">
                    {[0, 1, 2, 3, 4].map((index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === activeTestimonial
                            ? 'bg-blue-600 dark:bg-blue-500 w-4'
                            : 'bg-gray-300 dark:bg-gray-700'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Stats Section */}
            <section id="stats-section" className="w-full py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className={`p-8 rounded-2xl bg-white dark:bg-[#0A1128] border border-gray-200 dark:border-blue-900/20 transition-all duration-300 hover:shadow-lg ${isVisible ? 'animate-slide-up' : ''}`}>
                  <div className="flex flex-col items-center">
                    <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                      <div className="flex items-baseline">
                        <span>{isVisible ? '45,048' : '0'}</span>
                        <span className="text-sm ml-2 text-green-600 dark:text-green-500">+16%</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Managed portfolio carbon footprint</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">tCO₂e from 2019</p>
                  </div>
                </div>

                <div className={`p-8 rounded-2xl bg-white dark:bg-[#0A1128] border border-gray-200 dark:border-blue-900/20 transition-all duration-300 hover:shadow-lg ${isVisible ? 'animate-slide-up delay-200' : ''}`}>
                  <div className="flex flex-col items-center">
                    <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                      <div className="flex items-baseline">
                        <span>{isVisible ? '123' : '0'}</span>
                        <span className="text-sm ml-2 text-red-600 dark:text-red-500">-22%</span>
              </div>
            </div>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Managed portfolio energy intensity</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">kWh/m² from 2019</p>
                  </div>
                </div>

                <div className={`p-8 rounded-2xl bg-white dark:bg-[#0A1128] border border-gray-200 dark:border-blue-900/20 transition-all duration-300 hover:shadow-lg ${isVisible ? 'animate-slide-up delay-300' : ''}`}>
                  <div className="flex flex-col items-center">
                    <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                      <div className="flex items-baseline">
                        <span>{isVisible ? '47,790,662' : '0'}</span>
                        <span className="text-sm ml-2 text-red-600 dark:text-red-500">-27%</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Managed portfolio energy consumption</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">kWh from 2019</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Historical Data */}
                <div className="col-span-1 md:col-span-3">
                  <div className={`p-8 rounded-2xl bg-white dark:bg-[#0A1128] border border-gray-200 dark:border-blue-900/20 transition-all duration-300 ${isVisible ? 'animate-slide-up delay-400' : ''}`}>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300">2022</span>
                        <div className="flex-1 mx-4 h-4 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-blue-600 dark:bg-blue-500 rounded-full ${isVisible ? 'animate-grow-width' : ''}`} 
                            style={{ '--target-width': '100%' } as any}
                          ></div>
                        </div>
                        <span className="text-gray-900 dark:text-white">45,048</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300">2021</span>
                        <div className="flex-1 mx-4 h-4 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-blue-600 dark:bg-blue-500 rounded-full ${isVisible ? 'animate-grow-width delay-100' : ''}`} 
                            style={{ '--target-width': '32%' } as any}
                          ></div>
                        </div>
                        <span className="text-gray-900 dark:text-white">14,111</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300">2020</span>
                        <div className="flex-1 mx-4 h-4 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-blue-600 dark:bg-blue-500 rounded-full ${isVisible ? 'animate-grow-width delay-200' : ''}`} 
                            style={{ '--target-width': '73%' } as any}
                          ></div>
                        </div>
                        <span className="text-gray-900 dark:text-white">32,813</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300">2019</span>
                        <div className="flex-1 mx-4 h-4 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-blue-600 dark:bg-blue-500 rounded-full ${isVisible ? 'animate-grow-width delay-300' : ''}`} 
                            style={{ '--target-width': '86%' } as any}
                          ></div>
                        </div>
                        <span className="text-gray-900 dark:text-white">38,673</span>
            </div>
          </div>
        </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}