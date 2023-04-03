import { Flex, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import UserContext from "./contexts/UserContext";
import MonBouton from "./MonBouton";

function App() {
  const { username, avatarUrl } = useContext(UserContext);

  return (
    <Flex direction="column">
      <Heading>{username}</Heading>
      <Heading>{avatarUrl}</Heading>

      <MonBouton>
        <MonBouton>
          <MonBouton color="yellow">
            <MonBouton color='white'>
              <MonBouton>Coucou</MonBouton>
            </MonBouton>
          </MonBouton>
        </MonBouton>
      </MonBouton>
    </Flex>
  );
}

export default App;
