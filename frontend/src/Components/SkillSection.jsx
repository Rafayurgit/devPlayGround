import React from 'react'
import {SiReact, SiTailwindcss, SiJavascript, SiMongodb, SiGithub, SiLinkedin} from "react-icons/si"

function SkillSection() {
  return (
    <div>
      <section
              id="skills"
              className="relative snap-start h-screen flex items-center justify-center px-4"
              
            >
              {/* <img src="../public/vite.svg" alt="" className='absolute top-50 left-70 w-20 h-20 z-100 drop-shadow-[0_0_10px_#61dafb] hover:scale-110 transit cursor-pointer animate-bounceSlow'/> */}
              <a href="" target='_blank' rel='noopener noreferre'>
              <SiReact className="text-cyan-400 drop-shadow-[0_0_10px_#61dafb] w-20 h-20 absolute top-30 left-170  hover:scale-110 cursor-pointer animate-bounceSlow z-10" />
              </a>

              <a href="https://github.com/Rafayurgit" target='_blank' rel='noopener noreferre'>
              <SiGithub className="text-purple-950 drop-shadow-[0_0_10px_#8b5cf6] w-20 h-20 absolute top-50 right-64  hover:scale-110 cursor-pointer animate-bounceSlow  z-10" />
              </a>

              <a href="https://www.linkedin.com/in/rafay-khan-li" target='_blank' rel='noopener noreferre'>  
              <SiLinkedin className="text-blue-700 drop-shadow-[0_0_10px_#1d4ed8] w-20 h-20 absolute top-50 left-70  hover:scale-110 cursor-pointer animate-bounceSlow  z-10" />                
              </a>


              <div className="w-full max-w-5xl h-[80vh] border border-white/10 rounded-xl backdrop-blur-md shadow-lg p-10 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
              style={{backgroundImage: "linear-gradient(rgba(20,0,40,0.7), rgba(10,0,50,0.7)), url(../public/herobg.png)",
                filter: "grayscale(100%)"
              }}
              >
                <h1 className="text-4xl text-white font-bold">My skillset</h1>
                <p className="text-white/70 mt-4">I do video editing too</p>
                
                
              </div>
        </section>
    </div>
  )
}

export default SkillSection
