export function AboutContent() {
  return (
    <div className="space-y-4">
      <p className="leading-relaxed text-gray-200">
        Hi! This is a desktop-style portfolio. You can drag these windows around
        and open more from the menu.
      </p>
      <p className="leading-relaxed text-gray-200">
        Built with React, JavaScript, and Tailwind.
      </p>
      <ul className="list-disc list-inside space-y-1 text-gray-300">
        <li>Draggable windows</li>
        <li>Multiple panels</li>
      </ul>
    </div>
  );
}
