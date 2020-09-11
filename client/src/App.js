import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";

import AuthPage from "./pages/AuthPage/AuthPage";
import { AuthContext } from "./context/AuthContext";
import { useAuth } from "./hooks/useAuth";
import { useRoutes } from "./routes";

function App() {
  const { login, logout, jwtToken, userId } = useAuth();
  const isAuthorized = !!jwtToken;

  const routes = useRoutes(isAuthorized);
  return (
    <AuthContext.Provider
      value={{ login, logout, jwtToken, userId, isAuthorized }}
    >
      <Layout>{routes}</Layout>
    </AuthContext.Provider>
  );
}

export default App;
