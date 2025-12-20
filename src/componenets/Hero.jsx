import React from "react";
import { easeOut, motion } from "framer-motion";
import profileImg from "../assets/profile.jpeg";


const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: easeOut }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pd-16 pt-20 "
    >
      <div className="flex md:flex-row absolute left-0 flex-col px-14 items-center justify-center mb-30 h-52 md:min-w-[60%] text-white">
        <div className=" h-50 mb-10 md:mb-0  md:w-[60%] w-full ">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Hi, I'm <span className="text-blue-500">Shashank</span> Ponna
          </h1>
          <h2 className=" typewriter text-2xl md:text-4xl font-semibold mb-6">Full Stack Developer</h2>
          <p className="pr-30 mb-6">
            I build web applications using MongoDB, Express, React &
            Node.js. Currently strengthening DSA in and looking for
            internship opportunities.
          </p>
          <div className="flex gap-5">
            <a className="px-5 py-2 rounded-md bg-blue-500 hover:bg-blue-700 transition font-semibold" href="">Resume</a>
            <a  className="px-5 py-2 rounded-md border-2 font-semibold hover:bg-white/20 transition" href="#contact">Contact Me</a>
          </div>
        </div>
        <div className="flex justify-center items-center md:min-w-[40%]">
            <div className="relative h-64 w-64 md:h-80 md:w-80 ">
                <div className="insert-0 rounded-full absolute bg-linear-to-r from-blue-500 to-purple-500 animate-pulse-slow opacity-90">
                    <motion.img
                    animate={{y:[0,-20,0]}}
                    transition={{
                        duration:4,
                        repeat:Infinity,
                        repeatType:"loop",
                        ease:"easeInOut"
                    }}
                    className="relative rounded-full h-64 w-64 md:h-80 md:w-80 object-cover animate-float z-100"
                    src={profileImg} alt="Profile"
                    ></motion.img>
                </div>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
