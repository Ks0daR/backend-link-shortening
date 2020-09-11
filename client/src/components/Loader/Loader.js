import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <span className={styles.loaderItem} style={{ "--i": 1 }}></span>
        <span className={styles.loaderItem} style={{ "--i": 2 }}></span>
        <span className={styles.loaderItem} style={{ "--i": 3 }}></span>
        <span className={styles.loaderItem} style={{ "--i": 4 }}></span>
        <span className={styles.loaderItem} style={{ "--i": 5 }}></span>
        <span className={styles.loaderItem} style={{ "--i": 6 }}></span>
        <span className={styles.loaderItem} style={{ "--i": 7 }}></span>
        <span className={styles.loaderItem} style={{ "--i": 8 }}></span>
        <span className={styles.loaderItem} style={{ "--i": 9 }}></span>
        <span className={styles.loaderItem} style={{ "--i": 10 }}></span>
        <span className={styles.loaderItem} style={{ "--i": 11 }}></span>
        <span className={styles.loaderItem} style={{ "--i": 12 }}></span>
        <span className={styles.loaderItem} style={{ "--i": 13 }}></span>
        <span className={styles.loaderItem} style={{ "--i": 14 }}></span>
        <span className={styles.loaderItem} style={{ "--i": 15 }}></span>
        <span className={styles.loaderItem} style={{ "--i": 16 }}></span>
        <span className={styles.loaderItem} style={{ "--i": 17 }}></span>
        <span className={styles.loaderItem} style={{ "--i": 18 }}></span>
        <span className={styles.loaderItem} style={{ "--i": 19 }}></span>
        <span className={styles.loaderItem} style={{ "--i": 20 }}></span>
      </div>
    </div>
  );
};

export default Loader;
