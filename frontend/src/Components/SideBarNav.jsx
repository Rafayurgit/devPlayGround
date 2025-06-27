import React from 'react'
import { CgProfile} from "react-icons/cg";
import { ImProfile } from "react-icons/im";

import { GrProjects } from "react-icons/gr";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { MdOutlineAttachEmail } from "react-icons/md";


function SideBarNav({isOpen, toggleSideBar}) {
  return (
    <>
    {/* {isOpen ? <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSideBar}
        ></div>: null } */}


        <div className={` z-50 fixed bottom-5 right-18.5 h-160 w-15 rounded-4xl justify-center items-center backdrop-blur-2xl shadow-lg bg-slate-900 text-xl text-white transform transition-transform duration-300 
            ${isOpen ? "translate-y-0" : "translate-y-full"}`} >
        <div className='p-5 space-y-30'>
            <h2 className='text-sm'></h2>

            <ul className='space-y-20'>
                <li><a href="#hero" ><ImProfile /></a></li>
                <li><a href="#project"><GrProjects /></a></li>
                <li><a href="#skills"><BsFillRocketTakeoffFill /></a></li>
                <li><a href="#contact"><MdOutlineAttachEmail /></a></li>
            </ul>
        </div>
    </div>
    </>
    
  )
}

export default SideBarNav
