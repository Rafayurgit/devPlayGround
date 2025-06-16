import React, { useState, } from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import './App.css'
import projectList from './DATA/projectList'
import Home from './Pages/Home'


function App() {

  return (

    <div className=' relative h-screen w-full bg-slate-950'>
      <div className=' absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] '></div>
        <div className=' relative z-10'>
          
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

        
      </div>
    </div>

    
  )
}

export default App
