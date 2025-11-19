import React from "react";
import styles from "./ProductCard.module.css";
import Image from "next/image";

type Product = {
  id: string;
  title: string;
  price: number;
  description?: string;
  image?: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className={`${styles.card} card`}>
      <div className={styles.media}>
        {product.image ? (
          // next/image will optimize local images in /public
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 600px) 100vw, 300px"
            style={{ objectFit: "cover", borderRadius: "12px" }}
          />
        ) : (
          <div className={styles.placeholder} />
        )}
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.desc}>{product.description}</p>
        <div className={styles.bottom}>
          <span className={styles.price}>${product.price.toFixed(2)}</span>
          <button className={styles.add}>Add</button>
        </div>
      </div>
    </article>
  );
}
