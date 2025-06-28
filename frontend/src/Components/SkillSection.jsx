import React from 'react'
import {SiReact, SiTailwindcss, SiJavascript, SiMongodb, SiGithub, SiLinkedin} from "react-icons/si"

const skills = [
  { name: "HTML & CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Java", level: 80},
  { name: "C++", level: 70 },
  { name: "React", level: 80 },
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
              className="relative snap-start h-screen flex justify-center items-center px-4 "
              
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
              <div className='text-white  m-3 w-full max-w-xl  h-[80vh] border border-white/10 rounded-xl backdrop-blur-md shadow-lg p-10 flex flex-col '>
                <h1>Tech Skills</h1>
                <div className='p-5'>
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
                <div className='p-3'>
                  {languages.map((lang, idx)=>(
                    <div key={idx}>
                      <li>{lang.name}</li>
                    </div>
                  ))}
                </div>

                <h3>Additional Skills: Video/photo editing</h3>
                
              </div>

              <div className='text-white  m-3 w-full max-w-xl  h-[80vh] border border-white/10 rounded-xl backdrop-blur-md shadow-lg p-10 flex flex-col '>
                <h1>Certification</h1>

                <div className='p-3 '>
                  {certifications.map((cert, idx)=>(
                    <div key={idx}>
                      
                      <div className='flex p-3'>
                        <li>{cert.title}</li>
                        <p>{cert.year}</p>
                        <img src={cert.icon} alt="" className='w-5 h-5 ml-3'/>
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


// import React from "react";

// // Example icons from Heroicons or other sources; replace as needed




// const experience = [
//   {
//     title: "Frontend Developer",
//     org: "XYZ Company",
//     period: "2022–2024",
//     desc: "Built responsive web apps using React and Tailwind CSS. Improved site speed by 30%.",
//   },
//   {
//     title: "Intern, Data Analysis",
//     org: "ABC Analytics",
//     period: "2021–2022",
//     desc: "Assisted in data cleaning and visualization for business intelligence projects.",
//   },
// ];

// export default function SkillSection() {
//   return (
//     <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-10 mb-10 relative snap-start">
//       <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">My Skillset</h1>

//       {/* Skills Section */}
//       <section className="mb-10">
//         <h2 className="text-2xl font-semibold text-blue-600 mb-6">Skills</h2>
//         <div className="grid md:grid-cols-2 gap-6">
//           {skills.map((skill) => (
//             <div key={skill.name}>
//               <div className="flex justify-between mb-1">
//                 <span className="font-medium text-gray-800">{skill.name}</span>
//                 <span className="text-sm text-gray-500">{skill.level}%</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-3">
//                 <div
//                   className="bg-gradient-to-r from-blue-700 to-blue-400 h-3 rounded-full"
//                   style={{ width: `${skill.level}%` }}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Certifications Section */}
//       <section className="mb-10">
//         <h2 className="text-2xl font-semibold text-blue-600 mb-6">Certifications</h2>
//         <div className="flex flex-col gap-4">
//           {certifications.map((cert) => (
//             <div
//               key={cert.title}
//               className="flex items-center gap-4 bg-blue-50 rounded-lg p-4 shadow-sm"
//             >
//               <img src={cert.icon} alt={cert.title} className="w-10 h-10" />
//               <div className="flex-1">
//                 <div className="font-medium">{cert.title}</div>
//                 <div className="text-sm text-gray-600">
//                   {cert.org}, {cert.year}
//                 </div>
//               </div>
//               <a
//                 href={cert.link}
//                 className="text-blue-700 underline text-sm"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 View
//               </a>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Experience Section */}
//       <section>
//         <h2 className="text-2xl font-semibold text-blue-600 mb-6">Experience</h2>
//         <ul className="space-y-6">
//           {experience.map((exp) => (
//             <li key={exp.title} className="bg-gray-50 rounded-lg p-4 shadow-sm">
//               <div className="font-semibold">{exp.title}</div>
//               <div className="text-blue-700 text-sm mb-1">
//                 {exp.org} ({exp.period})
//               </div>
//               <div className="text-gray-700 text-sm">{exp.desc}</div>
//             </li>
//           ))}
//         </ul>
//       </section>

//       {/* Download Resume Button */}
//       <a
//         href="/your_resume.pdf"
//         download
//         className="block mt-10 mx-auto w-max px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-400 text-white font-semibold rounded-lg shadow hover:from-blue-800 hover:to-blue-500 transition"
//       >
//         Download Resume
//       </a>
//     </div>
//   );
// }
