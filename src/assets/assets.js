import { FaReact } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { SiCodecrafters } from "react-icons/si";

import profileImg from "../assets/profile.jpeg";
import projectImg1 from "../assets/project1.avif";
import projectImg2 from "../assets/project2.avif";
import projectImg3 from "../assets/project3.avif";
import projectImg4 from "../assets/project4.avif";
import projectImg5 from "../assets/project5.avif";
import projectImg6 from "../assets/project6.avif";

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
    tags: [
      "Node.js",
      "Express",
      "MongoDB",
      "CRUD",
      "Authentication",
    ],
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

// export const projects = [
//   {
//     title: "E-Commerce Platform",
//     description: "A full-featured online store with shopping cart, user authentication, and payment processing.",
//     image: projectImg1,
//     tech: ["React", "Node.js", "MongoDB", "Stripe"],
//     icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
//     demo: "#",
//     code: "#",
//   },
//   {
//     title: "Task Management App",
//     description: "A productivity application with drag-and-drop functionality and real-time updates.",
//     image: projectImg2,
//     tech: ["Vue.js", "Firebase", "Tailwind CSS", "WebSockets"],
//     icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
//     demo: "#",
//     code: "#",
//   },
//   {
//     title: "Fitness Tracker",
//     description: "A mobile app for tracking workouts, nutrition, and health metrics.",
//     image: projectImg3,
//     tech: ["React Native", "GraphQL", "MySQL", "Chart.js"],
//     icons: [FaReact, FaDatabase],
//     demo: "#",
//     code: "#",
//   },
//   {
//     title: "Portfolio Website",
//     description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
//     image: projectImg4,
//     tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Markdown"],
//     icons: [FaReact, FaCloud],
//     demo: "#",
//     code: "#",
//   },
//   {
//     title: "Chat App",
//     description: "A real-time chat application with group messaging, emojis, and file sharing.",
//     image: projectImg5,
//     tech: ["Socket.IO", "React", "Node.js", "MongoDB"],
//     icons: [FaReact, FaNodeJs, FaDatabase ],
//     demo: "#",
//     code: "#",
//   },
//   {
//     title: "AI Image Generator",
//     description: "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
//     image: projectImg6,
//     tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
//     icons: [FaRobot, FaReact, FaCloud],
//     demo: "#",
//     code: "#",
//   }
// ];

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
