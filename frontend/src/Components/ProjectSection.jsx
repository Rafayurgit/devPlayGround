import React from 'react'
import ProjectCard from './ProjectCard'
import projectList from '../DATA/projectList'

function ProjectSection() {
  return (
    <div>
        <section id="project" className="snap-start h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-5xl h-[80vh] border border-white/10 rounded-xl backdrop-blur-md shadow-lg p-10 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-6 text-white">🛠️ Dev Playground</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
            {projectList.map((proj, idx)=>{
              return <ProjectCard key={idx} project={proj}/>
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectSection
