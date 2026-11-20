import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { PolicyContact } from "@/components/legal/LegalPage";
import { POLICY, SITE } from "@/lib/site-info";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms that apply when you use the Bhuvan Reweaves website and place an order.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro={
        <p>
          These terms apply when you use {SITE.url.replace("https://", "")} (the
          &ldquo;website&rdquo;), operated by {SITE.legalName} (&ldquo;{SITE.name}&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;), and when you buy from us. By using the website or
          placing an order, you agree to these terms. Please read them together with our{" "}
          <Link href="/shipping-policy">Shipping Policy</Link>,{" "}
          <Link href="/returns">Cancellation, Returns &amp; Refund Policy</Link> and{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>.
        </p>
      }
    >
      <h2>Using the website</h2>
      <p>
        You must be at least 18 years old to place an order, or order with the involvement of a
        parent or guardian. You agree to give accurate information when ordering, and not to
        misuse the website, for example by trying to disrupt it or access it without permission.
      </p>

      <h2>Our products</h2>
      <p>
        Our shirts are handcrafted from sarees, and most pieces are one of a kind. Small
        irregularities in the weave, variations in colour, and differences in where borders and
        patterns fall are a natural part of each piece. We try to show every product accurately,
        but colours may look slightly different on your screen than in person.
      </p>

      <h2>Prices and payment</h2>
      <ul>
        <li>All prices are in Indian Rupees (INR). Any applicable taxes are shown at checkout.</li>
        <li>
          Orders are prepaid through our payment partner. Cash on delivery is not available.
        </li>
        <li>
          We may change prices at any time. The price you pay is the price shown when you place
          your order.
        </li>
        <li>
          If a product is listed at a wrong price because of an error, we may cancel the order
          and refund you in full.
        </li>
      </ul>

      <h2>Orders</h2>
      <p>
        Your order is confirmed when you receive an order confirmation from us. We may decline or
        cancel an order, for example if a product is no longer available or a payment looks
        fraudulent. If we cancel an order you have paid for, we will refund you in full.
      </p>

      <h2>&ldquo;Send Your Saree&rdquo; orders</h2>
      <ul>
        <li>You confirm that you own the saree you send us, or have the owner&rsquo;s permission.</li>
        <li>
          Please send your saree with a tracked courier. We are responsible for your saree from
          the time it reaches us.
        </li>
        <li>
          If we find that a saree is not suitable for making a shirt (for example, because it is
          too worn or too small), we will contact you before cutting it.
        </li>
        <li>Shirts made from your own saree are made to order and cannot be returned or exchanged.</li>
      </ul>

      <h2>Shipping, cancellations and returns</h2>
      <p>
        We ship free across India and deliver within {POLICY.deliveryTime}. We do not accept
        returns or exchanges. Orders can be cancelled within {POLICY.cancellationWindow}, and
        damaged, defective or wrong items must be reported within {POLICY.damageReportWindow} of
        delivery. Full details are in our <Link href="/shipping-policy">Shipping Policy</Link> and{" "}
        <Link href="/returns">Cancellation, Returns &amp; Refund Policy</Link>.
      </p>

      <h2>Intellectual property</h2>
      <p>
        All content on the website, including our name, logo, photos, designs and text, belongs to
        {" "}{SITE.name} or is used with permission. You may not copy, reuse or sell it without our
        written permission.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the extent allowed by law, our total liability for any claim related to an order is
        limited to the amount you paid for that order. We are not liable for indirect losses, or
        for delays or failures caused by events outside our reasonable control.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of India. Any dispute will be subject to the
        exclusive jurisdiction of the courts in {SITE.jurisdictionCity}, India.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these terms from time to time. The version on this page at the time you
        place your order applies to that order.
      </p>

      <h2>Contact us</h2>
      <PolicyContact />
    </LegalPage>
  );
}
