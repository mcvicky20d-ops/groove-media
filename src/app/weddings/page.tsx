import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import { services } from "@/lib/site";

const wedding = services.find((s) => s.slug === "weddings")!;

export const metadata: Metadata = {
  title: "Wedding Films & Photography in Chennai",
  description:
    "Cinematic wedding films, candid photography, pre-wedding and same-day edits in Chennai. The Groove Media turns your big day into a film you'll relive forever.",
};

const packages = [
  {
    name: "Classic",
    desc: "Single-day coverage with a cinematic highlight film and candid photo set.",
    points: ["1-day coverage", "3–4 min highlight film", "300+ edited photos"],
  },
  {
    name: "Signature",
    desc: "Multi-event storytelling with teaser, full film and a curated album.",
    points: [
      "Multi-day coverage",
      "Teaser + full film",
      "Drone + 2-camera crew",
    ],
    featured: true,
  },
  {
    name: "Luxe",
    desc: "The complete cinematic experience — pre-wedding to same-day edit.",
    points: [
      "Pre-wedding shoot",
      "Same-day edit screening",
      "Premium album + reels",
    ],
  },
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
    alt: "Wedding couple walking",
  },
  {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=900&q=80",
    alt: "Bride getting ready",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80",
    alt: "Ceremony exchange of rings",
  },
  {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80",
    alt: "Candid bride portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=900&q=80",
    alt: "Wedding rings detail",
  },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
    alt: "Couple golden hour portrait",
  },
];

export default function WeddingsPage() {
  return (
    <>
      <PageHero
        eyebrow="Wedding Films & Photography"
        title="Your love story, shot like a film"
        subtitle="From the nervous first look to the last sparkler — we capture the feeling, not just the footage, and craft it into something you'll watch for a lifetime."
        image="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="container-px grid items-center gap-14 py-24 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-8 bg-gold-500" />
            The feeling first
          </span>
          <h2 className="mt-5 heading-xl text-forest-900">
            Films that make you feel it all over again
          </h2>
          <p className="mt-6 leading-relaxed text-forest-700/80">
            {wedding.description}
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {wedding.features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 text-sm text-forest-800"
              >
                <Check
                  size={18}
                  className="mt-0.5 shrink-0 text-forest-500"
                />
                {f}
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn-primary mt-9">
            Check your date <ArrowRight size={18} />
          </Link>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 gap-4">
            <div
              className="aspect-[3/4] rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=700&q=80)",
              }}
            />
            <div
              className="mt-10 aspect-[3/4] rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=700&q=80)",
              }}
            />
          </div>
        </Reveal>
      </section>

      <section className="bg-cream py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Packages"
            title="Coverage for every kind of celebration"
            subtitle="Flexible packages, always tailored. Final pricing is shared after a quick chat about your day."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {packages.map((p, i) => (
              <Reveal
                key={p.name}
                delay={i * 0.1}
                className={`flex flex-col rounded-3xl border p-8 ${
                  p.featured
                    ? "border-gold-300 bg-forest-900 text-cream shadow-xl"
                    : "border-forest-100 bg-white"
                }`}
              >
                <h3
                  className={`font-display text-2xl font-bold ${
                    p.featured ? "text-gold-300" : "text-forest-900"
                  }`}
                >
                  {p.name}
                </h3>
                <p
                  className={`mt-3 text-sm ${
                    p.featured ? "text-cream/70" : "text-forest-700/70"
                  }`}
                >
                  {p.desc}
                </p>
                <ul className="mt-6 flex flex-col gap-3 text-sm">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2">
                      <Check
                        size={16}
                        className={
                          p.featured ? "text-gold-300" : "text-forest-500"
                        }
                      />
                      <span
                        className={
                          p.featured ? "text-cream/80" : "text-forest-800"
                        }
                      >
                        {pt}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-8 ${
                    p.featured ? "btn-primary" : "btn-ghost !text-forest-900 !border-forest-200 hover:!border-gold-400 hover:!text-gold-600"
                  }`}
                >
                  Enquire
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px py-24">
        <SectionHeading
          eyebrow="Wedding gallery"
          title="Moments we were lucky to film"
        />
        <div className="mt-14">
          <Gallery images={gallery} />
        </div>
      </section>

      <Process light />
      <Testimonials />
      <CTA />
    </>
  );
}
