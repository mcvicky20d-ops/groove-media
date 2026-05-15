import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Radio, Video, Zap } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import { services } from "@/lib/site";

const ev = services.find((s) => s.slug === "events")!;

export const metadata: Metadata = {
  title: "Event & Program Videography in Chennai",
  description:
    "Multi-camera event coverage, concert and stage program films, conference recaps and live streaming in Chennai by The Groove Media.",
};

const formats = [
  {
    icon: Video,
    title: "Multi-camera coverage",
    body: "Synced multi-angle capture so no key moment is ever missed.",
  },
  {
    icon: Radio,
    title: "Live streaming",
    body: "Reliable, broadcast-quality streams for hybrid and remote audiences.",
  },
  {
    icon: Zap,
    title: "Fast recap reels",
    body: "Same-day or next-day highlight reels ready to share while it's still trending.",
  },
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=900&q=80",
    alt: "Concert stage lights",
  },
  {
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
    alt: "Event crowd",
  },
  {
    src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=80",
    alt: "Conference stage",
  },
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80",
    alt: "Conference audience",
  },
  {
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80",
    alt: "Stage performance",
  },
  {
    src: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=900&q=80",
    alt: "Product launch event",
  },
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events & Programs"
        title="Every moment, every angle, on time"
        subtitle="Conferences, concerts, launches and cultural programs — covered by a calm multi-camera crew and delivered as films your audience will actually rewatch."
        image="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="container-px py-24">
        <SectionHeading
          eyebrow="Coverage formats"
          title="Whatever the stage, we've got it covered"
          subtitle={ev.description}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {formats.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 0.1}
              className="rounded-2xl border border-forest-100 bg-white p-8 transition-shadow hover:shadow-xl"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400 text-forest-900">
                <f.icon size={22} />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-forest-900">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-forest-700/70">
                {f.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="container-px grid items-center gap-14 lg:grid-cols-2">
          <Reveal delay={0.1}>
            <div
              className="aspect-[4/3] rounded-3xl bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1000&q=80)",
              }}
            />
          </Reveal>
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-8 bg-gold-500" />
              Reliable on the day
            </span>
            <h2 className="mt-5 heading-xl text-forest-900">
              A crew that stays calm so your event runs smooth
            </h2>
            <p className="mt-6 leading-relaxed text-forest-700/80">
              Live events have one take. We bring backups for everything —
              cameras, audio, power and people — so the only thing you notice
              is a great final film.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {ev.features.map((f) => (
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
              Plan your event coverage <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="container-px py-24">
        <SectionHeading eyebrow="Event gallery" title="From stage to screen" />
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
