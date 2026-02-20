import { useRef } from "react";
import Draggable from "react-draggable";

export function DesktopWindow({
  title,
  icon,
  children,
  onClose,
  onFocus,
  initialPosition,
  zIndex,
  defaultWidth = 420,
}) {
  const nodeRef = useRef(null);

  return (
    <Draggable
      nodeRef={nodeRef}
      defaultPosition={initialPosition ?? { x: 80, y: 60 }}
      handle=".window-title-bar"
      bounds="parent"
      onStart={onFocus}
    >
      <div
        ref={nodeRef}
        className="absolute shadow-2xl rounded-lg overflow-hidden bg-black/50 backdrop-blur-xl border border-white/20 flex flex-col"
        style={{
          width: defaultWidth,
          maxWidth: "90vw",
          maxHeight: "85vh",
          zIndex,
        }}
        onClick={onFocus}
      >
        <div className="window-title-bar select-none flex items-center gap-2 px-3 py-2 bg-black/30 backdrop-blur-md cursor-grab active:cursor-grabbing select-none border-b border-white/20">
          {icon && <span className="text-lg">{icon}</span>}
          <span className="font-semibold text-gray-100 flex-1 truncate">
            {title}
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose?.();
            }}
            className="w-7 h-7 rounded flex items-center justify-center hover:bg-white/20 text-gray-300 transition-colors"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="p-4 overflow-auto flex-1 min-h-0 text-gray-200 text-sm bg-black/20">
          {children}
        </div>
      </div>
    </Draggable>
  );
}
