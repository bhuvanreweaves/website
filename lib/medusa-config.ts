/**
 * Where the website gets its products from (the Medusa backend).
 *
 * Both values are public by design: the browser sends them with every
 * product request, so keeping them in code is safe. They live here rather
 * than in Vercel environment variables so the live site never depends on
 * dashboard settings.
 *
 * The publishable key comes from Medusa admin → Settings → Publishable API Keys
 * and must be linked to the sales channel the products are in.
 */
export const MEDUSA_BACKEND_URL =
  // Local development only: set NEXT_PUBLIC_LOCAL_MEDUSA_URL=http://localhost:9000
  // in .env.local to try backend changes before they are deployed.
  (process.env.NODE_ENV === "development" && process.env.NEXT_PUBLIC_LOCAL_MEDUSA_URL) ||
  "https://admin.bhuvanreweaves.com";

export const MEDUSA_PUBLISHABLE_KEY =
  "pk_f70c21a23f730cab737c27649947cb2387c4d9c6b2bd7061a599152cd77768ac";

/**
 * Prices come from Medusa per region. "India" (INR) is the store's default
 * region (Medusa admin → Settings → Regions).
 */
export const MEDUSA_REGION_ID = "reg_01M7WPK9S6M9HDCZJFGTRFKGNG";
