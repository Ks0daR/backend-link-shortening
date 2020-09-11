import { useState, useEffect } from "react";

const storageName = "userInfo";

export const useAuth = () => {
  const [jwtToken, setJwtToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const login = (token, id) => {
    setJwtToken(token);
    setUserId(id);

    localStorage.setItem(storageName, JSON.stringify({ token, id }));
  };

  const logout = () => {
    setJwtToken(null);
    setUserId(null);

    localStorage.removeItem(storageName);
  };

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem(storageName));
    if (localData && localData.token) {
      login(localData.token, localData.id);
    }
  });

  return { login, logout, userId, jwtToken };
};
