import React, { useRef } from "react";
import Draggable from "react-draggable";

const Window = ({ title, children, onClose }) => {
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef} handle=".window-header" bounds="parent">
      <div
        ref={nodeRef}
        className="absolute shadow-2xl rounded-lg overflow-hidden bg-black/40 dark:bg-black/50 backdrop-blur-xl border border-white/20 flex flex-col"
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
