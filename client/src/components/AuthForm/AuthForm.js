import React, { useState, useContext } from "react";
import styles from "./AuthForm.module.css";
import { useHttp } from "../../hooks/useHttp";
import Loader from "../Loader/Loader";
import { AuthContext } from "../../context/AuthContext";

const AuthFrom = () => {
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, request } = useHttp();

  const headers = { "Content-Type": "application/json" };

  const handleInput = ({ target }) => {
    const { name, value } = target;
    name === "email" ? setEmail(value) : setPassword(value);
  };

  const registrationHandler = async () => {
    const credentials = JSON.stringify({ email, password });

    try {
      await request("/auth/register", "POST", credentials, headers);
    } catch (e) {}
  };
  const logInHandler = async () => {
    const credentials = JSON.stringify({ email, password });

    try {
      const { userId, token } = await request(
        "/auth/login",
        "POST",
        credentials,
        headers
      );
      auth.login(token, userId);
    } catch (e) {}
  };

  return (
    <>
      {loading && <Loader />}
      <div className={styles.container}>
        <h2>Авторизация</h2>
        <div className={styles.inputForm}>
          <div className={styles.inputContainer}>
            <label
              className={email ? styles.formLabelActive : styles.formLabel}
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className={styles.input}
              id="email"
              type="text"
              name="email"
              autoComplete="off"
              value={email}
              onChange={handleInput}
            />
          </div>
          <div className={styles.inputContainer}>
            <label
              className={password ? styles.formLabelActive : styles.formLabel}
              htmlFor="pwd"
            >
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
          className={styles.btnSubmitRegister}
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
    </>
  );
};

export default AuthFrom;
