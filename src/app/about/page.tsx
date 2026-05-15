import type { Metadata } from "next";
import { Camera, Clapperboard, Heart, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About the Studio",
  description:
    "The Groove Media is a Chennai-based production house crafting cinematic films for weddings, brands and events. Meet the team behind the lens.",
};

const values = [
  {
    icon: Heart,
    title: "Feeling over footage",
    body: "We chase the emotion in every frame. Technically perfect means nothing if it doesn't make you feel.",
  },
  {
    icon: Clapperboard,
    title: "Story-first craft",
    body: "Every edit serves a story. We script, shoot and cut with the narrative leading the way.",
  },
  {
    icon: Camera,
    title: "Quietly professional",
    body: "On set we're calm and unobtrusive — present enough to capture it, invisible enough to let it happen.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={`Production House · ${site.city}`}
        title="The crew behind The Groove Media"
        subtitle="A Chennai collective of filmmakers, photographers and editors who believe every story deserves to be told like cinema."
        image="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="container-px grid items-center gap-14 py-24 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-8 bg-gold-500" />
            Our story
          </span>
          <h2 className="mt-5 heading-xl text-forest-900">
            Born in Chennai, obsessed with the craft
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-forest-700/80">
            <p>
              The Groove Media started with a single camera and a simple
              belief — that the moments that matter deserve to be filmed like
              they matter. Over {site.rating.count.replace("+", "+ ")} happy
              clients later, that belief hasn&apos;t changed.
            </p>
            <p>
              Today we&apos;re a full production house. Weddings, brand films,
              ad creatives and large-scale events — all handled by one team
              that owns the work from the first call to the final frame.
            </p>
            <p>
              We&apos;re based in {site.city}, but our work has travelled
              across Tamil Nadu and beyond. Wherever the story is, we show up
              for it.
            </p>
          </div>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-forest-50 px-5 py-3 text-sm font-semibold text-forest-700">
            <MapPin size={18} className="text-gold-600" />
            Based in {site.city}, {site.region}
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 gap-4">
            <div
              className="aspect-square rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&w=700&q=80)",
              }}
            />
            <div
              className="mt-8 aspect-square rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=700&q=80)",
              }}
            />
            <div
              className="aspect-square rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=700&q=80)",
              }}
            />
            <div
              className="mt-8 aspect-square rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=700&q=80)",
              }}
            />
          </div>
        </Reveal>
      </section>

      <Stats />

      <section className="container-px py-24">
        <SectionHeading
          eyebrow="What we stand for"
          title="The values behind every frame"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal
              key={v.title}
              delay={i * 0.1}
              className="rounded-2xl border border-forest-100 bg-white p-8"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-forest-900 text-gold-300">
                <v.icon size={22} />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-forest-900">
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-forest-700/70">
                {v.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
