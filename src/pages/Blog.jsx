import { motion } from "framer-motion";
import { format } from "date-fns";

const blogs = [
  {
    title: "Scaling with FastAPI",
    date: new Date("2025-09-01"),
    excerpt: "Learn how FastAPI can power large apps with speed and simplicity.",
    readTime: "5 min read",
    slug: "scaling-with-fastapi",
  },
  {
    title: "React State Management",
    date: new Date("2025-08-01"),
    excerpt: "Redux vs Context: choosing the right state management tool.",
    readTime: "7 min read",
    slug: "react-state-management",
  },
  {
    title: "Monetizing Job Platforms",
    date: new Date("2025-07-01"),
    excerpt: "Different strategies to monetize job platforms effectively.",
    readTime: "6 min read",
    slug: "monetizing-job-platforms",
  },
];

export default function Blog() {
  return (
    <section
      className="min-h-screen px-4 sm:px-8 md:px-16 py-12 sm:py-16 md:py-20 
                 bg-gradient-to-br from-yellow-50 via-white to-indigo-50
                 dark:from-slate-900 dark:via-slate-950 dark:to-indigo-950
                 transition-colors duration-500
                 pt-24 sm:pt-28"  // 👈 added padding to avoid navbar overlap
    >
      {/* Section Title */}
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center 
                   text-yellow-500 dark:text-yellow-400"
      >
        Blog
      </h2>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-12 max-w-7xl mx-auto">
        {blogs.length > 0 ? (
          blogs.map((b, i) => (
            <motion.article
              key={b.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-white dark:bg-slate-900 
                         p-6 sm:p-8 rounded-2xl 
                         border border-slate-200 dark:border-slate-700
                         shadow-lg hover:shadow-2xl 
                         hover:scale-105 
                         transition-all duration-300"
            >
              {/* Date and Read Time */}
              <div
                className="flex items-center justify-between text-xs sm:text-sm 
                           text-slate-500 dark:text-slate-400 mb-4"
              >
                <span>{format(b.date, "MMM yyyy")}</span>
                <span>{b.readTime}</span>
              </div>

              {/* Title */}
              <h3
                className="text-xl sm:text-2xl font-bold 
                          text-slate-800 dark:text-slate-100 
                          hover:text-yellow-600 dark:hover:text-yellow-400
                          transition-colors duration-300"
              >
                {b.title}
              </h3>

              {/* Excerpt */}
              <p
                className="mt-3 sm:mt-4 text-sm sm:text-base 
                         text-slate-600 dark:text-slate-300 
                         leading-relaxed"
              >
                {b.excerpt}
              </p>

              {/* Read More Button */}
              <a
                href={`/blog/${b.slug}`}
                aria-label={`Read more about ${b.title}`}
                className="inline-block mt-5 sm:mt-6 px-5 py-2.5 
                           bg-yellow-500 hover:bg-yellow-600 
                           dark:bg-yellow-400 dark:hover:bg-yellow-500 
                           text-white dark:text-slate-900 
                           rounded-lg shadow-md 
                           font-semibold text-sm sm:text-base
                           transition-all duration-300"
              >
                Read More
              </a>
            </motion.article>
          ))
        ) : (
          <p className="text-center text-slate-600 dark:text-slate-300">
            No blog posts available.
          </p>
        )}
      </div>
    </section>
  );
}
