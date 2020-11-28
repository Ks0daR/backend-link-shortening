import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import HomePage from "./pages/HomePage";

export const useRoutes = (isAuthorized) => {
  if (isAuthorized) {
    return (
      <Switch>
        <Route path="/home" component={HomePage} />
        <Redirect to="/home" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/auth" component={AuthPage} />
      <Redirect to="/auth" />
    </Switch>
  );
};
