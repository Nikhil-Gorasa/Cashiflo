'use client';

import { useState } from 'react';
import { 
  DollarSign, 
  TrendingUp, 
  CreditCard, 
  ArrowUpRight, 
  ArrowDownRight,
  Download,
  Send
} from 'lucide-react';
import DashboardSidebar from '@/components/DashboardSidebar';

export default function Dashboard() {
  const [timeframe, setTimeframe] = useState('30d');

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />
      
      <div className="flex-1 md:ml-64">
        <div className="p-4 md:p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              Dashboard Overview
            </h1>
            <p className="text-slate-600">
              Welcome back! Here's what's happening with your business today.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Total Revenue</p>
                  <p className="text-2xl font-bold text-slate-900">$24,567</p>
                  <p className="text-sm text-emerald-600 flex items-center mt-1">
                    <ArrowUpRight className="w-4 h-4 mr-1" />
                    +12.5% from last month
                  </p>
                </div>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Transactions</p>
                  <p className="text-2xl font-bold text-slate-900">1,234</p>
                  <p className="text-sm text-emerald-600 flex items-center mt-1">
                    <ArrowUpRight className="w-4 h-4 mr-1" />
                    +8.2% from last month
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Credit Available</p>
                  <p className="text-2xl font-bold text-slate-900">$75,000</p>
                  <p className="text-sm text-slate-600 mt-1">
                    of $100,000 limit
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Pending Payouts</p>
                  <p className="text-2xl font-bold text-slate-900">$3,456</p>
                  <p className="text-sm text-orange-600 flex items-center mt-1">
                    <ArrowDownRight className="w-4 h-4 mr-1" />
                    Processing
                  </p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Send className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Charts and Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Revenue Chart */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-slate-900">Revenue Overview</h3>
                  <div className="flex space-x-2">
                    {['7d', '30d', '90d'].map((period) => (
                      <button
                        key={period}
                        onClick={() => setTimeframe(period)}
                        className={`px-3 py-1 text-sm rounded-md transition-colors ${
                          timeframe === period
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Placeholder Chart */}
                <div className="h-64 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                    <p className="text-slate-600">Revenue chart visualization</p>
                    <p className="text-sm text-slate-500">Chart component would be integrated here</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              {/* Credit Status */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Credit Line Status</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-slate-600 mb-2">
                      <span>Used</span>
                      <span>$25,000 / $100,000</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-emerald-600 h-2 rounded-full" style={{width: '25%'}}></div>
                    </div>
                  </div>
                  <button className="w-full bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800 transition-colors">
                    Request Credit Increase
                  </button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Withdraw Funds</span>
                  </button>
                  <button className="w-full border border-slate-300 text-slate-700 py-3 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center space-x-2">
                    <Send className="w-4 h-4" />
                    <span>Send Payment</span>
                  </button>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {[
                    { type: 'payment', amount: '+$1,234', desc: 'Payment received', time: '2 hours ago' },
                    { type: 'withdrawal', amount: '-$500', desc: 'Funds withdrawn', time: '1 day ago' },
                    { type: 'payment', amount: '+$2,156', desc: 'Payment received', time: '2 days ago' },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center justify-between py-2">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-900">{activity.desc}</p>
                        <p className="text-xs text-slate-500">{activity.time}</p>
                      </div>
                      <span className={`text-sm font-medium ${
                        activity.type === 'payment' ? 'text-emerald-600' : 'text-slate-600'
                      }`}>
                        {activity.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}