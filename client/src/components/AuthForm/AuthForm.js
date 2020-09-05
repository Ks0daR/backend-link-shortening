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
      <div>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleInput}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInput}
          />
        </label>
      </div>
      <button name="register" onClick={registrationHandler}>
        Регистрация
      </button>
      <button name="authorisation" onClick={logInHandler}>
        Войти
      </button>
    </div>
  );
};

export default AuthFrom;
