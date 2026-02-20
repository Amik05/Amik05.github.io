export function ProjectsContent() {
  const projects = [
    {
      title: "Desktop Portfolio",
      desc: "This site — draggable windows, React + Tailwind.",
    },
  ];
  return (
    <div className="space-y-4">
      <p className="text-gray-300">Projects and work.</p>
      <div className="space-y-3">
        {projects.map(({ title, desc }) => (
          <div
            key={title}
            className="p-3 rounded-lg bg-white/10 border border-white/20"
          >
            <h3 className="font-semibold text-white">{title}</h3>
            <p className="text-sm text-gray-300 mt-1">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
