import { Box, Center, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import Hero from "../components/landing/Hero";
import AppLayout from "../components/layout/AppLayout";
import MySkill from "../components/landing/MySkill";
import ContactMe from "../components/contact/ContactMe";

const Home = () => {
  return (
    <div>
      <AppLayout>
        <Box m={10} />
        <Hero />
        <Box m={10} />
        <MySkill />
        <Box m={10} />
        <ContactMe />
        <Box m={10} />
      </AppLayout>
    </div>
  );
};

export default Home;
