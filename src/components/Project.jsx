import { PROJECTS } from "../constants/indexm"


const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">
           Projects
        </h2>
    <div>{PROJECTS.map((project, index) =>
    (
        <div key={index} className="mb-10 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">

            
            <img src={project.image} alt={project.title} width={300} height={300} className="mb-6 rounded"/>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
            <h6>{project.title}</h6>

            </div>
        </div>
    ))}

    </div>

    </div>
    
  );
};

export default Project
