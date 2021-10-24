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
        Teknologi yang biasa saya gunakan dalam membangun suatu project dan
        cukup familiar ⚙.
      </Text>
      <Box m={5} />
      <CardSkill />
    </>
  );
};

export default MySkill;
