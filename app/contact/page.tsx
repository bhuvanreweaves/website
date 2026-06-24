"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Instagram, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 border-b border-beige">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Reach Out</p>
          <h1 className="font-serif text-4xl md:text-5xl text-brown">Get In Touch</h1>
          <p className="mt-4 text-sm text-brown/50 max-w-lg">
            Questions about your order, customization inquiries, or just want to talk about fabric? We're here.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <div className="py-16 text-center">
                <div className="w-12 h-12 border border-brown flex items-center justify-center mx-auto mb-6">
                  <Mail size={20} className="text-brown" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl text-brown mb-3">Message Sent</h3>
                <p className="text-sm text-brown/50 mb-6">
                  We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs tracking-widest uppercase text-brown/50 hover:text-brown transition-colors underline"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <Label htmlFor="name" className="mb-2 block">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="mb-2 block">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="mb-2 block">Phone / WhatsApp</Label>
                  <Input
                    id="phone"
                    placeholder="+91 XXXXX XXXXX"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="mb-2 block">Message</Label>
                  <textarea
                    id="message"
                    placeholder="Tell us how we can help..."
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full border-0 border-b border-warm-beige bg-transparent py-3 text-brown placeholder:text-brown/30 focus:outline-none focus:border-brown transition-colors text-sm resize-none"
                  />
                </div>

                <Button type="submit" size="lg">
                  Send Message
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-10"
          >
            <div>
              <h3 className="font-serif text-2xl text-brown mb-8">Other Ways to Reach Us</h3>

              <div className="flex flex-col gap-6">
                {[
                  {
                    icon: MessageCircle,
                    label: "WhatsApp",
                    value: "+91 98765 43210",
                    href: "https://wa.me/919876543210",
                    note: "Fastest response — usually within 1-2 hours",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "hello@bhuvanreweaves.com",
                    href: "mailto:hello@bhuvanreweaves.com",
                    note: "For detailed inquiries and orders",
                  },
                  {
                    icon: Instagram,
                    label: "Instagram",
                    value: "@bhuvanreweaves",
                    href: "https://instagram.com/bhuvanreweaves",
                    note: "Follow for behind-the-scenes content",
                  },
                ].map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-5 group p-5 border border-beige hover:border-warm-beige transition-colors"
                  >
                    <div className="w-10 h-10 border border-warm-beige flex items-center justify-center flex-shrink-0 group-hover:border-brown transition-colors">
                      <contact.icon size={16} className="text-brown/60" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase text-brown/40 mb-1">
                        {contact.label}
                      </p>
                      <p className="text-sm font-medium text-brown mb-1 group-hover:opacity-70 transition-opacity">
                        {contact.value}
                      </p>
                      <p className="text-xs text-brown/40">{contact.note}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div className="border-t border-beige pt-8">
              <h4 className="text-xs tracking-widest uppercase text-brown/50 mb-4">
                Response Hours
              </h4>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-sm">
                  <span className="text-brown/60">Monday – Saturday</span>
                  <span className="text-brown">10 AM – 7 PM IST</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-brown/60">Sunday</span>
                  <span className="text-brown">11 AM – 5 PM IST</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
