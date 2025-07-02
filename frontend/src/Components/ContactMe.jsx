import React from 'react'
import {SiReact, SiTailwindcss, SiJavascript, SiMongodb, SiGithub, SiLinkedin, SiX} from "react-icons/si"

const myProfiles=[
    {
        title:"LinkedIn",
        link:"https://www.linkedin.com/in/rafay-khan-li",
        icon: <SiLinkedin/>
    },
    {
        title:"X",
        link:"https://x.com/RafayKhanOnX",
        icon: <SiX/>
    },
    {
        title:"Github",
        link:"https://github.com/Rafayurgit",
        icon: <SiGithub/>
    },

]

function ContactMe() {
  return (
    <div id='contact' className='text-white snap-start min-h-screen w-full flex items-start justify-center px-4 md:px-20 pt-20'>

        <div className='flex flex-col justify-center items-center p-5 space-y-5'>
            <p>Lets connect through these platform or you can directly mail me on <span className='text-blue-300'>rafaykhanpvt@gmail.com</span> </p>
            
            
            <div className='flex space-x-6 text-2xl '>
                
                {myProfiles.map((pro, idx)=>(
                    <div className='m-3 p-5'>
                        <a 
                        key={idx}
                        href={pro.link}
                        rel='noopener noreferrer'
                        className='hover:text-blue-500 transition'
                        >{pro.icon}</a>
                    </div>
                ))}
            </div>

            <div className='max-w-xl h-70 justify-center items-center rounded-xl bg-slate-800 flex flex-col p-6 shadow-md space-y-4'>
                <input type="text" className='border w-full rounded' />
                <textarea name="" id="" rows={5} className='border w-full rounded'></textarea>
                <button className='bg-slate-900 rounded w-15 h-10 hover:bg-slate-700 cursor-pointer p-1'>Send</button>
            </div>
            
            </div>

        
    </div>
  )
}

export default ContactMe
