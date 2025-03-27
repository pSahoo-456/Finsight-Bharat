import React from 'react';
import { FaDownload, FaFilter } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Reports() {
  const reports = [
    { id: 1, category: "Economic", date: "March 15, 2024", title: "Quarterly Economic Outlook Q1 2024", description: "Comprehensive analysis of economic indicators for the first quarter of 2024", color: "bg-blue-200 text-blue-800" },
    { id: 2, category: "Sector", date: "February 28, 2024", title: "Manufacturing Sector Analysis", description: "In-depth review of the manufacturing sector, challenges, and growth prospects", color: "bg-green-200 text-green-800" },
    { id: 3, category: "Budget", date: "February 10, 2024", title: "Budget Impact Assessment 2024-25", description: "Analysis of the Union Budget and its implications on various sectors", color: "bg-red-200 text-red-800" },
    { id: 4, category: "Investment", date: "January 25, 2024", title: "Foreign Investment Trends Report", description: "Detailed analysis of FDI and FII patterns, origin countries, and target sectors", color: "bg-purple-200 text-purple-800" },
    { id: 5, category: "Sector", date: "January 18, 2024", title: "Agricultural Output Forecast 2024", description: "Projections for agricultural production, exports, and policy impacts", color: "bg-green-200 text-green-800" },
    { id: 6, category: "Technology", date: "December 15, 2023", title: "Digital Economy Report", description: "Overview of digitalization trends, e-commerce growth, and future projections", color: "bg-blue-200 text-blue-800" },
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-blue-900 p-10">
      <div className="container mx-auto bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg rounded-xl p-8"> 
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl font-bold text-gray-800">Financial Reports</h1>
          <p className="text-green-900 text-2xl font-bold mt-2">Access pre-built reports or build custom financial analyses</p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex justify-between items-center mb-6 bg-green-300 p-4 rounded-lg"
        >
          <input type="text" placeholder="Search reports..." className="border px-4 py-2 rounded-md w-80 shadow-sm focus:ring-2 focus:ring-blue-500" />
          <select className="border px-4 py-2 rounded-md shadow-lg">
            <option>All Categories</option>
            <option>Economic</option>
            <option>Sector</option>
            <option>Budget</option>
            <option>Investment</option>
            <option>Technology</option>
          </select>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center shadow-lg hover:bg-blue-600  transition">
            <FaFilter className="mr-2" /> Filters
          </button>
        </motion.div>

        {/* Reports List */}
        <div className="space-y-6">
          {reports.map((report, index) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 rounded-lg shadow-lg flex justify-between items-center transform hover:scale-105 transition duration-300"
              style={{ backgroundColor: '#ffffff', boxShadow: '5px 5px 15px rgba(0, 0, 0, 4.5)' }}
            >
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${report.color}`}>{report.category}</span>
                  <span className="text-gray-600">{report.date}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">{report.title}</h2>
                <p className="text-gray-700">{report.description}</p>
              </div>
              <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                <FaDownload className="mr-2" /> Download
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reports;
