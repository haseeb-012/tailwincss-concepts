"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
function Dark() {
  const { theme, setTheme } = useTheme();
  const [systemTheme, setSystemTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefere-color-scheme:dark)");

    setSystemTheme(mediaQuery.matches ? "dark" : "light");

    const handleChange = (e: MediaQueryListEvent) => 
      setSystemTheme(mediaQuery.matches ? "dark" : "light");

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const switchTheme = () => {
    switch (theme) {
      case "dark":
        setTheme("light");
        return;
      case "light":
        setTheme("dark");
        return;
      case "system":
        setTheme(systemTheme === "dark" ? "light" : "dark");
        return;
    }
  };
  return (
    <div className="flex justify-end">
      <button onClick={switchTheme}>
        {theme === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-moon rotate-45 transition-all duration-100 dark:rotate-0"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
          </svg>
        ) : (
          <svg
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="icon icon-tabler icons-tabler-filled icon-tabler-brightness-up transition-all duration-100 dark:rotate-0"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 8a4 4 0 1 1 -3.995 4.2l-.005 -.2l.005 -.2a4 4 0 0 1 3.995 -3.8z" />
            <path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v2a1 1 0 0 1 -1.993 .117l-.007 -.117v-2a1 1 0 0 1 1 -1z" />
            <path d="M17.693 4.893a1 1 0 0 1 1.497 1.32l-.083 .094l-1.4 1.4a1 1 0 0 1 -1.497 -1.32l.083 -.094l1.4 -1.4z" />
            <path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-2a1 1 0 0 1 -.117 -1.993l.117 -.007h2z" />
            <path d="M16.293 16.293a1 1 0 0 1 1.32 -.083l.094 .083l1.4 1.4a1 1 0 0 1 -1.32 1.497l-.094 -.083l-1.4 -1.4a1 1 0 0 1 0 -1.414z" />
            <path d="M12 18a1 1 0 0 1 .993 .883l.007 .117v2a1 1 0 0 1 -1.993 .117l-.007 -.117v-2a1 1 0 0 1 1 -1z" />
            <path d="M6.293 16.293a1 1 0 0 1 1.497 1.32l-.083 .094l-1.4 1.4a1 1 0 0 1 -1.497 -1.32l.083 -.094l1.4 -1.4z" />
            <path d="M6 11a1 1 0 0 1 .117 1.993l-.117 .007h-2a1 1 0 0 1 -.117 -1.993l.117 -.007h2z" />
            <path d="M4.893 4.893a1 1 0 0 1 1.32 -.083l.094 .083l1.4 1.4a1 1 0 0 1 -1.32 1.497l-.094 -.083l-1.4 -1.4a1 1 0 0 1 0 -1.414z" />
          </svg>
        )}
      </button>
    </div>
  );
}

export default Dark;
