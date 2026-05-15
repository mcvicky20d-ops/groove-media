import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

/**
 * Brand logo — the owner-supplied artwork at /public/logo.png.
 * Transparent PNG; renders on the dark header & footer.
 */
export default function Logo({
  className = "",
}: {
  className?: string;
  /** kept for API compatibility; the logo works on dark backgrounds */
  variant?: "light" | "dark";
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`group inline-flex items-center ${className}`}
    >
      <Image
        src="/logo.png"
        alt={`${site.legalName} logo`}
        width={8001}
        height={8001}
        priority
        sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, 112px"
        className="h-20 w-20 drop-shadow-[0_6px_14px_rgba(0,0,0,0.45)] transition-all duration-500 group-hover:-translate-y-0.5 group-hover:drop-shadow-[0_10px_22px_rgba(240,187,36,0.35)] sm:h-24 sm:w-24 lg:h-28 lg:w-28"
      />
    </Link>
  );
}
