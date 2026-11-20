/**
 * Business details and store policies, used by the footer, the contact page
 * and the policy pages (privacy, terms, shipping, returns).
 *
 * Values in [square brackets] are placeholders and show up on the site as-is.
 * Fill them in before going live: payment providers (e.g. Razorpay) and
 * India's Consumer Protection (E-Commerce) Rules require real business
 * details and a grievance officer on the website.
 */
export const SITE = {
  name: "Bhuvan Reweaves",
  // Registered business name, as on your GST / bank account
  legalName: "[Registered business name]",
  url: "https://www.bhuvanreweaves.com",
  email: "hello@bhuvanreweaves.com",
  // Shown on the site, and used for WhatsApp links (digits only, with 91)
  phoneDisplay: "+91 89037 25057",
  whatsappNumber: "918903725057",
  instagramHandle: "bhuvanreweaves",
  address: "[Business address, City, State, PIN code]",
  // Leave empty to hide it
  gstin: "",
  grievanceOfficer: "[Name of grievance officer]",
  // City whose courts handle disputes (Terms & Conditions)
  jurisdictionCity: "[City]",
  policiesLastUpdated: "20 November 2026",
};

export const POLICY = {
  deliveryTime: "5–7 working days",
  cancellationWindow: "24 hours",
  damageReportWindow: "48 hours",
  refundTime: "5–7 working days",
};

export const SHIPPING_SUMMARY = `Free shipping across India. Delivered in ${POLICY.deliveryTime}. All sales are final — no returns or exchanges. Items that arrive damaged or defective are covered by our Returns Policy.`;
