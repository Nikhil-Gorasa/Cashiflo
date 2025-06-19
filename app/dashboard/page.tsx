'use client';

import { BarChart, DollarSign, Users, Clock } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    {
      icon: <DollarSign className="w-6 h-6 text-blue-600 dark:text-blue-500" />,
      title: "Total Financing",
      value: "$2.4M",
      change: "+12.5%"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600 dark:text-blue-500" />,
      title: "Active Suppliers",
      value: "156",
      change: "+8.2%"
    },
    {
      icon: <BarChart className="w-6 h-6 text-blue-600 dark:text-blue-500" />,
      title: "Success Rate",
      value: "94.8%",
      change: "+3.1%"
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600 dark:text-blue-500" />,
      title: "Avg. Processing Time",
      value: "2.5 hrs",
      change: "-18.3%"
    }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-[#020817] transition-colors duration-300 pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Dashboard Coming Soon
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Our team is working hard to bring you a powerful dashboard experience. Here's a preview of what you'll be able to track:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-white dark:bg-[#0A1128] border border-gray-200 dark:border-blue-900/20 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                {stat.icon}
                <span className={`text-sm font-medium ${
                  stat.change.startsWith('+') 
                    ? 'text-green-600 dark:text-green-500' 
                    : 'text-red-600 dark:text-red-500'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-300">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
                {stat.title}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            🚀 Coming Features
          </h2>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li>• Real-time financing tracking and analytics</li>
            <li>• Supplier performance metrics</li>
            <li>• Invoice management and processing</li>
            <li>• Custom reports and exports</li>
            <li>• Integration with major accounting software</li>
          </ul>
        </div>
      </div>
    </main>
  );
}