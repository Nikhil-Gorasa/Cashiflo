'use client';

import { Shield, Zap, BarChart3, Users, Globe, Clock } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-blue-600 dark:text-blue-500" />,
      title: "Instant Decisions",
      description: "Get financing decisions within minutes, not days or weeks."
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600 dark:text-blue-500" />,
      title: "Secure Platform",
      description: "Bank-grade security protocols to protect your sensitive data."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-500" />,
      title: "Analytics Dashboard",
      description: "Real-time insights into your supply chain financing."
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600 dark:text-blue-500" />,
      title: "Multi-party Support",
      description: "Connect buyers, suppliers, and financiers seamlessly."
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-600 dark:text-blue-500" />,
      title: "Global Coverage",
      description: "Operating in 15+ countries with multi-currency support."
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600 dark:text-blue-500" />,
      title: "24/7 Access",
      description: "Manage your financing needs anytime, anywhere."
    }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-[#020817] transition-colors duration-300 pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Platform Features
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Discover how Cashiflo empowers businesses with innovative supply chain financing solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-white dark:bg-[#0A1128] border border-gray-200 dark:border-blue-900/20 transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 