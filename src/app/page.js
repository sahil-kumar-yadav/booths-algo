"use client";
import { multiply } from "@/component/boothsAlgorithm";
import { useState } from "react";
import { motion } from "framer-motion";  // Import framer-motion for animations

export default function Home() {
  const [factor1, setFactor1] = useState('');
  const [factor2, setFactor2] = useState('');
  const [results, setResults] = useState([]);
  const [animationKey, setAnimationKey] = useState(0);  // To trigger animation reset

  const handleMultiply = () => {
    const result = multiply(parseInt(factor1), parseInt(factor2));
    setResults(result);
    // Trigger animation reset
    setAnimationKey(prevKey => prevKey + 1);
  };

  return (
    <div className="max-w-4xl my-4 mx-auto p-8 bg-blue-950 via-purple-500 shadow-xl rounded-lg">
      <h1 className="text-3xl font-bold text-center text-white mb-8">Booth's Algorithm</h1>

      {/* Input Form */}
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col space-y-2">
          <label htmlFor="factor1" className="text-lg font-medium text-green-700">Multiplicand:</label>
          <motion.input
            id="factor1"
            type="number"
            name="factor1"
            value={factor1}
            onChange={(e) => setFactor1(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
            required
            whileFocus={{ scale: 1.05 }}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="factor2" className="text-lg font-medium text-green-700">Multiplier:</label>
          <motion.input
            id="factor2"
            type="number"
            name="factor2"
            value={factor2}
            onChange={(e) => setFactor2(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
            required
            whileFocus={{ scale: 1.05 }}
          />
        </div>

        <div className="flex justify-center">
          <motion.button
            onClick={handleMultiply}
            className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Multiply
          </motion.button>
        </div>
      </form>

      {/* Results Section */}
      <h2 className="text-2xl font-bold text-center text-white mt-12">Results</h2>

      <motion.div
        key={animationKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="overflow-x-auto mt-6 bg-white shadow-md rounded-lg"
      >
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-100 text-gray-800">
            <tr>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">A</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Q</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Q1</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">M</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Log</th>
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
                className={`border-t ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3, duration: 0.6 }}
              >
                <td className="py-3 px-6 text-sm text-gray-700">{row.a}</td>
                <td className="py-3 px-6 text-sm text-gray-700">{row.q}</td>
                <td className="py-3 px-6 text-sm text-gray-700">{row.q1}</td>
                <td className="py-3 px-6 text-sm text-gray-700">{row.m}</td>
                <td className="py-3 px-6 text-sm text-gray-700">{row.log}</td>
              </motion.tr>
            ))}
          </motion.tbody>
        </table>
      </motion.div>
    </div>
  );
}
