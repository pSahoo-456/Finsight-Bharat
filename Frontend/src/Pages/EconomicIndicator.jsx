import { FaChartLine, FaMoneyBillWave, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";
import { DollarSign } from "lucide-react";
function EconomicIndicator() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-950 text-white p-10">
      
      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-5xl font-bold">Economic Indicators</h1>
        <p className="text-lg mt-4 text-gray-400">Track the key metrics influencing the economy</p>
      </header>

      {/* Indicators Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* GDP Card */}
        <motion.div
          className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <FaChartLine className="text-green-400 text-6xl mx-auto" />
          <h2 className="text-3xl font-bold mt-4">GDP Growth</h2>
          <p className="mt-4 text-gray-400">The GDP increased by <span className="text-green-400">3.5%</span> this quarter, indicating a stable economic growth.</p>
          <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition">
            Learn More
          </button>
        </motion.div>

        {/* Inflation Card */}
        <motion.div
          className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <FaMoneyBillWave className="text-yellow-400 text-6xl mx-auto" />
          <h2 className="text-3xl font-bold mt-4">Inflation Rate</h2>
          <p className="mt-4 text-gray-400">Inflation rose to <span className="text-yellow-400">2.8%</span>, impacting purchasing power.</p>
          <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition">
            Learn More
          </button>
        </motion.div>

        {/* Unemployment Card */}
        <motion.div
          className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <FaBriefcase className="text-red-400 text-6xl mx-auto" />
          <h2 className="text-3xl font-bold mt-4">Budget Allocation</h2>
          <p className="mt-4 text-gray-400">Budget Allocation rate decreased by <span className="text-red-400">1.2%</span>, signaling job market improvement.</p>
          <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition">
            Learn More
          </button>
        </motion.div>
        {/* Foreign Exchange Reserves */}
        <motion.div
          className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <DollarSign size={70} color="violet" className="text-red-400 text-6xl mx-auto" />
          <h2 className="text-3xl font-bold mt-4">Foreign Exchange Reserves</h2>
          <p className="mt-4 text-gray-400">Foreign Exchange Reserves rate decreased by <span className="text-green-400">6.2%</span>, signaling job market improvement.</p>
          <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition">
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Statistical Summary */}
      <div className="mt-20 bg-gray-800 rounded-lg p-10 shadow-lg">
        <h2 className="text-4xl font-bold mb-6">Statistical Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="text-lg text-gray-400">
              The economy has shown consistent growth over the past quarter, with GDP on the rise and inflation relatively stable. 
              The labor market is also improving with reduced unemployment rates.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between text-xl">
              <span>GDP Growth:</span>
              <span className="text-green-400">+3.5%</span>
            </div>
            <div className="flex justify-between text-xl">
              <span>Inflation Rate:</span>
              <span className="text-yellow-400">+2.8%</span>
            </div>
            <div className="flex justify-between text-xl">
              <span>Budget Allocation:</span>
              <span className="text-red-400">-1.2%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default EconomicIndicator
