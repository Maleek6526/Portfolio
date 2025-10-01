import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaDocker,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiFastapi,
  SiExpress,
  SiDjango,
  SiFlask,
  SiGo,
  SiSpringboot,
  SiPytest,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-sky-500" /> },
  { name: "React Native", icon: <FaReact className="text-cyan-600" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-slate-700 dark:text-slate-300" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500" /> },
  { name: "Django", icon: <SiDjango className="text-green-800" /> },
  { name: "Flask", icon: <SiFlask className="text-slate-800 dark:text-slate-200" /> },
  { name: "FastAPI", icon: <SiFastapi className="text-green-500" /> },
  { name: "Go", icon: <SiGo className="text-cyan-500" /> },
  { name: "Java", icon: <FaJava className="text-red-600" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" /> },
  { name: "TDD", icon: <SiPytest className="text-blue-500" /> },
  { name: "Pytest", icon: <SiPytest className="text-blue-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen px-4 sm:px-8 md:px-16 lg:px-20 
                 pt-28 sm:pt-32 md:pt-36   {/* 👈 extra padding to push below navbar */}
                 pb-12 sm:pb-16 md:pb-20
                 bg-gradient-to-tr from-indigo-50 via-white to-yellow-50
                 dark:from-indigo-950 dark:via-slate-950 dark:to-yellow-950
                 transition-colors duration-500"
    >
      {/* Section Title */}
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center 
                   text-indigo-600 dark:text-indigo-400"
      >
        Skills
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 mt-10 sm:mt-12 max-w-7xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.6 }}
            className="flex flex-col items-center p-4 sm:p-6 
                       bg-white dark:bg-slate-900
                       border border-slate-200 dark:border-slate-700
                       rounded-2xl shadow-md 
                       hover:scale-105 hover:shadow-yellow-400/50 
                       hover:border-yellow-400
                       transition-all duration-300"
          >
            <div className="text-4xl sm:text-5xl">{skill.icon}</div>
            <p
              className="mt-3 sm:mt-4 font-semibold text-center text-sm sm:text-base
                         text-slate-800 dark:text-slate-100"
            >
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
