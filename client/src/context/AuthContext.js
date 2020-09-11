import { createContext } from "react";

function noop() {}

export const AuthContext = createContext({
  token: null,
  userId: null,
  isAuthorized: false,
  login: noop,
  logout: noop,
});
