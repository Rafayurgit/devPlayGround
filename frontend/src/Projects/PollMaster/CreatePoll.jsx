import React from 'react'

function CreatePoll() {
  return (
    <form action="">
        <h1>Create Poll</h1>

        <label htmlFor=""  >Question</label>
        <input type="text" placeholder='Enter your question' />

        console.log("Create poll");
        

        <label htmlFor="">Options</label>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
    </form>
  )
}

export default CreatePoll
