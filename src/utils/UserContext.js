import { createContext } from "react";

const UserContext = createContext(
  {
    userLoggedIn: 'Default User',
  }
);

export default UserContext;