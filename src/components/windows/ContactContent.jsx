export function ContactContent() {
  const links = [
    { label: "Twitter", href: "https://twitter.com", emoji: "🐦" },
    { label: "GitHub", href: "https://github.com", emoji: "🐙" },
  ];
  return (
    <div className="space-y-3">
      <p className="text-gray-400 text-xs">Opens in a new tab.</p>
      <ul className="space-y-2">
        {links.map(({ label, href, emoji }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white hover:underline transition-colors"
            >
              <span>{emoji}</span>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
