import React, { useState } from "react";
import { WaveEffect } from "./components/WaveEffect";
import Window from "./components/Window";
import HomeMenu from "./components/HomeMenu";

function App() {
  // Windows states
  const [openWindows, setOpenWindows] = useState([]);

  const openWindow = (name) => {
    if (openWindows.includes(name)) return;
    setOpenWindows((prev) => [...prev, name]);
  };

  const closeWindow = (name) => {
    setOpenWindows((prev) => prev.filter((window) => window !== name));
  };

  return (
    <div className="relative min-h-screen">
      {/* Wave Effect */}
      <WaveEffect />

      <div className="fixed inset-0 select-none">
        {/* Home Menu */}
        <HomeMenu openWindow={openWindow} />

        {/* Windows */}
        {openWindows.includes("about") && (
          <Window
            title="about"
            onClose={() => closeWindow("about")}
            initialPosition={{ x: 400, y: 100 }}
          >
            <p>about content here...</p>
          </Window>
        )}

        {openWindows.includes("projects") && (
          <Window
            title="projects"
            onClose={() => closeWindow("projects")}
            initialPosition={{ x: 400, y: 100 }}
          >
            <p>projects content here...</p>
          </Window>
        )}

        {openWindows.includes("contact") && (
          <Window
            title="contact"
            onClose={() => closeWindow("contact")}
            initialPosition={{ x: 400, y: 100 }}
          >
            <p>contact content here...</p>
          </Window>
        )}

        {openWindows.includes("other") && (
          <Window
            title="other"
            onClose={() => closeWindow("other")}
            initialPosition={{ x: 400, y: 100 }}
          >
            <p>other content here...</p>
          </Window>
        )}
      </div>
    </div>
  );
}

export default App;
