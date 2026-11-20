// app/products/[id]/page.tsx
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "../../data/products";

// Reviews ships in its own chunk, fetched only when it renders.
const Reviews = dynamic(() => import("./Reviews"), {
  loading: () => <p>Loading reviews…</p>,
});

// Each product gets its own tab title and description.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) return { title: "Product not found | ShipYard" };
  return {
    title: `${product.name} | ShipYard`,
    description: product.tagline,
  };
}

// Pre-build one static page per product at build time.
export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

// In Next.js 15+, params is a Promise and must be awaited.
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProduct(id);

  // If the id in the URL matches no product, show the 404 page.
  if (!product) {
    notFound();
  }

  return (
    <main className="container">
      <Link href="/" className="back-link">← Back to catalog</Link>

      <article className="detail">
        <div className="detail-art" style={{ background: product.accent }}>
          <Image
            src={product.image}
            alt={product.name}
            width={460}
            height={345}
            className="detail-img"
            sizes="(max-width: 700px) 100vw, 460px"
            preload
          />
        </div>
        <div className="detail-body">
          <span className="card-category">{product.category}</span>
          <h1 className="detail-name">{product.name}</h1>
          <p className="detail-tagline">{product.tagline}</p>
          <span className="detail-price">${product.price}</span>
          <p className="detail-desc">{product.description}</p>

          <h2 className="detail-specs-title">Specs</h2>
          <ul className="detail-specs">
            {product.specs.map((spec) => (
              <li key={spec}>{spec}</li>
            ))}
          </ul>
          <Reviews productId={product.id} />
        </div>
      </article>
    </main>
  );
}
