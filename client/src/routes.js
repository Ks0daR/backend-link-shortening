import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import LinksPage from "./pages/LinksPage";

export const useRoutes = (isAuthorized) => {
  if (isAuthorized) {
    return (
      <Switch>
        <Route path="/links" component={LinksPage} />
        {/* <Route path="/createLink" component={CreateLinkPage} /> */}
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
