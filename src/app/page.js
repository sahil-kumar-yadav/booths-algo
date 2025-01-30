"use client"
import { multiply } from '@/component/boothsAlgorithm';
// import { multiplyBooth } from '@/component/boothsAlgorithm';
// import { boothsAlgorithm } from '@/component/boothsAlgorithm';
import { useState } from 'react';
export default function Home() {
  const [factor1, setFactor1] = useState('');
  const [factor2, setFactor2] = useState('');
  const [results, setResults] = useState([]);

  const handleMultiply = () => {
      const result = multiply(parseInt(factor1), parseInt(factor2));
      setResults(result);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">Booth's Algorithm</h1>
    
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col space-y-2">
            <label htmlFor="factor1" className="text-lg font-medium text-gray-700">Factor 1:</label>
            <input
                id="factor1"
                type="number"
                name="factor1"
                value={factor1}
                onChange={(e) => setFactor1(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
            />
        </div>

        <div className="flex flex-col space-y-2">
            <label htmlFor="factor2" className="text-lg font-medium text-gray-700">Factor 2:</label>
            <input
                id="factor2"
                type="number"
                name="factor2"
                value={factor2}
                onChange={(e) => setFactor2(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
            />
        </div>

        <div className="flex justify-center">
            <button
                onClick={handleMultiply}
                className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
                Multiply
            </button>
        </div>
    </form>

    <h2 className="text-2xl font-bold text-center text-gray-800 mt-12">Results</h2>

    <div className="overflow-x-auto mt-6">
        <table className="min-w-full table-auto border-collapse">
            <thead>
                <tr className="bg-gray-100">
                    <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">A</th>
                    <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Q</th>
                    <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Q1</th>
                    <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">M</th>
                    <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Log</th>
                </tr>
            </thead>
            <tbody>
                {results.map((row, index) => (
                    <tr key={index} className={`border-t ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                        <td className="py-3 px-6 text-sm text-gray-700">{row.a}</td>
                        <td className="py-3 px-6 text-sm text-gray-700">{row.q}</td>
                        <td className="py-3 px-6 text-sm text-gray-700">{row.q1}</td>
                        <td className="py-3 px-6 text-sm text-gray-700">{row.m}</td>
                        <td className="py-3 px-6 text-sm text-gray-700">{row.log}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>

  );
}