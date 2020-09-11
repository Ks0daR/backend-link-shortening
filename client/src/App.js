import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import routes from "./routes";
import AuthPage from "./pages/AuthPage/AuthPage";
import { AuthContext } from "./context/AuthContext";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { login, logout, jwtToken, userId } = useAuth();
  const isAuthorized = !!jwtToken;
  return (
    <AuthContext.Provider
      value={{ login, logout, jwtToken, userId, isAuthorized }}
    >
      <Layout>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/auth" exact component={AuthPage} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </AuthContext.Provider>
  );
}

export default App;
