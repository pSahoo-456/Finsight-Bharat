import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiTether } from "react-icons/si";
import { NavLink } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Footer from "../Home/Footer";

function LandingPage() {
  const sentence = "Financial Insight Platform";
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

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-y-auto">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-gray-800 shadow-lg sticky top-0 z-50">
        <div className="text-3xl font-bold ">FinSight <span className="text-blue-400">Bharat</span></div>
        <div className="flex space-x-4">
          <NavLink to="/mainpage" className="bg-blue-500 hover:bg-blue-600 rounded-2xl px-4 py-2">
            Register
          </NavLink>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full">
        {/* Upper Section with Video Background */}
        <div className="relative min-h-screen flex items-center justify-center">
          <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
            <source src="FinSight2.mp4" type="video/mp4" />
          </video>

          <div className="relative z-10 text-center px-10 left-5">
            <h2 className="text-4xl font-bold">AI-Powered</h2>
            <motion.h1
              className="text-6xl font-bold text-blue-500 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {displayedText}
            </motion.h1>
            <div className="mt-8">
              <NavLink to="/mainpage" className="bg-blue-500 hover:bg-blue-600 rounded-2xl px-6 py-3 font-bold text-lg">
                Dive In
              </NavLink>
            </div>
            {/* Card Section */}
            <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg hover:scale-110 transition-all" whileHover={{ scale: 1.05 }}>
                <FaBitcoin className="text-yellow-500 text-5xl mx-auto" />
                <h3 className="text-2xl mt-4">GDP</h3>
              </motion.div>
              <motion.div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg hover:scale-110 transition-all" whileHover={{ scale: 1.05 }}>
                <FaEthereum className="text-purple-500 text-5xl mx-auto" />
                <h3 className="text-2xl mt-4">Inflation</h3>
              </motion.div>
              <motion.div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg hover:scale-110 transition-all" whileHover={{ scale: 1.05 }}>
                <SiTether className="text-green-500 text-5xl mx-auto" />
                <h3 className="text-2xl mt-4">Budget</h3>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Lower Section */}
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-blue-950 px-10 py-16">
          <div className="text-left space-y-6">
            <h2 className="text-5xl font-bold">
              With <span className="text-blue-500">AI-Powered</span> Financial Insights,
            </h2>
            <h2 className="font-bold text-4xl">Make Smarter Economic Decisions effortlessly</h2>
            <p className="text-lg text-gray-400">Get started in just a few minutes</p>
            <ol className="list-decimal pl-6 text-lg space-y-2">
              <li>Access real-time GDP, Inflation & Market Trends</li>
              <li>Generate AI-Driven Financial Reports</li>
              <li>Analyze Economic and Investment Patterns with ease</li>
            </ol>
            <NavLink to="/signup" className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition">
              Learn More
            </NavLink>
          </div>

          {/* Crypto Icons Section */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black text-white w-32 h-32 rounded-2xl flex items-center justify-center shadow-lg">
                  <motion.div whileHover={{ scale: 1.1 }} className="text-4xl font-bold">₹</motion.div>
                </div>
              </div>
              <div className="absolute w-full h-full animate-spin-slow">
                <DotLottieReact className="w-[80rem] -ml-[30rem] -mt-44" src="https://lottie.host/d0f3316f-1c92-428f-85d7-a7d3cfc559bb/xxGBdFuBaI.lottie" loop autoplay />
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}

export default LandingPage;
