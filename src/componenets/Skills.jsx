import React from "react";
import { motion, easeOut } from "framer-motion";
import { skills } from "../assets/assets";
import { FaReact } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { SiCodecrafters } from "react-icons/si";

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: easeOut }}
      className="flex flex-col gap-20  py-20 text-white"
    >
      <div className="text-center">
        <div className="heading text-4xl md:text-6xl font-bold border-b-4 inline-block border-blue-500">
          <h1>
            My <span className="text-blue-500">Skills</span>
          </h1>
        </div>
        <div className="skills grid grid-cols-1 lg:grid-cols-2  mt-10 lg:px-40">
          {skills.map((skill, index) => {
            return (
              <div className="bg-blue-950 flex flex-col gap-5 border-transparent border-2 box-border transition-transform duration-400 hover:-translate-y-1 hover:border-blue-700 px-10 py-6 rounded-2xl m-10">
                <div className="flex justify-center items-center gap-4">
                  <skill.icon className=" text-3xl text-blue-500 "></skill.icon>
                  <div className="title text-2xl font-semibold ">{skill.title}</div>
                </div>
                <div className="">
                    <p>{skill.description}</p>
                    <div className="tags flex gap-2 flex-wrap justify-center mt-5">
                        {
                            skill.tags.map((tag,index)=>{
                                return (
                                    <>
                                    <span className="px-4 hover:bg-zinc-800 py-1 rounded-full bg-zinc-700">{tag}</span>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
