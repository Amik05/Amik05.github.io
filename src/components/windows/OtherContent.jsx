export function OtherContent() {
  const faqs = [
    { q: "Can I move the windows?", a: "Yes! Drag them by the title bar." },
    { q: "How do I close a window?", a: "Click the × button." },
  ];
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-white">FAQ</h3>
      <ul className="space-y-3">
        {faqs.map(({ q, a }) => (
          <li key={q}>
            <p className="font-medium text-gray-200">{q}</p>
            <p className="text-sm text-gray-300 mt-0.5">{a}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
