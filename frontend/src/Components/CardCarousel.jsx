// CardCarousel.jsx
import React, { useState } from 'react'
import projectList2 from '../DATA/projectList2'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import ShineCard from './ShineCard'

export default function CardCarousel() {
  const total = projectList2.length
  const [curr, setCurr] = useState(0)

  const prev = () => setCurr(i => (i === 0 ? total - 1 : i - 1))
  const next = () => setCurr(i => (i === total - 1 ? 0 : i + 1))

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden mt-8">
      {/* slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {projectList2.map((p, idx) => (
          <div
            key={idx}
            className="min-w-full flex justify-center items-start p-6"
          >
            <ShineCard project={p} />
          </div>
        ))}
      </div>

      {/* nav buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition"
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition"
      >
        <FiChevronRight size={24} />
      </button>

      {/* indicator dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {projectList2.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurr(idx)}
            className={`
              w-1 h-1  rounded-full transition 
              ${curr === idx ? 'bg-white' : 'bg-white/40 hover:bg-white/60'}
            `}
          />
        ))}
      </div>
    </div>
  )
}
