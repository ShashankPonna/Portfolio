import React from "react";
import { easeOut, motion } from "framer-motion";
import profileImg from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: easeOut }}
      viewport={{ once: true }}
      className="min-h-screen flex md:items-center px-4 sm:px-8 md:px-16  pt-20"
    >
      <div className="flex flex-col  md:flex-row items-center leading-10 md:leading-none py-10 pt-0  pb-30 md:pb-0 md:py-0 justify-around md:justify-between gap-12 w-full text-white">


        <div className="w-full md:w-3/5 text-center justify-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-blue-500">Shashank</span> Ponna
          </h1>

          <h2 className="typewriter text-xl sm:text-2xl md:text-4xl font-semibold  mb-4">
            Full Stack Developer | Problem Solver
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl mx-auto md:mx-0 mb-6">
            I build web applications using MongoDB, Express, React & Node.js.
            Currently strengthening DSA and looking for internship opportunities.
          </p>

          <div className="flex flex-row px-5 gap-5 justify-center md:justify-start">
            <a
              href="#"
              className="px-6 py-2 rounded-md bg-blue-500 hover:bg-blue-700 transition font-semibold"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-2 rounded-md border-2 font-semibold hover:bg-white/20 transition"
            >
              Contact Me
            </a>
          </div>
        </div>


        <div className="w-full md:w-2/5 flex justify-center">
          <div className="relative h-48 w-48 sm:h-56 sm:w-56 md:h-80 md:w-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse opacity-80"></div>

            <motion.img
              src={profileImg}
              alt="Profile"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative rounded-full h-full w-full object-cover"
            />
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default Hero;
