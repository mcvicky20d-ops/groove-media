import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

/**
 * Brand logo. To use the exact artwork, replace /public/logo.svg
 * (or drop a PNG at /public/logo.png and update the src below).
 */
export default function Logo({
  className = "",
}: {
  className?: string;
  /** kept for API compatibility; the logo asset works on dark backgrounds */
  variant?: "light" | "dark";
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`group inline-flex items-center ${className}`}
    >
      <Image
        src="/logo.svg"
        alt={`${site.legalName} logo`}
        width={300}
        height={76}
        priority
        unoptimized
        className="h-10 w-auto transition-transform duration-500 group-hover:-translate-y-0.5 sm:h-11"
      />
    </Link>
  );
}
