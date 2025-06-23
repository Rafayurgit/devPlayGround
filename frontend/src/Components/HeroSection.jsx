import React from 'react'

function HeroSection() {
  return (
    <div>
      <section
              id="hero"
              className="snap-start h-screen flex items-center justify-center px-4"
            >
              <div className="w-full max-w-5xl h-[80vh] border border-white/10 rounded-xl backdrop-blur-md shadow-lg p-10 flex flex-col items-center justify-center">
                <h1 className="text-4xl text-white font-bold">Hero Section</h1>
                <p className="text-white/70 mt-4">Welcome to the portfolio</p>
                
                
              </div>
        </section>
    </div>
  )
}

export default HeroSection
