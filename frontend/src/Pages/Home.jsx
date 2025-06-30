import ProjectCard from "../Components/ProjectCard";
import projectList from "../DATA/projectList";
import HeroSection from "../Components/HeroSection";
import ProjectSection from "../Components/ProjectSection";
import SkillSection from "../Components/SkillSection";
import SideBarNav from "../Components/SideBarNav";
import ContactMe from "../Components/ContactMe";
import { useEffect, useState } from "react";
import CardCarousel from "../Components/CardCarousel";

const Home = () => {

  const [isSideBarOpen, setSideBarOpen]= useState(false);
  const toggleSideBar=()=> setSideBarOpen(prev => !prev);

 

  return (
    <div className="relative min-h-screen">

    <div className="fixed z-50 bottom-6 left-15">
      <h1 className="text-white font-mont text-xlg">A.RAFAY KHAN</h1>
    </div>

    <div className="fixed left-56 bottom-6">
      <h3 className="text-white font-merri">I am just a guy who is designer and developer for fun.</h3>
    </div>

    {/* <div className="fixed z-50 bottom-6 right-20">
      <button className=" w-12 aspect-square rounded-full p-2 cursor-pointer hover:scale-115">
        <img src="../../public/logos/RafayLogo.PNG" alt="Logo" className="w-full h-full object-contain" />
      </button>
    </div> */}
    <div className="fixed z-70 bottom-6 right-20">
      
  <button 
  onClick={toggleSideBar}
  className="relative w-12 aspect-square rounded-full p-2 cursor-pointer hover:scale-115 transition-transform duration-200 overflow-hidden bg-black group">
    {/* Spark Border Effect */}
    <span className="absolute inset-0 rounded-full overflow-hidden mask-gradient animate-flip z-0">
      <span className="spark-inner"></span>
    </span>

    {/* Backdrop */}
    <span className="absolute inset-[1px] rounded-full bg-black transition-colors duration-200 group-hover:bg-zinc-900 z-10" />

    {/* Logo */}
    <img
      src="../../public/logos/RafayLogo.PNG"
      alt="Logo"
      className="relative z-20 w-full h-full object-contain"
    />
  </button>
</div>


      <SideBarNav isOpen={isSideBarOpen} toggleSideBar={toggleSideBar} />
      
      <div className="snap-y snap-mandatory overflow-y-scroll h-screen z-0">
        <HeroSection/>
        <SkillSection/>
        <ProjectSection/>
        <CardCarousel/>
        <ContactMe/>
        
      </div>

    </div>
    // <div className="min-h-screen p-8">
    //   <h1 className="text-3xl font-bold mb-6 text-white">🛠️ Dev Playground</h1>
    //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
    //     {projectList.map((proj, idx)=>{
    //        return <ProjectCard key={idx} project={proj}/>
    //     })}
    //   </div>
    // </div>
  );
};

export default Home;
