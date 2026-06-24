import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us — Bhuvan Reweaves",
  description: "The story behind Bhuvan Reweaves — handcrafted Indian clothing with a soul.",
};

const values = [
  {
    title: "Rooted in Craft",
    description:
      "We work directly with artisan communities across India — weavers in Coimbatore, block printers in Bagru, embroiderers in Lucknow. Every garment is a direct collaboration between designer and maker.",
  },
  {
    title: "Fabric as Philosophy",
    description:
      "We believe the fabric is the garment. Before a single cut is made, we spend weeks sourcing the right textile — testing its breathability, drape, durability, and story.",
  },
  {
    title: "Slow Fashion",
    description:
      "We produce in small batches. No overstock, no waste. Each collection is limited and intentional. We'd rather make fewer things better than many things faster.",
  },
];

const process = [
  { step: "01", title: "Concept", description: "Every collection begins with a conversation — with artisans, with customers, with the fabric itself." },
  { step: "02", title: "Source", description: "We travel across India to find the right weaves, the right dyes, the right makers for each garment." },
  { step: "03", title: "Craft", description: "Skilled artisans bring the concept to life — weaving, cutting, stitching, and finishing by hand." },
  { step: "04", title: "Perfect", description: "Each garment is inspected for quality before it reaches you. We fix what we're not proud of." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1400&q=80"
          alt="Our craft"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 to-charcoal/80" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full pb-16 pt-32">
            <p className="text-xs tracking-[0.3em] uppercase text-cream/50 mb-4">Our Story</p>
            <h1 className="font-serif text-5xl md:text-6xl text-cream leading-tight max-w-2xl">
              Craft Is Our
              <br />
              <span className="italic font-light">Mother Tongue</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-subtitle">The Beginning</p>
              <h2 className="section-title mb-8">Why We Started</h2>
              <div className="space-y-5 text-sm text-brown/60 leading-relaxed">
                <p>
                  Bhuvan Reweaves was born from a simple frustration: the impossibility of finding a well-made shirt that fit perfectly, was made ethically, and carried genuine craft.
                </p>
                <p>
                  Bhuvan, the founder, grew up watching his grandmother run a small tailoring shop. The smell of fresh fabric, the sound of scissors on cloth, the quiet pride of a garment well-made — these memories became a blueprint.
                </p>
                <p>
                  In 2022, after years working in fashion retail, he returned to those roots. He spent six months visiting weaver cooperatives and artisan clusters across India, building relationships before building a business.
                </p>
                <p>
                  The result is Bhuvan Reweaves — a brand that treats garments as collaborations between designer, maker, and wearer.
                </p>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80"
                  alt="Fabric texture"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-cream border border-beige p-6 max-w-xs shadow-sm">
                <p className="font-serif text-3xl text-brown">2022</p>
                <p className="text-xs text-brown/50 tracking-widest uppercase mt-1">Founded</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-brown text-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-cream/40 mb-4">What We Believe</p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream max-w-md">Our Mission</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((val) => (
              <div key={val.title} className="border-t border-cream/10 pt-8">
                <h3 className="font-serif text-xl text-cream mb-4">{val.title}</h3>
                <p className="text-sm text-cream/60 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <p className="section-subtitle">How We Work</p>
            <h2 className="section-title max-w-md">The Craftsmanship Process</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-0">
            {process.map((item) => (
              <div key={item.step} className="relative border-r border-beige last:border-r-0 pr-8 pl-8 first:pl-0 py-8">
                <span className="font-serif text-5xl text-beige block mb-4">{item.step}</span>
                <h3 className="font-serif text-xl text-brown mb-3">{item.title}</h3>
                <p className="text-sm text-brown/60 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-beige/30 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-3xl text-brown mb-4">Wear the Story</h2>
          <p className="text-sm text-brown/60 mb-8">
            Every garment has a maker behind it. Every purchase supports a craft that spans generations.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/shop" className="btn-primary">Shop the Collection</Link>
            <Link href="/customization" className="btn-outline">Customize Yours</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
