// app/data/products.ts

// The shape of one product. Everything in the app is typed against this.
export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  category: "Sneakers" | "Audio" | "Wearables" | "Gadgets";
  emoji: string;
  accent: string; // card art background color
  description: string;
  specs: string[];
}

export const products: Product[] = [
  {
    id: "wave-runner",
    name: "Wave Runner",
    tagline: "Everyday running sneakers built for long miles.",
    price: 129,
    category: "Sneakers",
    emoji: "👟",
    accent: "#6c8cff",
    description:
      "A lightweight daily trainer with a springy foam midsole and a breathable knit upper.",
    specs: ["Knit upper", "Foam midsole", "320g per shoe", "Unisex sizing"],
  },
  {
    id: "pulse-buds",
    name: "Pulse Buds",
    tagline: "Wireless earbuds with deep, clean bass.",
    price: 89,
    category: "Audio",
    emoji: "🎧",
    accent: "#a06cff",
    description:
      "Compact earbuds with active noise cancellation and an eight-hour battery.",
    specs: ["Active noise cancel", "8h battery", "USB-C case", "IPX4 sweatproof"],
  },
  {
    id: "trail-blazer",
    name: "Trail Blazer",
    tagline: "Grippy trail shoes for muddy weekends.",
    price: 149,
    category: "Sneakers",
    emoji: "🥾",
    accent: "#3ecf8e",
    description:
      "A rugged trail shoe with a deep-lug outsole and a water-resistant upper.",
    specs: ["Deep-lug outsole", "Water-resistant", "Rock plate", "340g per shoe"],
  },
  {
    id: "orbit-watch",
    name: "Orbit Watch",
    tagline: "A smartwatch that tracks every step and sleep.",
    price: 199,
    category: "Wearables",
    emoji: "⌚",
    accent: "#ff8a5c",
    description:
      "A slim fitness watch with GPS, heart-rate tracking, and a week-long battery.",
    specs: ["Built-in GPS", "Heart-rate sensor", "7-day battery", "5 ATM water rated"],
  },
  {
    id: "echo-dome",
    name: "Echo Dome",
    tagline: "Room-filling sound in a pocket-sized speaker.",
    price: 59,
    category: "Audio",
    emoji: "🔊",
    accent: "#f7c948",
    description:
      "A rugged portable speaker with 360-degree sound and twelve hours of playtime.",
    specs: ["360° sound", "12h playtime", "IP67 waterproof", "Bluetooth 5.3"],
  },
  {
    id: "spark-cam",
    name: "Spark Cam",
    tagline: "Pocket action camera for every adventure.",
    price: 249,
    category: "Gadgets",
    emoji: "📷",
    accent: "#ff6c9a",
    description:
      "A tiny 4K action camera with stabilised video and a mountable, waterproof body.",
    specs: ["4K at 60fps", "Electronic stabilisation", "Waterproof to 10m", "Touch screen"],
  },
  {
    id: "volt-pack",
    name: "Volt Pack",
    tagline: "A power bank that keeps up with your day.",
    price: 49,
    category: "Gadgets",
    emoji: "🔋",
    accent: "#4cc9f0",
    description:
      "A slim 20,000mAh power bank with fast USB-C charging for phones and laptops.",
    specs: ["20,000mAh", "65W USB-C", "Dual output", "Pass-through charging"],
  },
  {
    id: "pace-band",
    name: "Pace Band",
    tagline: "A lightweight tracker for runners and walkers.",
    price: 69,
    category: "Wearables",
    emoji: "📿",
    accent: "#9be564",
    description:
      "A minimalist activity band that tracks steps, pace, and sleep with a two-week battery.",
    specs: ["14-day battery", "Step and pace tracking", "Sleep insights", "Swim-proof"],
  },
];

// Helper: look up one product by its id. Returns undefined if not found.
export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
