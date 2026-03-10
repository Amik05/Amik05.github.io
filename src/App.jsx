import React, { useState, useEffect } from "react";
import { Sparkles, Moon } from "lucide-react";
import WaveEffect from "./components/WaveEffect";
import Window from "./components/Window";
import HomeMenu from "./components/HomeMenu";
import {
  AboutContent,
  ContactContent,
  ProjectsContent,
  OtherContent,
} from "./components/contents";

const WINDOWS_DEF = [
  { id: "about", title: "about", content: AboutContent },
  { id: "projects", title: "projects", content: ProjectsContent },
  { id: "contact", title: "contact", content: ContactContent },
  { id: "other", title: "other", content: OtherContent },
];

function App() {
  // Light/Dark mode
  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle("dark");
  };

  // Listen for theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // set initial class
    document.body.classList.toggle("dark", darkMode);

    // listen for system theme changes
    const handleChange = (e) => {
      setDarkMode(e.matches);
      document.body.classList.toggle("dark", e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    // cleanup listener on unmount
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Windows states
  const [windows, setWindows] = useState([]);

  const openWindow = (id) => {
    // find window definition
    const def = WINDOWS_DEF.find((w) => w.id === id);
    if (!def) return;

    // create new window object
    setWindows((prev) => {
      // check if window is in the array
      const isOpen = prev.find((w) => w.id === id);
      if (isOpen) {
        return prev;
      }

      // Get an offset
      const offset = prev.length * 28;

      // Get the middle of the screen + custom offset
      const centerX = window.innerWidth / 5;
      const centerY = window.innerHeight / 7;

      return [
        ...prev,
        {
          id: id,
          title: def.title,
          zIndex: 100 + prev.length,
          position: { x: centerX + offset, y: centerY + offset },
        },
      ];
    });
  };

  const closeWindow = (id) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  const bringToFront = (id) => {
    setWindows((prev) => {
      const maxZ = Math.max(...prev.map((w) => w.zIndex), 0);
      return prev.map((w) => (w.id === id ? { ...w, zIndex: maxZ + 1 } : w));
    });
  };

  return (
    <div className={`relative min-h-screen ${darkMode ? "dark" : ""}`}>
      {/* Wave Effect */}
      <WaveEffect darkMode={darkMode} />

      <div className="fixed inset-0 select-none">
        {/* Home Menu */}
        <HomeMenu openWindow={openWindow} />

        {/* Theme toggle */}
        <button className="p-2 m-4" onClick={toggleTheme}>
          {darkMode ? (
            <Moon size={35} className="text-white" />
          ) : (
            <Sparkles size={35} className="text-black/70" />
          )}
        </button>

        {/* Windows */}
        {windows.map((w) => {
          const def = WINDOWS_DEF.find((d) => d.id === w.id);
          const Content = def.content;

          return (
            <Window
              key={w.id}
              title={w.title}
              onClose={() => closeWindow(w.id)}
              onFocus={() => bringToFront(w.id)}
              zIndex={w.zIndex}
              initialPosition={w.position}
            >
              <Content />
            </Window>
          );
        })}
      </div>
    </div>
  );
}

export default App;
