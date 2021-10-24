import {
  Box,
  Button,
  chakra,
  Flex,
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { FiMail } from "react-icons/fi";

const Hero = () => {
  return (
    <Flex flexDir={{ base: "column-reverse", sm: "column-reverse", md: "row" }}>
      <Box>
        <chakra.h1
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="bold"
          lineHeight="shorter"
          color={useColorModeValue("gray.900", "white")}
        >
          Hallo! 👋
        </chakra.h1>
        <chakra.h1
          mb={3}
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="bold"
          lineHeight="shorter"
          color={useColorModeValue("gray.900", "white")}
        >
          I am{" "}
          <Text
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: "30%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "#46CDCF",
              zIndex: -1,
            }}
          >
            Dwiki Krisna
          </Text>
          .
        </chakra.h1>
        <chakra.p mb={5} color="gray.500" fontSize={{ base: "lg", md: "xl" }}>
          A tech enthusiast and now I am focused on web development 👩‍🚀.
        </chakra.p>
        <HStack>
          <Link _hover={{}} href="/contact" passHref>
            <Button
              borderRadius="md"
              variant="outline"
              color="#3D84A8"
              leftIcon={<FiMail />}
            >
              Contact Me!
            </Button>
          </Link>
        </HStack>
      </Box>
    </Flex>
  );
};

export default Hero;
