import React, { useState } from "react";
import Window from "./components/Window";
import { User, Code, Mail, Ghost } from "lucide-react";

function App() {
  // Blueprint
  const WINDOW_DEFS = [
    { id: "about", title: "about" },
    { id: "projects", title: "projects" },
    { id: "contact", title: "contact" },
    { id: "???", title: "???" },
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

  return (
    <div
      className="relative min-h-screen bg-cover bg-right bg-no-repeat"
      style={{ backgroundImage: "url(nujabes.jpg" }}
    >
      <div className="fixed inset-0 overflow-hidden">
        {/* HOME MENU */}
        <div className="absolute overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] max-w-[80vw] rounded-lg bg-black/50 backdrop-blur-xl border border-white/80 shadow-2xl flex flex-col">
          {/* Title Bar */}
          <div className="flex items-center justify-between gap-2 px-3 py-2 bg-black/30 backdrop-blur-md border-b border-white/80">
            <span className="text-white font-semibold">home</span>
            <button className="text-white cursor-pointer rounded hover:bg-white/20 transition-all">
              [x]
            </button>
          </div>

          {/* Content Area */}
          <div className="p-6 bg-black/20">
            <div className="my-20 flex flex-col items-center gap-5">
              <h1 className="text-5xl text-white">hi! i'm amir</h1>
              <h2 className="text-xl text-white">developer | cs @ sfu</h2>

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
                  onClick={() => openWindow("???")}
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
        {windows.map((w) => (
          <div
            key={w.id}
            className="absolute rounded-lg overflow-hidden rounded-lg bg-black/50 backdrop-blur-xl border border-white/80 shadow-2xl flex flex-col"
            style={{
              left: w.position.x,
              top: w.position.y,
              width: 420,
              maxWidth: "90vw",
              maxHeight: "85vh",
              zIndex: w.zIndex,
            }}
          >
            <div className="flex items-center justify-between gap-2 px-3 py-2 bg-black/30 backdrop-blur-md border-b border-white/80">
              <span className="text-white font-semibold">{w.title}</span>
              <button
                // onClick={closeWindow}
                className="text-white cursor-pointer rounded hover:bg-white/20 transition-all"
              >
                [x]
              </button>
            </div>
            <div className="p-4 bg-black/20 text-gray-200 text-sm">
              <p>content for {w.title} will go here.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
