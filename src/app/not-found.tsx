import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-forest-900 px-6 text-center">
      <div>
        <p className="font-display text-7xl font-bold text-gold-300 sm:text-9xl">
          404
        </p>
        <h1 className="mt-4 font-display text-2xl font-bold text-cream sm:text-3xl">
          This scene didn&apos;t make the final cut
        </h1>
        <p className="mx-auto mt-3 max-w-md text-cream/60">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get
          you back to the story.
        </p>
        <Link href="/" className="btn-primary mt-8">
          <ArrowLeft size={18} /> Back home
        </Link>
      </div>
    </section>
  );
}
