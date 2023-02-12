import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "dummy",
    email: "dummy@g.com",
  },
});

export default UserContext;
