import React, { useState } from "react";
import styles from "./AuthForm.module.css";
import { useHttp } from "../../hooks/useHttp";

const AuthFrom = () => {
  const serverLink = "/auth/register";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, error, request } = useHttp();

  const handleInput = ({ target }) => {
    const { name, value } = target;
    name === "email" ? setEmail(value) : setPassword(value);
  };

  const registrationHandler = async (evt) => {
    evt.preventDefault();
    try {
      const data = await request(
        serverLink,
        "POST",
        { email, password },
        { "Content-type": "application/json" }
      );
      console.log(data);
    } catch (e) {}
  };
  return (
    <div className={styles.container}>
      <form>
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
        <button name="register" onClick={registrationHandler}>
          Регистрация
        </button>
        <button name="authorisation">Войти</button>
      </form>
    </div>
  );
};

export default AuthFrom;
