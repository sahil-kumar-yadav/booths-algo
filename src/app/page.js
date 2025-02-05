"use client";
import { multiply } from "@/component/boothsAlgorithm";
import { useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations

export default function Home() {
  const [factor1, setFactor1] = useState(""); // State for first factor
  const [factor2, setFactor2] = useState(""); // State for second factor
  const [results, setResults] = useState([]); // State for storing results
  const [loading, setLoading] = useState(false); // State for showing loading animation
  const [animationKey, setAnimationKey] = useState(0); // Key to trigger animation reset

  const handleMultiply = async () => {
    if (!factor1 || !factor2) return; // Ensure both inputs are filled
    setLoading(true); // Start loading
    const result = multiply(parseInt(factor1), parseInt(factor2)); // Perform multiplication
    setResults(result); // Store the results
    setLoading(false); // Stop loading
    setAnimationKey(prevKey => prevKey + 1); // Change key to trigger animation reset
  };

  return (
    <div className="max-w-4xl my-4 mx-auto p-8 bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-800 shadow-xl rounded-lg relative overflow-hidden">
      <h1 className="text-4xl font-semibold text-center text-white mb-4 tracking-tight">Booth's Algorithm</h1>
      <h2 className="text-2xl font-semibold text-center text-white mb-8 tracking-tight">Project Under the guidance of Dr. Anirban Chatterjee </h2>
      
      {/* Input Form */}
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col space-y-2">
          <label htmlFor="factor1" className="text-lg font-medium text-green-300">Multiplicand:</label>
          <motion.input
            id="factor1"
            type="number"
            name="factor1"
            value={factor1}
            onChange={(e) => setFactor1(e.target.value)}
            className="px-6 py-3 border-2 border-gray-700 rounded-lg shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 bg-gray-800 text-white placeholder-gray-400"
            placeholder="Enter a number"
            required
            whileFocus={{ scale: 1.05 }}
            whileHover={{ scale: 1.02 }}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="factor2" className="text-lg font-medium text-green-300">Multiplier:</label>
          <motion.input
            id="factor2"
            type="number"
            name="factor2"
            value={factor2}
            onChange={(e) => setFactor2(e.target.value)}
            className="px-6 py-3 border-2 border-gray-700 rounded-lg shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 bg-gray-800 text-white placeholder-gray-400"
            placeholder="Enter a number"
            required
            whileFocus={{ scale: 1.05 }}
            whileHover={{ scale: 1.02 }}
          />
        </div>

        <div className="flex justify-center">
          <motion.button
            onClick={handleMultiply}
            className={`px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-transform duration-300 ${loading ? 'bg-indigo-500 cursor-not-allowed' : ''}`}
            whileHover={{ scale: 1.1 }}
            disabled={loading} // Disable button during loading
          >
            {loading ? "Running..." : "Multiply"}
          </motion.button>
        </div>
      </form>

      {/* Results Section */}
      <h2 className="text-2xl font-semibold text-center text-white mt-12">Results</h2>

      {/* Animation key change to reset animation each time */}
      <motion.div
        key={animationKey} // The key change will trigger a reanimation on each calculation
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="overflow-x-auto mt-6 bg-gradient-to-r from-blue-900 to-purple-800 shadow-md rounded-lg"
      >
        <table className="min-w-full table-auto border-collapse text-white">
          <thead className="bg-gradient-to-r from-green-500 via-purple-600 to-indigo-600 text-sm">
            <tr>
              <th className="py-3 px-6 text-left">A</th>
              <th className="py-3 px-6 text-left">Q</th>
              <th className="py-3 px-6 text-left">Q1</th>
              <th className="py-3 px-6 text-left">M</th>
              <th className="py-3 px-6 text-left">Operations</th>
            </tr>
          </thead>
          <motion.tbody
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {results.map((row, index) => (
              <motion.tr
                key={index}
                className={`border-t border-gray-700 hover:bg-indigo-600 transition duration-200 ease-in-out ${index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'}`}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3, duration: 0.6 }}
              >
                <td className="py-3 px-6 text-sm">{row.a}</td>
                <td className="py-3 px-6 text-sm">{row.q}</td>
                <td className="py-3 px-6 text-sm">{row.q1}</td>
                <td className="py-3 px-6 text-sm">{row.m}</td>
                <td className="py-3 px-6 text-sm">{row.log}</td>
              </motion.tr>
            ))}
          </motion.tbody>
        </table>
      </motion.div>
    </div>
  );
}
