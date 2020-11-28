import React from "react";
import styles from "./HomePage.module.css";
import CreateLink from "../../components/CreateLink";
import Links from "../../components/Links";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <CreateLink />
      <Links />
    </div>
  );
};

export default HomePage;
