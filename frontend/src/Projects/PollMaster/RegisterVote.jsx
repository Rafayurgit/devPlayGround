import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { data } from 'react-router-dom';
import { Link } from 'react-router-dom';

function RegisterVote() {

  const [questionVal, setQuestion]= useState("");
  const [optionVal1, setOptionVal1] = useState('');
  const [optionVal2, setOptionVal2] = useState('');
  const [optionVal3, setOptionVal3] = useState('');
  const [optionVal4, setOptionVal4] = useState('');



  useEffect( ()=>{
    (async()=>{
      
      try {
        const respone =  await axios.get("http://localhost:8080/api/poll-master/polls/fetch");
        const {question, option1,option2,option3,option4}= respone.data.data[0];
        setQuestion(question);
        setOptionVal1(option1);
        setOptionVal2(option2);
        setOptionVal3(option3);
        setOptionVal4(option4);


      console.log(respone.data.data);
    } catch (error) {
      console.log(error);
      
    }
    })()
    
  },[])

  const handelSubmit= async(e)=>{

    try {
      const response = await axios.patch("http://localhost:8080/api/poll-master/polls/updateVotes", {
        selectedOption : e
      })

      alert(response.data || "Successfully patch request")
    } catch (error) {
      alert(error || error.message)
    }

  }


  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-slate-800 text-white rounded space-y-6">
      <h1 className="text-2xl font-semibold text-center">🗳️ Leave your response</h1>

      <div className="space-y-2">

        <h3 className="text-lg font-medium text-blue-400">{questionVal}</h3>
        <div className="grid grid-cols-2 gap-3 mt-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded" value={optionVal1} onClick={(e)=>handelSubmit(e.target.value)}>{optionVal1}</button>
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded" value={optionVal2} onClick={(e)=>handelSubmit(e.target.value)}>{optionVal2}</button>
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded" value={optionVal3} onClick={(e)=>handelSubmit(e.target.value)}>{optionVal3}</button>
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded" value={optionVal4} onClick={(e)=>handelSubmit(e.target.value)}>{optionVal4}</button>
        </div>

      </div>

      <Link to="/project/pollmaster/viewResult" className='px-5 py-2 bg-green-600 rounded hover:bg-green-700 transition' disable={questionVal.trim()==="" ?true: false}>
        See Result
      </Link>
    </div>
  );
}

export default RegisterVote;
