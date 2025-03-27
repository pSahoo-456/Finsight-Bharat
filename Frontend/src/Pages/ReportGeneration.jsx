import React, { useState } from "react";
import { motion } from "framer-motion";

const ReportGeneration = () => {
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [department, setDepartment] = useState("");
  
  const generateReport = () => {
    console.log("Generating Report for:", { startYear, endYear, department });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-600 to-blue-900 p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Enter Report Details</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-gray-600 font-semibold">From Year:</label>
            <motion.input 
              whileFocus={{ scale: 1.05 }}
              type="text" 
              placeholder="Enter start year" 
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
              value={startYear} 
              onChange={(e) => setStartYear(e.target.value)}
            />
          </div>
          
          <div>
            <label className="block text-gray-600 font-semibold">To Year:</label>
            <motion.input 
              whileFocus={{ scale: 1.05 }}
              type="text" 
              placeholder="Enter end year" 
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
              value={endYear} 
              onChange={(e) => setEndYear(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-600 font-semibold">Select Department:</label>
            <motion.select 
              whileFocus={{ scale: 1.05 }}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
              value={department} 
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option value="">Select a department</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="IT">IT</option>
              <option value="Marketing">Marketing</option>
            </motion.select>
          </div>
        </div>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={generateReport} 
          className="mt-6 w-full bg-blue-500 text-white p-2 rounded-md font-semibold text-lg shadow-md hover:bg-blue-600 transition"
        >
          Generate Report
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ReportGeneration;