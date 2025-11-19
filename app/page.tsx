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
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}></div>
          <div className={styles.heroMiddle}>
            <h2>Fresh Bread & Baked Goods</h2>
            <button>Order Here</button>
          </div>
          <div className={styles.heroRight}></div>
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
