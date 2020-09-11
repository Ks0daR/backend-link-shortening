import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import routes from "./routes";
import AuthPage from "./pages/AuthPage/AuthPage";
import Loader from "./components/Loader/Loader";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/auth" exact component={AuthPage} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
}

export default App;
