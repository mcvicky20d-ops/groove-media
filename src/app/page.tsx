import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import Stats from "@/components/Stats";
import Marquee from "@/components/Marquee";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";
import Clients from "@/components/Clients";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { capabilities, services } from "@/lib/site";

const featured = [
  {
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80",
    alt: "On set — advertising film production",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80",
    alt: "Brand interview shoot",
  },
  {
    src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=900&q=80",
    alt: "Wedding film vertical",
  },
  {
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
    alt: "Live event & launch coverage",
  },
  {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80",
    alt: "Portrait & campaign photography",
  },
  {
    src: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80",
    alt: "Studio lighting & cinematography",
  },
];

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Home", path: "/" }])}
      />
      <Hero />
      <Stats />
      <Marquee />

      <section className="container-px py-24">
        <SectionHeading
          eyebrow="What we do"
          title="Films for brands, people and ideas"
          subtitle={capabilities.join("  ·  ")}
        />
        <Reveal className="mx-auto mt-8 max-w-2xl text-center text-sm text-forest-700/70">
          Alongside commercial work, we also create select wedding films and
          photography projects through our dedicated vertical.
        </Reveal>
        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </section>

      <Clients />

      <section className="bg-forest-900 py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Production"
            title="From concept to delivery, handled end-to-end"
            subtitle="We work closely with brands, agencies and creative teams to build work that feels relevant and visually strong."
            light
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Creative Direction",
              "Production",
              "Cinematography",
              "Post Production",
              "Campaign Content",
            ].map((step, i) => (
              <Reveal
                key={step}
                delay={(i % 3) * 0.1}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <span className="font-display text-2xl font-bold text-gold-300">
                  0{i + 1}
                </span>
                <span className="font-display text-lg font-semibold text-cream">
                  {step}
                </span>
              </Reveal>
            ))}
            <Reveal
              delay={0.2}
              className="flex items-center justify-between rounded-2xl bg-gold-400 p-6 text-forest-900"
            >
              <span className="font-display text-lg font-bold">
                Start a project
              </span>
              <Link href="/contact" aria-label="Contact us">
                <ArrowRight />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Selected work"
            title="A glimpse through our lens"
            subtitle="Frames from advertising, brand, event and wedding projects produced by the studio."
          />
          <div className="mt-14">
            <Gallery images={featured} />
          </div>
        </div>
      </section>

      <Process light />

      <section className="container-px py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow justify-center">
              <span className="h-px w-8 bg-gold-500" />
              The work matters
            </span>
            <h2 className="mt-6 heading-xl text-forest-900">
              Good films come from clarity
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-forest-700/80">
              A strong idea, the right team, and careful execution. That&apos;s
              the focus at Groove Media — we keep things simple. Good ideas.
              Strong visuals. Clear storytelling.
            </p>
          </Reveal>
        </div>
      </section>

      <Testimonials />
      <CTA />
    </>
  );
}
