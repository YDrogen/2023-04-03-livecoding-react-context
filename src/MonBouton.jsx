import { Box } from "@chakra-ui/react";

const MonBouton = ({ children, color }) => {
  return (
    <Box border={`1px solid ${color ?? "red"}`} mb="5px">
      {children}
    </Box>
  );
};

export default MonBouton;
