"use client";

import React, { useState } from "react";
import { MEDUSA_BACKEND_URL, MEDUSA_PUBLISHABLE_KEY } from "@/lib/medusa-config";

/**
 * Newsletter sign-up. Subscribers are saved in Medusa as customers marked
 * "newsletter" (admin → Customers); see src/api/store/newsletter in the admin.
 */
export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch(`${MEDUSA_BACKEND_URL}/store/newsletter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-publishable-api-key": MEDUSA_PUBLISHABLE_KEY,
        },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || "Could not subscribe. Please try again.");
      }
      setStatus("done");
      setMessage("Thank you — you're on the list.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Could not subscribe. Please try again.");
    }
  };

  return (
    <form onSubmit={submit} className="w-full max-w-md">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex items-center bg-cream">
        <input
          id="newsletter-email"
          type="email"
          required
          autoComplete="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-w-0 flex-1 bg-transparent px-4 py-4 text-sm text-brown placeholder:text-brown/40 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="px-5 py-4 text-xs uppercase tracking-[0.2em] text-brown transition-opacity hover:opacity-70 disabled:opacity-50"
        >
          {status === "sending" ? "Sending…" : "Subscribe"}
        </button>
      </div>
      <p
        role="status"
        aria-live="polite"
        className={`mt-2 min-h-4 text-xs ${status === "error" ? "text-red-300" : "text-cream/60"}`}
      >
        {message}
      </p>
    </form>
  );
}
