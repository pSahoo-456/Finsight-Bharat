// import React from "react";
import { FaChartBar, FaChartLine, FaFileAlt, FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import NavBar from "./NavBar";
import Footer from "./Footer";
import EconomicIndicator from "../Pages/EconomicIndicator";
import { NavLink } from "react-router-dom";
function Home() {
  const sentence = "Buy famous crypto coins easily";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < sentence.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + sentence[index]);
        setIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [index, sentence]);

  const features = [
    {
      title: "Economic Indicators",
      link: "/economicIndicator",
      description:
        "Explore GDP growth trends, inflation patterns, budget allocations, and forex reserves with interactive visualizations.",
      icon: <FaChartBar className="text-blue-600 text-2xl" />,
    },
    {
      title: "Market Intelligence",
      link: "/marketIntelegence",
      description:
        "Analyze stock market correlations, sector growth rates, investment flows, and interest rate impacts.",
      icon: <FaChartLine className="text-blue-600 text-2xl" />,
    },
    {
      title: "Report Generation",
      link: "/marketIntelegence",
      description:
        "Generate comprehensive economic outlooks, sector summaries, budget impact assessments, and customized reports.",
      icon: <FaFileAlt className="text-blue-600 text-2xl" />,
    },
    {
      title: "Data Exploration",
      link: "/exploreData",
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
                <NavLink
                  to={`${feature.link}`}
                  className=" font-medium text-black mt-4 inline-block"
                >
                  Explore →
                </NavLink>
              </div>
            </div>
          ))}
        </div>
        <section className="bg-gradient-to-b from-gray-100 to-white py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="./coin.png" // Replace with the image path
                alt="Crypto Coins"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Section */}
            <div>
              <h1 className="text-4xl font-bold leading-tight">
              A trade reserve is not just a safety <br />
                Platform That Offers <br />
                <span className="text-blue-500">Rewards</span>
              </h1>
              <p className="text-gray-600 mt-6 leading-relaxed">
              A trade reserve is not just a safety net—it’s the foundation of resilience, enabling businesses to weather volatility, seize unexpected opportunities, and build sustainable growth." 🌍📈
              </p>

              {/* Buttons */}
              <div className="mt-8 flex items-center space-x-4">
                <button className="bg-blue-500 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-600 transition">
                  PURCHASE TOKENS
                </button>

                <button className="flex items-center text-blue-500 hover:text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-5.197-2.598a1 1 0 00-1.455.894v5.072a1 1 0 001.455.894l5.197-2.598a1 1 0 000-1.788z"
                    />
                  </svg>
                  How it work
                </button>
              </div>

              {/* Floating Box */}
              <div className="mt-12 bg-white shadow-lg rounded-xl p-4 w-64 flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 11V7m0 8v-4m2 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold">Access analytical</p>
                  <p className="text-sm text-gray-600">market & price data</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Home;
