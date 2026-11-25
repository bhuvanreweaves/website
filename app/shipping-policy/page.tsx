import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { PolicyContact } from "@/components/legal/LegalPage";
import { POLICY } from "@/lib/site-info";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description: `Free shipping on all orders across India, delivered in ${POLICY.deliveryTime}. International shipping available at extra cost.`,
};

export default function ShippingPolicyPage() {
  return (
    <LegalPage
      title="Shipping Policy"
      intro={
        <div className="border border-beige bg-beige/30 p-6">
          <h3 className="!mt-0">At a glance</h3>
          <ul className="!mb-0">
            <li>
              <strong>Free shipping</strong> on all orders, anywhere in India.
            </li>
            <li>
              Delivered in <strong>{POLICY.deliveryTime}</strong> within India.
            </li>
            <li>
              <strong>International shipping</strong> is available. Shipping charges apply.
            </li>
            <li>Tracking details are shared as soon as your order ships.</li>
          </ul>
        </div>
      }
    >
      <h2>Where we ship</h2>
      <ul>
        <li>
          <strong>India:</strong> free shipping on all orders.
        </li>
        <li>
          <strong>Outside India:</strong> we ship internationally. Shipping charges apply, and we
          confirm them with you before you pay.
        </li>
      </ul>

      <h2>Delivery time</h2>
      <p>
        Orders within India are delivered within {POLICY.deliveryTime} of being placed. Orders placed on a
        Sunday or a public holiday are processed on the next working day. Deliveries to remote
        areas, or delays caused by courier partners, weather or other events outside our control,
        may take longer.
      </p>
      <p>International delivery times vary by country. We share an estimate with your order.</p>
      <p>
        For &ldquo;Send Your Saree&rdquo; orders, the delivery time starts from the day your saree
        reaches us.
      </p>

      <h2>Tracking your order</h2>
      <p>
        Once your order is dispatched, we will send you the courier name and tracking number by
        email or WhatsApp.
      </p>

      <h2>Delivery address</h2>
      <p>
        Please make sure your shipping address and phone number are complete and correct. If a
        package is returned to us because of an incorrect address or repeated failed delivery
        attempts, we will contact you to arrange re-delivery, and additional shipping charges may
        apply.
      </p>

      <h2>Damaged packages</h2>
      <p>
        If the package looks damaged or tampered with when it arrives, please note it with the
        courier and take photos. Report any damage to us within {POLICY.damageReportWindow} of
        delivery, as described in our{" "}
        <Link href="/returns">Cancellation, Returns &amp; Refund Policy</Link>.
      </p>

      <h2>Contact us</h2>
      <PolicyContact />
    </LegalPage>
  );
}
