import React, { useState } from "react";
import Window from "./Window";

function App() {
  // 1. Create the 'Switch' (State)
  const [isBioOpen, setIsBioOpen] = useState(false);

  return (
    <div className="relative w-full h-screen bg-[#111111]">
      {/* Button Icon to open window */}
      <button
        onClick={() => setIsBioOpen(true)}
        className="text-2xl cursor-pointer transition-all duration-300 hover:scale-150"
      >
        🎒
      </button>

      {/* Window Opening Logic */}
      {isBioOpen && (
        <Window title="Bio" onClose={() => setIsBioOpen(false)}>
          <p>Hi! This is my bio</p>
        </Window>
      )}
    </div>
  );
}

export default App;
