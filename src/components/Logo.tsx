import Link from "next/link";
import { site } from "@/lib/site";

export default function Logo({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const wordmark = variant === "light" ? "text-cream" : "text-forest-800";
  const sub = variant === "light" ? "text-gold-300" : "text-gold-600";

  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className="group flex items-center gap-3"
    >
      <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold-400 shadow-[0_8px_24px_-8px_rgba(240,187,36,0.6)]">
        {/* Film-reel inspired mark */}
        <svg
          viewBox="0 0 48 48"
          className="h-7 w-7 text-forest-800 transition-transform duration-700 group-hover:rotate-180"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="24"
            cy="24"
            r="20"
            stroke="currentColor"
            strokeWidth="3"
          />
          <circle cx="24" cy="24" r="5" fill="currentColor" />
          <circle cx="24" cy="9.5" r="3" fill="currentColor" />
          <circle cx="24" cy="38.5" r="3" fill="currentColor" />
          <circle cx="9.5" cy="24" r="3" fill="currentColor" />
          <circle cx="38.5" cy="24" r="3" fill="currentColor" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-bold tracking-tight ${wordmark}`}
        >
          The Groove Media
        </span>
        <span
          className={`text-[0.6rem] font-semibold uppercase tracking-[0.32em] ${sub}`}
        >
          {site.tagline}
        </span>
      </span>
    </Link>
  );
}
