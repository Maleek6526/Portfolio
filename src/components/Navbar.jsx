// Navbar.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full z-40 top-0">
      <nav
        className="mx-auto container-max px-4 py-3 flex items-center justify-between 
                   bg-white/80 dark:bg-slate-900/80 backdrop-blur-md 
                   border border-slate-200 dark:border-slate-700
                   rounded-b-lg shadow-sm transition-colors duration-500"
      >
        {/* Logo */}
        <Link
          to="/"
          className="text-lg md:text-xl font-bold text-yellow-500 dark:text-yellow-400"
        >
          Maleek
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-slate-700 dark:text-slate-200">
          <Link to="/" className="hover:text-yellow-500 dark:hover:text-yellow-400 transition">Home</Link>
          <Link to="/projects" className="hover:text-yellow-500 dark:hover:text-yellow-400 transition">Projects</Link>
          <Link to="/skills" className="hover:text-yellow-500 dark:hover:text-yellow-400 transition">Skills</Link>
          <Link to="/about" className="hover:text-yellow-500 dark:hover:text-yellow-400 transition">About</Link>
          <Link to="/blog" className="hover:text-yellow-500 dark:hover:text-yellow-400 transition">Blog</Link>
          <Link
            to="/contact"
            className="px-3 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 
                       text-white shadow-md transition"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-700 dark:text-slate-200"
          onClick={() => setOpen(v => !v)}
          aria-label="menu"
        >
          {open ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div
          className="md:hidden bg-white/90 dark:bg-slate-900/90 backdrop-blur 
                     border-t border-slate-200 dark:border-slate-700
                     p-4 space-y-3 text-slate-700 dark:text-slate-200 transition"
        >
          <Link to="/" onClick={() => setOpen(false)} className="block hover:text-yellow-500 dark:hover:text-yellow-400">Home</Link>
          <Link to="/projects" onClick={() => setOpen(false)} className="block hover:text-yellow-500 dark:hover:text-yellow-400">Projects</Link>
          <Link to="/skills" onClick={() => setOpen(false)} className="block hover:text-yellow-500 dark:hover:text-yellow-400">Skills</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="block hover:text-yellow-500 dark:hover:text-yellow-400">About</Link>
          <Link to="/blog" onClick={() => setOpen(false)} className="block hover:text-yellow-500 dark:hover:text-yellow-400">Blog</Link>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block px-3 py-2 rounded bg-yellow-500 hover:bg-yellow-600 
                       text-white shadow-md transition"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
