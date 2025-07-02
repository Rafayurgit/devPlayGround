import React from 'react'
import {SiReact, SiTailwindcss, SiJavascript, SiMongodb, SiGithub, SiLinkedin} from "react-icons/si"

const skills = [
  { name: "React", level: 80 },
  { name: "Cloud Computing", level: 70 },
  { name: "Azure DevOps", level: 60 },
  { name: "JavaScript", level: 85 },
  { name: "Java", level: 80},
  { name: "HTML & CSS", level: 90 },
  { name: "C++", level: 70 },
  { name: "Python", level: 60 },
  
  { name: "Communication", level: 88 },
  { name: "Project Management", level: 75 },
  
];

const languages=[
  {name:"English", level: 90},
  {name:"Urdu", level: 100},
  {name:"Hindi", level: 90},
  {name:"Marathi", level: 80},
  
]

const certifications = [
  {
    title: "ISO certificate in C/C++ DSA",
    org: "ISO",
    year: "2022",
    icon: "",
    link: "#",
  },
  {
    title: "Azure Fundamentals (AZ-900)",
    org: "Azure",
    year: "2024",
    icon: "../../public/logos/azure.png",
    link: "#",
  },
  {
    title: "Azure developer associate (AZ-204)",
    org: "Azure",
    year: "2024",
    icon: "../../public/logos/azure.png",
    link: "#",
  },
  {
    title: "DevOps Engineer Expert (AZ-400)",
    org: "Azure",
    year: "2024",
    icon: "../../public/logos/azure.png",
    link: "#",
  },
  
];

function SkillSection() {
  return (
    <div>
      <section
              id="skills"
              className="relative snap-start min-h-screen flex flex-col lg:flex-row justify-center items-center px-4 py-10 gap-6"
              
            >
              {/* <img src="../public/vite.svg" alt="" className='absolute top-50 left-70 w-20 h-20 z-100 drop-shadow-[0_0_10px_#61dafb] hover:scale-110 transit cursor-pointer animate-bounceSlow'/> */}
              {/* <a href="" target='_blank' rel='noopener noreferre'>
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
                
                
              </div> */}
              <div className='text-white w-full max-w-xl  border border-white/10 rounded-xl backdrop-blur-md shadow-lg p-5 flex flex-col '>
                <h1>Tech Skills</h1>
                <div className='p-3'>
                  {skills.map((skill, idx)=>(
                  <div key={idx}>
                    <div className='flex justify-between mb-1 '>
                      <span className='font-medium text-white'>{skill.name}</span>
                      <span className='font-medium text-white'>{skill.level}%</span> 
                    </div>

                    <div className='w-full h-3 rounded'>
                      <div className='bg-gradient-to-br from-slate-900 to bg-slate-600 rounded h-1'
                      style={{width:`${skill.level}%`}}>
                      </div>
                    </div>
                  </div>
                ))}
                </div>
                
                <h1>Languages</h1>
                <div className='p-1'>
                  {languages.map((lang, idx)=>(
                    <div key={idx}>
                      <li>{lang.name}</li>
                    </div>
                  ))}
                </div>

                <h3>Additional Skills: Video/photo editing</h3>
                
              </div>

              <div className='text-white w-full max-w-xl h-[77vh] border border-white/10 rounded-xl backdrop-blur-md shadow-lg p-5 flex flex-col '>
                <h1>Certification</h1>

                <div className='p-3 '>
                  {certifications.map((cert, idx)=>(
                    <div key={idx}>
                      
                      <div className='flex p-3'>
                        <img src={cert.icon} alt="" className='w-5 h-5 ml-3'/>

                        <li>{cert.title}</li>
                        <p>{cert.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
    
              </div>
              
        </section>
    </div>
  )
}

export default SkillSection


