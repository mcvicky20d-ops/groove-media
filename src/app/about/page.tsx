import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Camera, Clapperboard, Film, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import CTA from "@/components/CTA";
import { capabilities, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About the Studio",
  description:
    "The Groove Media is an independent film production company established in 2018 in Chennai, working across advertising, commercial filmmaking and brand storytelling.",
};

const focus = [
  {
    icon: Film,
    title: "Advertising Films",
    body: "Commercial and advertising films built around a clear idea and strong visuals.",
  },
  {
    icon: Clapperboard,
    title: "Brand Campaigns",
    body: "Campaign content for modern digital platforms and brand storytelling.",
  },
  {
    icon: Camera,
    title: "Commercial Photography",
    body: "Product, fashion and brand photography with a cinematic finish.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={`Film & Visual Production · ${site.city}`}
        title="The Groove Media"
        subtitle="An independent film production company established in 2018 — working across advertising, commercial filmmaking and brand storytelling for modern campaigns and digital platforms."
        image="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="container-px grid items-center gap-14 py-24 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-8 bg-gold-500" />
            Who we are
          </span>
          <h2 className="mt-5 heading-xl text-forest-900">
            A film-led production studio in Chennai
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-forest-700/80">
            <p>
              The Groove Media is an independent film production company
              established in {site.established}. The studio works across
              advertising, commercial filmmaking and brand storytelling —
              producing visual content for modern campaigns and digital
              platforms.
            </p>
            <p>
              The company is led by{" "}
              <strong className="text-forest-900">{site.lead.name}</strong> (
              {site.lead.role}), working with a network of filmmakers,
              photographers, editors and production professionals.
            </p>
            <p>
              We approach each project with a simple goal — make work that
              connects with people.
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
                  "url(https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=700&q=80)",
              }}
            />
            <div
              className="mt-8 aspect-square rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=700&q=80)",
              }}
            />
            <div
              className="aspect-square rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=700&q=80)",
              }}
            />
            <div
              className="mt-8 aspect-square rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=700&q=80)",
              }}
            />
          </div>
        </Reveal>
      </section>

      <section className="container-px pb-24">
        <SectionHeading
          eyebrow="What we focus on"
          title="Built around ideas, visuals and execution"
          subtitle={capabilities.join("  ·  ")}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {focus.map((v, i) => (
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

      <Stats />
      <Clients />

      <section className="container-px grid items-center gap-14 py-24 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-8 bg-gold-500" />
            Weddings
          </span>
          <h2 className="mt-5 heading-xl text-forest-900">
            A select wedding vertical
          </h2>
          <p className="mt-6 leading-relaxed text-forest-700/80">
            In addition to commercial production, Groove Media also works on
            select wedding stories. These projects are approached with the same
            filmmaking process — focusing on natural moments, cinematic visuals
            and long-term storytelling.
          </p>
          <Link href="/weddings" className="btn-primary mt-8">
            See wedding work <ArrowRight size={18} />
          </Link>
        </Reveal>
        <Reveal delay={0.15}>
          <div
            className="aspect-[4/3] rounded-3xl bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80)",
            }}
          />
        </Reveal>
      </section>

      <section className="bg-forest-900 py-24">
        <div className="container-px grid gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow text-gold-300">
              <span className="h-px w-8 bg-gold-400" />
              The direction ahead
            </span>
            <h2 className="mt-5 heading-xl text-cream">
              Evolving as a film-led studio
            </h2>
            <p className="mt-6 leading-relaxed text-cream/70">
              Groove Media continues to evolve as a film-led production studio,
              expanding its work in advertising and campaign filmmaking. The
              next phase includes building a dedicated production and studio
              space to support larger productions and collaborations.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex h-full flex-col justify-center rounded-3xl border border-white/10 bg-white/5 p-10">
              <p className="font-display text-2xl font-bold text-gold-300">
                Final note
              </p>
              <p className="mt-4 text-lg leading-relaxed text-cream/80">
                We keep things simple. Good ideas. Strong visuals. Clear
                storytelling. That&apos;s Groove Media.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
