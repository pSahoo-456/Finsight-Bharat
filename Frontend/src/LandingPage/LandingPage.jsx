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
      <header className="flex justify-between items-center p-6 bg-gray-800 shadow-lg sticky top-0 z-50 border-b-2 border-blue-500">
        <div className="text-4xl font-extrabold tracking-wide text-blue-400">FinSight <span className="text-white drop-shadow-[4px_8px_8px_rgba(0,0,0,4.5)]">Bharat</span></div>
        <div className="flex space-x-4">
          <NavLink to="/mainpage" className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white drop-shadow-[4px_8px_8px_rgba(0,0,0,4.5)] font-semibold rounded-2xl px-5 py-2 shadow-md">
            Register
          </NavLink>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full">
        {/* Upper Section with Video Background */}
        <div className="relative min-h-screen flex items-center justify-center">
          <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover opacity-70">
            <source src="FinSight2.mp4" type="video/mp4" />
          </video>

          <div className="bg-black bg-opacity-100 rounded-2xl p-6 shadow-lg">
          {/* Content goes here */}

          <div className="relative z-10 text-center px-10 left-5">
            <h2 className="text-5xl font-extrabold text-white drop-shadow-[4px_8px_8px_rgba(0,0,0,4.5)]">AI-Powered</h2>
            <motion.h1
              // className="text-6xl font-extrabold text-blue-400 mt-4 drop-shadow-lg"
              className="text-6xl font-extrabold text-blue-500 mt-4 drop-shadow-[4px_8px_8px_rgba(0,0,0,4.5)]"

              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {displayedText}
            </motion.h1>
            <div className="mt-8">
              <NavLink to="/mainpage" className="bg-blue-600 hover:bg-blue-700 text-white drop-shadow-[4px_8px_8px_rgba(0,0,0,4.5)] font-bold rounded-2xl px-8 py-3 text-lg shadow-lg transform transition-all hover:scale-105">
                Dive In
              </NavLink>
            </div>
            {/* Card Section */}
            <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div className="bg-gray-800 p-6 rounded-xl text-center shadow-xl border border-yellow-500 hover:scale-110 transition-all" whileHover={{ scale: 1.05 }}>
                <FaBitcoin className="text-yellow-500 text-6xl mx-auto" />
                <h3 className="text-2xl mt-4 font-semibold text-yellow-400">GDP</h3>
              </motion.div>
              <motion.div className="bg-gray-800 p-6 rounded-xl text-center shadow-xl border border-purple-500 hover:scale-110 transition-all" whileHover={{ scale: 1.05 }}>
                <FaEthereum className="text-purple-500 text-6xl mx-auto" />
                <h3 className="text-2xl mt-4 font-semibold text-purple-400">Inflation</h3>
              </motion.div>
              <motion.div className="bg-gray-800 p-6 rounded-xl text-center shadow-xl border border-green-500 hover:scale-110 transition-all" whileHover={{ scale: 1.05 }}>
                <SiTether className="text-green-500 text-6xl mx-auto" />
                <h3 className="text-2xl mt-4 font-semibold text-green-400">Budget</h3>
              </motion.div>
            </div>
          </div>
          </div>
        </div>

        {/* Lower Section */}
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-blue-950 px-10 py-16 text-white">
          <div className="text-left space-y-6">
            <h2 className="text-5xl font-extrabold text-blue-400">
              With <span className="text-white">AI-Powered</span> Financial Insights,
            </h2>
            <h2 className="font-bold text-4xl">Make Smarter Economic Decisions effortlessly</h2>
            <p className="text-lg text-gray-300">Get started in just a few minutes</p>
            <ol className="list-decimal pl-6 text-lg space-y-2">
              <li className="text-blue-300">Access real-time GDP, Inflation & Market Trends</li>
              <li className="text-blue-300">Generate AI-Driven Financial Reports</li>
              <li className="text-blue-300">Analyze Economic and Investment Patterns with ease</li>
            </ol>
            <NavLink to="/signup" className="mt-6 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8 py-3 rounded-lg shadow-lg font-semibold transform transition-all hover:scale-105">
              Learn More
            </NavLink>
          </div>

          {/* Crypto Icons Section */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black text-white w-32 h-32 rounded-2xl flex items-center justify-center shadow-xl border-2 border-white">
                  <motion.div whileHover={{ scale: 1.1 }} className="text-4xl font-extrabold text-yellow-300">₹</motion.div>
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