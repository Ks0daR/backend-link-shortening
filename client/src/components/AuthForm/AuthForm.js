import React, { useState } from "react";
import styles from "./AuthForm.module.css";
import { useHttp } from "../../hooks/useHttp";

const AuthFrom = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, error, request } = useHttp();

  const headers = { "Content-Type": "application/json" };

  const handleInput = ({ target }) => {
    const { name, value } = target;
    name === "email" ? setEmail(value) : setPassword(value);
  };

  const registrationHandler = async (evt) => {
    evt.preventDefault();
    const credentials = JSON.stringify({ email, password });

    try {
      const data = await request(
        "/auth/register",
        "POST",
        credentials,
        headers
      );
      console.log(data);
    } catch (e) {}
  };
  const logInHandler = async (evt) => {
    evt.preventDefault();
    const credentials = JSON.stringify({ email, password });

    try {
      const data = await request("/auth/login", "POST", credentials, headers);
      console.log(data);
    } catch (e) {}
  };

  return (
    <div className={styles.container}>
      <h2>Авторизация</h2>
      <div className={styles.inputForm}>
        <div className={styles.inputContainer} >
          <label  className={styles.formLabel} htmlFor="email">
            Email:
          </label>
          <input          
            className={styles.input}
            id="email"
            type="text"
            name="email"
            value={email}
            onChange={handleInput}
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.formLabel} htmlFor="pwd">
            Password:
          </label>
          <input
            className={styles.input}
            type="password"
            id="pwd"
            name="password"
            value={password}
            onChange={handleInput}
          />
        </div>
      </div>

      <button
        className={styles.btnSubmit}
        name="register"
        onClick={registrationHandler}
      >
        Регистрация
      </button>
      <button
        className={styles.btnSubmit}
        name="authorisation"
        onClick={logInHandler}
      >
        Войти
      </button>
    </div>
  );
};

export default AuthFrom;
