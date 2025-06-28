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
    <div id='contact' className='text-white snap-start h-screen w-full flex items-start justify-center px-50 pt-30'>

        <div className='flex flex-col justify-center items-center p-5 space-y-5'>
            <p>Lets connect through these platform or you can directly mail me on rafaykhanpvt@gmail.com</p>
            
            <h1>My profiles</h1>
            <div className='flex '>
                
                {myProfiles.map((pro, idx)=>(
                    <div className='m-3 p-5'>
                        <a href={pro.link}>{pro.icon}</a>
                    </div>
                    

                ))}
                
            </div>

            <div className='w-50 h-60 rounded bg-slate-800 flex flex-col p-5 m-5 space-y-7 justify-center items-center'>
                <input type="text" className='border w-full rounded' />
                <textarea name="" id="" className='border w-full rounded'></textarea>
                <button className='bg-slate-900 rounded w-15 h-10 hover:bg-slate-700 cursor-pointer p-1'>Send</button>
            </div>
            
            </div>

        

       
      
    </div>
  )
}

export default ContactMe
