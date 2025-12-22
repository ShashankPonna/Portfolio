import React from "react";
import aboutPic from "../assets/aboutpic.jpeg";

const About = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="text-white  flex justify-center">
        <h1 className="text-4xl md:text-6xl border-b-4 border-blue-500 font-bold">
          About <span className="text-blue-500">Me</span>
        </h1>
      </div>
      <div className="h-screen w-full text-white flex justify-center  px-72">
        <div className="w-full flex  gap-8">
          <div className="h-64 md:h-72 w-[600px] md:w-[800px] rounded-lg overflow-hidden">
            <img
              src={aboutPic}
              alt="AboutPic"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="">
            <h1 className="text-blue-500 text-3xl font-bold mb-2">
              Shashank Ponna
            </h1>
            <h2 className="text-lg font-semibold">
              Full Stack Developer | Problem Solver{" "}
            </h2>
            <p>
              a Computer Engineering student passionate about building
              real-world applications and improving problem-solving skills. I
              have hands-on experience in{" "}
              <span className="font-semibold">
                full-stack web development (MERN)
              </span>{" "}
              and am actively learning{" "}
              <span className="font-semibold">
                Data Structures & Algorithms in C++
              </span>{" "}
              to strengthen my coding and problem-solving abilities.
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-1">
              <li>C++ | C | Python (Algorithms & Problem Solving)</li>
              <li>MERN Stack: MongoDB, Express, React, Node.js</li>
              <li>OOP | DBMS Basics | REST APIs</li>
              <li>Actively practicing DSA to strengthen coding fundamentals</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
