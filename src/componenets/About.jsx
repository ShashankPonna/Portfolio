import React from "react";
import aboutPic from "../assets/aboutpic.jpeg";

const About = () => {
  return (
    <section className="flex flex-col gap-20 h-[90vh] py-20 text-white">
      {/* Heading */}
      <div className="flex justify-center">
        <h1 className="text-4xl md:text-6xl border-b-4 border-blue-500 font-bold">
          About <span className="text-blue-500">Me</span>
        </h1>
      </div>

      {/* Content */}
      <div className="px-6 md:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Image */}
<div className="hidden md:block w-full md:w-1/2 max-w-[256px] rounded-lg overflow-hidden">
            <img
              src={aboutPic}
              alt="AboutPic"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 max-w-xl">
            <h1 className="text-blue-500 text-3xl font-bold mb-2">
              Shashank Ponna
            </h1>
            <h2 className="text-lg font-semibold mb-2">
              Full Stack Developer | Problem Solver
            </h2>

            <p className="leading-relaxed">
              I'm a Computer Engineering student passionate about building
              real-world applications and improving problem-solving skills. I
              have hands-on experience in{" "}
              <span className="font-semibold">
                full-stack web development (MERN)
              </span>{" "}
              and am actively learning{" "}
              <span className="font-semibold">
                Data Structures & Algorithms in C++
              </span>
              .
            </p>

            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-1">
              <li>C++ | C | Python (Algorithms & Problem Solving)</li>
              <li>MERN Stack: MongoDB, Express, React, Node.js</li>
              <li>Actively practicing DSA</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
