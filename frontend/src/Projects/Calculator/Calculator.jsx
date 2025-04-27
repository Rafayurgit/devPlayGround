import { useState } from "react";

const Calculator = () => {
  
  const [result, setResult] =useState("");
  const handleClick =(value) =>{
    setResult((prevResult)=> prevResult+ value)
  }
  const handleClear =()=>{
    setResult("")
  }

  const handleCalculate=()=>{
    try{
      setResult(eval(result).toString())
    }catch(err){
      setResult(err)
    }
  }

  return (
    <div className="min-h-screen p-8 bg-gray-100 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">🧮 Calculator</h1>
      <div className="bg-white p-4 rounded shadow w-64">
        <input
          type="text"
          value={result}
          readOnly
          className="w-full mb-4 p-2 border text-lg"
        />
        <div className="grid grid-cols-4 gap-2">
          {[..."123+456-789*0/"].map((char) => (
            <button
              key={char}
              className="p-2 bg-gray-200 hover:bg-gray-300"
              onClick={() => handleClick(char)}
            >
              {char}
            </button>
          ))}
          <button className="p-2 bg-red-200" onClick={handleClear}>C</button>
          <button className="p-2 bg-green-200 col-span-3" onClick={handleCalculate}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
