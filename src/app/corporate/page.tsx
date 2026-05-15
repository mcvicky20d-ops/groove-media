import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Megaphone, Clapperboard, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import { services } from "@/lib/site";

const corp = services.find((s) => s.slug === "corporate")!;

export const metadata: Metadata = {
  title: "Corporate Videos & Ad Film Production in Chennai",
  description:
    "High-impact brand films, performance ad creatives and corporate video production in Chennai. The Groove Media handles concept to delivery — built to convert.",
};

const offerings = [
  {
    icon: Clapperboard,
    title: "Brand & corporate films",
    body: "Documentary-style brand stories, culture films and investor-ready showcases.",
  },
  {
    icon: Megaphone,
    title: "Performance ad creatives",
    body: "Scroll-stopping ads engineered for paid social and conversion campaigns.",
  },
  {
    icon: Users,
    title: "Founder & testimonial films",
    body: "Authentic interviews and case-study videos that build instant trust.",
  },
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80",
    alt: "Film production crew",
  },
  {
    src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=900&q=80",
    alt: "Camera on set",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80",
    alt: "Corporate interview shoot",
  },
  {
    src: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80",
    alt: "Studio lighting setup",
  },
  {
    src: "https://images.unsplash.com/photo-1579632652768-6cb9dcf85912?auto=format&fit=crop&w=900&q=80",
    alt: "Director reviewing footage",
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
    alt: "Team strategy session",
  },
];

export default function CorporatePage() {
  return (
    <>
      <PageHero
        eyebrow="Corporate & Ad Films"
        title="Video that moves your brand forward"
        subtitle="Strategy-led brand films and performance ads — produced end to end by a crew that understands business outcomes, not just beautiful shots."
        image="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="container-px py-24">
        <SectionHeading
          eyebrow="What we produce"
          title="From boardroom to billboard"
          subtitle={corp.description}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {offerings.map((o, i) => (
            <Reveal
              key={o.title}
              delay={i * 0.1}
              className="rounded-2xl border border-forest-100 bg-white p-8 transition-shadow hover:shadow-xl"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-forest-900 text-gold-300">
                <o.icon size={22} />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-forest-900">
                {o.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-forest-700/70">
                {o.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-forest-900 py-24">
        <div className="container-px grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow text-gold-300">
              <span className="h-px w-8 bg-gold-400" />
              Built to convert
            </span>
            <h2 className="mt-5 heading-xl text-cream">
              Creative that respects the brief and the bottom line
            </h2>
            <p className="mt-6 leading-relaxed text-cream/70">
              Every project starts with your objective — awareness, launch,
              pipeline or trust — and works backward into a creative that
              actually delivers it.
            </p>
            <ul className="mt-8 grid gap-3">
              {corp.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-sm text-cream/80"
                >
                  <Check size={18} className="mt-0.5 shrink-0 text-gold-300" />
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-primary mt-9">
              Brief us on your project <ArrowRight size={18} />
            </Link>
          </Reveal>
          <Reveal delay={0.15}>
            <div
              className="aspect-[4/3] rounded-3xl bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80)",
              }}
            />
          </Reveal>
        </div>
      </section>

      <section className="container-px py-24">
        <SectionHeading eyebrow="Production stills" title="On set with brands" />
        <div className="mt-14">
          <Gallery images={gallery} />
        </div>
      </section>

      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}
