import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  // The site name is added by the title template in app/layout.tsx
  title: "About Us",
  description: "The story behind Bhuvan Reweaves — turning cherished sarees into handcrafted shirts.",
};

const values = [
  {
    title: "Sarees Have Stories",
    description:
      "Every saree carries memory — a wedding, a festival, a grandmother's touch. We believe those stories deserve to live on, not sit folded in a box. We give them a second life.",
  },
  {
    title: "Zero Waste Craft",
    description:
      "When we cut a shirt from a saree, nothing is wasted. Borders become cuffs. The pallu becomes a back panel or pocket lining. Every centimetre of your saree finds its place.",
  },
  {
    title: "One Shirt at a Time",
    description:
      "We don't run factories. We run a workshop. Each shirt is cut and sewn individually, by a craftsperson who understands the specific saree they are working with — its drape, its weave, its weight.",
  },
];

const process = [
  { step: "01", title: "You Send the Saree", description: "Post your saree to us. Cotton, silk, Kanchipuram, Banarasi — any saree works." },
  { step: "02", title: "We Consult", description: "Our team reviews the saree with you — fabric width, pattern placement, what to preserve and how." },
  { step: "03", title: "We Craft", description: "The saree is carefully cut and stitched into your shirt, preserving borders and patterns exactly where they belong." },
  { step: "04", title: "Delivered Home", description: "Your shirt — and any leftover fabric — is shipped back to you, carefully packed, within 14 days." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1400&q=80"
          alt="A saree being carefully cut by hand"
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
              A Saree Is Never
              <br />
              <span className="italic font-light">Just a Saree.</span>
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
              <div className="space-y-5 text-[15px] leading-relaxed text-brown/70">
                <p>
                  Some sarees carry more than memories. They hold moments, people and pieces of our
                  lives that we never quite want to let go of.
                </p>
                <p>
                  It could be your mother&rsquo;s favourite saree, the one she wore for a special
                  occasion. A saree that belonged to someone you love. Or a beautiful 25-year-old
                  treasure that has stayed with you through the years. Each one has a story, and
                  sometimes, letting go of it feels impossible.
                </p>
                <p className="py-2 font-serif text-2xl italic leading-snug text-brown">
                  But what if you could give that story a new beginning?
                </p>
                <p>
                  At Bhuvan Reweaves, we believe cherished sarees deserve to be worn, loved and
                  celebrated all over again. We transform them into thoughtfully redesigned kurtas and
                  shirts, giving treasured fabrics a new form while keeping the memories woven into
                  them.
                </p>
                <p>
                  And if you don&rsquo;t have a saree of your own to reimagine, that&rsquo;s perfectly
                  alright. You can find a saree you love from our collection, and we&rsquo;ll help you
                  turn it into something uniquely yours.
                </p>
                <p className="border-l-2 border-brown/30 pl-5 font-serif text-xl italic leading-snug text-brown">
                  Because some memories are simply too beautiful to stay folded away.
                </p>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80"
                  alt="A vibrant silk saree"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
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
            <h2 className="font-serif text-4xl md:text-5xl text-cream max-w-md">Our Philosophy</h2>
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
            <p className="section-subtitle">How It Works</p>
            <h2 className="section-title max-w-md">From Your Saree to Your Shirt</h2>
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
          <h2 className="font-serif text-3xl text-brown mb-4">Ready to Reweave?</h2>
          <p className="text-sm text-brown/60 mb-8">
            Browse shirts we've made from other sarees, or start the process with yours.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/shop" className="btn-primary">Shop Saree Shirts</Link>
            <Link href="/customization" className="btn-outline">Send Your Saree</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
