import {
  Box,
  chakra,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import AppContainer from "../container/AppContainer";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box>
      <AppContainer>
        <Box
          as={Stack}
          spacing={4}
          maxW="6xl"
          py={4}
          direction={{ base: "column", md: "column" }}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text fontSize="sm" color="gray.400">
            © 2021{" "}
            <Text as="span" fontSize="sm" color="#46CDCF">
              dwiki.tech
            </Text>
          </Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton
              label={"Github"}
              href={"https://github.com/dwikiii55"}
            >
              <FaGithub />
            </SocialButton>
            <SocialButton
              label={"Whatsapp"}
              href={
                "https://api.whatsapp.com/send/?phone=6289606757971&text&app_absent=0"
              }
            >
              <FaWhatsapp />
            </SocialButton>
            <SocialButton
              label={"Instagram"}
              href={"https://www.instagram.com/dwiki.krisna/"}
            >
              <FaInstagram />
            </SocialButton>
            <SocialButton label={"Email"} href={"mailto:dwiki1968@gmail.com"}>
              <FiMail />
            </SocialButton>
          </Stack>
        </Box>
      </AppContainer>
    </Box>
  );
}
