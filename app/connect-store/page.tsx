'use client';

import { ShoppingBag, Box, Truck, ArrowRight } from 'lucide-react';

export default function ConnectStore() {
  const platforms = [
    {
      icon: <ShoppingBag className="w-12 h-12 text-blue-600 dark:text-blue-500" />,
      name: "Shopify",
      description: "Connect your Shopify store to automate financing for your suppliers.",
      status: "Available"
    },
    {
      icon: <Box className="w-12 h-12 text-blue-600 dark:text-blue-500" />,
      name: "WooCommerce",
      description: "Integrate WooCommerce to streamline your supply chain financing.",
      status: "Coming Soon"
    },
    {
      icon: <Truck className="w-12 h-12 text-blue-600 dark:text-blue-500" />,
      name: "Custom ERP",
      description: "Connect your existing ERP system through our secure API.",
      status: "Available"
    }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-[#020817] transition-colors duration-300 pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Connect Your Store
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Integrate your e-commerce platform or ERP system with Cashiflo to automate your supply chain financing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-white dark:bg-[#0A1128] border border-gray-200 dark:border-blue-900/20 transition-all duration-300 hover:shadow-lg group cursor-pointer"
            >
              <div className="mb-6">
                {platform.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                {platform.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
                {platform.description}
              </p>
              <div className="flex items-center justify-between">
                <span className={`text-sm font-medium ${
                  platform.status === 'Available' 
                    ? 'text-green-600 dark:text-green-500' 
                    : 'text-blue-600 dark:text-blue-500'
                }`}>
                  {platform.status}
                </span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:text-gray-500 dark:group-hover:text-blue-500 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Don't see your platform?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300">
            Contact our team to discuss custom integration options for your business
          </p>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-full transition-colors duration-300">
            Contact Sales
          </button>
        </div>
      </div>
    </main>
  );
}