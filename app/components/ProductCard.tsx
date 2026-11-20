// app/components/ProductCard.tsx
import Image from "next/image";
import Link from "next/link";
import { imageSrc, type Product } from "../data/products";

// The card takes one typed product as a prop.
export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`} className="card">
      <div className="card-art" style={{ background: product.accent }}>
        <Image
          src={imageSrc(product)}
          alt={product.name}
          width={460}
          height={345}
          className="card-img"
          sizes="(max-width: 560px) 100vw, 230px"
        />
      </div>
      <div className="card-body">
        <span className="card-category">{product.category}</span>
        <h2 className="card-name">{product.name}</h2>
        <p className="card-tagline">{product.tagline}</p>
        <span className="card-price">${product.price}</span>
      </div>
    </Link>
  );
}
