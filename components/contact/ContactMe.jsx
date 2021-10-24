import {
  Box,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import React from "react";
import { FaGithub, FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import SocialButton from "../ui/SosialButton";

const sosialMedia = [
  { nama: "Github", link: "https://github.com/dwikiii55", icon: <FaGithub /> },
  {
    nama: "Instagram",
    link: "https://www.instagram.com/dwiki.krisna/",
    icon: <FaInstagram />,
  },
  {
    nama: "Whatsapp",
    link: "https://api.whatsapp.com/send/?phone=6289606757971&text&app_absent=0",
    icon: <FaWhatsapp />,
  },
  { nama: "Email", link: "mailto:dwiki1968@gmail.com", icon: <FiMail /> },
];

function ContactMe() {
  return (
    <>
      <Box>
        <Heading mb={3}>Contact me</Heading>

        <Text color="gray.500" mb={5} fontSize={{ base: "lg", md: "xl" }}>
          Happy to be contacted anytime.
        </Text>

        <Flex
          flexDir={{ base: "column-reverse", md: "row" }}
          borderWidth="2px"
          borderRadius="2xl"
          p={5}
          _hover={{ position: "relative", top: "-3px", shadow: "md" }}
        >
          <VStack alignItems="flex-start">
            <Text fontWeight="semibold" mb={1}>
              Dwiki Krisna Saputra.
            </Text>

            <List spacing={3}>
              <ListItem>
                <ListIcon as={FiPhone} color="cyan.500" />
                +62-89606757971
              </ListItem>
              <ListItem>
                <ListIcon as={FiMail} color="cyan.500" />
                dwiki1968@gmail.com
              </ListItem>
              <ListItem>
                <ListIcon as={FiMapPin} color="cyan.500" />
                Jakarta, Indonesia
              </ListItem>
            </List>
          </VStack>
          <Spacer />
          <Stack direction={"row"} mb={5}>
            {sosialMedia.map((sosmed, index) => (
              <SocialButton key={index} label={sosmed.nama} href={sosmed.link}>
                {sosmed.icon}
              </SocialButton>
            ))}
          </Stack>
        </Flex>
      </Box>
    </>
  );
}

export default ContactMe;
