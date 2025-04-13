import React, { useState, } from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import './App.css'
import projectList from './DATA/projectList'
import Home from './Pages/Home'



function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {projectList.map((proj, idx)=>(
          <Route 
          key={idx}
          path={proj.path}
          element={React.createElement(proj.component) }
          />
        ))}
      </Routes>
    </Router>
  )
}

export default App
