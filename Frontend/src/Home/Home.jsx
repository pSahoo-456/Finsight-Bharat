import { FaChartBar, FaChartLine, FaFileAlt, FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

function Home() {
  const sentence = "- Explore the FinSight BHARAT and make your finance decision easy -";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < sentence.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + sentence[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, sentence]);

  const features = [
    {
      title: "Economic Indicators",
      link: "/economicIndicator",
      description:
        "Explore GDP growth trends, inflation patterns, budget allocations, and forex reserves with interactive visualizations.",
      icon: <FaChartBar className="text-blue-600 text-3xl" />,
    },
    {
      title: "Market Intelligence",
      link: "/marketIntelegence",
      description:
        "Analyze stock market correlations, sector growth rates, investment flows, and interest rate impacts.",
      icon: <FaChartLine className="text-blue-600 text-3xl" />,
    },
    {
      title: "Report Generation",
      link: "/reportgeneration",
      description:
        "Generate comprehensive economic outlooks, sector summaries, budget impact assessments, and customized reports.",
      icon: <FaFileAlt className="text-blue-600 text-3xl" />,
    },
    {
      title: "Data Exploration",
      link: "/mainpage/exploreData",
      description:
        "Search, filter, and analyze raw financial data with natural language queries and interactive visualizations.",
      icon: <FaSearch className="text-blue-600 text-3xl" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-blue-900 text-white overflow-hidden">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center text-center py-20 px-6"
      >
        <h1 className="text-6xl font-extrabold">
          AI-Powered Financial Insights for
          <span className="bg-gradient-to-r from-pink-800 to-blue-800 bg-clip-text text-transparent "> India</span>
          </h1>
        <p className="text-gray-300 text-lg max-w-2xl mt-4">
          Discover trends, analyze economic indicators, and generate comprehensive reports with our intuitive financial intelligence platform.
        </p>
        <motion.p 
          className="text-xl shadow-xl rounded-2xl font-semibold bg-gradient-to-bl from-pink-800 to-blue-800 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0 }}
        >
          {displayedText}
        </motion.p>
      </motion.div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-12 py-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-bl from-indigo-400 to-blue-700 shadow-xl rounded-xl p-6 flex space-x-4 items-center transition-all transform hover:scale-105 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-blue-300 p-5 rounded-full shadow-lg">
              {feature.icon}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{feature.title}</h2>
              <p className="text-gray-200 mt-2">{feature.description}</p>
              <NavLink
                to={`${feature.link}`}
                className="text-yellow-300 font-medium mt-4 inline-block hover:text-yellow-400"
              >
                Explore →
              </NavLink>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-gray-700 to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img src="/finance-01.jpg" alt="Finance" className="w-full h-full object-cover" />
          </motion.div>

          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <h1 className="text-5xl font-bold leading-tight text-white">
            A Financial Insight Platform That Empowers Smarter Decisions <br />
              <span className="bg-gradient-to-r from-pink-800 to-blue-800 text-2xl rounded-xl ">- Insights - </span>
            </h1>
            <p className="text-gray-300 mt-6 leading-relaxed">
            Unleash the power of data-driven insights for economic and market intelligence.
            </p>
            <div className="mt-8 flex items-center space-x-4">
              <button className="bg-gradient-to-r from-pink-800 to-blue-800 text-gray-900 font-bold px-6 py-3 rounded-xl shadow-md hover:bg-yellow-500 transition">
              EXPLORE INSIGHTS
              </button>
              <button className="flex items-center text-yellow-600 hover:text-yellow-500">
                ▶ How It Analyzes
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
