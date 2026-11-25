/**
 * Customer stories shown on the home page.
 *
 * To add a real customer:
 *  - photo:     put the image in public/testimonials/ (e.g. "/testimonials/arjun.jpg")
 *  - avatar:    optional profile picture; if left out, their initials are shown
 *  - instagram: their Instagram username, without the "@"
 *
 * The entries below are placeholders (dummy names, handles and stock photos).
 * Replace them with real customers before going live.
 */
export interface Testimonial {
  id: string;
  name: string;
  instagram: string;
  location: string;
  product: string;
  rating: number;
  text: string;
  photo: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Arjun Mehta",
    instagram: "arjun.wears.stories",
    location: "Mumbai",
    product: "Kanjivaram Silk Shirt",
    rating: 5,
    text: "My mother's old Kanjivaram saree sat in a box for 20 years. Bhuvan Reweaves turned it into the most beautiful shirt I've ever owned.",
    photo: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=800&q=80",
  },
  {
    id: "2",
    name: "Priya Sharma",
    instagram: "priya.and.the.saree",
    location: "Bangalore",
    product: "Banarasi Weave Shirt",
    rating: 5,
    text: "I gifted my husband a shirt made from my grandmother's Banarasi saree. He cried when he opened it. Something truly irreplaceable.",
    photo: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80",
  },
  {
    id: "3",
    name: "Rahul Krishnamurthy",
    instagram: "rahul.k.threads",
    location: "Chennai",
    product: "Mysore Silk Shirt",
    rating: 5,
    text: "Fits perfectly, feels incredible and carries a story only I know. Worth every rupee and more.",
    photo: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80",
  },
  {
    id: "4",
    name: "Deepa Iyer",
    instagram: "deepa.iyer.diaries",
    location: "Delhi",
    product: "Cotton Saree Shirt",
    rating: 5,
    text: "Sent in my late mother's cotton saree and received a shirt for my father. He wears it every Sunday.",
    photo: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=800&q=80",
  },
];
