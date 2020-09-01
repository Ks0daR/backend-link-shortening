import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <NavLink className={styles.navItem} to="/">
          Домашняя страница
        </NavLink>
        <NavLink className={styles.navItem} to="/links">
          Все ссылки
        </NavLink>
      </ul>
    </nav>
  );
};
