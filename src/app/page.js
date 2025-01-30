"use client"
import { boothsAlgorithm } from '@/component/boothsAlgorithm';
import { useState } from 'react';

export default function Home() {
  const [multiplicand, setMultiplicand] = useState('');
  const [multiplier, setMultiplier] = useState('');
  const [bits, setBits] = useState(8);
  const [result, setResult] = useState('');
  const [steps, setSteps] = useState([]);

  const handleSubmit = () => {
    const { result, steps } = boothsAlgorithm(multiplicand, multiplier, bits);
    setResult(result);
    setSteps(steps);
  };

  return (
    <div className="container">
      <h1>Booth's Algorithm</h1>
      <div className="input-section">
        <input 
          type="text" 
          placeholder="Multiplicand (binary)" 
          value={multiplicand} 
          onChange={(e) => setMultiplicand(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Multiplier (binary)" 
          value={multiplier} 
          onChange={(e) => setMultiplier(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Bits" 
          value={bits} 
          onChange={(e) => setBits(e.target.value)} 
        />
        <button onClick={handleSubmit}>Run Algorithm</button>
      </div>

      {steps.length > 0 && (
        <div className="steps-section">
          <h2>Steps</h2>
          {steps.map((step, index) => (
            <div key={index} className="step">
              <p>Step {index + 1}:</p>
              <p>A: {step.A}  {step.A_after} (After Operation: {step.operation})</p>
              <p>Q: {step.Q}  {step.Q_final}</p>
              <p>Q1: {step.Q1}</p>
              <p>Final A: {step.A_final}</p>
              <p>Final Q: {step.Q_final}</p>
            </div>
          ))}
        </div>
      )}

      {result && (
        <div className="result-section">
          <h2>Final Result</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}