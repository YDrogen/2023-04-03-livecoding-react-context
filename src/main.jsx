import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserProvider } from "./contexts/UserContext";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import Form from "./Form";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <UserProvider>
        <App />
        <Form />
      </UserProvider>
    </ChakraProvider>
  </React.StrictMode>
);
