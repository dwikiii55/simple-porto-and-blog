import React from "react";
import { Container } from "@chakra-ui/react";

function AppContainer({ children }) {
  return <Container maxW="3xl">{children}</Container>;
}

export default AppContainer;
