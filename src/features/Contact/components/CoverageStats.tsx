

import React from 'react';
import { IoLocationOutline, IoMapOutline } from 'react-icons/io5'; 
interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label }) => {
  return (
    <div className="flex items-center p-6 border-2 border-[#5B47B9] rounded-xl shadow-lg w-full max-w-xs bg-white">
      <div className="text-4xl text-[#392C7D] mr-4 flex-shrink-0">
        {icon}
      </div>
      
      <div>
        <p className="text-4xl font-bold text-[#14C92A] mb-1">
          {value}
        </p>
        <p className="text-sm font-medium text-gray-700">
          {label}
        </p>
      </div>
    </div>
  );
};

const CoverageStats: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-8 justify-center">

      <StatCard
        icon={
          <div className="relative">
            <IoLocationOutline className="text-[#392C7D]" />
            <IoLocationOutline className="absolute top-1 left-2 text-[#14C92A]" />
          </div>
        }
        value="190+"
        label="Branches Nationwide"
      />

      <StatCard
        icon={
          <div className="relative">
            <IoMapOutline className="text-[#392C7D]" />
            <div className="absolute top-1 left-1">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 6V18M1 18H17V6H1M17 18V6" stroke="#392C7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 18L10 10L6 14L1 10" fill="#14C92A"/>
                    <circle cx="17" cy="6" r="3" fill="#392C7D"/>
                    <circle cx="1" cy="6" r="3" fill="#392C7D"/>
                    <circle cx="10" cy="10" r="3" fill="#392C7D"/>
                </svg>
            </div>
          </div>
        }
        value="6,980"
        label="Sub-Districts Covered"
      />
    </div>
  );
};

export default CoverageStats;