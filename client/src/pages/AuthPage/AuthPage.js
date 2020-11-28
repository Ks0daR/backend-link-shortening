import React from "react";
import AuthFrom from "../../components/AuthForm";
import styles from "./AuthPage.module.css";

const AuthPage = () => {
  return (
    <div className={styles.container}>
      <AuthFrom />
    </div>
  );
};

export default AuthPage;
