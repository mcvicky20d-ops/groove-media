import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Marquee from "@/components/Marquee";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/site";

const featured = [
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
    alt: "Cinematic wedding couple portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80",
    alt: "Wedding ceremony moment",
  },
  {
    src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=900&q=80",
    alt: "Corporate film production setup",
  },
  {
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
    alt: "Live event crowd",
  },
  {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80",
    alt: "Bride candid portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80",
    alt: "Brand interview shoot",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Marquee />

      <section className="container-px py-24">
        <SectionHeading
          eyebrow="What we do"
          title="Three crafts. One production house."
          subtitle="From a South Indian kalyanam in Chennai to your brand's next big launch — we shoot every story like cinema."
        />
        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </section>

      <WhyUs />

      <section className="bg-cream py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Selected work"
            title="A glimpse through our lens"
            subtitle="Frames from weddings, brands and events we've had the honour to film."
          />
          <div className="mt-14">
            <Gallery images={featured} />
          </div>
          <Reveal className="mt-12 flex justify-center">
            <Link href="/weddings" className="btn-primary">
              See more work <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      <Process light />
      <Testimonials />
      <CTA />
    </>
  );
}
