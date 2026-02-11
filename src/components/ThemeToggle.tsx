import { SunIcon, MoonIcon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(localStorage.getItem("theme") === "dark");
  }, []);

  const handleToggle = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      aria-label="Cambiar tema"
      className="p-2 rounded-md transition-colors duration-300 hover:bg-black/10 dark:hover:bg-white/10 hover:cursor-pointer"
      onClick={handleToggle}
    >
      {isDark ? (
        <SunIcon className="w-5 h-5 text-white" />
      ) : (
        <MoonIcon className="w-5 h-5" />
      )}
    </button>
  );
}
