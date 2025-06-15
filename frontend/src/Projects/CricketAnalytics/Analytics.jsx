import React, { useEffect, useState } from "react";

export default function Analytics() {
  const [selectYear, setSelectYear] = useState("");
  const [selectOption, setSelectOption]= useState("");
  const [cityData, setCityData] = useState([]);
  const [topScore, setTopScore] = useState([]);
  const [showResult, setShowResult]= useState(false);

  const handelYearSelect = (e) => {
    setSelectYear(e.target.value);
  };


  const handelSelectOption=(e)=>{
    setSelectOption(e.target.value)
  }

  const handelShowResult =()=>{
    
    if(!selectYear || !selectOption) return;

      if(selectOption === "top-cities" ){
        fetch("http://localhost:8080/api/cricket-analytics/top-cities")
      .then(res=> res.json())
      .then(data=>{ console.log("Data from backend", data); 
      setCityData(Object.values(data[selectYear])); setShowResult(true);})
      
      .catch(err=> console.log("Backend Error", err));
      }

      if(selectOption === "top-score"){
        fetch("http://localhost:8080/api/cricket-analytics/top-score")
      .then(res=>res.json())
      .then(data=> {console.log("Data from Backend", data)
        setTopScore(Object.entries(data[selectYear])); setShowResult(true);})
        
      .catch(err=> console.log("Error from backend", err))
      }

  }

  
  
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold text-indigo-600 mb-6">See your fav match analytics</h1>

      <div className=" bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h3 className="text-xl font-medium text-gray-700 mb-4">Select the year</h3>
        <select
          name="yearSelect"
          id=""
          onChange={handelYearSelect}
          value={selectYear}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select an option</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
        </select>

        <select
          name="yearSelect"
          id=""
          onChange={handelSelectOption}
          value={selectOption}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select an option</option>
          <option value="top-cities">Top-Cities</option>
          <option value="top-score">Top-Score</option>
        </select>

        <div>
          <button className="m-3 px-4 py-2 rounded text-white bg-blue-700 cursor-pointer hover:bg-blue-300 transition duration-200"
           onClick={handelShowResult} disabled ={ selectOption === "" || selectYear ==="" ? true: false}>
            Show result
          </button>
        </div>

        <p className="mt-4 text-gray-700"> Selected year: {selectYear}</p>
        
        
        {showResult === true && selectOption==="top-cities" ?  (
            <>
            <h5 className="font-bold">TOP CITIES</h5>
            <ul>
            {cityData.map((cities, idx)=>(
              <li key={idx}>{cities}</li>
              ))}
          </ul>
          </>
          ) : ( <p className="p-3">No data for cities</p> ) }
          
        
        {showResult === true && selectOption ==="top-score" ? (
          <>
          <ul>
            <h3 className="font-bold">TOP SCORE</h3>

            {topScore.map(([teamName, status], idx)=>(
              <li key={idx}>
                {teamName}
              </li>
            ))}
          </ul>
          </>
        ): ( <p className="p-3">No data for score</p> )}
        
      </div>
    </div>
  );
}
