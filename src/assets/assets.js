import {
  FaReact,
  FaServer,
  FaNodeJs,
  FaDatabase,
  FaJs,
  FaCss3Alt,
  FaVuejs,
  FaFire,
  FaRobot,
} from "react-icons/fa";

import { GiBrain } from "react-icons/gi";
import { SiCodecrafters, SiStripe } from "react-icons/si";
import { FaCloud, FaCloudSun } from "react-icons/fa6";

import profileImg from "../assets/profile.jpeg";
import projectImg1 from "../assets/projectImg1.png";
import projectImg2 from "../assets/projectImg2.png";
import projectImg3 from "../assets/projectImg3.png";
import projectImg4 from "../assets/projectImg4.png";
import projectImg5 from "../assets/projectImg5.png";
import projectImg6 from "../assets/projectImg6.png";

export const assets = {
  profileImg,
};

export const skills = [
  {
    title: "Frontend Development",
    icon: FaReact,
    description:
      "Building responsive and interactive user interfaces with a strong focus on usability and clean design.",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Backend & Database",
    icon: FaServer,
    description:
      "Developing server-side applications and RESTful APIs with efficient data handling and authentication.",
    tags: ["Node.js", "Express", "MongoDB", "CRUD", "Authentication"],
  },
  {
    title: "Programming Languages",
    icon: SiCodecrafters,
    description:
      "Using multiple programming languages for web development and problem-solving tasks.",
    tags: ["C++", "C", "Python", "JavaScript"],
  },
  {
    title: "Problem Solving & DSA",
    icon: GiBrain,
    description:
      "Strengthening logical thinking and algorithmic problem-solving skills alongside development.",
    tags: ["DSA", "C++", "Arrays", "Strings", "Recursion", "STL", "Complexity"],
  },
];

export const projects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio website to showcase projects, skills, and contact information with smooth animations.",
    image: projectImg1,
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    icons: [FaReact, FaCss3Alt],
    demo: "#",
    code: "https://github.com/ShashankPonna/Portfolio",
  },
  {
    title: "Posting App",
    description:
      "A full-stack posting application where users can create, view, and manage posts with authentication.",
    image: projectImg2,
    tech: ["Node.js", "Express", "EJS", "MongoDB"],
    icons: [FaReact, FaNodeJs, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Expense Tracker",
    description:
      "A frontend expense tracking application to manage daily expenses with category-wise summaries.",
    image: projectImg3,
    tech: ["React", "JavaScript", "CSS"],
    icons: [FaReact, FaJs],
    demo: "https://expensetracker-shashank.vercel.app/",
    code: "https://github.com/ShashankPonna/Expense-Tracker",
  },
  {
    title: "Weather App",
    description:
      "An API-based weather application that fetches real-time weather data based on user location or search.",
    image: projectImg4,
    tech: ["JavaScript", "Weather API", "HTML", "CSS"],
    icons: [FaJs, FaCloudSun],
    demo: "https://shashankponna.github.io/Weather-App/",
    code: "https://github.com/ShashankPonna/Weather-App",
  },
  {
    title: "Quiz App",
    description:
      "An interactive quiz application with score tracking and multiple question sets.",
    image: projectImg5,
    tech: ["JavaScript", "React"],
    icons: [FaJs, FaReact],
    demo: "https://shashankponna.github.io/Quiz-App/",
    code: "https://github.com/ShashankPonna/Quiz-App",
  },
  {
    title: "Task Manager",
    description:
      "A task management application to add, update, and delete tasks with a clean user interface.",
    image: projectImg6,
    tech: ["JavaScript", "React"],
    icons: [FaJs, FaReact],
    demo: "https://shashankponna.github.io/Task-Manager/",
    code: "https://github.com/ShashankPonna/Task-Manager",
  },
];

// export const workData = [
//   {
//     role: "Senior Frontend Developer",
//     company: "TechCorp Inc.",
//     duration: "2020 - Present",
//     description:
//       "Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.",
//     color: "purple"
//   },
//   {
//     role: "Web Developer",
//     company: "Digital Solutions LLC",
//     duration: "2018 - 2020",
//     description:
//       "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
//     color: "pink"
//   },
//   {
//     role: "Junior Developer",
//     company: "StartUp Ventures",
//     duration: "2016 - 2018",
//     description:
//       "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
//     color: "blue"
//   }
// ];
