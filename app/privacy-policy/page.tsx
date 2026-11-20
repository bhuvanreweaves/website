import React from "react";
import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { SITE } from "@/lib/site-info";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Bhuvan Reweaves collects, uses and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={
        <p>
          This Privacy Policy explains how {SITE.legalName} (&ldquo;{SITE.name}&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects, uses, shares and protects your personal
          information when you visit <a href={SITE.url}>{SITE.url.replace("https://", "")}</a>,
          place an order, or contact us. By using our website, you agree to this policy. It is
          written to follow India&rsquo;s Information Technology Act, 2000 and the rules under it,
          and the Digital Personal Data Protection Act, 2023.
        </p>
      }
    >
      <h2>Information we collect</h2>
      <h3>Information you give us</h3>
      <ul>
        <li>Your name, email address and phone number.</li>
        <li>Your shipping and billing address.</li>
        <li>Order details, including the products, sizes and measurements you choose.</li>
        <li>
          For &ldquo;Send Your Saree&rdquo; orders: photos and details of your saree, and any
          design notes you share.
        </li>
        <li>Messages you send us by email, WhatsApp, Instagram or our contact form.</li>
      </ul>
      <h3>Information collected automatically</h3>
      <ul>
        <li>
          Technical information such as your IP address, browser and device type, and the pages
          you visit, recorded by our website hosting and security systems.
        </li>
        <li>Cookies and similar technologies, described below.</li>
      </ul>
      <h3>Payment information</h3>
      <p>
        Payments are processed by our payment partner (such as Razorpay). Your card, UPI and bank
        details are entered directly with them. We do not see or store your full card or bank
        details.
      </p>

      <h2>How we use your information</h2>
      <ul>
        <li>To process, make and deliver your orders, including custom orders.</li>
        <li>To send order confirmations, shipping updates and support messages.</li>
        <li>To answer your questions and handle cancellations and claims.</li>
        <li>To keep our website secure and improve how it works.</li>
        <li>To meet our legal, tax and accounting obligations.</li>
        <li>
          To send you news and offers, only if you have agreed to receive them. You can opt out at
          any time.
        </li>
      </ul>

      <h2>Who we share it with</h2>
      <p>We do not sell or rent your personal information. We share it only with:</p>
      <ul>
        <li>Courier and logistics partners, to deliver your order.</li>
        <li>Payment partners, to process payments and refunds.</li>
        <li>
          Service providers who run our website, online store, database and file storage, under
          obligations to keep your information confidential and secure.
        </li>
        <li>Government or law-enforcement authorities, when the law requires it.</li>
      </ul>

      <h2>Cookies</h2>
      <p>
        We use cookies that are needed for the website to work, for example to keep items in
        your cart. You can block or delete cookies in your browser settings, but some parts of the
        website may then not work properly.
      </p>

      <h2>Where your information is stored and how we protect it</h2>
      <p>
        Your information is stored with reputable cloud service providers, whose servers may be
        located in India or abroad. We use reasonable security practices, including encrypted
        (HTTPS) connections and restricted access, to protect it. No method of storing or sending
        information online is completely secure, but we work to protect your information.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep your information for as long as needed to fulfil your orders and provide support,
        and for as long as Indian tax and accounting laws require us to keep order records. After
        that, we delete or anonymise it.
      </p>

      <h2>Your rights</h2>
      <p>You can ask us to:</p>
      <ul>
        <li>tell you what personal information we hold about you,</li>
        <li>correct or update it,</li>
        <li>delete it, unless we must keep it by law, and</li>
        <li>stop using it for marketing, or withdraw a consent you have given.</li>
      </ul>
      <p>
        To make a request, write to <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. We will
        respond within a reasonable time.
      </p>

      <h2>Children</h2>
      <p>
        Our website is meant for people aged 18 and over. We do not knowingly collect personal
        information from children. Purchases for a child must be made by a parent or guardian.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The latest version will always be on this
        page, with the date it was last updated.
      </p>

      <h2>Grievance Officer</h2>
      <p>
        If you have a concern or complaint about how your information is handled, please contact
        our Grievance Officer. We will acknowledge your complaint within 48 hours and work to
        resolve it within one month.
      </p>
      <ul>
        <li>Name: {SITE.grievanceOfficer}</li>
        <li>
          Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </li>
        <li>Address: {SITE.address}</li>
      </ul>
    </LegalPage>
  );
}
