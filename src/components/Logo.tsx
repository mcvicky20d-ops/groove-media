import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

/**
 * Brand logo — renders the crisp vector mark (/public/logo.svg) so the
 * white wordmark stays sharp at every size. Sits on the dark header/footer.
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
        src="/logo.svg"
        alt={`${site.legalName} logo`}
        width={560}
        height={560}
        priority
        sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 96px"
        className="h-16 w-16 drop-shadow-[0_6px_14px_rgba(0,0,0,0.45)] transition-all duration-500 group-hover:-translate-y-0.5 group-hover:drop-shadow-[0_10px_22px_rgba(240,187,36,0.35)] sm:h-20 sm:w-20 lg:h-24 lg:w-24"
      />
    </Link>
  );
}
