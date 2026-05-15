const items = [
  "Advertising Films",
  "Brand Campaigns",
  "Commercial Photography",
  "Digital Content",
  "Creative Direction",
  "Cinematography",
  "Post Production",
  "Wedding Vertical",
];

export default function Marquee() {
  return (
    <div className="border-y border-forest-100 bg-cream py-5">
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-10 text-sm font-semibold uppercase tracking-[0.2em] text-forest-700/60"
            >
              {item}
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
