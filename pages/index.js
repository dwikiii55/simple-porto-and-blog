import { Box } from "@chakra-ui/layout";
import React from "react";
import Hero from "../components/landing/Hero";
import MySkill from "../components/landing/MySkill";
import AppLayout from "../components/layout/AppLayout";

const Home = () => {
  return (
    <div>
      <AppLayout>
        <Box m={10} />

        <Hero />
        <Box m={10} />
        <MySkill />
        <Box m={10} />
      </AppLayout>
    </div>
  );
};

export default Home;
