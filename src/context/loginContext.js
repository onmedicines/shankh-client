import { createContext } from "react";

export const LoginContext = createContext(false);

export const LoginData = createContext({
  access: "",
  username: "",
  email: "",
});
