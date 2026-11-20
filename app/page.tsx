// app/page.tsx
import type { Metadata } from "next";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

export const metadata: Metadata = {
  title: "ShipYard: Gear for builders, runners, and explorers",
  description:
    "Browse sneakers, audio, wearables, and gadgets in the ShipYard catalog.",
};

export default function HomePage() {
  return (
    <main className="container">
      <header className="hero">
        <h1 className="hero-title">ShipYard</h1>
        <p className="hero-sub">Gear for people who build, run, and explore.</p>
      </header>

      <section>
        <div className="section-head">
          <h2 className="section-title">All products</h2>
          <span className="section-count">{products.length} items</span>
        </div>

        {/* One card per product, straight from the data. */}
        <div className="grid">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} priority={i === 0} />
          ))}
        </div>
      </section>
    </main>
  );
}
