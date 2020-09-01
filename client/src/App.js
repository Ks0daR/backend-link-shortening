import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import routes from "./routes";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </Layout>
  );
}

export default App;
