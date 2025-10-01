import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImg from "../assets/WhatsApp Image 2025-09-28 at 15.48.37_c30f1682.jpg"; // Replace with your actual image

export default function Home() {
  return (
    <section
      className="min-h-screen flex flex-col md:flex-row items-center justify-between 
                 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 
                 py-12 sm:py-16 
                 bg-white dark:bg-slate-900 
                 transition-colors duration-500"
    >
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left z-10 w-full max-w-2xl"
      >
        <p
          className="text-yellow-500 dark:text-yellow-400 font-bold tracking-wider 
                     mb-3 text-sm sm:text-base"
        >
          FULL-STACK ENGINEER
        </p>
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold 
                     leading-tight text-slate-800 dark:text-slate-100"
        >
          Hello, my name is <br />
          <motion.span
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-[Montserrat] text-transparent bg-clip-text 
                       bg-gradient-to-r from-yellow-500 to-yellow-700 
                       dark:from-yellow-400 dark:to-yellow-600 
                       shadow-sm inline-block"
          >
            Adewale Maleek Ayobami
          </motion.span>
        </h1>
        <p
          className="mt-4 text-slate-600 dark:text-slate-300 
                     text-sm sm:text-base md:text-lg 
                     max-w-sm sm:max-w-md md:max-w-lg mx-auto md:mx-0"
        >
          Full-stack engineer skilled in design thinking, critical thinking,
          business models, and implementations. Passionate about building
          engaging and scalable applications. More info can be found on my About
          page.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="https://github.com/Maleek6526"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 sm:px-6 py-2.5 
                   bg-gray-900 hover:bg-gray-800 
                   text-white font-semibold rounded-lg 
                   shadow-md border border-yellow-400 hover:shadow-yellow-500/60 
                   text-sm sm:text-base transition-all duration-300"
          >
            <FaGithub className="text-lg" />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/adewale-maleek/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 sm:px-6 py-2.5 
                   border border-yellow-400 dark:border-yellow-400 
                   text-slate-600 dark:text-slate-200 font-semibold 
                   rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 
                   shadow-md hover:shadow-yellow-500/60 
                   text-sm sm:text-base transition-all duration-300"
          >
            <FaLinkedin className="text-blue-600 dark:text-blue-400 text-lg" />
            LinkedIn
          </a>
        </div>
      </motion.div>

      {/* Right Content (Blob + Image) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 relative flex justify-center items-center 
                   mt-12 md:mt-0 w-full max-w-xl"
      >
        {/* Yellow Blob Background */}
        <div
          className="absolute w-[70vw] h-[70vw] sm:w-[60vw] sm:h-[60vw] 
                     md:w-[50vw] md:h-[50vw] lg:w-[45vw] lg:h-[45vw] 
                     max-w-[600px] max-h-[600px] 
                     -top-10 sm:-top-16 md:top-0 
                     right-0 md:-right-8 lg:-right-12 
                     z-0"
        >
          <svg
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d="M437,291Q421,332,388.5,358.5Q356,385,318,421.5Q280,458,231.5,447.5Q183,437,138,416Q93,395,65,352.5Q37,310,35,257Q33,204,63,162Q93,120,140.5,99.5Q188,79,237,56Q286,33,326.5,66Q367,99,398.5,135Q430,171,442,214.5Q454,258,437,291Z"
              fill="#facc15"
              className="dark:fill-yellow-400"
            />
          </svg>
        </div>

        {/* Profile Image */}
        <img
          src={profileImg}
          alt="Adewale Maleek Ayobami"
          className="relative w-[65vw] sm:w-[50vw] md:w-[40vw] lg:w-[35vw] 
                     max-w-[400px] min-w-[200px] 
                     object-cover drop-shadow-2xl rounded-2xl z-10"
        />
      </motion.div>
    </section>
  );
}
