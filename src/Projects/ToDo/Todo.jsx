import React, { useState } from "react";

const Todo = () => {
  // 🧠 useState for todo input
  const [todo, setTodo]= useState("")
  // 🧠 useState for todo list
  const [todoList, setTodoList]= useState([]);

  // ✅ Function to handle input change

  // ✅ Function to add a todo item
  const handelAdd =(e)=>{
    e.preventDefault();

    setTodoList((prev)=> [...prev, todo])
    setTodo("")
  }

  
  const handelRemove=( index)=>{
    return setTodoList((prev)=> prev.filter((prev, idx)=> idx!==index)  )

    // setTodoList((prev)=>{
    //   return prev.filter((item, idx)=> idx!==index)
    // })
  }

  const handelUpdate =(todo, index)=>{
    setTodoList((prevTodo)=>(
      prevTodo.map((prev, idx)=> idx===index ? todo :prev)
    ))
   
  }

  // ✅ Optional: Function to delete or toggle a todo item
  

  return (
    <div className="min-h-screen p-8 bg-gray-100 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">📝 Todo App</h1>
      <div className="bg-white p-4 rounded shadow w-80">
        {/* ✅ Input Field */}
        <input type="text"  className="border-black bg-amber-300" 
        onChange={(e)=> setTodo(e.target.value) }
        value={todo}
        />  
        {/* ✅ Add Button */}
        <button type="button" className= " border-amber-500 hover:bg-blue-300 p-5 bg-blue-500" onClick={handelAdd}>Add</button>
        {/* ✅ Todo List display */}

        {/* {todo.map((todo)=>{
            return (
                <li key={todo}>
                <div>{todo}</div>
            </li>
            )
            
        })} */}


        {todoList.map((todo, index)=> (
            <li>
                {todo}
                <button onClick={handelRemove(index)}>Remove</button>
                <button onClick={handelUpdate(todo ,index)}>update</button>
            </li>
            
        ))}
      </div>
    </div>
  );
};

export default Todo;
