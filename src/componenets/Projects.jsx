import React from "react";
import { motion,easeOut } from "framer-motion";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: easeOut }}
      className="flex flex-col gap-20 py-20  text-white"
    >
        <div className="flex justify-center">
            <h1 className="text-4xl md:text-6xl border-b-4 border-blue-500 font-bold">My <span className="text-blue-500">Projects</span></h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-10">
            <ProjectCard ></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
        </div>
    </motion.section>
  );
};

export default Projects;
