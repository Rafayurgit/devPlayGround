import React, { useState } from 'react';

function CreatePoll() {

  const [questionInput, setQuestionInput]= useState("");

  const[optionsInput, setOptionsInput]= useState(["","","",""]);

  const handelChange=()=>{

  }



  const handelSubmit= (e)=>{
    e.preventDefault();
    console.log(optionsInput);
    console.log(questionInput);

    const optionValid = optionsInput.some((opt, idx)=> opt.trim()==="");

    if(!questionInput.trim() || optionValid){
      alert("Write a question and fill the options");
      return;
    }

    setQuestionInput("")
    setOptionsInput(["","","",""])
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
          const updateOption = [...optionsInput]
          updateOption[0]= e.target.value;
          setOptionsInput(updateOption);
        }
        }/>
        <input type="text" className="input-style" placeholder="Option 2" value={optionsInput[1] || ""} 
        onChange={(e)=>{
          const updateOption =[...optionsInput]
          updateOption[1]=e.target.value;
          setOptionsInput(updateOption)

        }
        }/>
        <input type="text" className="input-style" placeholder="Option 3" value={optionsInput[2] || ""} 
        onChange={ (e)=>{
          const updateOption= [...optionsInput]
          updateOption[2]=e.target.value;
          setOptionsInput(updateOption);
        }
        }/>
        <input type="text" className="input-style" placeholder="Option 4" value={optionsInput[3] || ""} 
        onChange={(e)=>{
          const updateOption= [...optionsInput]
          updateOption[3]=e.target.value;
          setOptionsInput(updateOption);
        }}/>

        <button className='px-5 py-2 rounded cursor-pointer bg-blue-700' onClick={handelSubmit}>Submit</button>
      </div>
    </form>
  );
}

export default CreatePoll;
