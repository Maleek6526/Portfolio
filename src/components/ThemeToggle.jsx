// ThemeToggle.jsx
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle(){
  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");
  useEffect(()=>{
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);
  return (
    <button
      onClick={()=>setDark(d => !d)}
      className="fixed right-4 bottom-4 z-50 p-3 rounded-full bg-white/80 dark:bg-slate-800 shadow-lg"
      aria-label="toggle theme"
    >
      {dark ? <FiSun /> : <FiMoon />}
    </button>
  );
}
