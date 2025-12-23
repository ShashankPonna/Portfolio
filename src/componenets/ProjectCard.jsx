import React from "react";
import { motion,easeOut } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
const ProjectCard = ({ title, description, image, tech }) => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: easeOut }}
      className="transition-transform duration-400 hover:-translate-y-1 rounded-2xl bg-[#2e2e2e] flex flex-col  justify-between overflow-hidden"
    >
        <div className="">
          <div className="w-full aspect-video overflow-hidden ">
            <img
              src={image}
              alt="Project"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="">
            <div className="flex flex-col justify-center items-center py-5 px-5">
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="mt-5">{description} </p>
            </div>
            <div className="icons flex justify-center flex-wrap gap-3">
              {tech.map((key, index) => {
                return (
                  <span className="px-4 hover:bg-zinc-800 py-1 rounded-full bg-zinc-700">
                    {key}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <div className="buttons flex justify-center p-5 transition-transform duration-400 hover:-translate-y-1 gap-5">
          <div className=" border-2 border-transparent flex justify-center hover:bg-blue-700 transition duration-300 items-center gap-2 flex-1 text-center py-3 bg-blue-500 rounded-lg font-semibold">
            <FiExternalLink></FiExternalLink>
            <a href=" " className="">
              View Site
            </a>
          </div>
          <div className=" border-2 border-white flex justify-center items-center gap-2 flex-1 hover:bg-white/10 text-center py-3 rounded-lg font-semibold">
            <FiGithub></FiGithub>
            <a href=" " className="">
              Code
            </a>
          </div>
        </div>
    </motion.section>
  );
};

export default ProjectCard;
