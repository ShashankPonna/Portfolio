import React from "react";
import Project1 from "../assets/project1.avif";
const ProjectCard = () => {
  return (
    <div className="rounded-2xl overflow-hidden bg-zinc-700">
      <div className="w-full aspect-video overflow-hidden ">
        <img
          src={Project1}
          alt="Project"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="">
        <div className="flex flex-col justify-center items-center py-5 px-5">
          <h3 className="text-2xl font-semibold">Project Name</h3>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quos
            delectus perspiciatis molestiae earum qui
          </p>
        </div>
        <div className="icons flex justify-center gap-3">
            <span className="bg-zinc-800 rounded-full px-4 py-1">react</span>
            <span className="bg-zinc-800 rounded-full px-4 py-1">react</span>
            <span className="bg-zinc-800 rounded-full px-4 py-1">react</span>
            <span className="bg-zinc-800 rounded-full px-4 py-1">react</span>

            
        </div>
        <div className="buttons flex justify-center p-5 gap-10">
            <a href=" " className="px-6 py-2 bg-blue-500 rounded font-semibold">View Demo</a>
            <a href=" " className="px-6 py-2 bg-blue-500 rounded font-semibold">Code</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
