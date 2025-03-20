import React from 'react'
import { FaDownload, FaFilter } from 'react-icons/fa';

function Reports() {
  const reports = [
    {
      id: 1,
      category: "Economic",
      date: "March 15, 2024",
      title: "Quarterly Economic Outlook Q1 2024",
      description: "Comprehensive analysis of economic indicators for the first quarter of 2024",
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      category: "Sector",
      date: "February 28, 2024",
      title: "Manufacturing Sector Analysis",
      description: "In-depth review of the manufacturing sector, challenges, and growth prospects",
      color: "bg-green-100 text-green-600",
    },
    {
      id: 3,
      category: "Budget",
      date: "February 10, 2024",
      title: "Budget Impact Assessment 2024-25",
      description: "Analysis of the Union Budget and its implications on various sectors",
      color: "bg-red-100 text-red-600",
    },
    {
      id: 4,
      category: "Investment",
      date: "January 25, 2024",
      title: "Foreign Investment Trends Report",
      description: "Detailed analysis of FDI and FII patterns, origin countries, and target sectors",
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: 5,
      category: "Sector",
      date: "January 18, 2024",
      title: "Agricultural Output Forecast 2024",
      description: "Projections for agricultural production, exports, and policy impacts",
      color: "bg-green-100 text-green-600",
    },
    {
      id: 6,
      category: "Technology",
      date: "December 15, 2023",
      title: "Digital Economy Report",
      description: "Overview of digitalization trends, e-commerce growth, and future projections",
      color: "bg-blue-100 text-blue-600",
    },
  ];
  return (
    <>
      <div className="bg-gray-50 min-h-screen p-8">
      <div className="container mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Financial Reports</h1>
          <p className="text-gray-600">
            Access pre-built reports or build custom financial analyses
          </p>
        </div>

        {/* Tabs and Filter Section */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Available Reports
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">
              Build Custom Report
            </button>
          </div>

          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Search reports by title or description..."
              className="border px-4 py-2 rounded-md w-80"
            />
            <select className="border px-4 py-2 rounded-md">
              <option>All Categories</option>
              <option>Economic</option>
              <option>Sector</option>
              <option>Budget</option>
              <option>Investment</option>
              <option>Technology</option>
            </select>
            <button className="bg-gray-200 px-4 py-2 rounded-md flex items-center">
              <FaFilter className="mr-2" />
              Filters
            </button>
          </div>
        </div>

        {/* Reports List */}
        <div className="space-y-6">
          {reports.map((report) => (
            <div
              key={report.id}
              className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center"
            >
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span
                    className={`px-2 py-1 rounded-full text-sm font-semibold ${report.color}`}
                  >
                    {report.category}
                  </span>
                  <span className="text-gray-500">{report.date}</span>
                </div>
                <h2 className="text-xl font-bold">{report.title}</h2>
                <p className="text-gray-600">{report.description}</p>
              </div>
              <button className="flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-200 transition">
                <FaDownload className="mr-2" />
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Reports
