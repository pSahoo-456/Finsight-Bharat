// import React from "react";
import { FaChartBar, FaChartLine, FaFileAlt, FaSearch } from "react-icons/fa";
// import NavBar from "./NavBar";
import Footer from "./Footer";

function Home() {
  const features = [
    {
      title: "Economic Indicators",
      description:
        "Explore GDP growth trends, inflation patterns, budget allocations, and forex reserves with interactive visualizations.",
      icon: <FaChartBar className="text-blue-600 text-2xl" />,
    },
    {
      title: "Market Intelligence",
      description:
        "Analyze stock market correlations, sector growth rates, investment flows, and interest rate impacts.",
      icon: <FaChartLine className="text-blue-600 text-2xl" />,
    },
    {
      title: "Report Generation",
      description:
        "Generate comprehensive economic outlooks, sector summaries, budget impact assessments, and customized reports.",
      icon: <FaFileAlt className="text-blue-600 text-2xl" />,
    },
    {
      title: "Data Exploration",
      description:
        "Search, filter, and analyze raw financial data with natural language queries and interactive visualizations.",
      icon: <FaSearch className="text-blue-600 text-2xl" />,
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-200 to-blue-700 duration-200 ">
        {/* Navbar */}

        {/* Hero Section */}
        <div className="flex flex-col items-center text-center py-20 px-6 ">
          <h1 className="text-5xl font-bold text-gray-900">
            AI-Powered Financial Insights for
            <span className="text-blue-600"> India</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mt-4">
            Discover trends, analyze economic indicators, and generate
            comprehensive reports with our intuitive financial intelligence
            platform.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10 py-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-bl from-indigo-400 to-blue-800 shadow-lg rounded-xl p-6 flex space-x-4 items-center transition-all transform duration-500 hover:scale-105"
            >
              <div className="bg-blue-100 p-4 rounded-full">{feature.icon}</div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  {feature.title}
                </h2>
                <p className="text-black mt-2">{feature.description}</p>
                <a
                  href="#"
                  className="text-blue-600 font-medium mt-4 inline-block"
                >
                  Explore →
                </a>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
