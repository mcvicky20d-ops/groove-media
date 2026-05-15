import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: Props) {
  return (
    <Reveal
      className={`flex flex-col gap-4 ${
        align === "center" ? "items-center text-center" : "items-start"
      }`}
    >
      {eyebrow && (
        <span className="eyebrow">
          <span className="h-px w-8 bg-gold-500" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`heading-xl max-w-3xl ${
          light ? "text-cream" : "text-forest-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-2xl text-base leading-relaxed sm:text-lg ${
            light ? "text-cream/70" : "text-forest-700/80"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
