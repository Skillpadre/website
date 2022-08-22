import React from "react";

import styles from "../styles/Bubbles.module.css";

export default function Bubbles() {
  return (
    <div className={styles.bubbles}>
      <div className={styles.bubble + " " + styles.x1}></div>
      <div className={styles.bubble + " " + styles.x2}></div>
      <div className={styles.bubble + " " + styles.x3}></div>
      <div className={styles.bubble + " " + styles.x4}></div>
      <div className={styles.bubble + " " + styles.x5}></div>
    </div>
  );
}