import React, { useState } from "react";
import Window from "./components/Window";
import { User, Code, Mail, Ghost } from "lucide-react";

function App() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-right bg-no-repeat"
      style={{ backgroundImage: "url(nujabes.jpg" }}
    >
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
              <button className="group flex flex-col items-center gap-2 px-4 py-3 text-white/90 hover:scale-105 transition-all">
                <User
                  size={24}
                  className="text-white/80 group-hover:text-red-400 transition-colors"
                />
                <p className="font-medium">about</p>
              </button>
              <button className="group flex flex-col items-center gap-2 px-4 py-3 text-white/90 hover:scale-105 transition-all">
                <Code
                  size={24}
                  className="text-white/80 group-hover:text-red-400 transition-colors"
                />{" "}
                <p className="font-medium">projects</p>
              </button>
              <button className="group flex flex-col items-center gap-2 px-4 py-3 text-white/90 hover:scale-105 transition-all">
                <Mail
                  size={24}
                  className="text-white/80 group-hover:text-red-400 transition-colors "
                />{" "}
                <p className="font-medium">contact</p>
              </button>
              <button className="group flex flex-col items-center gap-2 px-4 py-3 text-white/90 hover:scale-105 transition-all">
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
    </div>
  );
}

export default App;
