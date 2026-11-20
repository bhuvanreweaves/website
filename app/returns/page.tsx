import React from "react";
import Link from "next/link";
import LegalPage, { PolicyContact } from "@/components/legal/LegalPage";
import { POLICY } from "@/lib/site-info";

export default function ReturnsPage() {
  return (
    <LegalPage
      title="Cancellation, Returns & Refund Policy"
      intro={
        <div className="border border-beige bg-beige/30 p-6">
          <h3 className="!mt-0">At a glance</h3>
          <ul className="!mb-0">
            <li>
              <strong>No returns and no exchanges.</strong> All sales are final.
            </li>
            <li>
              Orders can be cancelled within <strong>{POLICY.cancellationWindow}</strong> of
              placing them, for a full refund.
            </li>
            <li>
              Item damaged, defective or wrong? Tell us within{" "}
              <strong>{POLICY.damageReportWindow}</strong> of delivery and we will make it right.
            </li>
            <li>
              Refunds go back to your original payment method within{" "}
              <strong>{POLICY.refundTime}</strong>.
            </li>
          </ul>
        </div>
      }
    >
      <h2>No returns or exchanges</h2>
      <p>
        Every Bhuvan Reweaves shirt is handcrafted from a saree, and most pieces are one of a
        kind. For this reason we do not accept returns or exchanges, including for change of
        mind, size or fit. Please check the size guide on the product page before ordering. If
        you are unsure about sizing, contact us before you buy and we will gladly help.
      </p>
      <p>
        Shirts made from your own saree (&ldquo;Send Your Saree&rdquo; orders) are made to your
        measurements and cannot be returned or exchanged.
      </p>

      <h2>Cancelling an order</h2>
      <p>
        You can cancel an order within {POLICY.cancellationWindow} of placing it by writing to us
        with your order number (see the contact details below). We will refund the full amount.
        After {POLICY.cancellationWindow}, work on your order begins and it can no longer be
        cancelled.
      </p>

      <h2>Damaged, defective or wrong items</h2>
      <p>
        If your order arrives damaged, has a manufacturing defect, or is not the item you
        ordered, contact us within {POLICY.damageReportWindow} of delivery with:
      </p>
      <ul>
        <li>your order number,</li>
        <li>clear photos of the problem and of the package, and</li>
        <li>an unboxing video, if you have one (it helps us resolve claims quickly).</li>
      </ul>
      <p>
        Once we have confirmed the issue, we will repair the item, replace it if a matching piece
        is available, or give you a full refund. We cover all shipping costs for these cases.
        Claims made after {POLICY.damageReportWindow} may not be accepted.
      </p>

      <h3>What is not a defect</h3>
      <p>
        Our shirts are made from sarees, often handwoven. Small irregularities in the weave,
        variations in colour, and differences in where borders and patterns fall are part of
        what makes each piece unique, and are not defects. Colours may also look slightly
        different on your screen than in person.
      </p>

      <h2>Refunds</h2>
      <p>
        Approved refunds (for cancellations within {POLICY.cancellationWindow}, or damaged,
        defective or wrong items) are made to your original payment method within{" "}
        {POLICY.refundTime} of approval. Your bank may take a few extra days to show the amount
        in your account.
      </p>

      <h2>Shipping</h2>
      <p>
        For delivery times and charges, see our <Link href="/shipping-policy">Shipping Policy</Link>.
      </p>

      <h2>Contact us</h2>
      <PolicyContact />
    </LegalPage>
  );
}
