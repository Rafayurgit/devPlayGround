import React, { useEffect, useState } from "react";

export default function Analytics() {
  const [selectYear, setSelectYear] = useState("");
  const [cityData, setCityData] = useState([]);
  const [topScore, setTopScore] = useState([]);

  const handelYearSelect = (e) => {
    setSelectYear(e.target.value);
  };

  useEffect(()=>{
  
  fetch("http://localhost:8080/api/cricket-analytics/top-cities")
    .then(res=> res.json())
    .then(data=>{ console.log("Data from backend", data); 
    setCityData(Object.values(data["2016"]))})
    .catch(err=> console.log("Backend Error", err));
    

  fetch("http://localhost:8080/api/cricket-analytics/top-score")
    .then(res=>res.json())
    .then(data=> {console.log("Data from Backend", data)
      setTopScore(Object.entries(data["2008"]))})
    .catch(err=> console.log("Error from backend", err))

  },[])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold text-indigo-600 mb-6">See your fav match analytics</h1>

      <div className=" bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h3 className="text-xl font-medium text-gray-700 mb-4">Select the year</h3>
        <select
          name="yearSelect"
          id=""
          onChange={handelYearSelect}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select an option</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
        </select>

        <select
          name="yearSelect"
          id=""
          onChange={handelYearSelect}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select an option</option>
          <option value="2016">Top-Cities</option>
          <option value="2017">Top-Score</option>
        </select>

        <p className="mt-4 text-gray-700"> Selected year: {selectYear}</p>
        <h2>TOP CITIES</h2>
        <ul>
          {cityData.map((cities, idx)=>(
            <li key={idx}>{cities}</li>
          ))}
        </ul>

        <h2>TOP SCORE</h2>
        <ul>
          {topScore.map(([teamname, status], idx)=>(
            <li key={idx}>{teamname}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
