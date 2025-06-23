import React from 'react'
import { Link } from 'react-router-dom'


function ProjectCard({project}) {
  return (
    <Link to={project.path.replace('/*', '/')}>
        <div className=" p-6 rounded-xl shadow hover:shadow-lg transition bg-white/10 text-white hover:translate-y-1 border border-white/5">
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="text-gray-600">{project.description}</p>
        </div>
    </Link>
  )
}

export default ProjectCard
