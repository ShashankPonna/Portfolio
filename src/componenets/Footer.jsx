import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-dark-100 text-zinc-300 py-5">
      <div className="flex gap-4 p-3 justify-center rounded-lg">
        <a
          href="https://github.com/ShashankPonna"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <FaGithub
            className="text-white text-5xl bg-zinc-700 p-2 rounded-full 
          transition-all duration-300 
          group-hover:bg-white group-hover:text-black 
          hover:scale-110"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/shashank-ponna-82738b323/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <FaLinkedin
            className="text-white text-5xl bg-zinc-700 p-2 rounded-full 
          transition-all duration-300 
          group-hover:bg-blue-600 group-hover:text-white 
          hover:scale-110"
          />
        </a>

        <a
          href="https://www.instagram.com/_shashank_2806/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <FaInstagram
            className="text-white text-5xl bg-zinc-700 p-2 rounded-full 
          transition-all duration-300 
          group-hover:bg-pink-500 group-hover:text-white 
          hover:scale-110"
          />
        </a>
      </div>

      <div className="w-24 h-[1px] bg-zinc-600" />

      <div className="max-w-6xl mx-auto flex flex-col items-center mt-2 gap-6">
        <p className="text-sm text-zinc-400">
          © 2025 Shashank. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
