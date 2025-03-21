import React from 'react'
import { FaArrowRight, FaSearch } from "react-icons/fa";
import {
  BarChart3,
  LineChart,
  Wallet,
  TrendingUp,
  Banknote,
  // Bank,
  Scale,
  Globe
} from "lucide-react";

const categories = [
  { title: "GDP Growth", description: "GDP growth rates and sector contributions", icon: <BarChart3 /> },
  { title: "Inflation", description: "Consumer Price Index and inflation rates", icon: <LineChart /> },
  { title: "Budgets", description: "Budget allocations and spending patterns", icon: <Wallet /> },
  { title: "Stock Markets", description: "Stock indices and market performance", icon: <TrendingUp /> },
  // { title: "Foreign Investments", description: "FDI and FII inflows and patterns", icon: <Bank /> },
  { title: "Trade Balance", description: "Import/export data and trade balances", icon: <Scale /> },
  { title: "Interest Rates", description: "RBI repo rates and banking rates", icon: <Banknote /> },
  { title: "Forex Reserves", description: "Foreign exchange reserve trends", icon: <Globe /> },
];

const exampleQueries = [
  "Show GDP growth trends for last 5 years",
  "Compare agricultural vs manufacturing growth",
  "Inflation breakdown by categories",
  "Show budget allocation trends",
  "FDI inflows by country",
];
function ExploreData() {
  return (
    <>
      <div className="bg-gray-50 min-h-screen p-8">
      <div className="container mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Explore Financial Data</h1>
          <p className="text-gray-600 mt-2">Search, analyze, and visualize raw financial data</p>
        </div>

        {/* Search Section */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-xl font-semibold mb-4">Ask a question about India's financial data</h2>

          <div className="flex flex-col md:flex-row items-center md:space-x-4">
            <input
              type="text"
              placeholder="e.g., Show GDP growth trends for the last 5 years"
              className="border px-4 py-2 w-full rounded-md mb-4 md:mb-0"
            />
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md flex items-center hover:bg-blue-600 transition">
              <FaSearch className="mr-2" />
              Search
            </button>
          </div>

          {/* Example Queries */}
          <div className="flex flex-wrap gap-3 mt-6">
            {exampleQueries.map((query, idx) => (
              <button
                key={idx}
                className="bg-blue-100 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-200 transition"
              >
                {query}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <h2 className="text-2xl font-bold mb-6">Browse Data Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-tl from-blue-200 to-emerald-300 p-16 rounded-lg shadow-md flex justify-between items-center hover:shadow-lg transition"
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl text-blue-500">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              </div>
              <FaArrowRight className="text-gray-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default ExploreData
