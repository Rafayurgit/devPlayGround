import React, { useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

function CreatePoll() {

  const [questionInput, setQuestionInput]= useState("");

  const[optionsInput, setOptionsInput]= useState(["","","",""]);

  const handelChange=(idx, value)=>{
    const updateOptions = [...optionsInput];
    updateOptions[idx]=value;
    setOptionsInput(updateOptions)
  }



  const handelSubmit= async(e)=>{

    e.preventDefault();
    console.log(optionsInput);
    console.log(questionInput);

    // const optionValid = optionsInput.some((opt, idx)=> opt.trim()==="");



    const optionValid= optionsInput.some((opt)=> opt.trim()==="");

    if(!questionInput.trim() || optionValid){
      alert("Write a question and fill the options");
      return;
    }


    try {
      const respone = await axios.put("http://localhost:8080/api/poll-master/polls/create", {
        question: questionInput,
        option1: optionsInput[0],
        option2: optionsInput[1],
        option3: optionsInput[2],
        option4: optionsInput[3]
      })


      alert(respone.data.message || "Successfully created poll")

      setQuestionInput("")
      setOptionsInput(["","","",""])
      
    } catch (error) {
      alert(error || error.message)
    }

  }

  return (
    <form className="max-w-md mx-auto mt-10 p-6 bg-slate-800 text-white rounded space-y-4">
      <h1 className="text-xl font-semibold">Create Poll</h1>

      <div className="space-y-1">
        <label>Question</label>
        <input
          type="text"
          placeholder="Enter your question"
          className="input-style"
          value={questionInput}
          onChange={(e)=>setQuestionInput(e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <label>Options</label>
        <input type="text" className="input-style" placeholder="Option 1" value={optionsInput[0] || ""} 
        onChange={(e)=> {
          handelChange(0, e.target.value)
        }
        }/>
        <input type="text" className="input-style" placeholder="Option 2" value={optionsInput[1] || ""} 
        onChange={(e)=>{
          handelChange(1,e.target.value)
        }
        }/>
        <input type="text" className="input-style" placeholder="Option 3" value={optionsInput[2] || ""} 
        onChange={ (e)=>{
          handelChange(2, e.target.value);
        }
        }/>
        <input type="text" className="input-style" placeholder="Option 4" value={optionsInput[3] || ""} 
        onChange={(e)=>handelChange(3, e.target.value)}/>

      </div>
              <button className='px-5 py-2 rounded cursor-pointer mr-3 bg-blue-700' onClick={handelSubmit}>Submit</button>
              <Link
                to="/project/pollmaster/registerPoll"
                className=" px-5 py-2 bg-green-600 rounded hover:bg-green-700 transition">
                Vote
              </Link>
    </form>
  );
}

export default CreatePoll;
