import React from 'react';
import { FaArrowRight, FaSearch } from 'react-icons/fa';
import { BarChart3, LineChart, Wallet, TrendingUp, Banknote, Scale, Globe } from 'lucide-react';

const categories = [
  { title: 'GDP Growth', description: 'GDP growth rates and sector contributions', icon: <BarChart3 /> },
  { title: 'Inflation', description: 'Consumer Price Index and inflation rates', icon: <LineChart /> },
  { title: 'Budgets', description: 'Budget allocations and spending patterns', icon: <Wallet /> },
  { title: 'Stock Markets', description: 'Stock indices and market performance', icon: <TrendingUp /> },
  { title: 'Trade Balance', description: 'Import/export data and trade balances', icon: <Scale /> },
  { title: 'Interest Rates', description: 'RBI repo rates and banking rates', icon: <Banknote /> },
  { title: 'Forex Reserves', description: 'Foreign exchange reserve trends', icon: <Globe /> },
];

const exampleQueries = [
  'Show GDP growth trends for last 5 years',
  'Compare agricultural vs manufacturing growth',
  'Inflation breakdown by categories',
  'Show budget allocation trends',
  'FDI inflows by country',
];

function ExploreData() {
  return (
<div className="bg-gradient-to-r from-gray-800 to-blue-900 min-h-screen p-8">
  <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">Explore Financial Data</h1>
          <p className="text-gray-400 mt-2 text-lg">Search, analyze, and visualize raw financial data</p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg mb-12 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Ask a question about India's financial data</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-4">
            <input
              type="text"
              placeholder="e.g., Show GDP growth trends for the last 5 years"
              className="border border-blue-400 px-4 py-3 w-full rounded-lg text-gray-800 shadow-sm focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center hover:bg-blue-700 transition shadow-md">
              <FaSearch className="mr-2" />
              Search
            </button>
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            {exampleQueries.map((query, idx) => (
              <button
                key={idx}
                className="bg-blue-200 text-blue-800 px-4 py-2 rounded-md hover:bg-blue-300 transition shadow-sm"
              >
                {query}
              </button>
            ))}
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-white">Browse Data Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-200 to-emerald-300 p-6 rounded-lg shadow-lg flex justify-between items-center hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              <div className="flex items-center space-x-4">
                <div className="text-4xl text-blue-600 animate-pulse">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </div>
              </div>
              <FaArrowRight className="text-gray-500 transition-transform transform hover:translate-x-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExploreData;