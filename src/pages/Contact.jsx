import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

// Import icons from Lucide
import { Linkedin, Twitter, Instagram, Github, MessageCircle } from "lucide-react";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSending) return;
    setIsSending(true);

    try {
      const SERVICE_ID = "service_zx34l0a";
      const TEMPLATE_ID = "template_ajq1ttq";
      const PUBLIC_KEY = "-UvSZ8iaTwfZv7Tbp";

      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY);

      await Swal.fire({
        icon: "success",
        title: "Message sent!",
        text: "Thanks — I'll get back to you soon.",
        timer: 2200,
        showConfirmButton: false,
      });

      e.target.reset();
    } catch (error) {
      console.error("Email send error:", error);

      await Swal.fire({
        icon: "error",
        title: "Failed to send",
        text: "Something went wrong. Please try again or message me directly.",
        confirmButtonText: "OK",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center 
                 px-4 sm:px-8 md:px-16 py-12 sm:py-16 md:py-20 
                 bg-gradient-to-br from-yellow-50 via-white to-indigo-50
                 dark:from-slate-900 dark:via-slate-950 dark:to-indigo-950
                 transition-colors duration-500
                 pt-24 sm:pt-28"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center 
                   text-yellow-500 dark:text-yellow-400"
      >
        Contact Me
      </motion.h2>

      <motion.form
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-md sm:max-w-lg md:max-w-xl 
                   bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl 
                   border border-slate-200 dark:border-slate-700 
                   shadow-lg dark:shadow-slate-800"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm sm:text-base font-medium text-slate-800 dark:text-slate-100 mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 
            border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-400 
            outline-none transition-colors duration-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm sm:text-base font-medium text-slate-800 dark:text-slate-100 mb-1">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 
            border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-400 
            outline-none transition-colors duration-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm sm:text-base font-medium text-slate-800 dark:text-slate-100 mb-1">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 border rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 
            border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-400 
            outline-none transition-colors duration-300"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSending}
          aria-busy={isSending}
          className={`w-full py-3 rounded-lg font-semibold text-sm sm:text-base shadow-md transition-all duration-300
            ${isSending ? "bg-yellow-400 text-slate-900 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-600 text-white dark:bg-yellow-400 dark:hover:bg-yellow-500"}`}
        >
          {isSending ? (
            <div className="flex items-center justify-center gap-3">
              <svg className="w-5 h-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden>
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
              </svg>
              <span>Sending...</span>
            </div>
          ) : (
            "Send Message"
          )}
        </button>
      </motion.form>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-6 flex gap-4 sm:gap-6"
      >
        {/* Lucide Icons */}
        <a href="https://www.linkedin.com/in/adewale-maleek/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-yellow-500 dark:text-yellow-400 hover:scale-125 transition-all duration-300">
          <Linkedin size={28} />
        </a>

        <a href="https://x.com/MaleekAyobami" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="text-yellow-500 dark:text-yellow-400 hover:scale-125 transition-all duration-300">
          <Twitter size={28} />
        </a>

        <a href="https://www.instagram.com/petersings_official/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-yellow-500 dark:text-yellow-400 hover:scale-125 transition-all duration-300">
          <Instagram size={28} />
        </a>

        <a href="https://github.com/Maleek6526" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-yellow-500 dark:text-yellow-400 hover:scale-125 transition-all duration-300">
          <Github size={28} />
        </a>

        <a href="https://wa.me/2347025284621" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-green-500 dark:text-green-400 hover:scale-125 transition-all duration-300">
          <MessageCircle size={28} />
        </a>
      </motion.div>
    </section>
  );
}
