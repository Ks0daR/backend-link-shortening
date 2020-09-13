import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  const { isAuthorized, logout } = useContext(AuthContext);

  const handleClick = () => {
    logout();
  };

  if (isAuthorized) {
    return (
      <nav className={styles.navigation}>
        <ul>
          <NavLink className={styles.navItem} to="/links">
            Все ссылки
          </NavLink>
          <NavLink className={styles.navItem} to="/createLink">
            Создать ссылку
          </NavLink>
          <button onClick={handleClick}>Выйти</button>
        </ul>
      </nav>
    );
  }
  
  return (
    <nav className={styles.navigation}>
      <ul>
        <NavLink className={styles.navItem} to="/auth">
          Авторизация
        </NavLink>
      </ul>
    </nav>
  );
};
