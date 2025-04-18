import React, { useState } from "react";
import "./Todo.css";


const Todo = () => {
  // 🧠 useState for todo input
  const [todo, setTodo]= useState("")
  // 🧠 useState for todo list
  const [todoList, setTodoList]= useState([]);

  // ✅ Function to handle input change

  // ✅ Function to add a todo item
  const handelAdd =(e)=>{
    e.preventDefault();
    console.log("Add clicked");
    

    setTodoList((prev)=> [...prev, todo])
    setTodo("")
  }

  
  const handelRemove=( index)=>{
    return setTodoList((prev)=> prev.filter((prev, idx)=> idx!==index)  )

    // setTodoList((prev)=>{
    //   return prev.filter((item, idx)=> idx!==index)
    // })
  }

  const handelUpdate =(index, todo)=>{
    setTodoList((prevTodo)=> prevTodo.map((prev, idx)=> idx === index ? todo: prev))
  }

  // ✅ Optional: Function to delete or toggle a todo item
  

  return (
    <div className="todo-container">
      <h1 className="todo-title">📝 Todo App</h1>
      <div className="todo-box">
        {/* ✅ Input Field */}
        <div className="todo-input-group">
        <input 
        type="text" 
        className="todo-input" 
        onChange={(e)=> setTodo(e.target.value) }
        value={todo}
        />  
        {/* ✅ Add Button */}
        <button type="button" 
        className= "add-button" 
        onClick={handelAdd}>
        Add</button>
        
        </div>


        {/* ✅ Todo List display */}
        <ul className="todo-list">
        {todoList.map((todo, index)=> (
            <li key={index} className="todo-item" >
                <span className="todo-text">{todo}</span>
                <div className="todo-actions">
                  <button className="remove-button" onClick={()=> handelRemove(index)}>Remove</button>
                  <button className="update-button" onClick={()=>{
                    const updated= prompt("Update todo :", todo)
                    if(updated) handelUpdate(index, updated)
                  }}>Update</button>
                </div>
            </li>
        ))}
        </ul>
        
      </div>
    </div>
  );
};

export default Todo;
