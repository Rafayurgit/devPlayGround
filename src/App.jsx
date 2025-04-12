import { useState, } from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import './App.css'
import projectList from './DATA/projectList'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}>
        {projectList.map((proj, idx)=>(
          <Route 
          key={idx}
          path={proj.path}
          element={<proj.component/>}
          />
        ))}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
