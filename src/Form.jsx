import { Flex, Input } from "@chakra-ui/react";
import { useContext } from "react";
import UserContext from "./contexts/UserContext";

function Form() {
  const { username, setUsername, avatarUrl, setAvatarUrl } =
    useContext(UserContext);

  return (
    <Flex direction="column">
      <Input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        placeholder="URL"
        value={avatarUrl}
        onChange={(e) => setAvatarUrl(e.target.value)}
      />
    </Flex>
  );
}

export default Form;
