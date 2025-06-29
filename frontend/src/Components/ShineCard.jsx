// src/Components/CloneCard.jsx
import React from 'react';
import { GlobeIcon } from "@radix-ui/react-icons";

const ShineCard = ({ project }) => {
  return (
    <div className="  relative max-w-xs overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 
      bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.8)_50%,transparent_75%,transparent_100%)]
      bg-[length:250%_250%] bg-[position:-100%_0,0_0] bg-no-repeat p-8 shadow-2xl  
      hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]">
      <div className="mb-4">
        <GlobeIcon className="h-8 w-8 text-neutral-400" />
      </div>
      <h3 className="mb-2 font-medium tracking-tight text-neutral-100">
        {project.title}
      </h3>
      <p className="text-sm text-neutral-400">{project.tech}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 block text-sm text-blue-400 hover:underline"
      >
        {project.name}
      </a>
    </div>
  );
};

export default ShineCard;
