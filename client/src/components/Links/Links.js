import React, { useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useAuth } from "../../hooks/useAuth";
import { useHttp } from "../../hooks/useHttp";
import Loader from "../Loader/Loader";
import styles from "./Links.module.css";

const Links = () => {
  const [links, setLinks] = useState(null);

  const { request, loading } = useHttp();

  console.log(links);

  const link = "/links/";
  const auth = useAuth(AuthContext);

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${auth.jwtToken}`,
  };

  useEffect(() => {
    async function fetchData() {
      console.log(headers);
      const response = await request(link, "GET", null, headers);
      setLinks(response);
    }
    if (auth.jwtToken) {
      fetchData();
    }
  }, [auth.jwtToken]);

  return (
    <div className={styles.container}>
      {links ? (
        links.map((link) => (
          <div key={link.code} className={styles.card}>
            <div>
              <span className={styles.title}>Откуда:</span>
              <span>{link.from}</span>
            </div>
            <div>
              <span className={styles.title}>Короткая ссылка:</span>
              <span>{link.shortLink}</span>
            </div>

            <span>Клики по ссылке {link.clicks}</span>
          </div>
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Links;
