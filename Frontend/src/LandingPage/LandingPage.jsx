import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiTether } from "react-icons/si";
import { NavLink } from "react-router-dom";
// import { Button } from "@/components/ui/button";

function LandingPage() {
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
  return (
    <>
    <img src="./FinBG.jpg" alt="" className=" absolute bg-gradient-to-bl from-black to-blue-900 " />
      <div className="min-h-screen  opacity-100 text-white relative">
        <header className="flex justify-between items-center p-6 bg-gray-800 shadow-lg">
          <div className="text-3xl font-bold">FinSight Bharat</div>
          <div className="flex space-x-4">
            <NavLink
              to="/signup"
              className="bg-blue-500 hover:bg-blue-600 rounded-2xl p-1.5"
            >
              Register
            </NavLink>
          </div>
        </header>
        <main className="text-center py-20">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            AI-Powered{" "}
            <span className="text-blue-400">Financial Insights Platform</span>
          </motion.h1>
          <p className="text-lg mb-6">
            The fastest way to buy Bitcoin, Ethereum & USDT. We are based in the
            Czech Republic.
          </p>
          <div className="flex justify-center space-x-4">
            <NavLink
              to="/signup"
              className="bg-blue-500 hover:bg-blue-600 rounded-2xl p-2"
            >
              get Started
            </NavLink>
          </div>

          <div className="mt-96 grid grid-cols-3 gap-8 max-w-4xl mx-auto ">
            <div className="bg-gray-800 p-6 rounded-xl text-center shadow-2xl shadow-blue-500">
              <FaBitcoin className="text-yellow-500 text-5xl mx-auto" />
              <h3 className="text-2xl mt-4">Gdp</h3>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl text-center shadow-2xl shadow-blue-500">
              <FaEthereum className="text-purple-500 text-5xl mx-auto" />
              <h3 className="text-2xl mt-4">Inflation</h3>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl text-center shadow-2xl shadow-blue-500">
              <SiTether className="text-green-500 text-5xl mx-auto" />
              <h3 className="text-2xl mt-4">Budget</h3>
            </div>
          </div>
          {/* <div className="flex items-center justify-center min-h-screen bg-blue-50">
            <motion.h1
        className="text-4xl font-bold text-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {displayedText}
      </motion.h1>
          </div> */}
        </main>
      </div>
    </>
  );
}

export default LandingPage;
