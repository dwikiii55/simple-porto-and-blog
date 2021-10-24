import { Box, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import CardSkill from "./CardSkill";

const MySkill = () => {
  return (
    <>
      <Heading mb={3}>
        <Text>Familiar with </Text>
      </Heading>
      <Text color="gray.500" fontSize={{ base: "lg", md: "xl" }}>
        The technology that I usually use in building a project and I am
        familiar with it.
      </Text>
      <Box m={5} />
      <CardSkill />
    </>
  );
};

export default MySkill;
