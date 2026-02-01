import { motion } from "framer-motion";

const projects = [
  {
    title: "FastMall ECommerce App",
    desc: "A full-stack marketplace built with Java, MongoDb, Paystack, React & Redux.",
    img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop",
    link: "https://fastmall-1.onrender.com/",
  },
  {
    title: "Job Platform",
    desc: "Steerify Platorm for service providers and customers waitlist built with nodejs, mongodb, express & react.",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop",
    link: "https://steerify-1.onrender.com/",
  },
    
  {
    title: "Todo Mobile App",
    desc: "Task management mobile application developed with React Native and java backend.",
    img: "https://images.unsplash.com/photo-1484480974693-6f26e1d4c7d3?w=600&h=400&fit=crop",
    link: "https://drive.google.com/file/d/137lFJLU-kZ8n5X38RrkZPJd--GszZfnR/view?usp=sharing",
  },
  {
    title: "Task Management Application",
    desc: "Realtime Task Management System built with Node.js, react and mysql",
    img: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&h=400&fit=crop",
    link: "https://taskmanageruiapplication.onrender.com",
  },
  {
    title: "Steerify Service Platform",
    desc: "A platorm connecting verified service providers with customers, allowing payment in all types of currencies and built with customer and providers interest at hand. Built using React and java.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    link: "https://steerifygroup.onrender.com",
  },
  {
    title: "SkillNest Application",
    desc: "job referer made easys for artisans and blue collar workers.",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
    link: "https://skillnest-l6bu.onrender.com",
  },
  {
    title: "Tic-Tac-Toe Web Game",
    desc: "Smooth ui with choice of single or multiplayer.",
    img: "https://images.unsplash.com/photo-1668901382969-8c73e450a1f5?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // from Unsplash 
    link: "https://tictactoe-vttx.onrender.com",
  },
  {
    title: "Kahoot Web Game",
    desc: "An educational quiz of all types of subjects, allows as many players with time frame of answering questions.",
    img: "https://media.istockphoto.com/id/1422961949/photo/vote-ballots-with-question-mark.jpg?s=2048x2048&w=is&k=20&c=y4G_bZnBPOOeXUBmgPVuLzWYdI6U5T8ifd__lUtUlWg=", // from Unsplash 
    link: "https://kahoot-lmsm.onrender.com/",
  },
  {
    title: "SureTruqs",
    desc: "A modern, responsive web application designed to streamline logistics operations, connecting customers, drivers, and administrators for seamless shipment management and payment handling.",
    img: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop",
    link: "https://suretruqs.vercel.app",
  },
  {
    title: "SteerSolo",
    desc: "An e-commerce enablement platform for Nigerian solopreneurs, providing tools to build online stores, showcase products, and integrate secure payment gateways.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    link: "https://steersolo.com",
  },
  {
    title: "Sui Explorer",
    desc: "Blockchain explorer for tracking assets, transactions and on-chain activity on the Sui network.",
    img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&h=400&fit=crop",
    link: "https://sui-explorer-lsse.vercel.app",
  },
  {
    title: "Flow",
    desc: "A professional-grade API client and visual transaction builder tailored specifically for the Sui blockchain, combining Web2 familiarity with Web3-specific Move contract development features.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    link: "https://sui-flow1896.vercel.app",
  }

];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen pt-24 scroll-mt-24
                 px-4 sm:px-8 md:px-16 lg:px-20 
                 py-12 sm:py-16 md:py-20 
                 bg-gradient-to-br from-yellow-50 via-white to-indigo-50 
                 dark:from-slate-900 dark:via-slate-950 dark:to-indigo-950 
                 transition-colors duration-500"
    >
      {/* Section Title */}
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center 
                   text-yellow-500 dark:text-yellow-400"
      >
        Projects
      </h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mt-10 sm:mt-12 max-w-7xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="bg-white dark:bg-slate-900 
                       border border-slate-200 dark:border-slate-700 
                       rounded-2xl shadow-lg overflow-hidden 
                       hover:scale-105 hover:shadow-yellow-400/50 
                       hover:border-yellow-400 
                       transition-all duration-300"
          >
            {/* Project Image */}
            <img
              src={p.img}
              alt={p.title}
              loading="lazy"
              className="w-full h-48 object-cover"
              onError={(e) => {
                console.error(`Failed to load image for ${p.title}: ${p.img}`);
                e.target.src =
                  "https://images.unsplash.com/photo-1470259078422-826894b933aa?w=600&h=400&fit=crop"; // fallback
              }}
            />

            {/* Project Content */}
            <div className="p-6">
              <h3
                className="text-xl sm:text-2xl font-bold 
                          text-slate-800 dark:text-slate-100 
                          hover:text-yellow-600 dark:hover:text-yellow-400 
                          transition-colors duration-300"
              >
                {p.title}
              </h3>
              <p
                className="mt-3 text-sm sm:text-base 
                          text-slate-600 dark:text-slate-300 
                          leading-relaxed"
              >
                {p.desc}
              </p>
              <a
                href={p.link}
                className="inline-block mt-4 px-4 py-2 
                           bg-yellow-500 hover:bg-yellow-600 
                           dark:bg-yellow-400 dark:hover:bg-yellow-500 
                           text-white dark:text-slate-900 
                           rounded-lg shadow-md text-sm sm:text-base 
                           font-semibold transition-all duration-300"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
