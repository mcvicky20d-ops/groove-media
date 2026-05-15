import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

/**
 * Brand logo (the supplied artwork at /public/logo.png).
 * Transparent PNG, square — renders on the dark header & footer.
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
        sizes="80px"
        className="h-12 w-12 transition-transform duration-500 group-hover:-translate-y-0.5 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
      />
    </Link>
  );
}
