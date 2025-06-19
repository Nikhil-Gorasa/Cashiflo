'use client';

import { useState } from 'react';
import { Building2, Factory, Store } from 'lucide-react';
import GradientCard from './GradientCard';

const FinancingOptions = () => {
  const options = [
    { title: 'Invoice Financing', id: 1 },
    { title: 'Purchase Order Financing', id: 2 },
    { title: 'Supply Chain Financing', id: 3 },
    { title: 'Inventory Financing', id: 4 },
    { title: 'Equipment Financing', id: 5 },
    { title: 'Working Capital Financing', id: 6 }
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-white text-center mb-12">Financing Solutions</h2>
      
      <div className="relative p-[2px] rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4F46E5] via-[#E114E5] to-[#E11414] animate-border-gradient" />
        
        <div className="relative bg-[#0A0A0A] rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {options.map((option) => (
              <GradientCard key={option.id} title={option.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancingOptions; 