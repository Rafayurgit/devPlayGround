import ProjectCard from "../Components/ProjectCard";
import projectList from "../DATA/projectList";

const Home = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">🛠️ Dev Playground</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projectList.map((proj, idx)=>{
           return <ProjectCard key={idx} project={proj}/>
        })}
      </div>
    </div>
  );
};

export default Home;
