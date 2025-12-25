import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion,easeOut } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../assets/assets";
const Projects = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: easeOut }}
      className="flex flex-col gap-20 py-20 lg:px-40  text-white"
    >
        <div className="flex justify-center">
            <h1 className="text-4xl md:text-6xl border-b-4 border-blue-500 font-bold">My <span className="text-blue-500">Projects</span></h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 px-10">
        {
            projects.map((project,index)=>(
                <ProjectCard key={index} {...project}></ProjectCard>
            ))
        }
        </div>
        <div className=" flex justify-center items-center gap-2 md:w-fit md:mx-auto border-2 py-2 px-10 md:rounded-lg mx-11 text-center  hover:bg-white/10 transition">
          <a href="https://github.com/ShashankPonna" className=" ">View More Projects</a>
          <FaArrowRight></FaArrowRight>
        </div>
    </motion.section>
  );
};

export default Projects;
