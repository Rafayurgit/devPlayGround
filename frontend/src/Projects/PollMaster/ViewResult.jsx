import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ViewResult() {

  const [questionResponse, setQuestionResponse]= useState("");
  const [optionResponse, setOPtionsResponse] = useState([]);
  const [optionPercentage,setOptionPercentage]= useState([]);

  useEffect(()=>{
    (async()=>{
      try {
        const response= await axios.get("http://localhost:8080/api/poll-master/polls/fetch")
        console.log(response.data.data);
        const {question, option1, option2, option3, option4, option1Percentage, option2Percentage, option3Percentage, option4Percentage  }= response.data.data[0];
        
        setQuestionResponse(question);
        setOPtionsResponse([option1, option2, option3, option4]);
        setOptionPercentage([option1Percentage, option2Percentage, option3Percentage, option4Percentage]);
        
      } catch (error) {
        console.log(error);
        
      }

    })()
  },[])

  if(!questionResponse || optionResponse.length===0){
    return <p>Loding result...</p>
  }


  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-slate-800 text-white rounded space-y-6">
      <h1 className="text-2xl font-semibold text-center">📊 Poll Results</h1>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-blue-400">
          {questionResponse}
        </h3>

        {/* Option 1 */}
        <div>
          <div className="flex justify-between mb-1">
            <span>{optionResponse[0]}</span>
            <span>{optionPercentage[0]}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-4">
            <div className="bg-blue-600 h-4 rounded-full" style={{ width: `${optionPercentage[0]}%` }}></div>
          </div>
        </div>

        {/* Option 2 */}
        <div>
          <div className="flex justify-between mb-1">
            <span>{optionResponse[1]}</span>
            <span>{optionPercentage[1]}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-4">
            <div className="bg-blue-600 h-4 rounded-full" style={{ width: `${optionPercentage[1]}%` }}></div>
          </div>
        </div>

        {/* Option 3 */}
        <div>
          <div className="flex justify-between mb-1">
            <span>{optionResponse[2]}</span>
            <span>{optionPercentage[2]}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-4">
            <div className="bg-blue-600 h-4 rounded-full" style={{ width: `${optionPercentage[2]}%` }}></div>
          </div>
        </div>

        {/* Option 4 */}
        <div>
          <div className="flex justify-between mb-1">
            <span>{optionResponse[3]}</span>
            <span>{optionPercentage[3]}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-4">
            <div className="bg-blue-600 h-4 rounded-full" style={{ width: `${optionPercentage[3]}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewResult;
