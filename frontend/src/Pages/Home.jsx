import ProjectCard from "../Components/ProjectCard";
import projectList from "../DATA/projectList";
import HeroSection from "../Components/HeroSection";
import ProjectSection from "../Components/ProjectSection";
import SkillSection from "../Components/SkillSection";

const Home = () => {
  return (
    <div className="relative h-screen">

    <div className="fixed z-50 bottom-6 left-15">
      <h1 className="text-white font-mont text-xlg">A.RAFAY KHAN</h1>
    </div>

    <div className="fixed left-56 bottom-6">
      <h3 className="text-white font-merri">I am just a guy who is designer and developer for fun.</h3>
    </div>

    <div className="fixed z-50 bottom-6 right-20">
      <button className="w-12 aspect-square rounded-full p-2 bg-white cursor-pointer border hover:scale-105">Logo</button>
    </div>
      
      <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
        <HeroSection/>
        <ProjectSection/>
        <SkillSection/>
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
