import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/">
          <div className={styles.brand}>
            <span className={styles.logo} aria-hidden>🍪</span>
            <span className={styles.name}>Mollee's Munchies</span>
          </div>
        </Link>

        <nav className={styles.nav}>
          <Link href="#shop"><div className={styles.navLink}>Shop</div></Link>
          <Link href="#about"><div className={styles.navLink}>About</div></Link>
          <Link href="#contact"><div className={styles.navLink}>Contact</div></Link>
          <button className={styles.cartBtn} aria-label="Open cart">Cart (0)</button>
        </nav>
      </div>
    </header>
  );
}
