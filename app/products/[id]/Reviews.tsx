"use client";

// Heavy, below-the-fold panel: rating summary + review list.
// Loaded on demand via next/dynamic from the product page.
const REVIEWS = [
  { name: "Aarav", rating: 5, text: "Exactly what I needed. Great build quality." },
  { name: "Meera", rating: 4, text: "Very good for the price, shipping was quick." },
  { name: "Rohan", rating: 5, text: "Been using it daily for a month, no complaints." },
  { name: "Isha", rating: 3, text: "Solid, though I wish it came in more colours." },
];

export default function Reviews({ productId }: { productId: string }) {
  const avg = REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length;
  return (
    <section className="reviews" aria-label={`Reviews for ${productId}`}>
      <h2 className="detail-specs-title">
        Reviews · {avg.toFixed(1)} / 5 ({REVIEWS.length})
      </h2>
      <ul className="detail-specs">
        {REVIEWS.map((r) => (
          <li key={r.name}>
            <strong>{r.name}</strong> {"★".repeat(r.rating)}
            {"☆".repeat(5 - r.rating)} — {r.text}
          </li>
        ))}
      </ul>
    </section>
  );
}
