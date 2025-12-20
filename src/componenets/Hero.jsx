import React from "react";
import { easeOut, motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: easeOut }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pd-16 pt-20"
    >
      <div className="flex md:flex-row absolute left-0 flex-col px-14 items-center justify-center mb-30 h-52 md:w-[60%] text-white">
        <div className=" h-50 mb-10 md:mb-0 w-[100%] ">
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
      </div>
    </motion.div>
  );
};

export default Hero;
