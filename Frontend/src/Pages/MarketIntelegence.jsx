import React from 'react'
import { FaBell } from "react-icons/fa";  // Notification icon
import { FiFilter } from "react-icons/fi";  // Filter icon
import { Link } from "react-router-dom";
function MarketIntelegence() {
  return (
    <>
      <div className="bg-white shadow-md w-full">
    
      {/* Sub Navbar */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold">Market Intelligence</h2>
            <p className="text-gray-600">
              Analysis of market trends, correlations and investment flows
            </p>
          </div>

          <div className="flex space-x-4">
            <select className="bg-white border rounded-md px-4 py-2 text-gray-700">
              <option>Yearly</option>
              <option>Quarterly</option>
              <option>Monthly</option>
            </select>

            <select className="bg-white border rounded-md px-4 py-2 text-gray-700">
              <option>All Sectors</option>
              <option>Technology</option>
              <option>Finance</option>
            </select>

            <button className="flex items-center bg-white border px-4 py-2 rounded-md hover:bg-gray-200">
              <FiFilter className="mr-2" />
              More Filters
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default MarketIntelegence
