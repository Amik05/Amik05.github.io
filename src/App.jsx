import React, { useState } from "react";
import { User, Code, Mail, Ghost } from "lucide-react";
import { DesktopWindow } from "./components/DesktopWindow";
import { WaveEffect } from "./components/WaveEffect";
import {
  AboutContent,
  ProjectsContent,
  ContactContent,
  OtherContent,
} from "./components/windows";

function App() {
  const WINDOW_CONTENT = {
    about: AboutContent,
    projects: ProjectsContent,
    contact: ContactContent,
    other: OtherContent,
  };
  // Blueprint
  const WINDOW_DEFS = [
    { id: "about", title: "about" },
    { id: "projects", title: "projects" },
    { id: "contact", title: "contact" },
    { id: "other", title: "other" },
  ];

  const [windows, setWindows] = useState([]);

  const openWindow = (id) => {
    // Find def
    const def = WINDOW_DEFS.find((w) => w.id === id);
    if (!def) return;

    // Update state
    // Check if window is in array (open)
    setWindows((prev) => {
      const existing = prev.find((w) => w.id === id);
      if (existing) {
        return prev;
      }

      const offset = prev.length * 28;
      // Extend defs
      return [
        ...prev,
        {
          id,
          title: def.title,
          position: { x: 60 + offset, y: 50 + offset },
          zIndex: 100 + prev.length,
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
    <div
      className="relative min-h-screen bg-cover bg-right bg-no-repeat"
      style={{ backgroundImage: "url(nujabes.jpg" }}
    >
      {/* Wave Effect */}
      <WaveEffect />
      <div className="fixed inset-0 overflow-hidden select-none">
        {/* HOME MENU */}
        <div className="absolute overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] max-w-[80vw] rounded-lg bg-black/50 backdrop-blur-xl border-3 border-white/80 shadow-2xl flex flex-col">
          {/* Title Bar */}
          <div className="flex items-center justify-between gap-2 px-3 py-2 bg-black/30 backdrop-blur-md border-b-3 border-white/80">
            <span className="text-white font-semibold">home</span>
            <button className="text-white cursor-pointer rounded hover:bg-white/20 transition-all">
              [x]
            </button>
          </div>

          {/* Content Area */}
          <div className="flex items-center justify-center bg-black/20 h-[600px] max-h-[80vh]">
            <div className="my-20 flex flex-col items-center gap-5">
              <h1 className="text-5xl text-white">hi! i'm amir</h1>
              <h2 className="text-xl text-white">developer | cs @ sfu</h2>
              <img className="w-50" src="rotatingCar.gif" alt="Rotating Car" />
              <h2 className="text text-white">site under construction..</h2>

              {/* Navigation */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-10">
                <button
                  onClick={() => openWindow("about")}
                  className="group flex flex-col items-center gap-2 px-4 py-3 text-white/90 hover:scale-105 transition-all"
                >
                  <User
                    size={24}
                    className="text-white/80 group-hover:text-red-400 transition-colors"
                  />
                  <p className="font-medium">about</p>
                </button>
                <button
                  onClick={() => openWindow("projects")}
                  className="group flex flex-col items-center gap-2 px-4 py-3 text-white/90 hover:scale-105 transition-all"
                >
                  <Code
                    size={24}
                    className="text-white/80 group-hover:text-red-400 transition-colors"
                  />{" "}
                  <p className="font-medium">projects</p>
                </button>
                <button
                  onClick={() => openWindow("contact")}
                  className="group flex flex-col items-center gap-2 px-4 py-3 text-white/90 hover:scale-105 transition-all"
                >
                  <Mail
                    size={24}
                    className="text-white/80 group-hover:text-red-400 transition-colors "
                  />{" "}
                  <p className="font-medium">contact</p>
                </button>
                <button
                  onClick={() => openWindow("other")}
                  className="group flex flex-col items-center gap-2 px-4 py-3 text-white/90 hover:scale-105 transition-all"
                >
                  <Ghost
                    size={24}
                    className="text-white/80 group-hover:text-red-400 transition-colors"
                  />{" "}
                  <p className="font-medium">???</p>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Render Windows */}
        {windows.map((w) => {
          const Content = WINDOW_CONTENT[w.id];
          return (
            <DesktopWindow
              key={w.id}
              title={w.title}
              icon={w.icon}
              initialPosition={w.position}
              zIndex={w.zIndex}
              onFocus={() => bringToFront(w.id)}
              onClose={() => closeWindow(w.id)}
            >
              {Content ? <Content /> : null}
            </DesktopWindow>
          );
        })}
      </div>
    </div>
  );
}

export default App;
