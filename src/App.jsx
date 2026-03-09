import React, { useState } from "react";
import { WaveEffect } from "./components/WaveEffect";
import Window from "./components/Window";
import HomeMenu from "./components/HomeMenu";

const WINDOWS_DEF = [
  { id: "about", title: "about" },
  { id: "projects", title: "projects" },
  { id: "contact", title: "contact" },
  { id: "other", title: "other" },
];

function App() {
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
      const centerX = window.innerWidth / 2 - 500;
      const centerY = window.innerHeight / 2 - 400;

      console.log(centerX);
      console.log(centerY);

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

  const closeWindow = (name) => {
    setWindows((prev) => prev.filter((window) => window.id !== name));
  };

  return (
    <div className="relative min-h-screen">
      {/* Wave Effect */}
      <WaveEffect />

      <div className="fixed inset-0 select-none">
        {/* Home Menu */}
        <HomeMenu openWindow={openWindow} />

        {/* Windows */}
        {windows.map((w) => {
          return (
            <Window
              key={w.id}
              title={w.title}
              onClose={() => closeWindow(w.id)}
              initialPosition={w.position}
            >
              <p>{w.id} section ... </p>
            </Window>
          );
        })}
      </div>
    </div>
  );
}

export default App;
