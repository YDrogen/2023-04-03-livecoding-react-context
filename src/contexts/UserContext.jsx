import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  return (
    <UserContext.Provider
      value={{
        username,
        avatarUrl,
        setUsername,
        setAvatarUrl,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
export { UserProvider };
