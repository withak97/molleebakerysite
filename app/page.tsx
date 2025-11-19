import React from "react";
import styles from "./Home.module.css";
import ProductCard from "./components/ProductCard";

const PRODUCTS = [
  {
    id: "snickerdoodle",
    title: "Snickerdoodle",
    price: 3.00,
    description: "Classic cinnamon-sugar cookie with a soft, chewy center.",
    image: "/snickerdoodle.jpg",
  },
  {
    id: "bread",
    title: "Italian Rustic Loaf",
    price: 5.75,
    description: "Baked to perfection with a crispy crust and soft interior.",
    image: "/bread.jpg",
  },
  {
    id: "chocolate-chip-cookie",
    title: "Chocolate Chip Cookie",
    price: 3.00,
    description: "Chewy center, crisp edges, generous chocolate.",
    image: "/cookie.jpg",
  },
  {
    id: "cinnamon-roll",
    title: "Cinnamon Roll",
    price: 4.25,
    description: "Soft swirl with brown sugar and glazed finish.",
    image: "/cinnamon-roll.jpg",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.title}>Mollee's Munchies</h1>
          <p className={styles.subtitle}>
            Small-batch pastries & cookies — warm, calm, and thoughtfully baked.
          </p>
          <a className={styles.cta} href="#shop">
            Shop our treats
          </a>
        </div>
        <div className={styles.heroImage} aria-hidden>
          <img
            src="/sweetMollee.jpg"
            alt="Cozy winter scene with scarf and hot drink"
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }}
          />
        </div>
      </section>

      <section id="shop" className={styles.shopSection}>
        <h2 className={styles.sectionTitle}>Today's selection</h2>
        <div className={styles.grid}>
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
