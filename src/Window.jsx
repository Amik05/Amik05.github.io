import React, { useRef } from "react";
import Draggable from "react-draggable";

const Window = ({ title, children, onClose }) => {
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef} handle=".window-header">
      <div
        ref={nodeRef}
        className="absolute rounded-[1rem] border border-white/20 bg-zinc-900/70 px-3 py-2 shadow-2xl backdrop-blur-3xl backdrop-saturate-150 text-white/50"
      >
        {/* Title bar */}
        <div className="window-header flex justify-between items-center cursor-move border-b">
          <span>{title}</span>
          <button
            onClick={onClose}
            className="bg-red-500 rounded px-1.5 text-sm cursor-pointer"
          >
            X
          </button>
        </div>

        {/* Content Area */}
        <div className="border-1 border-gray-500 m-1 p-4 min-h-[100px] text-white text-sm">
          {children}
        </div>
      </div>
    </Draggable>
  );
};

export default Window;
