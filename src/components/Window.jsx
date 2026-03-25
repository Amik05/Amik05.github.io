import Draggable from "react-draggable";
import { useRef } from "react";

const Window = ({
  title,
  onClose,
  onFocus,
  children,
  initialPosition,
  zIndex,
}) => {
  const nodeRef = useRef(null);
  return (
    <Draggable
      handle=".title-bar"
      nodeRef={nodeRef}
      bounds="parent"
      defaultPosition={initialPosition ?? { x: 80, y: 60 }}
      onStart={onFocus}
    >
      <div
        onClick={onFocus}
        ref={nodeRef}
        className="absolute overflow-hidden w-fit min-w-[300px] max-w-[800px] max-h-[600px] rounded-lg bg-white/80 dark:bg-black/50 backdrop-blur-sm dark:backdrop-blur-xl border-3 border-orange-400 dark:border-white/80 border-3"
        style={{ zIndex }}
      >
        <div className="title-bar flex justify-between px-3 py-2 bg-black/70 border-b-3 border-orange-400 dark:border-white/80 cursor-grab">
          <span className="text-white font-semibold">{title}</span>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 px-1 rounded"
          >
            [x]
          </button>
        </div>
        <div className="overflow-y-auto max-h-[550px]">{children}</div>
      </div>
    </Draggable>
  );
};

export default Window;
