import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <strong>Mollee's Munchies</strong>
          <div className={styles.small}>Baked with care • Small-batch</div>
        </div>

        <div className={styles.right}>
          <div className={styles.small}>© {new Date().getFullYear()} Mollee's Munchies</div>
        </div>
      </div>
    </footer>
  );
}
