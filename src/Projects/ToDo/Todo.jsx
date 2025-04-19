import React, { useState } from "react";
import "./Todo.css";


const Todo = () => {
  // 🧠 useState for todo input
  const [todo, setTodo]= useState("")
  // 🧠 useState for todo list
  const [todoList, setTodoList]= useState([]);

  const [editIndex, seteditIndex]= useState("")
  const [editText,  setEditText] =useState("")

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
    seteditIndex(index)
    setEditText(todo)

    
  }

 

  const handelSave =(index, todo)=>{
    setTodoList((prevTodo)=> prevTodo.map((prev, idx)=> idx === index ? todo : prev))
    seteditIndex("")
    setEditText("")
    
  }

  const handelCancel =()=>{
    setEditText("")
    seteditIndex("")
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
        onChange={(e)=> setTodo(e.target.value)}
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
              {editIndex===index ? (
                <div>
                  <span><input type="text" value={editText} onChange={(e)=>setEditText(e.target.value)}/></span>
                  <div>
                    <button onClick={()=>handelSave(index, editText)}>save</button>
                    <button onClick={()=>handelCancel(index)}>cancel</button>
                  </div>
                </div>
              )
              : (
              <>
                <span className="todo-text">{todo}</span>
                <div className="todo-actions">
                  <button className="remove-button" onClick={()=> handelRemove(index)}>Remove</button>
                  <button className="update-button" onClick={()=> handelUpdate(index, todo)}>Update</button>
                </div>
                </>
              )}
                
            </li>
        ))}
        </ul>
        
      </div>
    </div>
  );
};

export default Todo;
