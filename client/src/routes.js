import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import LinksPage from "./pages/LinksPage";
import CreateLink from "./components/CreateLink";

export const useRoutes = (isAuthorized) => {
  if (isAuthorized) {
    return (
      <Switch>
        <Route path="/links" component={LinksPage} />
        <Route path="/createLink" component={CreateLink} />
        <Redirect to="links" />
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
