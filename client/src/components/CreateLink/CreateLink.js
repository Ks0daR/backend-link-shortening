import React, { useState } from "react";
import { useHttp } from "../../hooks/useHttp";
import { useAuth } from "../../hooks/useAuth";
import { AuthContext } from "../../context/AuthContext";
import styles from "./CreateLink.module.css";

const CreateLink = () => {
  const [link, setLink] = useState("");
  const { request } = useHttp();

  const auth = useAuth(AuthContext);

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${auth.jwtToken}`,
  };
  const serverUrl = "/links/";
  const shortLink = JSON.stringify({ from: link });

  const handleInput = ({ target: { value } }) => {
    setLink(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await request(serverUrl, "POST", shortLink, headers);
      console.log(response);
    } catch (e) {}
  };

  return (
    <div className={styles.container}>
      <h1>CreateLink</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="Вставьте ссылку"
            value={link}
            onChange={handleInput}
          />
        </label>
        <button>Сократить!</button>
      </form>
    </div>
  );
};

export default CreateLink;
