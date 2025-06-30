import React from 'react'
import { GlobeIcon } from "@radix-ui/react-icons"
import { FaGithub } from "react-icons/fa"

export default function ShineCard({ project }) {
  return (
    <div
      className="
        relative
        max-w-md w-full
        
        overflow-hidden
        rounded-3xl border border-neutral-800
        bg-neutral-950
        bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.8)_50%,transparent_75%,transparent_100%)]
        bg-[length:250%_250%] bg-[position:-100%_0,0_0]
        bg-no-repeat
        p-6 md:p-8
        shadow-2xl
        hover:bg-[position:200%_0,0_0]
        hover:duration-[1500ms]
        transform hover:scale-105 transition-all duration-300
      "
    >
      {/* 1. Screenshot preview */}
      {project.image && (
        <div className="relative w-full h-40 mb-4 rounded-md overflow-hidden bg-neutral-800">
          <img
            src={project.image}
            alt={project.name}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      {/* 2. Title & description */}
      <h3 className="text-xl md:text-2xl font-semibold text-neutral-100 mb-2">
        {project.name}
      </h3>
      <p className="text-sm text-neutral-400 line-clamp-3 mb-4">
        {project.description}
      </p>

      {/* 3. Tech stack tags */}
      {project.tech && (
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t,i) => (
            <span
              key={i}
              className="text-xs bg-blue-600/30 text-blue-200 px-2 py-1 rounded"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {/* 4. Action buttons */}
      <div className="flex justify-between items-center">
        <a
          href={project.path}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-2
            text-sm font-medium text-white
            bg-blue-500/80 px-4 py-2 rounded-lg
            hover:bg-blue-500 transition
          "
        >
          <GlobeIcon className="h-5 w-5" /> Live Demo
        </a>
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition"
            title="Source Code"
          >
            <FaGithub size={24} />
          </a>
        )}
      </div>
    </div>
  )
}
