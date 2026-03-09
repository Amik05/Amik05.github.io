import Draggable from "react-draggable";
import { useRef } from "react";

const Window = ({ title, onClose, children, initialPosition }) => {
  const nodeRef = useRef(null);
  return (
    <Draggable
      handle=".title-bar"
      nodeRef={nodeRef}
      bounds="parent"
      defaultPosition={initialPosition ?? { x: 80, y: 60 }}
    >
      <div
        ref={nodeRef}
        className="absolute w-[500px] rounded-lg bg-black/50 backdrop-blur-xl border-3 border-white/80"
      >
        <div className="title-bar flex justify-between px-3 py-2 bg-black/30 border-b-3 border-white/80 cursor-grab">
          <span className="text-white font-semibold">{title}</span>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 px-1 rounded"
          >
            [x]
          </button>
        </div>
        <div className="p-4 text-white">{children}</div>
      </div>
    </Draggable>
  );
};

export default Window;
