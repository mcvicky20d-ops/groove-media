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
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMeta, serviceJsonLd } from "@/lib/seo";
import { services } from "@/lib/site";

const wedding = services.find((s) => s.slug === "weddings")!;

export const metadata: Metadata = pageMeta({
  title: "Wedding Films & Photography in Chennai",
  description:
    "Cinematic wedding films, candid photography, pre-wedding and same-day edits in Chennai. The Groove Media turns your big day into a film you'll relive forever.",
  path: "/weddings",
  keywords: [
    "wedding videography Chennai",
    "cinematic wedding films Chennai",
    "South Indian wedding photography",
    "candid wedding photographer Chennai",
    "pre-wedding shoot Chennai",
  ],
});

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
    alt: "Wedding couple portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
    alt: "Couple at golden hour",
  },
  {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=900&q=80",
    alt: "Bride getting ready",
  },
  {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80",
    alt: "Candid bride portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=900&q=80",
    alt: "Ceremony rituals and joined hands",
  },
  {
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=900&q=80",
    alt: "Wedding rings & floral detail",
  },
];

export default function WeddingsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Weddings", path: "/weddings" },
          ]),
          serviceJsonLd({
            name: "Wedding Films & Photography",
            description:
              "Cinematic wedding films, candid photography, pre-wedding and same-day edits in Chennai.",
            path: "/weddings",
          }),
        ]}
      />
      <PageHero
        eyebrow="South Indian Wedding Films & Photography"
        title="Your wedding, shot like a film"
        subtitle="From the kasi yatra and oonjal to the muhurtham knot and grand reception — we capture the rituals, the tears and the joy of South Indian weddings, and craft them into a film you'll watch for a lifetime."
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

      <section className="relative overflow-hidden bg-forest-900 py-24">
        <div className="grain pointer-events-none absolute inset-0 opacity-50" />
        <div className="container-px relative">
          <SectionHeading
            eyebrow="Rooted in our traditions"
            title="South Indian weddings, told the way they're felt"
            subtitle="Tamil, Telugu, Malayalam or Kannada — every kalyanam has its own rhythm. We know the rituals, so the camera is always in the right place at the right moment."
            light
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                t: "Nichayathartham",
                d: "The engagement promise — families, blessings and the first official smiles, captured warmly.",
              },
              {
                t: "Kasi Yatra & Oonjal",
                d: "The playful pretend-pilgrimage and the swing ceremony — full of laughter we love to film.",
              },
              {
                t: "Muhurtham",
                d: "The sacred knot, the mangalsutra and the homam glow — the heartbeat of the whole film.",
              },
              {
                t: "Saptapadi & Rituals",
                d: "Seven steps, sacred fire, nadaswaram in the air — every tradition, honoured on screen.",
              },
              {
                t: "Reception",
                d: "Lights, stage, family and that grand entry — your celebration in full cinematic colour.",
              },
              {
                t: "Temple Weddings",
                d: "Quiet, divine and intimate — temple ceremonies covered with respect and stillness.",
              },
            ].map((r, i) => (
              <Reveal
                key={r.t}
                delay={(i % 3) * 0.1}
                className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-colors hover:border-gold-300/50"
              >
                <h3 className="font-display text-xl font-bold text-gold-300">
                  {r.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/65">
                  {r.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
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
