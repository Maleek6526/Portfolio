import { motion } from "framer-motion";
import profileImg from "../assets/IMG-20251018-WA0189.jpg";

export default function About() {
  return (
    <section
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center 
                 px-4 sm:px-8 md:px-16 py-12 sm:py-16 md:py-20 
                 bg-gradient-to-br from-yellow-50 via-white to-indigo-50
                 dark:from-slate-900 dark:via-slate-950 dark:to-indigo-950
                 transition-colors duration-500 relative overflow-hidden
                 pt-24 sm:pt-28"   // 👈 added padding-top to push below navbar
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-yellow-200 dark:bg-yellow-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-200 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse delay-1000"></div>

      {/* Image */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center relative z-10 w-full lg:w-auto mb-8 lg:mb-0"
      >
        <div className="relative group w-full max-w-md lg:max-w-lg">
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-indigo-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
          <img
            src={profileImg}
            alt="About Me"
            className="relative w-full h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] object-cover rounded-3xl shadow-2xl 
                       border-4 border-white dark:border-slate-800
                       transform group-hover:scale-105 transition duration-500"
          />
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="flex-1 text-center lg:text-left relative z-10 w-full max-w-2xl lg:pl-8 xl:pl-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold 
                       bg-gradient-to-r from-yellow-500 via-yellow-400 to-indigo-500
                       dark:from-yellow-400 dark:via-yellow-300 dark:to-indigo-400
                       bg-clip-text text-transparent"
          >
            About Me
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 p-4 sm:p-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm 
                     rounded-2xl border border-slate-200 dark:border-slate-700 
                     shadow-lg"
        >
          <p className="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            I'm{" "}
            <span className="font-bold text-indigo-600 dark:text-indigo-400">
              Adewale Maleek Ayobami
            </span>
            , a passionate full-stack engineer who loves crafting interactive and scalable{" "}
            <span className="text-yellow-600 dark:text-yellow-400 font-semibold">
              web
            </span>{" "}
            and{" "}
            <span className="text-yellow-600 dark:text-yellow-400 font-semibold">
              mobile
            </span>{" "}
            experiences. I specialize in{" "}
            <span className="text-yellow-600 dark:text-yellow-400 font-semibold">
              lightning-fast frontends
            </span>
            ,{" "}
            <span className="text-yellow-600 dark:text-yellow-400 font-semibold">
              scalable backend services
            </span>
            , and{" "}
            <span className="text-yellow-600 dark:text-yellow-400 font-semibold">
              databases
            </span>{" "}
            with a creative eye for UI and problem-solving mindset.
          </p>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Outside coding, I explore design, animations, and innovative solutions that make
            technology fun and accessible.
          </p>
        </motion.div>

        {/* Stats or Quick Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="grid grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8"
        >
          <div className="p-3 sm:p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 
                          dark:from-yellow-900/20 dark:to-yellow-800/20 
                          rounded-xl border border-yellow-200 dark:border-yellow-700
                          text-center transform hover:scale-105 transition duration-300">
            <p className="text-xl sm:text-2xl font-bold text-yellow-600 dark:text-yellow-400">4+</p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">Years Exp</p>
          </div>
          <div className="p-3 sm:p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 
                          dark:from-indigo-900/20 dark:to-indigo-800/20 
                          rounded-xl border border-indigo-200 dark:border-indigo-700
                          text-center transform hover:scale-105 transition duration-300">
            <p className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400">12+</p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">Projects</p>
          </div>
          <div className="p-3 sm:p-4 bg-gradient-to-br from-yellow-50 to-indigo-50 
                          dark:from-slate-800/50 dark:to-slate-700/50 
                          rounded-xl border border-slate-200 dark:border-slate-700
                          text-center transform hover:scale-105 transition duration-300">
            <p className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300">7</p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">Ideas</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
