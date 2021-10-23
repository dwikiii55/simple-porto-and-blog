import { Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import AppContainer from "../container/AppContainer";
import Footer from "./Footer";
import Header from "./Header";

function AppLayout({ children }) {
  return (
    <div>
      <Flex flexDir="column" minH="100vh">
        <Header />

        <AppContainer>{children}</AppContainer>
        <Spacer />
        <Footer />
      </Flex>
    </div>
  );
}

export default AppLayout;
