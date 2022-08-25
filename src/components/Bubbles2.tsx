import React from "react";

import styles from "../styles/Bubbles2.module.css";

export default function Bubbles2() {
  return (
    <div id="background-wrap">
      <div className={styles.bubble + " " + styles.x1}></div>
      <div className={styles.bubble + " " + styles.x2}></div>
      <div className={styles.bubble + " " + styles.x3}></div>
      <div className={styles.bubble + " " + styles.x4}></div>
      <div className={styles.bubble + " " + styles.x5}></div>
      <div className={styles.bubble + " " + styles.x6}></div>
      <div className={styles.bubble + " " + styles.x7}></div>
      <div className={styles.bubble + " " + styles.x8}></div>
      <div className={styles.bubble + " " + styles.x9}></div>
      <div className={styles.bubble + " " + styles.x10}></div>
    </div>
  );
}