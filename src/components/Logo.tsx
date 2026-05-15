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
      <span className="relative inline-flex h-11 w-11 items-center justify-center">
        {/* Tilted gold film-strip mark — echoes the brand logo */}
        <svg
          viewBox="0 0 48 48"
          className="h-10 w-10 transition-transform duration-500 group-hover:-translate-y-0.5"
          aria-hidden="true"
        >
          <g
            transform="rotate(-32 24 24)"
            fill="none"
            stroke="#f0bb24"
            strokeWidth="3"
          >
            <rect x="6" y="15" width="36" height="18" rx="2.5" />
            <g fill="#f0bb24" stroke="none">
              <rect x="10" y="18.5" width="3.4" height="3.4" rx="0.6" />
              <rect x="17" y="18.5" width="3.4" height="3.4" rx="0.6" />
              <rect x="24" y="18.5" width="3.4" height="3.4" rx="0.6" />
              <rect x="31" y="18.5" width="3.4" height="3.4" rx="0.6" />
              <rect x="10" y="26" width="3.4" height="3.4" rx="0.6" />
              <rect x="17" y="26" width="3.4" height="3.4" rx="0.6" />
              <rect x="24" y="26" width="3.4" height="3.4" rx="0.6" />
              <rect x="31" y="26" width="3.4" height="3.4" rx="0.6" />
            </g>
          </g>
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
