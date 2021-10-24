import {
  Box,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import React from "react";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
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
        <Heading mb={3}>Hubungi Saya</Heading>

        <Text color="gray.500" mb={5} fontSize={{ base: "lg", md: "xl" }}>
          Dengan senang hati untuk dihubungi kapanpun .
        </Text>

        <Flex
          flexDir={{ base: "column-reverse", md: "row" }}
          borderWidth="2px"
          borderRadius="2xl"
          p={5}
        >
          <VStack alignItems="flex-start">
            <Text fontWeight="semibold" mb={1}>
              Dwiki Krisna Saputra.
            </Text>

            <Text>📞 +62-89606757971</Text>
            <Text>✉ dwiki1968@gmail.com</Text>
            <Text>📌 Jakarta, Indonesia</Text>
          </VStack>
          <Spacer />
          <Stack direction={"row"} mb={5}>
            {sosialMedia.map((sosmed) => (
              <SocialButton label={sosmed.nama} href={sosmed.link}>
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
