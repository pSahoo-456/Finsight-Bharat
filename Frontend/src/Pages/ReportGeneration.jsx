import React, { useState } from "react";
import { motion } from "framer-motion";
// import { Button } from "lucide-react";

const ReportGeneration = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [report, setReport] = useState(null);

  const generateReport = () => {
    const newReport = {
      title,
      description,
      date,
    };
    setReport(newReport);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="p-6 bg-white shadow-md rounded-2xl">
          <h1 className="text-2xl font-bold mb-4">Report Generation</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="border p-2 rounded-md w-full"
              placeholder="Report Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="date"
              className="border p-2 rounded-md w-full"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <textarea
            className="border p-2 rounded-md w-full mt-4"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={generateReport} className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md">
            Generate Report
          </button>
        </div>

        {report && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <div className="p-6 bg-white shadow-lg rounded-2xl">
              <h2 className="text-xl font-semibold">{report.title}</h2>
              <p className="text-gray-600">{report.date}</p>
              <p className="mt-4">{report.description}</p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default ReportGeneration;
