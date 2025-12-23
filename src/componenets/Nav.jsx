import React, { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

const Nav = () => {
  const [menu, setmenu] = useState(false);
  return (
    <nav
      className={`fixed w-full z-50 text-white bg-dark-100 backdrop-blur-sm px-8
    ${menu ? "pb-8 py-4"  : "py-4"}
  `}
    >
      <div className="flex items-center justify-between">
        <div className="">
          <a
            href="#"
            className="text-blue-500 text-4xl font-bold pointer-events-auto"
          >
            Shashank
          </a>
        </div>
        <div className="hidden md:flex md:space-x-5 lg:space-x-10 ">
          <a
            href="#"
            className="pointer-events-auto group relative transition duration-300 hover:text-blue-500 md:text-xl lg:text-2xl  "
          >
            <span className="">Home</span>
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#about"
            className="pointer-events-auto group relative transition duration-300 hover:text-blue-500 md:text-xl lg:text-2xl"
          >
            <span className="">About</span>
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#skills"
            className="pointer-events-auto group relative transition duration-300 hover:text-blue-500 md:text-xl lg:text-2xl"
          >
            <span className="">Skills</span>
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#projects"
            className="pointer-events-auto group relative transition duration-300 hover:text-blue-500 md:text-xl lg:text-2xl"
          >
            <span className="">Projects</span>
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#education"
            className="pointer-events-auto group relative transition duration-300 hover:text-blue-500 md:text-xl lg:text-2xl"
          >
            <span className="">Eduction</span>
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="pointer-events-auto group relative transition duration-300 hover:text-blue-500 md:text-xl lg:text-2xl"
          >
            <span className="">Contact</span>
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        <div className="md:hidden">
          {menu ? (
            <FaXmark
              className="text-white text-lg font-bold"
              onClick={() => {
                setmenu(!menu);
              }}
            />
          ) : (
            <FaBars
              className="text-white text-lg font-bold"
              onClick={() => {
                setmenu(!menu);
              }}
            />
          )}
        </div>
      </div>
      {menu && (
        <div className="md:hidden flex flex-col items-center justify-center py-5 mt-5 gap-5 bg-dark-300 rounded-md text-2xl">
          <a
            href="#"
            onClick={() => {
              setmenu(!menu);
            }}
            className="group relative transition duration-300 hover:text-blue-500"
          >
            <span className="text-white">Home</span>{" "}
          </a>
          <a
            href="#about"
            onClick={() => {
              setmenu(!menu);
            }}
            className="group relative transition duration-300 hover:text-blue-500"
          >
            <span className="text-white">About</span>{" "}
          </a>
          <a
            href="#skills"
            onClick={() => {
              setmenu(!menu);
            }}
            className="group relative transition duration-300 hover:text-blue-500"
          >
            <span className="text-white">Skills</span>{" "}
          </a>
          <a
            href="#projects"
            onClick={() => {
              setmenu(!menu);
            }}
            className="group relative transition duration-300 hover:text-blue-500"
          >
            <span className="text-white">Projects</span>{" "}
          </a>
          <a
            href="#education"
            onClick={() => {
              setmenu(!menu);
            }}
            className="group relative transition duration-300 hover:text-blue-500"
          >
            <span className="text-white">Eduction</span>{" "}
          </a>
          <a
            href="#contact"
            onClick={() => {
              setmenu(!menu);
            }}
            className="group relative transition duration-300 hover:text-blue-500"
          >
            <span className="text-white">Contact</span>{" "}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
