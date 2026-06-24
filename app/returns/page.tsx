"use client";

import React from "react";
import { motion } from "framer-motion";
import { RefreshCw, X, Truck, CreditCard, HelpCircle } from "lucide-react";
import Link from "next/link";

const policies = [
  {
    icon: RefreshCw,
    title: "Exchange Available",
    description:
      "We accept size exchanges within 7 days of delivery. The garment must be unworn, unwashed, and in its original packaging.",
    highlight: true,
    color: "border-brown/20 bg-beige/20",
  },
  {
    icon: X,
    title: "No Returns",
    description:
      "Due to the handcrafted and custom nature of our garments, we do not accept returns. Each piece is made to order or in limited quantities.",
    highlight: false,
    color: "border-beige",
  },
  {
    icon: Truck,
    title: "Shipping Across India",
    description:
      "We deliver to all states and union territories in India. Free shipping on orders above ₹2000. Standard delivery takes 5-7 working days.",
    highlight: false,
    color: "border-beige",
  },
  {
    icon: CreditCard,
    title: "No Cash on Delivery",
    description:
      "We accept prepaid payments only — UPI, credit/debit cards, and net banking. This helps us ensure quality commitment from both sides.",
    highlight: false,
    color: "border-beige",
  },
];

const faqs = [
  {
    q: "How do I initiate a size exchange?",
    a: "Contact us via WhatsApp (+91 98765 43210) or email (hello@bhuvanreweaves.com) within 7 days of receiving your order. Mention your order number and the size you'd like to exchange to.",
  },
  {
    q: "Who bears the shipping cost for exchanges?",
    a: "For exchanges due to manufacturing defects or incorrect items shipped, we bear the full shipping cost both ways. For size exchanges at customer's request, the customer bears the return shipping cost.",
  },
  {
    q: "What if my garment arrives damaged?",
    a: "In the rare event that a garment arrives damaged, please photograph the damage and contact us immediately. We will resolve it promptly — either through repair, replacement, or refund.",
  },
  {
    q: "Can I cancel my custom order?",
    a: "Custom orders can be cancelled within 24 hours of placing the order. After that, since production begins, cancellations are not possible.",
  },
  {
    q: "Why no returns?",
    a: "Our garments are handcrafted in small batches or made-to-order. Unlike mass-produced items, every piece involves significant artisan hours. We ensure quality before shipping so you receive exactly what you ordered.",
  },
];

export default function ReturnsPage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 border-b border-beige">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Policies</p>
          <h1 className="font-serif text-4xl md:text-5xl text-brown">
            Return & Exchange
          </h1>
          <p className="mt-4 text-sm text-brown/50 max-w-lg">
            We believe in transparency. Here's exactly what to expect — no fine print, no surprises.
          </p>
        </motion.div>
      </div>

      {/* Policy Cards */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {policies.map((policy, i) => (
            <motion.div
              key={policy.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`p-8 border ${policy.color}`}
            >
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 border border-warm-beige flex items-center justify-center flex-shrink-0">
                  <policy.icon
                    size={16}
                    className={policy.highlight ? "text-brown" : "text-brown/50"}
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-brown mb-3">{policy.title}</h3>
                  <p className="text-sm text-brown/60 leading-relaxed">{policy.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Summary Banner */}
      <section className="bg-brown text-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-serif text-2xl text-cream mb-2">In Summary</h2>
              <div className="flex flex-col gap-1.5">
                {[
                  "Exchange accepted within 7 days",
                  "No returns (handcrafted items)",
                  "Free shipping on orders above ₹2000",
                  "Prepaid orders only (no COD)",
                  "Damage/defect claims resolved immediately",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-cream/50" />
                    <p className="text-sm text-cream/70">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0 text-center">
              <p className="text-xs tracking-widest uppercase text-cream/40 mb-3">
                Questions?
              </p>
              <Link
                href="/contact"
                className="inline-block bg-cream text-brown px-6 py-3 text-xs tracking-widest uppercase hover:bg-beige transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle size={16} className="text-brown/50" strokeWidth={1.5} />
            <p className="section-subtitle mb-0">Common Questions</p>
          </div>
          <h2 className="section-title max-w-md">Frequently Asked</h2>
        </motion.div>

        <div className="max-w-2xl divide-y divide-beige">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className="text-sm font-medium text-brown group-hover:opacity-70 transition-opacity pr-4">
                  {faq.q}
                </span>
                <span className={`text-brown/40 transition-transform duration-300 flex-shrink-0 ${
                  openFaq === i ? "rotate-45" : ""
                }`}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
                  </svg>
                </span>
              </button>
              {openFaq === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="pb-5"
                >
                  <p className="text-sm text-brown/60 leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
